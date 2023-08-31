"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="h-[100vh] md:h-[70vh] bg-[#1B252E] py-10 ">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col px-5 md:px-20 text-white gap-y-48  items-center justify-between "
      >
        <div className="flex flex-col w-full items-center justify-center gap-y-10">
          <div className="w-full flex items-start  md:items-center justify-center flex-col">
            <h3 className="uppercase text-[10px] lg:text-base font-bold">
              please click the link so we can start talking
            </h3>
            <div className="h-[2px] w-full md:w-7/12 bg-white mt-3"></div>
          </div>

          <div className=" w-full gap-y-10 font-bold md:w-[90%] md:mx-auto flex flex-col md:flex-row justify-between md:items-start  md:text-center">
            <div className="flex flex-col lg:items-center lg:justify-center text-sm text-left lg:text-center">
              <span>+234 291 0050 </span> <span>OFFICE@THECORPORATION.XYZ</span>
            </div>
            <div className="text-sm flex md:text-center md:-ml-28 font-bold">
              8 IBM HARUNA STREET <br /> UTAKO DISTRICT <br /> ABUJA
            </div>
            <ul className="uppercase text-sm lg:text-base">
              <li>facebook</li>
              <li>linkdin</li>
              <li>instagram</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[90%] font-bold  mx-auto flex flex-col md:flex-row w-full text-sm lg:text-base justify-between uppercase">
          <div className="">© 2023 IDEOSPHERE LIMITED</div>
          <div className="md:-ml-28">privacy</div>
          <div className="">credits</div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
