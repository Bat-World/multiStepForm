import React from "react";
import { FormHeader } from "./formHeader";
import { Button } from "./Button";
import { Input } from "./Input";
import { motion } from "framer-motion";
import { isStepOneValid } from "../utils/isStepOneValid ";

export const StepOne = (props) => {
  const {
    handleNextPage,
    className,
    errors,
    formValue,
    handleError,
    setFormValue,
    clearError,
  } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
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
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col justify-center relative"
    >
      <div className="Container w-[416px] h-[385px] flex-col justify-center absolute top-[10px] left-[32px]">
        <FormHeader />
        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            First Name <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
              onChange={handleChange}
              name={"firstName"}
              value={formValue.firstName}
            />
          </div>
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Last name <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
              onChange={handleChange}
              name={"lastName"}
              value={formValue.lastName}
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
              placeholder="Placeholder"
              onChange={handleChange}
              name={"userName"}
              value={formValue.userName}
            />
          </div>
          {errors.userName && <p className="text-red-500">{errors.userName}</p>}
        </div>

        <Button
          text={"Next"}
          className="w-[416px] h-[44px] bg-[#121316] rounded-[6px]"
          handleNextPage={handleFormNextStep}
        />
      </div>
    </motion.div>
  );
};