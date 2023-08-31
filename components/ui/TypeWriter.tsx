"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
type Props = {};

const TypeWriter = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `TRANSACTION COMMUNICATIONS PROXY SOLICITATION INVESTOR RELATIONS `,
      "CORPORATE(RE) POSITIONING CEO COMMUNICATIONS LITIGATION COMMUNICATIONS",
      "CRISIS & RISK COMMUNICATIONS MEDIARELATIONS ADVOCACY & GRASSROOTS ",
      "TRANSACTION COMMUNICATIONS PROXY SOLICITATION INVESTOR RELATIONS ",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 0,
  });
  return (
    <motion.div
      className=""
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="uppercase font-black text-2xl lg:text-4xl">
        {text}
        <Cursor cursorColor="red" />
      </span>
    </motion.div>
  );
};

export default TypeWriter;
