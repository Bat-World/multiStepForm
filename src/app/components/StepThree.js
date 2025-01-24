import { Input } from "./Input";
import { Button } from "./Button";
import React, { useState } from "react";
import { FormHeader } from "./formHeader";
import DropImgIcon from "../Icons/dropImgIcon";
import { animationVariants } from "../utils/animation";
import { motion, AnimatePresence } from "framer-motion";

export const StepThree = (props) => {
  const {
    handleBackPage,
    handleNextPage,
    currentStep,
    setFormValue,
    clearError,
    handleError,
    formValue,
    errors,
  } = props;

  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormValue((prev) => ({ ...prev, profileImg: file }));
    clearError("profileImg");

    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
    clearError(name);
  };

  const handleFormNextStep = () => {
    const errors = {};
    const today = new Date();
    const birthDate = new Date(formValue.dateBirth);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      errors.dateBirth = "You must be at least 18 years old";
      handleError(errors);
      return;
    }

    const localData = {
      ...formValue,
      currentStep: 3,
    };
    localStorage.setItem("FormData", JSON.stringify(localData));
    handleNextPage();
  };

  return (
    <motion.div
      key={currentStep}
      initial="enter"
      animate="center"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex flex-col items-center justify-center"
    >
      <div className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col justify-center relative">
        <div className="Container w-[416px] h-[385px] flex-col  absolute top-[10px] left-[32px]">
          <FormHeader />
          <div className="flex flex-col gap-[8px] mt-[12px]">
            <label className="text-[#334155] text-sm font-semibold">
              Date of birth <span className="text-red-500">*</span>
            </label>
            <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
              <input
                type="date"
                className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
                onChange={handleDateChange}
                name="dateBirth"
                value={formValue.dateBirth}
              />
            </div>
            {errors.dateBirth && (
              <p className="text-red-500">{errors.dateBirth}</p>
            )}
          </div>
          <div className="flex flex-col gap-[8px] mt-[12px] items-center">
            <label className="text-[#334155] text-sm font-semibold">
              Profile Image <span className="text-red-500">*</span>
            </label>
            <div className="w-[416px] h-[180px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex flex-col items-center justify-center px-3">
              <input
                type="file"
                className="hidden"
                id="profileImg"
                onChange={handleFileChange}
                name="profileImg"
              />
              <label htmlFor="profileImg" className="cursor-pointer">
                <DropImgIcon />
              </label>
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="mt-2 w-full h-full object-cover rounded-lg"
                />
              ) : (
                <p className="text-gray-500 mt-2">Click to upload</p>
              )}
            </div>
            {errors.profileImg && (
              <p className="text-red-500">{errors.profileImg}</p>
            )}
          </div>
        </div>
        <div className="absolute bottom-[32px] left-[32px] gap-[8px] flex direction-row">
          <Button
            text={"Back"}
            className="w-[128px] h-[44px] bg-[#FFF] rounded-[6px] border-[1px] border-solid border-[#CBD5E1] text-black"
            handleNextPage={handleBackPage}
          />
          <Button
            text={"Continue 3/3 >"}
            className="w-[280px] h-[44px] bg-[#121316] rounded-[6px] text-lg font-medium text-[#FFF]"
            handleNextPage={handleFormNextStep}
          />
        </div>
      </div>
    </motion.div>
  );
};
