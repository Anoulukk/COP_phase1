import { FC, useEffect, useRef, useState } from "react";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import { KTIcon } from "../../../../_metronic/helpers";
import { StepperComponent } from "../../../../_metronic/assets/ts/components";
import { Form, Formik, FormikValues } from "formik";
import {
  createAccountSchemas,
  ICreateAccount,
  inits,
} from "./CreateAccountWizardHelper";
import { ToolbarWrapper } from "../../../../_metronic/layout/components/toolbar";
import { Content } from "../../../../_metronic/layout/components/content";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import { Tooltip } from "react-bootstrap";
import { form100, form200, form300, form400, form500 } from "./Form100_800Data";
import { createFormData } from "../components/core/_requests";
import Swal from "sweetalert2";
interface NestedObject {
  [key: string]: {
    [key: string]: string | { value: string };
  };
}
interface HorizontalProps {
  enterprise_group: string;
  version_id: string | undefined;
}
const Horizontal: FC<HorizontalProps> = ({ enterprise_group, version_id }) => {
  console.log("🚀 ~ version_id:", version_id);
  const [data, setData] = useState<NestedObject>();
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [stepper, setStepper] = useState<StepperComponent | null>(null);
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0]);
  const [initValues] = useState<ICreateAccount>(inits);
  const [isSubmitButton, setSubmitButton] = useState(false);

  const loadStepper = () => {
    setStepper(
      StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
    );
  };

  const prevStep = () => {
    if (!stepper) {
      return;
    }

    stepper.goPrev();

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);

    setSubmitButton(stepper.currentStepIndex === stepper.totalStepsNumber);
  };

  // useEffect(() => {
  //   const storedData: any = {};
  //   Object.keys(localStorage).forEach((key) => {
  //     const [mainKey, subKey] = key.split("-");
  //     const value = localStorage.getItem(key);
  
  //     if (mainKey && subKey && value) {
  //       const firstChar = mainKey.charAt(0); // Get the first character of mainKey
  //       if (!isNaN(parseInt(firstChar))) {
          
  //         const category = parseInt(firstChar) * 100; // Calculate category (e.g., 1 -> 100, 2 -> 200)
    
  //         if (!storedData[category]) {
  //           storedData[category] = {};
  //         }
  //         if (!storedData[category][mainKey]) {
  //           storedData[category][mainKey] = {};
  //         }
  //         storedData[category][mainKey][subKey] = value;
  //       }
  //     }
  //   });
  
  //   setData(storedData);
  // }, [isSubmitButton]);
  
  
  const submitStep = (saveToDB:boolean) => {
    console.log("🚀 ~ 😉😉😉 ~ submitFor:", saveToDB)
    if (!stepper) {
      return;
    }
    const storedData: any = {};
    Object.keys(localStorage).forEach((key) => {
      const parts = key.split("-");
      if (parts.length !== 2) return; // Ignore keys that don't have exactly two parts
    
      const [mainKey, subKey] = parts;
      const value = localStorage.getItem(key);
  
      if (mainKey && subKey && value) {
        const firstChar = mainKey.charAt(0); // Get the first character of mainKey
        if (!isNaN(parseInt(firstChar))) {
          
          const category = parseInt(firstChar) * 100; // Calculate category (e.g., 1 -> 100, 2 -> 200)
    
          if (!storedData[category]) {
            storedData[category] = {};
          }
          if (!storedData[category][mainKey]) {
            storedData[category][mainKey] = {};
          }
          storedData[category][mainKey][subKey] = value;
        }
      }
    });
    if (!saveToDB) {
      stepper.goNext();
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("data saved:::💖💖💖💖💖💖💖💖💖💖💖", storedData);
      createFormData({ data: storedData });
    }

    setSubmitButton(stepper.currentStepIndex === stepper.totalStepsNumber);

    setCurrentSchema(createAccountSchemas[stepper.currentStepIndex - 1]);
  };

  useEffect(() => {
    if (!stepperRef.current) {
      return;
    }

    loadStepper();
  }, [stepperRef]);

  const stepperTitles = [
    "100 ຂໍ້ມູນທົ່ວໄປຂອງວິສາຫະກິດ",
    "200 ທີ່ຕັ້ງ ແລະ ການນຳໃຊ້ພື້ນທີ່ໂຮງງານ",
    "300 ຂໍ້ມູນການປະກອບກິດຈະການ",
    "400 ການຄຸ້ມຄອງສິ່ງເສດເຫຼືອ",
    "500 ການຄວບຄຸມມົນລະພິດທາງນ້ຳ",
    "600 ການຄວບຄຸມມົນລະພິດທາງອາກາດ",
    "700 ການຄຸ້ມຄອງຄວາມປອດໄພ ແລະ ສຸຂະພາບແຮງງານ",
    "800 ສະຫຼຸບແຜນການຄຸ້ມຄອງ ແລະ ຕິດຕາມກວດກາມົນລະພິດສິ່ງແວດລ້ອມ",
  ];
  return (
    <>
      <ToolbarWrapper />
      <Content>
        <div
          ref={stepperRef}
          className="stepper stepper-links d-flex flex-column"
          id="kt_create_account_stepper"
        >
          <div className="d-flex mb-7">
            <div className="stepper-nav">
              {stepperTitles.map((title, index) => (
                <div
                  key={index}
                  className={`stepper-item ${index === 0 ? "current" : ""}`}
                  style={{ width: "50px" }}
                  data-kt-stepper-element="nav"
                >
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={(props) => (
                      <Tooltip id="button-tooltip" {...props}>
                        {title}
                      </Tooltip>
                    )}
                  >
                    <h3
                      className="stepper-title text-center"
                      onClick={() => {
                        stepper?.goto(index + 1);
                        setSubmitButton(
                          stepper?.currentStepIndex ===
                            stepper?.totalStepsNumber
                        );
                      }} // Navigate to the clicked step
                      style={{ cursor: "pointer" }} // Optional: Make it look clickable
                    >
                      {title.slice(0, 3)}
                    </h3>
                  </OverlayTrigger>
                </div>
              ))}
            </div>
            <div>
              <button type="button" className="btn btn-lg btn-primary" onClick={()=>submitStep(true)}>
                ບັນທຶກ
              </button>
              <button type="button" className="btn btn-light-primary ms-3">
                <KTIcon iconName="exit-up" className="fs-2" />
                Export
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className=" bg-body rounded" style={{ width: "100%" }}>
                <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={()=>submitStep(false)}>
                  {() => (
                    <Form className="" id="kt_create_account_form" placeholder={undefined}>
                      <div className="current" data-kt-stepper-element="content">
                        <Step1
                          formsData={form100}
                          displayFor={enterprise_group}
                        />
                      </div>

                      <div data-kt-stepper-element="content">
                        <Step2 
                          formsData={form200}
                          displayFor={enterprise_group} />
                      </div>

                      <div data-kt-stepper-element="content">
                        <Step3
                         formsData={form300}
                         displayFor={enterprise_group}/>
                      </div>

                      <div data-kt-stepper-element="content">
                        <Step4 
                          formsData={form400}
                          displayFor={enterprise_group}/>
                      </div>

                      <div data-kt-stepper-element="content">
                        <Step5
                          formsData={form500}
                          displayFor={enterprise_group}
                        />
                      </div>

                      <div className="d-flex flex-stack pt-15">
                        <div className="mr-2">
                          <button
                            onClick={prevStep}
                            type="button"
                            className="btn btn-lg btn-light-primary me-3"
                            data-kt-stepper-action="previous"
                          >
                            <KTIcon iconName="arrow-left" className="fs-4 me-1" />
                            ກັບຄືນ
                          </button>
                        </div>

                        <div>
                      {!isSubmitButton && 
                      <button
                      type="submit"
                      className="btn btn-lg btn-primary me-3"
                    >
                      <span className="indicator-label">
                        {!isSubmitButton && "ຖັດໄປ"}
                        <KTIcon iconName="arrow-right" className="fs-3 ms-2 me-0"/>
                      </span>
                    </button>}
                          
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export { Horizontal };
