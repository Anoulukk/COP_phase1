import { FC, useEffect, useState } from 'react';
import DynamicTable from '../DynamicTable';
import Select from 'react-select';
import { Field } from 'formik';
interface NestedObject {
  [key: string]: {
    [key: string]: string | { value: string };
  };
}
const Step4: FC = () => {
  const [data, setData] = useState<NestedObject>();
 // Define grouped options
 const groupedOptions = [
  {
    label: "ວິທີບຳບັດ (R1-R13)",
    url: "https://emac.la/2024/01/20/%e0%ba%a5%e0%ba%b0%e0%ba%ab%e0%ba%b1%e0%ba%94%e0%ba%a7%e0%ba%b4%e0%ba%97%e0%ba%b5%e0%ba%9a%e0%ba%b3%e0%ba%9a%e0%ba%b1%e0%ba%94-%e0%bb%81%e0%ba%a5%e0%ba%b0-%e0%ba%81%e0%ba%b3%e0%ba%88%e0%ba%b1%e0%ba%94/",
    options: [
      { value: "R1", label: "R1" },
      { value: "R2", label: "R2" },
      { value: "R3", label: "R3" },
      { value: "R4", label: "R4" },
      { value: "R5", label: "R5" },
      { value: "R6", label: "R6" },
      { value: "R7", label: "R7" },
      { value: "R8", label: "R8" },
      { value: "R9", label: "R9" },
      { value: "R10", label: "R10" },
      { value: "R11", label: "R211" },
      { value: "R12", label: "R12" },
      { value: "R13", label: "R13" },
    ],
  },
  {
    label: "ວິທີກຳຈັດ (D1-D15)",
    url: "https://emac.la/2024/03/12/%e0%ba%81%e0%ba%b2%e0%ba%99%e0%ba%81%e0%ba%b3%e0%ba%88%e0%ba%b1%e0%ba%94%e0%ba%aa%e0%ba%b4%e0%bb%88%e0%ba%87%e0%bb%80%e0%ba%aa%e0%ba%94%e0%bb%80%e0%ba%ab%e0%ba%bc%e0%ba%b7%e0%ba%ad%e0%bb%80%e0%ba%9b/",
    options: [
      { value: "D1", label: "D1" },
      { value: "D2", label: "D2" },
      { value: "D3", label: "D3" },
      { value: "D4", label: "D4" },
      { value: "D5", label: "D5" },
      { value: "D6", label: "D6" },
      { value: "D7", label: "D7" },
      { value: "D8", label: "D8" },
      { value: "D9", label: "D9" },
      { value: "D10", label: "D10" },
      { value: "D11", label: "D211" },
      { value: "D12", label: "D12" },
      { value: "D13", label: "D13" },
      { value: "D14", label: "D14" },
      { value: "D15", label: "D15" },
    ],
  },
];
  const referentOptions = [
    { value: "building", label: "1. ອາຄານສຳນັກງານ" },
    { value: "food_court", label: "2. ໂຮງອາຫານ" },
    { value: "other_stay", label: "3. ທີ່ພັກອື່ນໆ " },
    { value: "other", label: "4. ອື່ນໆ (ສາມາດກອກໄດ້)" },
  ];

  const removalOptions = [
    { value: "buried_inside_the_factory", label: "1. ຝັງພາຍໃນໂຮງງານ" },
    { value: "incinerate_within_the_factory", label: "2. ເຜົາກຳຈັດພາຍໃນໂຮງງານ" },
    { value: "send_to_disposal_company", label: "3. ສົ່ງບໍລິສັດຮັບກຳຈັດ" },                                                                                
    { value: "other", label: "4. ອື່ນໆ (ສາມາດກອກໄດ້)" },
  ];
  const removalT4_2Options = [
    { value: "send_to_disposal_company", label: "1. ສົ່ງບໍລິສັດຮັບກຳຈັດ" },                                                                                
    { value: "other", label: "2. ອື່ນໆ (ສາມາດກອກໄດ້)" },
  ];

  const typesOfStoredWasteOptions = [
    { value: "general_waste", label: "1. ສິ່ງເສດເຫຼືອທົ່ວໄປ" },                                                                                
    { value: "hazardous_waste", label: "2. ສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ" },
    { value: "non_hazardous_waste", label: "3. ສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ" },
    { value: "recycle_waste", label: "4. ສິ່ງເສດເຫຼືອຮີໄຊເຄີ້ນ" },
  ];

  const typesOfWarehouseOptions = [
    { value: "in_the_building", label: "1. ໃນອາຄານ" },                                                                                
    { value: "In_a_separate_building_for_waste_only", label: "2. ໃນອາຄານແຍກສະເພາະສິ່ງເສດເຫຼືອ" },
    { value: "outside_the_building", label: "3. ນອກອາຄານ" },
  ];
  
  const treatmentAndEliminationCodeOptions = [
    { value: "treatment", label: "ວິທີບຳບັດ (R1-R13)" },                                                                                
    { value: "elimination", label: "ວິທີກຳຈັດ (R1-R15)" },
  ];

  const forms:any = {
    form410: [
      { classified: "heading", code: "410", description: "ສິ່ງເສດເຫຼືອຈາກອາຄານສຳນັກງານ", input_type: null },
      { classified: "title", code: "411", description: "ສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: null },
      { classified: "sub_head", code: "411A", description: "ປະລິມານສິ່ງເສດເຫຼືອລວມ (Kg/ເດືອນ)", input_type: "text" },
      { classified: "sub_head", code: "411B", description: "ຂໍ້ມູນສິ່ງເສດເຫຼືອທົ່ວໄປ", input_type: "T4-1", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:4, title:"ແຫຼ່ງທີ່ມາ", inputType:"choice" },
            {id:5, title:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
            {id:6, title:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
            {id:7, title:"ການກຳຈັດ", inputType:"choice" }
          ]
          , options:[ 
            {forID:4, options: referentOptions},
            {forID:7, options: removalOptions}]
         } 
        },
      { classified: "title", code: "412", description: "ສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: null },
      { classified: "sub_head", code: "412A", description: "ຂໍ້ມູນສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍຈາກສຳນັກງານ, ອາຄານ", input_type: "T4-2", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:4, title:"ແຫຼ່ງທີ່ມາ", inputType:"choice" },
            {id:5, title:"ປະລິມານ (Kg/ປີ)", inputType:"text-area" },
            {id:6, title:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
            {id:7, title:"ການກຳຈັດ", inputType:"choice" }
          ]
          , options:[ 
            {forID:4, options: referentOptions},
            {forID:7, options: removalT4_2Options}]
         }  },


      
    ],
    form420: [
      { classified: "heading", code: "420", description: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳ", input_type: null },
      { classified: "sub_head", code: "420A", description: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳ (ລາຍການ)", input_type: "number" },
      { classified: "sub_head", code: "420B", description: "ປະລິມານສິ່ງເສດເຫຼືອອຸດສາຫະກຳ", input_type: "text" },
      { classified: "sub_head", code: "420C", description: "ແຫຼ່ງກຳເນີດສິ່ງເສດເຫຼືອ", input_type: "T4-3", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ແຫຼ່ງກຳເນີດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:3, title:"ສິ່ງເສດເຫຼືອທີ່ເກີດ", inputType:"text-area" },
          ]
         }  },
      { classified: "sub_head", code: "420D", description: "ແຜນຜັງການເກີດສິ່ງເສດເຫຼືອໃນຂະບວນການ", input_type: "file" },

      { classified: "title", code: "421", description: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳບໍ່ເປັນພິດອັນຕະລາຍ", input_type: null },
      { classified: "sub_head", code: "421A", description: "ສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ (ລາຍການ)", input_type: "number" },
      { classified: "sub_head", code: "421B", description: "ປະລິມານສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: "text" },
      { classified: "sub_head", code: "421C", description: "ຂໍ້ມູນສິ່ງເສດເຫຼືອບໍ່ເປັນພິດ ແລະ ອັນຕະລາຍ", input_type: "T4-4", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:4, title:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
            {id:5, title:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
            {id:6, title:"ຮູບພາບ", inputType:"file" }
          ]
         }  },

      { classified: "title", code: "422", description: "ສິ່ງເສດເຫຼືອອຸດສາຫະກຳເປັນພິດອັນຕະລາຍ", input_type: null },
      { classified: "sub_head", code: "422A", description: "ສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ (ລາຍການ)", input_type: "number" },
      { classified: "sub_head", code: "422B", description: "ປະລິມານສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: "text" },
      { classified: "sub_head", code: "422C", description: "ຂໍ້ມູນສິ່ງເສດເຫຼືອເປັນພິດ ແລະ ອັນຕະລາຍ", input_type: "T4-5", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:4, title:"ປະລິມານ (Kg/ເດືອນ)", inputType:"text-area" },
            {id:5, title:"ຈຸດທ້ອນໂຮມ ແລະ ເກັບມ້ຽນ", inputType:"text-area" },
            {id:6, title:"ຮູບພາບ", inputType:"file" }
          ]
         } },
    ],
    form430: [
      { classified: "heading", code: "430", description: "ສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: null },
      { classified: "sub_head", code: "430A", description: "ຈຳນວນສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: "text" },
      { classified: "sub_head", code: "430B", description: "ຂໍ້ມູນສະຖານທີ່ເກັບທ້ອນໂຮມສິ່ງເສດເຫຼືອ", input_type: "T4-6", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ຊື່ພື້ນທີ່ເກັບ", inputType:"text-area" },
            {id:3, title:"ປະລິມານສູງສຸດທີ່ສາມາດເກັບໄດ້ (Kg)", inputType:"text-area" },
            {id:4, title:"ເນື້ອທີ່", inputType:"text-area" },
            {id:5, title:"ປະເພດສິ່ງເສດເຫຼືອທີ່ຈັດເກັບ", inputType:"multi-choice" },
            {id:6, title:"ປະເພດສາງ", inputType:"choice" },
            {id:7, title:"ຮູບພາບ", inputType:"file" }
          ], 
          options:[ 
            {forID:5, options: typesOfStoredWasteOptions},
            {forID:6, options: typesOfWarehouseOptions}]
         } },
      { classified: "sub_head", code: "430C", description: "ແຜນຜັງສະຖານທີ່ເກັບສິ່ງເສດເຫຼືຶອ", input_type: "file" },  
    ],
    form440: [
      { classified: "heading", code: "440", description: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອ", input_type: null },
      { classified: "title", code: "441", description: "ການບຳບັດ-ກຳຈັດພາຍໃນ", input_type: null },
      { classified: "sub_head", code: "441A", description: "ຂໍ້ມູນການບຳບັດ-ກຳຈັດພາຍໃນໂຮງງານ", input_type: "T4-7", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:4, title:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
          ]
         } },

      { classified: "title", code: "442", description: "ການບຳບັດ-ກຳຈັດພາຍນອກ", input_type: null },
      { classified: "sub_head", code: "442A", description: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອບໍ່ເປັນພິດອັນຕະລາຍ", input_type: "T4-8", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:4, title:"ຜູ້ຮັບບຳບັດ-ກຳຈັດ", inputType:"text-area" },
            {id:5, title:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
            {id:6, title:"ລະຫັດບຳບັດ-ກຳຈັດ", inputType:"multi-choice" },
            {id:7, title:"ຄວາມຖີ່ໃນການສົ່ງບຳບັດ-ກຳຈັດ", inputType:"file" }
          ],options:[ 
            {forID:6, options: groupedOptions}]
         } },
      { classified: "sub_head", code: "442B", description: "ການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອເປັນພິດອັນຕະລາຍ", input_type: "T4-9", 
        column:{
          columnHead:[
            {id:1, title:"ລຳດັບ", inputType:"No"},
            {id:2, title:"ຊື່ສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:3, title:"ລະຫັດສິ່ງເສດເຫຼືອ", inputType:"text-area" },
            {id:4, title:"ຜູ້ຮັບບຳບັດ-ກຳຈັດ", inputType:"text-area" },
            {id:5, title:"ວິທີບຳບັດ-ກຳຈັດ", inputType:"text-area" },
            {id:6, title:"ລະຫັດບຳບັດ-ກຳຈັດ", inputType:"multi-choice" },
            {id:7, title:"ຄວາມຖີ່ໃນການສົ່ງບຳບັດ-ກຳຈັດ", inputType:"file" }
          ],options:[ 
            {forID:6, options: groupedOptions}]
         } },
    ],
    form450: [
      { classified: "heading", code: "450", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
      { classified: "sub_head", code: "450A", description: "ຂໍ້ມູນລະອຽດການບຳບັດ-ກຳຈັດສິ່ງເສດເຫຼືອພາຍໃນໂຮງງານ", input_type: "file" },
      { classified: "sub_head", code: "450B", description: "ໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການດ້ານສິ່ງແວດລ້ອມ", input_type: "file" },
    ]
  };
  const getValues = (mainKey: string | undefined, subKey?: string, newValue?: string | any | undefined, type?: string) => {
    // console.log(`${mainKey} ==== ${subKey} = ${newValue} :: ${type}`);
    if (!mainKey) {
      // console.error("mainKey is undefined");
      return; 
    }

      // Ensure both subKey and newValue are defined before setting them in localStorage
      if (mainKey && subKey && (newValue !== undefined && newValue !== null)) {
        console.log("GGG");
        console.log(newValue);
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

    setData(storedData);
    // console.log("Loaded data from localStorage:", storedData);
    
  }, []);
  const renderInput = (inputType: string, description: string, classified: string, column:any, code:string, main_key: string,  duplicates:boolean, options?:[string]) => {
  
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
          {renderInput(item.input_type, item.description, item.classified, item.column, item.code, item.main_key ? item.main_key : item.code, item.duplicates, item.options)}
        </div>
      );
    });
  };
  


  return (
    <div className='' style={{ width: '100%' }}>
      <h2 className='mb-5'>
        400 ການຄຸ້ມຄອງສິ່ງເສດເຫຼືອ
      </h2>
      <div className='accordion' id='kt_accordion_4'>
        {Object.keys(forms).map((formKey, idx) => (
          <div className='accordion-item' key={idx}>
            <h2 className='accordion-header' id={`kt_accordion_4_header_${idx + 1}`}>
              <button
                className='accordion-button fs-4 fw-bold collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#kt_accordion_4_body_${idx + 1}`}
                aria-expanded='false'
                aria-controls={`kt_accordion_4_body_${idx + 1}`}
              >
                {formKey.replace('form', '')} {forms[formKey][0]?.description}
              </button>
            </h2>
            <div
              id={`kt_accordion_4_body_${idx + 1}`}
              className='accordion-collapse collapse'
              aria-labelledby={`kt_accordion_4_header_${idx + 1}`}
              data-bs-parent='#kt_accordion_4'
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

export { Step4 };

