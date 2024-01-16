import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {  poppinsDesc, poppinsHeader } from "../Fonts";

export default function Hero() {
  return (
    <div className={`${poppinsHeader.className} flex justify-start items-center`}>
      <div className="w-3/5 flex flex-col gap-4 text-main justify-center items-start my-28">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-extrabold text-3xl md:text-5xl text-left tracking-tight leading-[1.5rem] md:leading-[3.5rem] uppercase"
        >
          Empowering <br />
          Communities with <br />
          Digital Solutions
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`${poppinsDesc.className} text-text text-left md:w-[50vw] my-6 font-semibold text-md`}
        >
          Digifix is a technology company dedicated to empowering communities through custom digital solutions. We provide training and social sponsorship to help communities build their own digital products and solve local issues.
        </motion.div>
        <Button className="uppercase text-sm font-bold py-10 px-10 rounded-3xl text-white">
          Learn More{" "}
        </Button>
      </div>
      <div className="flex w-2/5"></div> 
    </div>
  );
}
