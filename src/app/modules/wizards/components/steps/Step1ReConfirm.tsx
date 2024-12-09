import {FC, useState} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import DynamicTable from '../DynamicTable';
import Select from 'react-select';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {OverlayTrigger, Tooltip} from "react-bootstrap";
const Step1ReConfirm: FC = () => {
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
  
  const forms:any = {
    form110: [
      { classified: "heading", code: "110", description: "ຂໍ້ມູນວິສາຫະກິດ", input_type: null },
      { classified: "title", code: "110A", description: "ຊື່ບໍລິສັດ", input_type: null },
      { classified: "sub_head", code: "110A1", description: "ຊື່ລາວ", input_type: "text" },
      { classified: "sub_head", code: "110A2", description: "ຊື່ອັງກິດ", input_type: "text" },
      { classified: "title", code: "110B", description: "ຜູ້ອຳນວຍການ", input_type: "text" },
      { classified: "title", code: "110C", description: "ປະກອບກິດຈະການ", input_type: "text" },
      { classified: "title", code: "110D", description: "ທຶນຈົດທະບຽນ", input_type: null },
      { classified: "sub_head", code: "110D1", description: "ກີບ", input_type: "number" },
      { classified: "sub_head", code: "110D2", description: "ໂດລາ", input_type: "number" },
      { classified: "title", code: "110E", description: "ກຳນົດອາຍຸການລົງທຶນ (ປີ)", input_type: "number" },
      { classified: "title", code: "110F", description: "ທີ່ຕັ້ງສຳນັກງານ", input_type: null },
      { classified: "sub_head", code: "110F1", description: "ບ້ານ", input_type: "choice" },
      { classified: "sub_head", code: "110F2", description: "ເມືອງ", input_type: "choice" },
      { classified: "sub_head", code: "110F3", description: "ແຂວງ", input_type: "choice" },
      { classified: "sub_head", code: "110F4", description: "ເຂດເສດຖະກິດພິເສດ", input_type: "choice" },
      { classified: "title", code: "110G", description: "ໂຄງຮ່າງການຈັດຕັ້ງ", input_type: "file" },
      { classified: "title", code: "110H", description: "ເລກປະຈຳຕົວວິສາຫະກິດ", input_type: "number" },
      { classified: "title", code: "110I", description: "ເລກປະຈຳຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (EMC ID)", input_type: "text" },
      { classified: "title", code: "110J", description: "ຂະແໜງທຸລະກິດ (LSIC)", input_type: "choice" },
      { classified: "title", code: "110K", description: "ຂະໜາດໂຮງງານ", input_type: "choice" },
      { classified: "title", code: "110L", description: "ລະດັບຄວາມສ່ຽງຜົນກະທົບດ້ານສິ່ງແວດລ້ອມຂອງໂຮງງານ", input_type: "choice" },
    ],
    form120: [
      { classified: "heading", code: "120", description: "ຫົວໜ່ວຍຄຸ້ມຄອງສິ່ງແວດລ້ອມ", input_type: null },
      { classified: "title", code: "121", description: "ບໍລິສັດທີ່ປຶກສາສິ່ງແວດລ້ອມ", input_type: null },
      { classified: "sub_head", code: "121A", description: "ຊື່", input_type: "text" },
      { classified: "sub_head", code: "121B", description: "ເລກທີໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການດ້ານສິ່ງແວດລ້ອມ", input_type: "text" },
      { classified: "title", code: "122", description: "ຜູ້ຈັດການດ້ານສິ່ງແວດລ້ອມ", input_type: null },
      { classified: "sub_head", code: "122A", description: "ຊື່", input_type: "text" },

      { classified: "title", code: "123", description: "ວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ເຄມີປະຈຳໂຮງງານ", input_type: null },
      { classified: "sub_head", code: "123A", description: "ຊື່  ວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມທົ່ວໄປ", input_type: "text" },
      { classified: "sub_head", code: "123B", description: "ຊື່  ວິຊາການຄວບຄຸມມົນລະພິດທາງນ້ຳ", input_type: "text" },
      { classified: "sub_head", code: "123C", description: "ຊື່  ວິຊາການຄວບຄຸມມົນລະພິດທາງອາກາດ", input_type: "text" },
      { classified: "sub_head", code: "123D", description: "ຊື່ ວິຊາການຄວບຄຸມທາດເຄມີ", input_type: "text" },
      { classified: "sub_head", code: "123E", description: "ຊື່  ວິຊາການຄວບຄຸມສິ່ງເສດເຫຼືອປະເພດແຂງ ແລະ ອື່ນໆ", input_type: "text" },
    ],
    form130: [
      { classified: "heading", code: "130", description: "ຫົວໜ່ວຍຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ ", input_type: null },
      { classified: "title", code: "131", description: "ພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null },
      { classified: "sub_head", code: "131A", description: "ຊື່ ພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: "text" },
      { classified: "title", code: "132", description: "ໜ່ວຍງານຮັບຜິດຊອບ ຫຼື ຄະນະກຳມະການດ້ານຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: null },
      { classified: "sub_head", code: "132A", description: "ລາຍຊື່ພາຍໃນຫົວໜ່ວຍຄວາມປອດໄພ", input_type: "T1-1", column:["ຊື່ ແລະ ນາມສະກຸນ", "ພາກສ່ວນ"] },
      { classified: "sub_head", code: "132B", description: "ໂຄງຮ່າງການຈັດຕັ້ງໜ່ວຍງານຮັບຜິດຊອບຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ", input_type: "file" },
    ],
    form140: [
      { classified: "heading", code: "140", description: "ເອກະສານທີ່ກ່ຽວຂ້ອງ", input_type: null },
      { classified: "sub_head", code: "140A", description: "ໃບທະບຽນວິສາຫະກິດ (D1-1)", input_type: "file" },
      { classified: "sub_head", code: "140B", description: "ໃບອະນຸຍາດລົງທຶນ (D1-2)", input_type: "file" },
      { classified: "sub_head", code: "140C", description: "ໃບຢັ້ງຢືນ ເລກປະຈຳຕົວວິສາຫະກິດ (D1-3)", input_type: "file" },
      { classified: "sub_head", code: "140D", description: "ໃບຢັ້ງຢືນການມອບເລກປະຈຳຕົວຜູ້ເສຍອາກອນ (D1-4)", input_type: "file" },
      { classified: "sub_head", code: "140E", description: "ໃບຢັ້ງຢືນເລກປະຈຳຕົວຜູ້ຄອບຄອງສິ່ງເສດເຫຼືອ ແລະ ສ້າງມົນລະພິດ (D1-5)", input_type: "file" },
      { classified: "sub_head", code: "140F", description: "ໃບອະນຸຍາດດຳເນີນທຸລະກິດກ່ຽວກັບເຄມີ (D1-6)", input_type: "file" },
      { classified: "sub_head", code: "140G", description: "ໃບອະນຸຍາດໃຫ້ບໍລິການວິຊາການກ່ຽວກັບສິ່ງແວດລ້ອມ (D1-7)", input_type: "file" },
      { classified: "sub_head", code: "140H", description: "ຊຸດເອກະສານປະຈຳຕົວຜູ້ຈັດການດ້ານສິ່ງແວດລ້ອມ (D1-8)", input_type: "file" },
      { classified: "sub_head", code: "140I", description: "ຊຸດເອກະສານປະຈຳຕົວວິຊາການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ເຄມີປະຈຳໂຮງງານ (D1-9)", input_type: "file" },
      { classified: "sub_head", code: "140J", description: "ຊຸດເອກະສານປະຈຳຕົວພະນັກງານຮັບຜິດຊອບດ້ານຄວາມປອດໄພ (D1-10)", input_type: "file" },
    
    ],

  };

  const allComment: { [key: string]: string } = {
    '110A1': 'ກອກຕາມທີ່ລະບຸໄວ້ໃນໃບທະບຽນວິສາຫະກິດ',
    '110A2': 'ກອກຕາມທີ່ລະບຸໄວ້ໃນໃບທະບຽນວິສາຫະກິດ',
    '110B': 'ກອກຕາມທີ່ລະບຸໄວ້ໃນໃບທະບຽນວິສາຫະກິດ',
    '110C': 'Specify the type of business here.',
    '110G': 'Upload the organizational structure here.',
    '110H': 'Provide the business registration number.',

  };

  const renderInput = (inputType: string, description: string, classified: string, column: any, code: string, isRedBorder: boolean) => {
    const isTInput = inputType?.startsWith('T');
    
    const inputClass = isRedBorder ? "form-control border border-danger" : "form-control border border-default";
    // let inputValue = $(this).val().replace(/[^0-9]/g, '');
    // if (inputValue.startsWith('0') && inputValue.length > 1) {
    //   inputValue = inputValue.replace(/^0+/, ''); 
    // }
    switch (inputType) {
      case 'text':
      case 'number':
      case 'file':
        return (
          <div className={classified === 'title' ? 'ms-3' : 'ms-7'}>
            <input type={inputType} placeholder={description} className={inputClass} min={1}/>
            
            {/* Display the comment below the input if it exists */}
          </div>
        );
      case 'choice':
        return (
          <Select className={classified === 'title' ? 'react-select-styled ms-3' : 'react-select-styled ms-7'} classNamePrefix="react-select" />
        );
      default:
        if (isTInput) {
          return <div className="ms-7"><DynamicTable data={column} main_key={''} sub_key={''} duplicates={false} /></div>;
        }
        return null;
    }
  };
  
  const renderFormItems = (form: any[], comments: any) => {
    const [inputBorders, setInputBorders] = useState<{ [key: string]: boolean }>({});
  
    const handleIconClick = (code: string, description: string) => {
      // Show the SweetAlert popup
      Swal.fire({
        title: 'Confirm',
        text: `Do you want to confirm the input for ${description}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          // If confirmed, remove the red border for the input with this code
          setInputBorders((prevState) => ({
            ...prevState,
            [code]: false,
          }));
        }
      });
    };
  
    return form.map((item, index) => {
      if (item.classified === 'heading') {
        return null;
      }
  
      const showIcon = item.input_type !== null;
      const isRedBorder = inputBorders[item.code] !== false; // Check if the input should have a red border
      const inputClass = isRedBorder ? "text-danger" : "text-default";
  
      return (
        <div className="form-group mb-3" key={index}>
          {item.classified === 'title' ? (
            <div className="d-flex justify-content-between">
              <h4 className={`ms-3 ${showIcon ? inputClass: ""}`}>
                {item.code} {item.description}  
                {showIcon && (        
                  <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => (
                  <Tooltip id="button-tooltip" {...props}>
                  {allComment[item.code]}
                  </Tooltip>
                  )}
                  >
                  <span
                  className="bg-transparent border-0"
                  >
                  <i className={`bi bi-exclamation-circle fs-3 ${inputClass} ms-3`}></i>
                  </span>
                  </OverlayTrigger>   
              //    <i
              //   className="fas fa-exclamation-circle ms-2 fs-5"
              //   data-bs-toggle="tooltip"
              //   title={allComment[item.code]}
              // ></i>
            )}
              </h4>
              {showIcon && (
                <span
                  className="parent-hover"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleIconClick(item.code, item.description)}
                >
                  <KTIcon iconName="check" className="fs-2 parent-hover-primary" />
                </span>
              )}
            </div>
          ) : (
            <div className="d-flex justify-content-between">
              <span className={`fs-5 ms-7 ${inputClass}`}>
                {item.code} {item.description}       
                  <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => (
                  <Tooltip id="button-tooltip" {...props}>
                  {allComment[item.code]}
                  </Tooltip>
                  )}
                  >
                  <span
                  className="bg-transparent border-0"
                  >
                  <i className={`bi bi-exclamation-circle fs-3 ${inputClass} ms-3`}></i>
                  </span>
                  </OverlayTrigger>   
              </span>
              {showIcon && (
                <div className="d-flex">
                  <span
                    className="parent-hover"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleIconClick(item.code, item.description)}
                  >
                    <KTIcon iconName="check" className="fs-3 parent-hover-primary" />
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
          )}
          {renderInput(item.input_type, item.description, item.classified, item.column, item.code, isRedBorder)}
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
            {renderFormItems(forms[formKey], comments)}
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


export {Step1ReConfirm}