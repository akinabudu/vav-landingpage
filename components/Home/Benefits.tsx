import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";

const parentVariant: Variants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.5 },
  },
};

const childrenVariant: Variants = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
};
const childrenVariant2: Variants = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
};
const childrenVariantHeader: Variants = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
};

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const BenefitsList = [
  "Get to start 2024 around what works for you",
  "Opportunity to build something for yourself that makes a difference",
  "Get to build a business blueprint to setup your venture/ business",
  "Its digital so you can take the challenge and build wherever you are in the world",
];

export default function Benefits() {
  return (
    <section id="benefits" className=" bg-[#EEE]/90 md:h-[90vh] h-full py-20 w-full       ">
      <motion.div
        variants={parentVariant}
        initial="initial"
        whileInView={"whileInView"}
        className=" px-5 md:px-48 "
      >
        <motion.div
          variants={childrenVariantHeader}
          className="w-full flex  items-center my-10 px-5"
        >
          <hr className="w-full border border-black" />
          <div
            className={`${poppins.className} px-5 text-md md:text-3xl text-[#0038FF] font-extrabold text-center md:w-[70vw] w-full uppercase`}
          >
            Features and Benefits
          </div>
          <hr className="w-full border border-black" />
        </motion.div>

        <motion.div
          variants={childrenVariant2}
          className=" grid grid-cols-1 md:grid-cols-5 items-center gap-5"
        >
          <div className=" grid-flow-row col-span-3 gap-2  px-5">
            <div className={`${poppins.className} font-extrabold text-xl `}>
              List of Benefits
            </div>
            <div className={`${poppins.className}  `}>
              {BenefitsList.map((benefit, key) => (
                <div
                  className={
                    "flex justify-start items-center gap-2 my-5 text-[#5B5B5B] text-[18px]"
                  }
                  key={key}
                >
                  <div className="w-1/12">
                    <Bullet />
                  </div>
                  <div className="w-11/12">{benefit}</div>
                </div>
              ))}
            </div>
          </div>
          <motion.div variants={childrenVariant} className="md:col-span-2">
            <Image
              src={"/assets/images/vav2.png"}
              alt={"vav benefits"}
              height={400}
              width={400}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Bullet() {
  return (
    <div className="flex justify-center items-center border-2 border-[#0038FF] rounded-full bg-transparent w-3 md:w-4 h-3 md:h-4">
      <div className="  rounded-full bg-[#0038FF] w-1 md:w-2 h-1 md:h-2" />
    </div>
  );
}
