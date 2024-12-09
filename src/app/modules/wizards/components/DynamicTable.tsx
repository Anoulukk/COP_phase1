import React, { FC, useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { KTIcon } from "../../../../_metronic/helpers";
import { handleDownload, getBase64 } from "./FunctionHelper";

type Column = {
  columnHead: { id: number; title: string; inputType: "text-area" | "choice" | "multi-choice" | "file"| "No" }[];
  options: { forID: number; options: { label: string; value: string }[] }[];
};

type DynamicTableProps = {
  data: Column | null;
  main_key: string;
  sub_key: string;
  duplicates: boolean;
  disabled?: boolean;
};

type RowData = { id: number; [key: string]: any };
type TableData = { title?: string; rows: RowData[] };

const DynamicTable: FC<DynamicTableProps> = ({ data, main_key, sub_key, duplicates, disabled }) => {
  const storageKey = `${main_key}-${sub_key}`;

  const initializeRow = useCallback((rowIndex: number):  RowData => {
    const rowData: RowData = { id: Date.now() };
    data?.columnHead.forEach((col) => {
      rowData[col.title] = col.inputType === "No" ? rowIndex + 1 : "";// Initialize each column value as an empty string
    });
    return rowData;
  }, [data]);

  const [tableData, setTableData] = useState<TableData[]>(() => {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      const parsedData: TableData[] = JSON.parse(savedData);
      return parsedData.map((table) => ({
        ...table,
        rows: table.rows.map((row, rowIndex) => {
          const noColumn = data?.columnHead.find((col) => col.inputType === "No");
          if (noColumn) {
            row[noColumn.title] = rowIndex + 1; // Start "No" column from 1
          }
          return row;
        }),
      }));
    } else {
      return [{
        ...(duplicates === true && { title: "" }),
        rows: [initializeRow(0)]
    }];
    
    }
  });

  useEffect(() => {
    // localStorage.setItem(storageKey, JSON.stringify(tableData));
  }, [tableData]);
  

  const updateTableData = (tableIndex: number, updatedRows: RowData[] | string, isTitle = false) => {
    setTableData((prevData) => {
      const updatedData = prevData.map((table, index) =>
        index === tableIndex
          ? isTitle
            ? { ...table, title: updatedRows as string }
            : { ...table, rows: updatedRows as RowData[] }
          : table
      );
      // Update localStorage after deriving the new state
      localStorage.setItem(storageKey, JSON.stringify(updatedData));
  
      return updatedData;
    });
  };
  

  const handleAddRow = (tableIndex: number) => {
    const newRow = initializeRow(tableData[tableIndex].rows.length);
    const updatedRows = [...tableData[tableIndex].rows, newRow].map((row, index) => {
      if (data?.columnHead.some((col) => col.inputType === "No")) {
        row["ລຳດັບ"] = index + 1; // Set the "No" column dynamically
      }
      return row;
    });
    updateTableData(tableIndex, updatedRows);
  };

  const handleRemoveRow = (tableIndex: number, rowId: number, main_key:string) => {
    console.log(main_key);
    localStorage.removeItem(`${main_key}-${rowId}`);
    localStorage.removeItem(`${main_key}-${rowId}-toDisplay`);
    const updatedRows = tableData[tableIndex].rows
      .filter((row) => row.id !== rowId)
      .map((row, index) => {
        if (data?.columnHead.some((col) => col.inputType === "No")) {
          row["ລຳດັບ"] = index + 1; // Recalculate the "No" column after row removal
        }
        return row;
      });
    updateTableData(tableIndex, updatedRows);
  };

  const handleInputChange = async (tableIndex: number, rowId: number, field: string, value: any, type: string) => {
    const updatedRows = await Promise.all(
      tableData[tableIndex].rows.map(async (row) => {
        if (row.id === rowId) {
          if (type === "file") {
            let data = await getBase64(value);
            let { base64, name }: any = data;
            localStorage.setItem(`${main_key}-${row.id}-toDisplay`, name);
            localStorage.setItem(`${main_key}-${row.id}`, base64);
            return { ...row, [field]: base64 };
          } else {
            return { ...row, [field]: value };
          }
        }
        return row;
      })
    );
  
    updateTableData(tableIndex, updatedRows);
  };
  

  const handleDuplicateTable = () => {
    setTableData((prevData) => [...prevData, { title: "", rows:  [initializeRow(0)] }]);
  };

  const handleRemoveTable = (tableIndex: number) => {
    if (tableData.length > 1) {
      setTableData((prevData) => prevData.filter((_, index) => index !== tableIndex));
    }
  };


  
  // Format the group label
  const formatGroupLabel = (data:any) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a style={{ fontSize: 15, }} href={data.url} target='_blank'>{data.label}</a>
      {/* <span style={{ fontSize: 12, color: '#999' }}>{data.options.length} options</span> */}
    </div>
  );

  if (tableData.length) {
    let data = tableData[0].rows
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      let mergeID = `${main_key}-${element.id}`;
      
      const fileInput:any = document.getElementsByName(mergeID)[0];
      if (fileInput) {
        for (let [key, value] of Object.entries(element)) {
          const base64Regex = /^data:.*;base64,/;
          if (base64Regex.test(value)) {
            const fileName = localStorage.getItem(`${mergeID}-toDisplay`) || '';
            const binaryEncoded = btoa(value);
              const binaryData = atob(binaryEncoded);
              const byteArray = Uint8Array.from(binaryData, char => char.charCodeAt(0));
              const myFile = new File([byteArray], fileName, {
                type: value.match(/^data:([^;]+);base64,/)?.[1], // Set this to the correct MIME type
              });
            
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(myFile);
              fileInput.files = dataTransfer.files;
              console.log("File input now contains:", fileInput.files[0]);

          }
        }
      }
    }
  }
  

  if (!data?.columnHead) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
      {tableData.map((table, tableIndex) => (
        <div key={`table-${tableIndex}`} className="ms-7">
          {duplicates && (
            <input
              type="text"
              placeholder="ຊື່ຕາຕະລາງ"
              className="form-control mb-2"
              value={table.title}
              onChange={(e) => updateTableData(tableIndex, e.target.value, true)}
              disabled={disabled}
            />
          )}
          <table
            className="table table-row-bordered table-row-gray-300"
            style={{ minWidth: data.columnHead.length <= 5 ? "1000px" : "2000px" }}
            id={storageKey}
          >
            <thead>
              <tr>
                {data.columnHead.map((col) => (
                  <th key={col.id}>{col.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={row.id}>
                  {data.columnHead.map((col) => (
                    <td key={col.id}>
                        {col.inputType === "No" ? (
                        row[col.title]// Display the row number
                      ) : col.inputType === "text-area" ? (
                        <textarea
                          value={row[col.title] || ""}
                          onChange={(e) =>
                            handleInputChange(tableIndex, row.id, col.title, e.target.value, col.inputType)
                          }
                          className="form-control"
                          rows={1}
                          style={{ width: "100%", resize: "vertical" }}
              disabled={disabled}
              />
                      ) : col.inputType === "choice"  ? (
                        <Select
                          name={col.title}
                          className="react-select-styled ms-3"
                          classNamePrefix="react-select"
                          options={
                            Array.isArray(data.options)
                              ? data.options.find((option) => option.forID === col.id)?.options || []
                              : [] 
                          }
                          menuPortalTarget={document.body}
                          menuPosition="fixed"
                          styles={{ menuPortal: (base) => ({ ...base, zIndex: 1 }) }}
                          onChange={(selectedOption) =>
                            handleInputChange(tableIndex, row.id, col.title, selectedOption, col.inputType)
                          }
                          value={row[col.title]}
              isDisabled={disabled}
              />
                      ) : col.inputType === "multi-choice" ? (
                        <Select
                        name={col.title}
                        className='react-select-styled'
                        classNamePrefix='react-select'
                        menuPortalTarget={document.body}
                        menuPosition="fixed"
                        styles={{ menuPortal: (base) => ({ ...base, zIndex: 1 }) , option: (provided, state) => ({
                          ...provided,
                          paddingLeft : '30px !important',
                        })}}
                        options={
                          Array.isArray(data.options)
                            ? data.options.find((option) => option.forID === col.id)?.options || []
                            : [] 
                        }
                        formatGroupLabel={formatGroupLabel}
                        onChange={(selectedOption) =>
                          handleInputChange(tableIndex, row.id, col.title, selectedOption, col.inputType)
                        }
                          value={row[col.title]}
                          isMulti
              isDisabled={disabled}
              />
                      ) : col.inputType === "file" ? (
                        <>
                        
                        <input
                          type="file"
                          name={`${sub_key}-${row.id}`}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(tableIndex, row.id, col.title, e.target.files?.[0], col.inputType)
                          }
                          className="form-control"
              disabled={disabled}
              /> 
              {localStorage.getItem(`${sub_key}-${row.id}`) && (
                <a className='fs-5 text-primary text-decoration-underline cursor-pointer' 
                onClick={()=>{handleDownload(localStorage.getItem(`${sub_key}-${row.id}`))}}
                >
                  File: {localStorage.getItem(`${sub_key}-${row.id}-toDisplay`)}
                  </a>
            )}
                        </>
              
                      ) : null}
                    </td>
                  ))}
                  <td style={{ width: "90px", textAlign: "right", display: disabled ? 'none' : 'block' }}>
                    <div className="d-flex justify-content-end">
                      <span
                        className="btn btn-sm btn-icon btn-bg-light btn-active-primary me-3"
                        onClick={() => handleAddRow(tableIndex)}
                      >
                        <KTIcon iconName="plus" className="fs-5" />
                      </span>
                      {table.rows.length > 1 && (
                        <span
                          className="btn btn-sm btn-icon btn-bg-light btn-active-danger"
                          onClick={() => handleRemoveRow(tableIndex, row.id, main_key)}
                        >
                          <KTIcon iconName="minus" className="fs-5" />
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {duplicates && (
            <div className="mb-5" style={{ display: disabled ? 'none' : 'block' }}>
              <span className="btn btn-primary" onClick={handleDuplicateTable}>
                Duplicate Table
              </span>
              <span
                className="btn btn-danger ms-3"
                onClick={() => handleRemoveTable(tableIndex)}
                style={{ display: tableData.length === 1 ? 'none' : 'inline' }}
              >
                Remove Table
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicTable;
