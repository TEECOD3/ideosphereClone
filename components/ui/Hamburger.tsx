"use client";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  barstate?: boolean;
  barfunction: (barstate: boolean) => void;
  className?: string;
  bgclass?: string;
};

const Hamburger = (props: Props) => {
  const { barstate, barfunction, className } = props;
  return (
    <div
      className={cn(
        `${
          barstate ? "bar active" : "bar"
        } flex flex-col items-center justify-center gap-y-2 ${className}`
      )}
      onClick={() => {
        barfunction(!barstate);
      }}
    >
      <div className={cn(`${barstate ? "bg-white " : "bg-black"} line`)}></div>
    </div>
  );
};

export default Hamburger;
