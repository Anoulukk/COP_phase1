import {FC, useEffect, useState} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import DynamicTable from '../DynamicTable';
import Select from 'react-select';
import { Button, Modal } from 'react-bootstrap';
import { provinceOptions, districtOptions, villageOptions } from '../Form100_800Data'
import { handleDownload, getBase64 } from '../FunctionHelper'; 
interface NestedObject {
  [key: string]: {
    [key: string]: string | { value: string };
  };
}
interface FormsData {
  formsData: any;
  displayFor: string;
}

const Step1: FC<FormsData> = ({ formsData,  displayFor }) => {
  const [data, setData] = useState<NestedObject>();
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
      localStorage.removeItem(`${mainKey}-${subKey}`)
      localStorage.removeItem(`${mainKey}-${subKey}-toDisplay`)
    }

    if (!mainKey) return; 

      // Ensure both subKey and newValue are defined before setting them in localStorage
      if (mainKey && subKey && (newValue !== undefined && newValue !== null)) {

     if (type === "text" || type === "number") {
      // valueToStore = newValue;
      localStorage.setItem(`${mainKey}-${subKey}`, newValue);
    } else if (type === "file") {
      if (newValue) {
        // setSelectedFile({file: newValue, code:subKey});
      }
        let data = await getBase64(newValue)
        let { base64, name }:any = data;
        localStorage.setItem(`${mainKey}-${subKey}`, base64);
        localStorage.setItem(`${mainKey}-${subKey}-toDisplay`, name);
    } else if (type === "multi-choice") {
      // valueToStore = JSON.stringify(newValue);
      localStorage.setItem(`${mainKey}-${subKey}`, JSON.stringify(newValue));
    } else if (type === "choice") {
      // valueToStore = newValue.label;
      localStorage.setItem(`${mainKey}-${subKey}`, JSON.stringify(newValue));
    }
  }
  
    setData((prevData) => ({
      ...((prevData ?? {}) as NestedObject), // Fallback to empty object if prevData is undefined
      [mainKey]: {
        ...(prevData?.[mainKey] as any ?? {}),
        ...(subKey ? { [subKey]: newValue } : { value: newValue }),
      },
    }));

    // console.log("data =========>", data);
    
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
            
              console.log("File input now contains:", fileInput.files[0]);
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

    setSelectedProvince(localStorage.getItem(`110F3-110F3`) ? JSON.parse(localStorage.getItem(`110F3-110F3`) as string).value : null);
    setSelectedDistrict(localStorage.getItem(`110F2-110F2`) ? JSON.parse(localStorage.getItem(`110F2-110F2`) as string).value : null);

    setData(storedData);
    // console.log("Loaded data from localStorage:", storedData);
    
  }, []);


  
  const renderInput = (inputType: string, description: string, classified: string, column:any, code:string, main_key: string, duplicates:boolean, options?:[string] ) => {
    const isTable = inputType?.startsWith('T');
    const [file, fileType] = inputType?.startsWith('f') ? inputType.split("-") : [];
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
              disabled={displayFor == "ws"}
            />
          </div>
        );
  
      case 'file-D':
      case 'file-P':
        return (<>
          <input
            type={file}
            name={code}
            className="form-control"
            onChange={(e: any) => getValues(main_key, code, e.target.files[0], file)}
            disabled={displayFor == "ws"}
          />
          {localStorage.getItem(`${main_key}-${code}`) && (
              <a className='fs-5 text-primary text-decoration-underline cursor-pointer' onClick={()=>{handleDownload(localStorage.getItem(`${main_key}-${code}`))}}>File: {localStorage.getItem(`${main_key}-${code}-toDisplay`)}</a>
          )}
        </>);
  
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
            isDisabled={displayFor == "ws"}
            name={code}
            />
        );
  
      case 'choice':
        const filteredOptions = code === '110F2'
        ? districtOptions.filter((district:any) => district.provinceId === selectedProvince)
        : code === '110F1'
        ? villageOptions.filter((village:any) => village.districtId === selectedDistrict)
        : options;

        return (
          <Select
            className={classified === 'title' ? 'react-select-styled ms-3' : 'react-select-styled ms-7'}
            classNamePrefix="react-select"
            options={filteredOptions}
            onChange={(e) => {
              if (code == '110F3') handleProvinceChange(e); // Province change handler
              if (code == '110F2') handleDistrictChange(e); // District change handler
              getValues(main_key, code, e, inputType);
            }}
            value={
              localStorage.getItem(`${main_key}-${code}`)
                ? JSON.parse(localStorage.getItem(`${main_key}-${code}`) as string) 
                : undefined 
            }
            isDisabled={displayFor == "ws"}
          />
        );
  
      case 'multi-text':
        return (
          <div id={code} className={classified === 'title' ? 'ms-3' : 'ms-7'}>
            <DynamicTable data={column} main_key={main_key} sub_key={code} duplicates={duplicates} disabled={displayFor == "ws"} />
          </div>
        );
  
      default:
        if (isTable) {
          return (
            <div id={code} className={classified === 'title' ? 'ms-3' : 'ms-7'}>
              <DynamicTable data={column} main_key={main_key} sub_key={code} duplicates={duplicates} disabled={displayFor == "ws"} />
            </div>
          );
        }
        return null;
    }
  };


  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [currentComment, setCurrentComment] = useState('');
  const [activeInput, setActiveInput] = useState<string>(""); // Keep track of the active input for comments
  const [comments, setComments] = useState<{ [key: string]: string }>({}) 
 // Handle opening the popup and load any existing comment
    const handleIconClick = (code: string, inputName: string) => {
      setActiveInput(code)
      setCurrentComment(comments[code] || '') // Load any existing comment
      setShowCommentPopup(true)
    }
  
    // Handle closing the popup
    const handleClosePopup = () => {
      setShowCommentPopup(false)
      setCurrentComment('')
    }
  
    // Handle saving the comment and update the comment display
    const handleSaveComment = () => {
      setComments({ ...comments, [activeInput]: currentComment }) // Save the comment for the active input
      handleClosePopup()
    }
  


  const renderFormItems = (form: any[]) => {
    return form.map((item, index) => {
      if (item.classified === 'heading') {
        return null;
      }
  const showIcon = item.input_type !== null && displayFor == "ws";
      return (
        
        <div className="form-group mb-3" key={index}>
          {item.classified === "title"
            ? <div className='d-flex justify-content-between'> 
            <h4 className='ms-3'>{item.code} {item.description}</h4> 
            {showIcon && (
            <div className='d-flex' >
            <span style={{cursor:"pointer"}} onClick={() => handleIconClick(item.code, item.description)}>
              <KTIcon iconName="messages" className='fs-2' />
            </span>
              {comments[item.code] && (
                <p className="ms-3" title={comments[item.code]}>
                  {comments[item.code].length > 20
                    ? `${comments[item.code].slice(0, 20)}...`
                    : comments[item.code]}
                </p>
              )}

            </div>
          )}
            </div>
            : <div className='d-flex justify-content-between'> 
            <span className='fs-5 ms-7'>{item.code} {item.description}</span> 
            {showIcon && (
            <div className='d-flex' >
            <span style={{cursor:"pointer"}} onClick={() => handleIconClick(item.code, item.description)}>
              <KTIcon iconName="messages" className='fs-2' />
            </span>
              {comments[item.code] && (
                <p className="ms-3" title={comments[item.code]}>
                  {comments[item.code].length > 20
                    ? `${comments[item.code].slice(0, 20)}...`
                    : comments[item.code]}
                </p>
              )}

            </div>
          )}
            </div>}
          {renderInput(item.input_type, item.description, item.classified, item.column, item.code, item.main_key ? item.main_key : item.code, item.duplicates, item.options)}
        </div>
      );
    });
  };

  return (
    <div className='' style={{ width: '100%' }}>
    <h2 className='mb-5'>
      100 ຂໍ້ມູນທົ່ວໄປຂອງວິສາຫະກິດ
    </h2>
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
        {/* Modal for Comment Input */}
        <Modal show={showCommentPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>{activeInput}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className="form-control"
            placeholder="Enter your comment"
            value={currentComment}
            onChange={(e) => setCurrentComment(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveComment}>
            Save Comment
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  
  );
};


export {Step1}