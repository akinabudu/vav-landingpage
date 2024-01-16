import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full grid grid-flow-row gap-4 text-white container justify-items-center justify-center my-28">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="font-extrabold text-3xl md:text-5xl text-center tracking-tight leading-[1.5rem] md:leading-[3.5rem]"
      >
        100 AFRICAN DIGITAL <br /> ENTREPRENEUR CHALLENGE
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay:0.5, duration: 0.5 }}
      className="text-center md:w-[50vw] my-6 font-semibold">
        Calling all Africans around the world! Are you a professional, an
        ideator, an innovator, and a self-believer yearning to launch your own
        enterprise? Are you ready to start building your dream business in the
        digital space? The journey begins now!
      </motion.div>
      <Button className="uppercase text-xl font-bold py-10 px-10 rounded-xl">
        What is this about?
      </Button>
    </div>
  );
}
