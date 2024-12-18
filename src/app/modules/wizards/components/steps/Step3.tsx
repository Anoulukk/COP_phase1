import {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import DynamicTable from '../DynamicTable';
import Select from 'react-select';

interface NestedObject {
  [key: string]: {
    [key: string]: string | { value: string };
  };
}
interface FormsData {
  formsData: any;
  displayFor: string;
}

const Step3: FC<FormsData> = ({ formsData,  displayFor }) => {
  const [data, setData] = useState<any>();
  const [forms, setForms] = useState<any>(formsData);

  

  
  const getValues = (mainKey: string | undefined, subKey?: string, newValue?: string | any | undefined, type?: string) => {
    // console.log(`${mainKey} ==== ${subKey} = ${newValue} :: ${type}`);
    if (!mainKey) {
      // console.error("mainKey is undefined");
      return; 
    }

      // Ensure both subKey and newValue are defined before setting them in localStorage
      if (mainKey && subKey && (newValue !== undefined && newValue !== null)) {
        // console.log("GGG");
        // console.log(newValue);
        // let valueToStore:any = "";

     if (type === "text" || type === "number") {
      // valueToStore = newValue;
      localStorage.setItem(`${mainKey}-${subKey}`, newValue);
    } else if (type === "file") {
        localStorage.setItem(`${mainKey}-${subKey}`, JSON.stringify(newValue));
    } else if (type === "multi-choice") {
      // valueToStore = JSON.stringify(newValue);
      localStorage.setItem(`${mainKey}-${subKey}`, JSON.stringify(newValue));
    } else if (type === "choice") {
      // valueToStore = newValue.label;
      localStorage.setItem(`${mainKey}-${subKey}`, JSON.stringify(newValue));
    }
        
      }
  
    setData((prevData:any) => ({
      ...((prevData ?? {}) as NestedObject), // Fallback to empty object if prevData is undefined
      [mainKey]: {
        ...(prevData?.[mainKey] as any ?? {}),
        ...(subKey ? { [subKey]: newValue } : { value: newValue }),
      },
    }));

    console.log("data =========>", data);
    
  }
  useEffect(() => {
    const storedData: any = {};
    Object.keys(localStorage).forEach((key) => {
      const [mainKey, subKey] = key.split("-");
      const value = localStorage.getItem(key);
      let check = mainKey.match(/^\d+/);
      if (subKey) {
        const fileInput:any = document.getElementsByName(subKey)[0];
        if (fileInput) {
          let base64String:any = localStorage.getItem(`${key}`);
          if (!base64String || !localStorage.getItem(`${key}-toDisplay`)) {
            return;
          }
          const fileName = localStorage.getItem(`${key}-toDisplay`) || '';
          const base64Data = base64String.replace(/^data:.*;base64,/, '');
          if (base64Data) {
            try {
              const binaryEncoded = btoa(base64String);
              const binaryData = atob(binaryEncoded);
              const byteArray = Uint8Array.from(binaryData, char => char.charCodeAt(0));
         
              const myFile = new File([byteArray], fileName, {
                type: base64String.match(/^data:([^;]+);base64,/)?.[1], // Set this to the correct MIME type
              });
            
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(myFile);
              fileInput.files = dataTransfer.files;
            
            } catch (error) {
              console.error("Error decoding Base64 string:", error);
            }
            
        
           
          } else {
            console.log("No file found in localStorage for the specified key.");
          }
        }
      }

      if (mainKey && subKey && value && check) {
        if (!storedData[mainKey]) {
          storedData[mainKey] = {};
        }
        storedData[mainKey][subKey] = value;
      }
    });

    setData(storedData);
    // console.log("Loaded data from localStorage:", storedData);
    
  }, []);

  const renderInput = (inputType: string, description: string, classified: string, column:any, main_key: string,  duplicates:boolean, code:string, options?:[string]) => {
    const isTable = inputType?.startsWith('T');

    switch (inputType) {
      case 'text':
      case 'number':
        return (
          <div className={classified === 'title' ? 'ms-3' : 'ms-7'}>
            <input
              type={inputType}
              placeholder={description}
              className="form-control"
              min={1}
              onChange={(e) => getValues(main_key, code, e.target.value, inputType)}
              defaultValue={localStorage.getItem(`${main_key}-${code}`) ?? ''}
            />
          </div>
        );
  
      case 'file':
        return (
          <input
            type={inputType}
            name={code}
            className={classified === 'title' ? 'form-control ms-3' : 'form-control ms-7'}
            onChange={(e: any) => getValues(main_key, code, e.target.files[0], inputType)}
            
          />
        );
  
      case 'multi-choice':
        return (
          <Select
            className={classified === 'title' ? 'react-select-styled ms-3' : 'react-select-styled ms-7'}
            classNamePrefix="react-select"
            options={options}
            isMulti
            onChange={(e: any) => getValues(main_key, code, e, inputType)}
            defaultValue={
              localStorage.getItem(`${main_key}-${code}`)
                ? JSON.parse(localStorage.getItem(`${main_key}-${code}`) || '[]')
                : []
            }
          />
        );
  
      case 'choice':
        return (
          <Select
            className={classified === 'title' ? 'react-select-styled ms-3' : 'react-select-styled ms-7'}
            classNamePrefix="react-select"
            options={options}
            onChange={(e: any) => getValues(main_key, code, e, inputType)}
            defaultValue={
              localStorage.getItem(`${main_key}-${code}`)
                ? JSON.parse(localStorage.getItem(`${main_key}-${code}`) as string) 
                : undefined 
            }
          />
        );
  
      case 'multi-text':
        return (
          <div id={code} className={classified === 'title' ? 'ms-3' : 'ms-7'}>
            <DynamicTable data={column} main_key={main_key} sub_key={code} duplicates={duplicates} />
          </div>
        );
  
      default:
        if (isTable) {
          return (
            <div id={code} className={classified === 'title' ? 'ms-3' : 'ms-7'}>
              <DynamicTable data={column} main_key={main_key} sub_key={code} duplicates={duplicates} />
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
            ? <h4 className='ms-3'>{item.code} {item.description}</h4>
            : <span className='fs-5 ms-7'>{item.code} {item.description}</span>}
          {renderInput(item.input_type, item.description, item.classified, item.column, item.main_key ? item.main_key : item.code, item.duplicates, item.code, item.options)}
        </div>
      );
    });
  };
  return (
    <div className='' style={{ width: '100%' }}>
      <h2 className='mb-5'>
        300 ຂໍ້ມູນການປະກອບກິດຈະການ
      </h2>
      <div className='accordion' id='kt_accordion_3'>
        {Object.keys(forms).map((formKey, idx) => (
          <div className='accordion-item' key={idx}>
            <h2 className='accordion-header' id={`kt_accordion_3_header_${idx + 1}`}>
              <button
                className='accordion-button fs-4 fw-bold collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#kt_accordion_3_body_${idx + 1}`}
                aria-expanded='false'
                aria-controls={`kt_accordion_3_body_${idx + 1}`}
              >
                {formKey.replace('form', '')} {forms[formKey][0]?.description}
              </button>
            </h2>
            <div
              id={`kt_accordion_3_body_${idx + 1}`}
              className='accordion-collapse collapse'
              aria-labelledby={`kt_accordion_3_header_${idx + 1}`}
              data-bs-parent='#kt_accordion_3'
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


export {Step3}

