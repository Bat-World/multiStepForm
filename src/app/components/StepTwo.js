import React from "react";
import { FormHeader } from "./formHeader";
import { Input } from "./Input";
import { Button } from "./Button";
import { motion } from "framer-motion";

export const StepTwo = (props) => {
  const {handleBackPage, handleNextPage} = props;
  return (
    <div className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col justify-center ">
      <div className="Container  w-[416px] h-[385px] flex-col justify-center">
        <FormHeader />
        <div className="flex flex-col gap-[8px] mt-[12px]">
        <label className="text-[#334155] text-sm font-semibold">
           Email <span className="text-red-500">*</span>
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
            Phone number <span className="text-red-500">*</span>
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
            Password <span className="text-red-500">*</span>
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
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <Input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
            />
          </div>
        </div>
        <div className="flex direction-row ">
        <Button
            text={"Back"}
            className="w-[128px] h-[44px] bg-[#FFF] rounded-[6px] border-[1px] border-solid border-[#CBD5E1] text-black"
            handleNextPage={handleBackPage}
          />
          <Button
            text={"Next"}
            className="w-[280px] h-[44px] bg-[#121316] rounded-[6px] "
            handleNextPage={handleNextPage}
          />
        </div>
      </div>
    </div>
  );
};
