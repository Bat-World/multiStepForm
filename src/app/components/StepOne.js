import React from "react";
import { FormHeader } from "./formHeader";
import { Button } from "./Button";
import handleNextPage from "@/app/components/MultiStep";
import { Input } from "./Input";
import { motion } from "framer-motion";

export const StepOne = (props) => {
  const {
    text,
    handleNextPage,
    className,
    errors,
    formValue,
    handleError,
    setFormValue,
  } = props;
  const error = false;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({...prev, [name]: value}));
  };

  const handleFormNextStep = () => {
const {isValid, errors} = isStepOneValid(formValue);
if (isValid){
  handleNextPage();
}
handleError(errors);

    // error
  
  };
  return (
    <div className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col justify-center ">
      <div className="Container  w-[416px] h-[385px] flex-col justify-center">
        <FormHeader />
        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            First Name <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
              onchange={handleChange}
              name={"firstName"}
            />
            {errors.firstName.length > 0 && <p className="text-red-500">{errors.firstName}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Last name <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Username <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <Button
          text={"Next"}
          className="w-[416px] h-[44px] bg-[#121316] rounded-[6px] "
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
};

const isStepOneValid = (data) => {
  const {firstName} = data;
  const errors = {};
  const isValid = true;
  if (firstName.length <= 1) {
    errors.firstName = "First name should include at least 2 characters";
    isValid = false;
  }
  return {isValid, errors}
};