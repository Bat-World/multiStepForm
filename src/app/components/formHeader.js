import React from "react";
import PineconeIcon from "../Icons/PineconeIcon";

export const FormHeader = () => {
  return (
    <>
      <div className="FormHeader  w-[416px] h-[129px] flex-col">
        <PineconeIcon />
        <div className="flex direction-row ">
          <p className="font-semibold text-[#202124] text-[26px] mt-[8px]">Join Us! 😎</p>
        </div>
        <p className=" text-[#8E8E8E] text-[18px] font-medium mt-[8px]">
          Please provide all current information accurately.
        </p>
      </div>
    </>
  );
};
