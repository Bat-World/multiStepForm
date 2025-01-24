import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormHeader } from "./formHeader";
import { animationVariants } from "../utils/animation";
import { motion, AnimatePresence } from "framer-motion";
import { isStepOneValid } from "../utils/isStepOneValid ";

export const StepOne = (props) => {
  const {
    handleNextPage,
    setFormValue,
    handleError,
    currentStep,
    clearError,
    className,
    formValue,
    errors,
  } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => {
      const updatedForm = { ...prev, [name]: value };
      localStorage.setItem("FormData", JSON.stringify(updatedForm));
      return updatedForm;
    });
    clearError(name);
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);
    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 1,
      };
      localStorage.setItem("FormData", JSON.stringify(localData));
      handleNextPage();
    }
    handleError(errors);
  };

  return (
    <motion.div
      key={currentStep}
      initial="enter"
      animate="center"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col justify-center relative"
    >
      <div className="Container w-[416px] h-[385px] flex-col justify-center absolute top-[30px] left-[32px]">
        <FormHeader />
        <div className="flex flex-col gap-[8px] mt-[30px]">
          <label className="text-[#334155] text-sm font-semibold">
            First Name <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="First name"
              onChange={handleChange}
              name={"firstName"}
              value={formValue.firstName || ""}
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Last name <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Last name"
              onChange={handleChange}
              name={"lastName"}
              value={formValue.lastName || ""}
            />
          </div>
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Username <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Username"
              onChange={handleChange}
              name={"userName"}
              value={formValue.userName || ""}
            />
          </div>
          {errors.userName && <p className="text-red-500">{errors.userName}</p>}
        </div>
      </div>
      <div className="absolute bottom-[32px] left-[32px]">
        <Button
          text={"Continue 1/3 >"}
          className="w-[416px] h-[44px] bg-[#121316] rounded-[6px] text-lg font-medium text-[#FFF]"
          handleNextPage={handleFormNextStep}
        />
      </div>
    </motion.div>
  );
};
