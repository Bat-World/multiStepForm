"use client";

import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { LastPage } from "./LastPage";
import { StepThree } from "./StepThree";
import { useState, useEffect } from "react";

export const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    lastName: "",
    userName: "",
    password: "",
    firstName: "",
    dateBirth: "",
    profileImg: "",
    phoneNumber: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    lastName: "",
    userName: "",
    password: "",
    firstName: "",
    dateBirth: "",
    profileImg: "",
    phoneNumber: "",
    confirmPassword: "",
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
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      localStorage.setItem(
        "FormData",
        JSON.stringify({ ...formValue, currentStep: nextStep })
      );
    }
  };

  const handleBackPage = () => {
    if (currentStep !== 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      localStorage.setItem(
        "FormData",
        JSON.stringify({ ...formValue, currentStep: prevStep })
      );
    }
  };

  // useEffect(() => {
  //   const data = localStorage.getItem("FormData");
  //   if (data) {
  //     const parsedData = JSON.parse(data);
  //     setFormValue(parsedData);
  //     setCurrentStep(parsedData.currentStep || 0);
  //   }
  // }, []);

  return (
    <div className="flex items-center justify-center bg-[#F4F4F4] w-screen h-screen">
      <Step
        handleNextPage={handleNextPage}
        handleBackPage={handleBackPage}
        setFormValue={setFormValue}
        handleError={handleError}
        clearError={clearError}
        formValue={formValue}
        errors={formError}
      />
    </div>
  );
};
