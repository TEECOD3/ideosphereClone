import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import React from "react";

type Props = {
  heading: string;
  paragraph: string;
};

const Service = (props: Props) => {
  const { heading, paragraph } = props;

  return (
    <li className="border-t-4 py-4 border-black  gap-y-7 flex-col flex">
      <div className="flex flex-col gap-y-4">
        <h4
          className={cn(
            `${
              heading.length > 40 ? "text-sm" : " text-base md:text-xl"
            } font-bold uppercase md:text-2xl w-[90%]`
          )}
        >
          {heading}
        </h4>
        <p className={cn(`leading-[24px] lg:leading-[26px]`)}>{paragraph}</p>
      </div>

      <span className="uppercase  text-sm md:text-base font-bold">
        Readmore
      </span>
    </li>
  );
};

export default Service;
