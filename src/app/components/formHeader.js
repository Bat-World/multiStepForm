import React from "react";
import PineconeIcon from "../Icons/PineconeIcon";

export const FormHeader = () => {
  return (
    <>
      <div className="FormHeader  w-[416px] h-[129px] flex-col">
        <PineconeIcon />
        <div className="flex direction-row ">
          <p className="font-semibold text-[#202124] text-2xl">Join Us! 😎</p>
        </div>
        <p className="font-normal  text-[#8E8E8E] text-lg">
          Please provide all current information accurately.
        </p>
      </div>
    </>
  );
};
