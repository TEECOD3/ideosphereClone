import React from "react";
import TypeWriter from "./ui/TypeWriter";

type Props = {};

const Herotexts = (props: Props) => {
  return (
    <div className="flex">
      <div className="w-3/12 hidden  text-sm md:flex flex-col space-y-0 md:text-base uppercase leading-none font-bold">
        <span className="mb-0">strategic</span>
        <span>communication </span>
        <span> consultancy</span>
      </div>
      <div className=" w-full lg:w-1/2 h-[80px] lg:h-[150px] font-black">
        <TypeWriter />
      </div>
    </div>
  );
};

export default Herotexts;
