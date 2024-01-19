import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { motion, Variants } from "framer-motion";

const poppins = Poppins({ weight: "800", subsets: ["latin"] });
const poppins2 = Poppins({ weight: "500", subsets: ["latin"] });

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

export default function Unlock() {
  return (
    <section id="about" className=" bg-[#EEE]/90 md:h-[100vh] h-full  py-5 md:py-20 w-full">
      <motion.div
        variants={parentVariant}
        initial="initial"
        whileInView={"whileInView"}
        className="px-5 md:px-48 grid grid-cols-1 md:grid-cols-5  items-center"
      >
        <motion.div
          variants={childrenVariant2}
          className="order-2 md:order-1 grid  grid-flow-row md:col-span-3  justify-start px-5 gap-10"
        >
          <strong
            className={`${poppins.className} font-extrabold md:text-5xl text-2xl md:leading-[3.5rem] leading-[2.5rem]`}
          >
            Unlocking Your
            <br /> Digital
            <br /> Entrepreneurial
            <br /> Potential
          </strong>
          <div
            className={`${poppins2.className} leading-[25.65px] text-[#5B5B5B] text-[18px]`}
          >
            Build what matters to you into an enterprise, conquer the web!
            African&apos;s digital revolution is here, and you're at the helm.
            Join the 100 African DE Challenge and turn your ideas into
            game-changing ventures. Apply now! #DigitalAfrica
          </div>
          <Button size={"lg"} className="md:w-[15vw] w-full py-10 px-5 text-xl">
            Tell me More
          </Button>
        </motion.div>
        <motion.div
          variants={childrenVariant}
          className="order-1 md:order-2 md:col-span-2 rounded-full border-b"
        >
          <Image
            src={"/assets/images/vav6.png"}
            alt={"vav unlock"}
            height={900}
            width={900}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
