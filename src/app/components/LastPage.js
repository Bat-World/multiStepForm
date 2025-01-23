import React from "react";
import PineconeIcon from "../Icons/PineconeIcon";

export const LastPage = () => {
  return (
    <div className="w-[480px] h-[655px] bg-[#F4F4F4] rounded-lg  flex items-center ">
      <div className="Container  w-[448px] h-[239px] flex-col justify-center bg-[#FFF] rounded-lg p-[32px]">
        <div className="FormHeader  w-[416px] h-[129px] flex-col">
          <PineconeIcon />
          <div className="flex direction-row ">
            <p className="font-semibold text-[#202124] text-2xl">
              You are All Set! 🔥
            </p>
          </div>
          <p className="font-normal  text-[#8E8E8E] text-lg">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};