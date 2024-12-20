import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import Select from "react-select";
import { KTIcon } from "../../../../_metronic/helpers";
import { handleDownload, getBase64 } from "./FunctionHelper";

type Column = {
  columnHead: {
    id: number;
    code?: number;
    descriptionEN: string;
    descriptionLA: string;
    inputType: "text-area" | "choice" | "multi-choice" | "file" | "No";
  }[];
  options: { forID: number; options: { label: string; value: string }[] }[];
};

type DynamicTableProps = {
  data: Column;
  main_key: string;
  sub_key: string;
  duplicates: boolean;
  disabled?: boolean;
};

type RowData = { id: number; [key: string]: any };
type TableData = { title?: string; rows: RowData[] };

const DynamicTable: FC<DynamicTableProps> = ({ data, main_key, sub_key, duplicates, disabled }) => {
  const storageKey = `${main_key}-${sub_key}`;

  const initializeRow = useCallback(
    (rowIndex: number): RowData => {
      const rowData: RowData = { id: Date.now() };
      data?.columnHead.forEach((col) => {
        rowData[col.descriptionEN] = col.descriptionEN === "No" ? rowIndex + 1 : "";
      });
      return rowData;
    },
    [data]
  );

  const [tableData, setTableData] = useState<TableData[]>(() => {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      const parsedData: TableData[] = JSON.parse(savedData);
      return parsedData.map((table) => ({
        ...table,
        rows: table.rows.map((row, rowIndex) => {
          const noColumn = data?.columnHead.find((col) => col.descriptionEN === "No");
          if (noColumn) {
            row[noColumn.descriptionEN] = rowIndex + 1;
          }
          return row;
        }),
      }));
    }
    return [{ ...(duplicates && { title: "" }), rows: [initializeRow(0)] }];
  });

  useEffect(() => {
    // localStorage.setItem(storageKey, JSON.stringify(tableData));
  }, [tableData, storageKey]);

  const updateTableData = useCallback((tableIndex: number, updatedRows: RowData[] | string, isTitle = false) => {
    setTableData((prevData) => {
      const updatedData = prevData.map((table, index) =>
        index === tableIndex
          ? isTitle
            ? { ...table, title: updatedRows as string }
            : { ...table, rows: updatedRows as RowData[] }
          : table
      );
      localStorage.setItem(storageKey, JSON.stringify(updatedData));
      return updatedData;
    });
  }, [storageKey]);

  const handleAddRow = useCallback((tableIndex: number) => {
    const newRow = initializeRow(tableData[tableIndex].rows.length);
    const updatedRows = [...tableData[tableIndex].rows, newRow].map((row, index) => {
      if (data?.columnHead.some((col) => col.descriptionEN === "No")) {
        row["No"] = index + 1;
      }
      return row;
    });
    updateTableData(tableIndex, updatedRows);
  }, [tableData, data, initializeRow, updateTableData]);

  const handleRemoveRow = useCallback((tableIndex: number, rowId: number, main_key: string) => {
    localStorage.removeItem(`${main_key}-${rowId}`);
    localStorage.removeItem(`${main_key}-${rowId}-toDisplay`);
    const updatedRows = tableData[tableIndex].rows
      .filter((row) => row.id !== rowId)
      .map((row, index) => {
        if (data?.columnHead.some((col) => col.descriptionEN === "No")) {
          row["No"] = index + 1;
        }
        return row;
      });
    updateTableData(tableIndex, updatedRows);
  }, [tableData, data, updateTableData]);

  const handleInputChange = useCallback(async (
    tableIndex: number,
    rowId: number,
    field: string,
    value: any,
    type: string
  ) => {
    const updatedRows = await Promise.all(
      tableData[tableIndex].rows.map(async (row) => {
        if (row.id === rowId) {
          if (type === "file") {
            let { base64, name }:any = await getBase64(value);
            localStorage.setItem(`${main_key}-${row.id}-toDisplay`, name);
            localStorage.setItem(`${main_key}-${row.id}`, base64);
            return { ...row, [field]: base64 };
          }
          return { ...row, [field]: value };
        }
        return row;
      })
    );
    updateTableData(tableIndex, updatedRows);
  }, [tableData, main_key, updateTableData]);

  const handleDuplicateTable = useCallback(() => {
    setTableData((prevData) => [...prevData, { title: "", rows: [initializeRow(0)] }]);
  }, [initializeRow]);

  const handleRemoveTable = useCallback((tableIndex: number) => {
    setTableData((prevData) => prevData.filter((_, index) => index !== tableIndex));
  }, []);

  const formatGroupLabel = useMemo(() => (data: any) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <a style={{ fontSize: 15 }} href={data.url} target="_blank" rel="noopener noreferrer">
        {data.label}
      </a>
    </div>
  ), []);

  useEffect(() => {
    if (tableData.length) {
      tableData[0].rows.forEach((element) => {
        const mergeID = `${main_key}-${element.id}`;
        const fileInput: HTMLInputElement | null = document.getElementsByName(mergeID)[0] as HTMLInputElement;
        if (fileInput) {
          Object.entries(element).forEach(([key, value]) => {
            const base64Regex = /^data:.*;base64,/;
            if (typeof value === 'string' && base64Regex.test(value)) {
              const fileName = localStorage.getItem(`${mergeID}-toDisplay`) || "";
              const byteArray = Uint8Array.from(atob(btoa(value)), (char) => char.charCodeAt(0));
              const myFile = new File([byteArray], fileName, {
                type: value.match(/^data:([^;]+);base64,/)?.[1],
              });
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(myFile);
              fileInput.files = dataTransfer.files;
            }
          });
        }
      });
    }
  }, [tableData, main_key]);
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
              onChange={(e) =>
                updateTableData(tableIndex, e.target.value, true)
              }
              disabled={disabled}
            />
          )}
          <table
            className="table table-row-bordered table-row-gray-300"
            style={{
              minWidth: data.columnHead.length <= 5 ? "1000px" : "2000px",
            }}
            id={storageKey}
          >
            <thead>
              <tr>
                {data.columnHead.map((col) => (
                  <th key={col.id}>{col.code ? col.code : ""} {col.descriptionLA}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={row.id}>
                  {data.columnHead.map((col) => (
                    <td key={col.id}>
                      {col.descriptionEN === "No" ? (
                        row[col.descriptionEN] // Display the row number
                      ) : col.inputType === "text-area" ? (
                        <textarea
                          value={row[col.descriptionEN] || ""}
                          onChange={(e) =>
                            handleInputChange(
                              tableIndex,
                              row.id,
                              col.descriptionEN,
                              e.target.value,
                              col.inputType
                            )
                          }
                          className="form-control"
                          rows={1}
                          style={{ width: "100%", resize: "vertical" }}
                          disabled={disabled}
                        />
                      ) : col.inputType === "choice" ? (
                        <Select
                          name={col.descriptionEN}
                          className="react-select-styled ms-3"
                          classNamePrefix="react-select"
                          options={
                            Array.isArray(data.options)
                              ? data.options.find(
                                  (option) => option.forID === col.id
                                )?.options || []
                              : []
                          }
                          menuPortalTarget={document.body}
                          menuPosition="fixed"
                          styles={{
                            menuPortal: (base) => ({ ...base, zIndex: 1 }),
                          }}
                          onChange={(selectedOption) =>
                            handleInputChange(
                              tableIndex,
                              row.id,
                              col.descriptionEN,
                              selectedOption,
                              col.inputType
                            )
                          }
                          value={row[col.descriptionEN]}
                          isDisabled={disabled}
                        />
                      ) : col.inputType === "multi-choice" ? (
                        <Select
                          name={col.descriptionEN}
                          className="react-select-styled"
                          classNamePrefix="react-select"
                          menuPortalTarget={document.body}
                          menuPosition="fixed"
                          styles={{
                            menuPortal: (base) => ({ ...base, zIndex: 1 }),
                            option: (provided, state) => ({
                              ...provided,
                              paddingLeft: "30px !important",
                            }),
                          }}
                          options={
                            Array.isArray(data.options)
                              ? data.options.find(
                                  (option) => option.forID === col.id
                                )?.options || []
                              : []
                          }
                          formatGroupLabel={formatGroupLabel}
                          onChange={(selectedOption) =>
                            handleInputChange(
                              tableIndex,
                              row.id,
                              col.descriptionEN,
                              selectedOption,
                              col.inputType
                            )
                          }
                          value={row[col.descriptionEN]}
                          isMulti
                          isDisabled={disabled}
                        />
                      ) : col.inputType === "file" ? (
                        <>
                          <input
                            type="file"
                            name={`${sub_key}-${row.id}`}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              handleInputChange(
                                tableIndex,
                                row.id,
                                col.descriptionEN,
                                e.target.files?.[0],
                                col.inputType
                              )
                            }
                            className="form-control"
                            disabled={disabled}
                          />
                          {localStorage.getItem(`${sub_key}-${row.id}`) && (
                            <a
                              className="fs-5 text-primary text-decoration-underline cursor-pointer"
                              onClick={() => {
                                handleDownload(
                                  localStorage.getItem(`${sub_key}-${row.id}`)
                                );
                              }}
                            >
                              File:{" "}
                              {localStorage.getItem(
                                `${sub_key}-${row.id}-toDisplay`
                              )}
                            </a>
                          )}
                        </>
                      ) : null}
                    </td>
                  ))}
                  <td
                    style={{
                      width: "90px",
                      textAlign: "right",
                      display: disabled ? "none" : "block",
                    }}
                  >
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
                          onClick={() =>
                            handleRemoveRow(tableIndex, row.id, main_key)
                          }
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
            <div
              className="mb-5"
              style={{ display: disabled ? "none" : "block" }}
            >
              <span className="btn btn-primary" onClick={handleDuplicateTable}>
                Duplicate Table
              </span>
              <span
                className="btn btn-danger ms-3"
                onClick={() => handleRemoveTable(tableIndex)}
                style={{ display: tableData.length === 1 ? "none" : "inline" }}
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
