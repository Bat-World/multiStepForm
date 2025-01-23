"use client";


import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { LastPage } from "./LastPage";
import { StepThree } from "./StepThree";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImg: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    profileImg: "",
  });

  const handleError = (errors) => {
    setFormError((prev) => ({ ...prev, ...errors }));
  };

  const clearError = (name) => {
    setFormError((prev) => ({ ...prev, [name]: "" }));
  };

  const steps = [StepOne, StepTwo, StepThree, LastPage];
  const Step = steps[currentStep];

  const handleNextPage = () => {
    if (currentStep !== steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handleBackPage = () => {
    if (currentStep !== 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("FormData");
    if (data) {
      const parsedData = JSON.parse(data);
      setFormValue(parsedData);
      setCurrentStep(parsedData.currentStep || 0);
    }
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#F4F4F4] w-screen h-screen">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex flex-col items-center justify-center"
        >
          <Step
            handleNextPage={handleNextPage}
            handleBackPage={handleBackPage}
            setFormValue={setFormValue}
            handleError={handleError}
            clearError={clearError}
            formValue={formValue}
            errors={formError}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};