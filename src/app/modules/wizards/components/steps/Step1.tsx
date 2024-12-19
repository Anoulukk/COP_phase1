import { FC, useEffect, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { ErrorMessage, Field } from 'formik'
import DynamicTable from '../DynamicTable';
import Select from 'react-select';
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import { provinceOptions, districtOptions, villageOptions } from '../Form100_800Data'
import { handleDownload, getBase64 } from '../FunctionHelper';
import { db, storage } from '../../../../../ConnectFirebase/Firebase';
import { getDocs, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { CLIENT_RENEG_WINDOW } from 'tls';
interface NestedObject {
  [key: string]: {
    [key: string]: string | { value: string };
  };
}
interface FormsData {
  formsData: any;
  displayFor: string;
}

const Step1: FC<FormsData> = ({ formsData, displayFor }) => {
  const [data, setData] = useState<NestedObject>();
  const [files, setFiles] = useState<NestedObject>({});
  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
  const [forms, setForms] = useState<any>(formsData);
  // Update the forms state whenever villageData, districtData, or provinceData changes
  useEffect(() => {
    setForms((prevForms: any) => ({
      ...prevForms,
      form110: prevForms.form110.map((field: any) => {
        if (field.code === "110F1") {
          return { ...field, options: villageOptions };
        }
        if (field.code === "110F2") {
          return { ...field, options: districtOptions };
        }
        if (field.code === "110F3") {
          return { ...field, options: provinceOptions };
        }
        return field;
      }),
    }));
  }, [villageOptions, districtOptions, provinceOptions]);

  const handleProvinceChange = (selected: any) => {
    const newProvince = selected?.value || null;
    if (newProvince !== selectedProvince) {
      ['110F2-110F2', '110F1-110F1'].forEach(key => localStorage.removeItem(key));
    }
    setSelectedProvince(newProvince);
  };

  const handleDistrictChange = (selected: any) => {
    const newDistrict = selected?.value || null;
    if (newDistrict !== selectedDistrict) localStorage.removeItem('110F1-110F1');
    setSelectedDistrict(newDistrict);
  };



  const getValues = async (mainKey: string | undefined, subKey?: string, newValue?: string | any | undefined, type?: string) => {
    if (!newValue) {
      localStorage.removeItem(`${mainKey}-${subKey}`);
      localStorage.removeItem(`${mainKey}-${subKey}-toDisplay`);
    }

    if (!mainKey) return;

    let valueToStore: any = null;
    const IDs = uuidv4();
    console.log({ IDs });

    // Ensure both subKey and newValue are defined before setting them in localStorage
    if (mainKey && subKey && (newValue !== undefined && newValue !== null)) {
      if (type === "text" || type === "number") {
        valueToStore = newValue;
        localStorage.setItem(`${mainKey}-${subKey}`, valueToStore);
      } else if (type === "file") {
        let fileURL = null;
        let code = subKey;
        if (newValue) {
          let fileName = newValue.name;
          // add file to Storage in firebase
          const storages = ref(storage, `Files/${IDs}/${fileName}`);
          await uploadBytes(storages, newValue);
          fileURL = await getDownloadURL(storages);
          // add file to firestorage in firebase
          await addDoc(collection(db, "Files"), {
            code,
            fileName,
            fileURL,
            // timestamp : serverTimestamp()
          });
        }
      } else if (type === "multi-choice" || type === "choice") {
        valueToStore = JSON.stringify(newValue);
        localStorage.setItem(`${mainKey}-${subKey}`, valueToStore);
      }
    }

    // Update state with the latest value after resolving asynchronous operations
    setData((prevData) => {
      const updatedSubData = subKey
        ? { [subKey]: valueToStore }
        : { value: valueToStore };

      return {
        ...((prevData ?? {}) as NestedObject), // Fallback to empty object if prevData is undefined
        [mainKey]: {
          ...(prevData?.[mainKey] ?? {}),
          ...updatedSubData,
        },
      };
    });
  };
  console.log("show data all ++", files);
  useEffect(() => {
    const storedData: any = {};
    Object.keys(localStorage).forEach((key) => {
      const [mainKey, subKey] = key.split("-");
      const value = localStorage.getItem(key);
      let check = mainKey.match(/^\d+/);
      const fetchAllDocs = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "Files"));
          // orderBy
          // const querySnapshot = await getDocs(
          //   query(collection(db, "Files"), orderBy("timestamp", "asc"))
          // );
          const data: any = {};
          querySnapshot.forEach((doc) => {
            data[doc.id] = doc.data()
          });
          console.log("911", data);
          // loop data for access to data
          for (const key in data) {
            let codeKey = data[key]?.code;
            let titleFile = data[key]?.fileName;
            let file = data[key]?.fileURL;
            if (codeKey && titleFile && file) {
              const fileInput: any = document.getElementsByName(codeKey)[0];
              if (fileInput) {
                // if (!codeKey) return;
                try {
                  // encode file
                  const binaryEncoded = btoa(file);
                  const binaryData = atob(binaryEncoded);
                  const byteArray = Uint8Array.from(binaryData, char => char.charCodeAt(0));
                  const myFile = new File([byteArray], titleFile, {
                    type: file,
                  });
                  // add file name to input
                  const dataTransfer = new DataTransfer();
                  dataTransfer.items.add(myFile);
                  fileInput.files = dataTransfer.files;
                } catch (error: any) {
                  return "Error add file on the input: " + error.message;
                }
              }
            }
          }
          setFiles(data)
        } catch (error: any) {
          return "Error fetch data in the firebase: " + error.message;
        }
      };
      fetchAllDocs()
      if (mainKey && subKey && value && check) {
        if (!storedData[mainKey]) {
          storedData[mainKey] = {};
        }
        storedData[mainKey][subKey] = value;
      }
    });
    console.log("storedData", storedData);

    setSelectedProvince(localStorage.getItem(`110F3-110F3`) ? JSON.parse(localStorage.getItem(`110F3-110F3`) as string).value : null);
    setSelectedDistrict(localStorage.getItem(`110F2-110F2`) ? JSON.parse(localStorage.getItem(`110F2-110F2`) as string).value : null);

    setData(storedData);
    // console.log("Loaded data from localStorage:", storedData);

  }, []);
  const fileDetails: any = [];
  for (const [key, fileData] of Object.entries(files)) {
    console.log({ fileData });
    fileDetails.push({
      linkFile: fileData?.fileURL || "",
      NameFile: fileData?.fileName || "",
      CodeID: fileData?.code || "",
    });
  }
  const renderInput = (inputType: string, description: string, classified: string, column: any, code: string, main_key: string, duplicates: boolean, options: [string]) => {
    const isTable = inputType?.startsWith('T');
    const commonClass = classified === 'title' ? 'ms-3' : 'ms-7';
    const disabled = displayFor === 'ws';
    const storedValue = localStorage.getItem(`${main_key}-${code}`);
   
    // get fileName, fileURL
    console.log(files);
 
    console.log("fileDetails", fileDetails);
    
    const handleSelectChange = (e: any) => {
      if (code === '110F3') handleProvinceChange(e);
      if (code === '110F2') handleDistrictChange(e);
      getValues(main_key, code, e, inputType);
    };
    console.log(code);
    const renderFileLink = () => (
        <a
          className="fs-5 text-primary text-decoration-underline cursor-pointer"
          onClick={() => handleDownload(fileDetails.find((item:any) => item.CodeID == code)?.linkFile)}
        >
         {fileDetails.find((item:any) => item.CodeID == code)?.NameFile}

        </a>
    );
    // const renderFileLink = () => {
    //   return fileDetails.map((file :any, index :number) => {
    //     const { linkFile, NameFile, CodeID } = file;
    //     // let fileInput :any = document.getElementsByName(CodeID)[0] as HTMLInputElement | undefined;
    //     let fileInput: HTMLInputElement | undefined = document.getElementsByName(CodeID)[0] as HTMLInputElement | undefined;

    //     // const fileInput: HTMLInputElement | undefined =
    //     // document.getElementsByName(CodeID)?.[0] as HTMLInputElement | undefined;
  
    //     console.log("fileInput", fileInput);
    //     console.log("fileInput?.value", fileInput?.value +"==" +NameFile);
    //     console.log("12121212", fileInput?.name +"==" +CodeID);
    //     const valueMatches = fileInput?.value === NameFile;
    //     const nameMatches = fileInput?.name == CodeID;
    //     // if (NameFile === fileInput?.value && CodeID === fileInput?.name) {
    //     console.log( nameMatches);
    //       // if (valueMatches && nameMatches) {
    //       return (
    //         nameMatches && (
    //         <a
    //           key={index}
    //           className="fs-5 text-primary text-decoration-underline cursor-pointer"
    //           onClick={() => handleDownload(linkFile)}
    //         >
    //           File: {NameFile}
    //         </a>
    //         )
    //       );
    //     // }
    //     // return null;
    //   });
    // };

    switch (inputType) {
      case 'text':
      case 'number':
        return (
          <div className={commonClass}>
            <input
              type={inputType}
              placeholder={description}
              className="form-control"
              min={1}
              onChange={(e) => getValues(main_key, code, e.target.value, inputType)}
              defaultValue={storedValue ?? ''}
              disabled={disabled}
            />
          </div>
        );

      case 'file-D':
      case 'file-P':
        return (
          <>
            <input
              type="file"
              name={code}
              className="form-control"
              onChange={(e: any) => getValues(main_key, code, e.target.files[0], 'file')}
              disabled={disabled}
            />
            {renderFileLink()}
          </>
        );

      case 'multi-choice':
        return (
          <Select
            className={`react-select-styled ${commonClass}`}
            classNamePrefix="react-select"
            options={options}
            isMulti
            onChange={(e) => getValues(main_key, code, e, inputType)}
            defaultValue={storedValue ? JSON.parse(storedValue) : []}
            isDisabled={disabled}
            name={code}
          />
        );

      case 'choice':
        const filteredOptions = (() => {
          if (code === '110F2') return districtOptions.filter((d: any) => d.provinceId === selectedProvince);
          if (code === '110F1') return villageOptions.filter((v: any) => v.districtId === selectedDistrict);
          return options;
        })();

        return (
          <Select
            className={`react-select-styled ${commonClass}`}
            classNamePrefix="react-select"
            options={filteredOptions}
            onChange={handleSelectChange}
            value={storedValue ? JSON.parse(storedValue) : undefined}
            isDisabled={disabled}
          />
        );

      case 'multi-text':
        return (
          <div id={code} className={commonClass}>
            <DynamicTable
              data={column}
              main_key={main_key}
              sub_key={code}
              duplicates={duplicates}
              disabled={disabled}
            />
          </div>
        );

    default:
      if (isTable) {
        return (
          <div id={code} className={commonClass}>
            <DynamicTable
              data={column}
              main_key={main_key}
              sub_key={code}
              duplicates={duplicates}
              disabled={disabled}
            />
          </div>
        );
      }
      return null;
  }
};

  const renderFormItems = (form: any[]) => {
    return form.map((item, index) => {
      if (item.classified === 'heading') {
        return null;
      }
      return (
        
        <div className="form-group mb-3" key={index}>
          {item.classified === "title"
            ? <div className='d-flex justify-content-between'> 
            <h4 className='ms-3'>{item.code} {item.description}</h4> 
            </div>
            : <div className='d-flex justify-content-between'> 
            <span className='fs-5 ms-7'>{item.code} {item.description}</span> 
            </div>}
          {renderInput(item.input_type, item.description, item.classified, item.column, item.code, item.main_key ? item.main_key : item.code, item.duplicates, item.options)}
        </div>
      );
    });
  };

  return (
    <div className='' style={{ width: '100%' }}>
      <div className='d-flex justify-content-between mb-5'>
        <h2> 100 ຂໍ້ມູນທົ່ວໄປຂອງວິສາຫະກິດ </h2>
        <input type="text" className="form-control w-300px" name='search' placeholder='search' />
      </div>

      <div className='accordion' id='kt_accordion_1'>
        {Object.keys(forms).map((formKey, idx) => (
          <div className='accordion-item' key={idx}>
            <h2 className='accordion-header' id={`kt_accordion_1_header_${idx + 1}`}>
              <button
                className='accordion-button fs-4 fw-bold collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#kt_accordion_1_body_${idx + 1}`}
                aria-expanded='false'
                aria-controls={`kt_accordion_1_body_${idx + 1}`}
              >
                {formKey.replace('form', '')} {forms[formKey][0]?.description}
              </button>
            </h2>
            <div
              id={`kt_accordion_1_body_${idx + 1}`}
              className='accordion-collapse collapse'
              aria-labelledby={`kt_accordion_1_header_${idx + 1}`}
              data-bs-parent='#kt_accordion_1'
            >
              <div className='accordion-body'>
                {renderFormItems(forms[formKey])}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
};


export { Step1 }