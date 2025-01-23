import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { FormHeader } from "./formHeader";
import DropImgIcon from "../Icons/dropImgIcon";

export const StepThree = (props) => {
  const {
    handleBackPage,
    handleNextPage,
    setFormValue,
    clearError,
    formValue,
    errors,
    text
  } = props;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormValue((prev) => ({ ...prev, profileImg: file }));
    clearError("profileImg");
  };

  return (
    <div className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col justify-center relative">
      <div className="Container w-[416px] h-[385px] flex-col justify-center absolute top-[10px] left-[32px]">
        <FormHeader />
        <div className="flex flex-col gap-[8px] mt-[12px]">
          <label className="text-[#334155] text-sm font-semibold">
            Profile Image <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[180px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <input
              type="file"
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              onChange={handleFileChange}
              name="profileImg"
            />
            <DropImgIcon />
          </div>
          {errors.profileImg && (
            <p className="text-red-500">{errors.profileImg}</p>
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
          text={"Continue 3/3 >"}
          className="w-[280px] h-[44px] bg-[#121316] rounded-[6px] text-lg font-medium text-[#FFF]"
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
};