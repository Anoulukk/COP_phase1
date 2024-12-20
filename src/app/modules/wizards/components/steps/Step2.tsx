import { FC, useEffect, useState } from 'react';
import DynamicTable from '../DynamicTable';
import Select from 'react-select';
import { Field } from 'formik';
import axios from 'axios';
import { provinceOptions, districtOptions, villageOptions } from '../Form100_800Data'


interface NestedObject {
  [key: string]: {
    [key: string]: string | { value: string };
  };
}
interface FormsData {
  formsData: any;
  displayFor: string;

}

const Step2: FC<FormsData> = ({formsData, displayFor}) => {
  const [data, setData] = useState<NestedObject>();
  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);

const [forms, setForms] = useState<any>(formsData);

  // Update the forms state whenever villageData, districtData, or provinceData changes
  useEffect(() => {
    setForms((prevForms: any) => ({
      ...prevForms,
      form210: prevForms.form210.map((field: any) => {
        if (field.code === "210A2") {
          return { ...field, options: villageOptions };
        }
        if (field.code === "210A3") {
          return { ...field, options: districtOptions };
        }
        if (field.code === "210A4") {
          return { ...field, options: provinceOptions };
        }
        return field;
      }),
    }));
  }, [villageOptions, districtOptions, provinceOptions]);

  const handleProvinceChange = (selected: any) => {
    const newProvince = selected?.value || null;
    if (newProvince !== selectedProvince) {
      ['210A3-210A3', '210A2-210A2'].forEach(key => localStorage.removeItem(key));
    }
    setSelectedProvince(newProvince);
  };
  
  const handleDistrictChange = (selected: any) => {
    const newDistrict = selected?.value || null;
    if (newDistrict !== selectedDistrict) localStorage.removeItem('210A2-210A2');
    setSelectedDistrict(newDistrict);
  };
  

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
  
    setData((prevData) => ({
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

      if (mainKey && subKey && value && check) {
        if (!storedData[mainKey]) {
          storedData[mainKey] = {};
        }
        storedData[mainKey][subKey] = value;
      }
    });

    setSelectedProvince(localStorage.getItem(`210A4-210A4`) ? JSON.parse(localStorage.getItem(`210A4-210A4`) as string).value : null);
    setSelectedDistrict(localStorage.getItem(`210A3-210A3`) ? JSON.parse(localStorage.getItem(`210A3-210A3`) as string).value : null);

    setData(storedData);
    console.log("Loaded data from localStorage:", storedData);
    
  }, []);


  const renderInput = (inputType: string, descriptionLA: string, classified: string, column:any, code:string, main_key: string,  duplicates:boolean, options?:[string]) => {
    const isTable = inputType?.startsWith('T');
    switch (inputType) {
      case 'text':
      case 'number':
        return (
          <div className={classified === 'title' ? 'ms-3' : 'ms-7'}>
            <input
              type={inputType}
              placeholder={descriptionLA}
              className="form-control"
              min={1}
              onChange={(e) => getValues(main_key, code, e.target.value, inputType)}
              defaultValue={localStorage.getItem(`${main_key}-${code}`) ?? ''}
            />
          </div>
        );
  
        case 'file-D':
        case 'file-P':
        return (
          <input
            type="file"
            name={code}
            className={classified === 'title' ? 'form-control ms-3' : 'form-control ms-7'}
            onChange={(e: any) => getValues(main_key, code, e.target.files[0], inputType)}
            accept="image/*,.pdf"
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
        const filteredOptions = code === '210A3'
        ? districtOptions.filter((district:any) => district.provinceId === selectedProvince)
        : code === '210A2'
        ? villageOptions.filter((village:any) => village.districtId === selectedDistrict)
        : options;

        return (
          <Select
            className={classified === 'title' ? 'react-select-styled ms-3' : 'react-select-styled ms-7'}
            classNamePrefix="react-select"
            options={filteredOptions}
            onChange={(e) => {
              if (code == '210A4') handleProvinceChange(e); // Province change handler
              if (code == '210A3') handleDistrictChange(e); // District change handler
              getValues(main_key, code, e, inputType);
            }}
            value={
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
            ? <h4 className='ms-3'>{item.code} {item.descriptionLA}</h4>
            : <span className='fs-5 ms-7'>{item.code} {item.descriptionLA}</span>}
          {renderInput(item.input_type, item.descriptionLA, item.classified, item.column, item.code, item.main_key ? item.main_key : item.code, item.duplicates, item.options)}
        </div>
      );
    });
  };
  

  return (
    <div className='' style={{ width: '100%' }}>
      <h2 className='mb-5'>
        200 ທີ່ຕັ້ງ ແລະ ການນຳໃຊ້ພື້ນທີ່ໂຮງງານ
      </h2>
      <div className='accordion' id='kt_accordion_2'>
        {Object.keys(forms).map((formKey, idx) => (
          <div className='accordion-item' key={idx}>
            <h2 className='accordion-header' id={`kt_accordion_2_header_${idx + 1}`}>
              <button
                className='accordion-button fs-4 fw-bold collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#kt_accordion_2_body_${idx + 1}`}
                aria-expanded='false'
                aria-controls={`kt_accordion_2_body_${idx + 1}`}
              >
                {formKey.replace('form', '')} {forms[formKey][0]?.descriptionLA}
              </button>
            </h2>
            <div
              id={`kt_accordion_2_body_${idx + 1}`}
              className='accordion-collapse collapse'
              aria-labelledby={`kt_accordion_2_header_${idx + 1}`}
              data-bs-parent='#kt_accordion_2'
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

export { Step2 };

