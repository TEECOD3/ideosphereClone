"use client";
import React from "react";
import Logo from "./logo";
import Hamburger from "./ui/Hamburger";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HamburgerNav from "./HamburgeNav ";
import { cn } from "@/lib/utils";

type Props = {};

const Header = (props: Props) => {
  const [bar, setbar] = useState<boolean>(false);

  return (
    <header
      className={`${
        bar ? "bg-[#1B252E]" : "bg-white"
      } py-8 flex justify-between items-center z-[500] transition-all duration-500`}
    >
      <AnimatePresence>
        {bar && <HamburgerNav hideModalHandler={setbar} barstate={bar} />}
      </AnimatePresence>
      <div className="z-[500]">
        <Logo barstate={bar} />
      </div>

      <div className="">
        <Hamburger barstate={bar} barfunction={setbar} className={`z-[8000]`} />
      </div>
      <div
        className={cn(
          `${
            bar ? "text-white" : "text-black"
          } hidden md:block uppercase text-sm md:text-base font-extrabold z-[500] transition-colors duration-1000`
        )}
      >
        contact us
      </div>
    </header>
  );
};

export default Header;
