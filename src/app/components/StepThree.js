import React from "react";
import { FormHeader } from "./formHeader";
import { Button } from "./Button";
import { Input } from "./Input";
import { motion } from "framer-motion";

export const StepThree = (props) => {
  const {handleBackPage, handleNextPage} = props;
  return (
    <div className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex-col justify-center ">
      <div className="Container  w-[416px] h-[385px] flex-col justify-center">
        <FormHeader />

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
