import React from "react";
import { FormHeader } from "./formHeader";
import { Input } from "./Input";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { isStepTwoValid } from "../utils/isStepTwoValid";

export const StepTwo = (props) => {
  const {
    handleNextPage,
    handleBackPage,
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
    const { isValid, errors } = isStepTwoValid(formValue);
    if (isValid) {
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
            Email <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
              onChange={handleChange}
              name={"email"}
              value={formValue.email}
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Phone number <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
              onChange={handleChange}
              name={"phoneNumber"}
              value={formValue.phoneNumber}
            />
          </div>
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
              onChange={handleChange}
              name={"password"}
              value={formValue.password}
              type="password"
            />
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
              onChange={handleChange}
              name={"confirmPassword"}
              value={formValue.confirmPassword}
              type="password"
            />
          </div>
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
        </div>
      </div>
      <div className="absolute bottom-[32px] left-[32px] gap-[8px] flex direction-row">
        <Button
          text={"Back"}
          className="w-[128px] h-[44px] bg-[#FFF] rounded-[6px] border-[1px] border-solid border-[#CBD5E1] text-black"
          handleNextPage={handleBackPage}
        />
        <Button
          text={"Next"}
          className="w-[280px] h-[44px] bg-[#121316] rounded-[6px]"
          handleNextPage={handleFormNextStep}
        />
      </div>
    </motion.div>
  );
};