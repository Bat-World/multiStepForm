"use client";
import React from "react";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { LastPage } from "./LastPage";

export const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneName: "",
  });

  const Step = [StepOne, StepTwo, StepThree, LastPage][currentStep];

  const handleNextPage = () => {
    if (currentStep !== 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handleBackPage = () => {
    if (currentStep !== 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  return (
    <div className="flex items-center justify-center bg-[#F4F4F4] w-screen h-screen">
      <div className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col ">
        <Step
        handleNextPage = {handleNextPage}
        handleBackPage = {handleBackPage}
        />
      </div>{" "}
    </div>
  );
};
