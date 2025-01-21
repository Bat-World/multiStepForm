import React from "react";
import { FormHeader } from "./formHeader";
import { Button } from "./Button";
import handleNextPage from "@/app/components/MultiStep";
import { Input } from "./Input";

export const StepOne = (props) => {
   
  return (
    <div className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col ">
      <div className="Container  w-[416px] h-[385px] flex-col justify-center">
        <FormHeader />
        <div className="flex flex-col gap-[8px] mt-[12px]">
          <p className="text-[#334155] text-sm font-semibold">First name</p>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <p className="text-[#334155] text-sm font-semibold">Last name</p>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
            />
          </div>
        </div>
        

        <div className="flex flex-col gap-[8px] mt-[12px]">
          <p className="text-[#334155] text-sm font-semibold">User name</p>
          <div className="w-[416px] h-[44px] rounded-lg border border-[#8B8E95] focus-within:border-[#0CA5E9] focus-within:outline-none flex items-center px-3">
            <input
              className="w-full h-full bg-transparent outline-none text-black placeholder-gray-500"
              placeholder="Placeholder"
            />
          </div>
        </div>
        
        

        <Button
          text={"Next"}
          onClick={handleNextPage}
          className="w-[416px] h-[44px] bg-[#121316] rounded-[6px] "
        />
      </div>
    </div>
  );
};  
