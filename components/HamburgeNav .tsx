import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Hamburger from "./ui/Hamburger";
import Link from "next/link";

interface MobileNavProps {
  hideModalHandler: (barstate: boolean) => void;
  barstate: boolean;
}

const HamburgerNav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler, barstate } = props;

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        delay: 0.2,
      },
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 botton-0 overflow-hidden flex items-center text-white text-4xl justify-center h-screen w-screen bg-[#1B252E] z-[400] text-center"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit="exit"
      >
        {/* <Hamburger barfunction={hideModalHandler} barstate={barstate} /> */}

        <ul className=" flex flex-col gap-y-6 px-2 py-10 uppercase font-black underline underline-offset-8 ">
          <Link href="/">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              About IDeOSPHERE
            </motion.li>
          </Link>
          <Link href="/">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              service overview
            </motion.li>
          </Link>
          <Link href="/">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              resident expert
            </motion.li>
          </Link>
          <Link href="/">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              delivery history
            </motion.li>
          </Link>
          <Link href="/">
            <motion.li
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => {
                hideModalHandler(!barstate);
              }}
            >
              strategic insights
            </motion.li>
          </Link>
        </ul>
      </motion.div>
    </>
  );
};

export default HamburgerNav;
