
import { Input } from "./Input";
import { Button } from "./Button";
import EyeIcon from "../Icons/EyeIcon";
import React, { useState } from "react";
import { FormHeader } from "./formHeader";
import EyeIconOff from "../Icons/EyeIconOff";
import { animationVariants } from "../utils/animation";
import { motion, AnimatePresence } from "framer-motion";
import { isStepTwoValid } from "../utils/isStepTwoValid";

export const StepTwo = (props) => {
  const {
    handleNextPage,
    handleBackPage,
    setFormValue,
    handleError,
    currentStep,
    clearError,
    formValue,
    errors,
  } = props;

  const [seePassword, setSeePassword] = useState("password");
  // const [showPassword, setShowPassword] = useState(false);
  
  // const togglePasswordVisibility = () => {
  //   setShowPassword((prev) => !prev);
  // };

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
      key={currentStep}
      initial="enter"
      animate="center"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
              placeholder="Email"
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
              placeholder="Phone number"
              onChange={handleChange}
              name={"phoneNumber"}
              value={formValue.phoneNumber}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Password"
              onChange={handleChange}
              name={"password"}
              value={formValue.password}
              type={seePassword}
            />
            <button
              onMouseDown={() => setSeePassword("text")}
              onMouseUp={() => setSeePassword("password")}
              onMouseLeave={() => setSeePassword("password")}
              className="absolute right-3 bg-transparent text-gray-500 hover:text-black"
              type="button"
            >
             <EyeIconOff/>
            </button>
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
              placeholder="Confirm Password"
              onChange={handleChange}
              name={"confirmPassword"}
              value={formValue.confirmPassword}
              type="password"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
        </div>
      </div>
      <div className="absolute bottom-[32px] left-[32px] gap-[8px] flex direction-row">
        <Button
          text={"Back"}
          className="w-[128px] h-[44px] bg-[#FFF] rounded-[6px] border-[1px] border-solid border-[#CBD5E1] text-black text-lg font-medium"
          handleNextPage={handleBackPage}
        />
        <Button
          text={"Continue 2/3 >"}
          className="w-[280px] h-[44px] bg-[#121316] rounded-[6px] text-lg font-medium text-[#FFF]"
          handleNextPage={handleFormNextStep}
        />
      </div>
    </motion.div>
  );
};
