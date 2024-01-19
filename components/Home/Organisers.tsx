import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
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

const poppins = Poppins({ weight: "700", subsets: ["latin"] });
const poppins2 = Poppins({ weight: "500", subsets: ["latin"] });

const organisersList = [
  {
    no: 1,
    title: "Resource Hub:",
    content:
      "Access a rich repository of resources, from business guides to tech tools, curated to elevate your entrepreneurial skills.",
  },
  {
    no: 2,
    title: "Tech Talents On-Demand:",
    content:
      "Connect with a pool of tech talents ready to bring your digital ideas to life. Your vision, their expertise.",
  },
  {
    no: 3,
    title: "Vibrant Community:",
    content:
      "Become part of a vibrant community of like-minded individuals, fostering collaboration, idea exchange, and collective growth.",
  },
  {
    no: 4,
    title: "Network Expansion:",
    content:
      "Expand your network exponentially with access to mentors, industry experts, and fellow entrepreneurs across diverse sectors.",
  },
  {
    no: 5,
    title: "Strategic Guidance:",
    content:
      "Receive personalised strategic guidance to navigate challenges and seize opportunities, ensuring your venture's success.",
  },
  {
    no: 6,
    title: "All-Round Support:",
    content:
      "Benefit from comprehensive support, including funding insights, skill-building workshops, and continuous mentorship.",
  },
];

export default function Organisers() {
  return (
    <motion.section  id="who"
      variants={parentVariant}
      initial="initial"
      whileInView={"whileInView"}
      className={` flex flex-col justify-start items-center bg-[#EEE]/90 w-full h-full md:h-[110vh] px-5 py-5 md:py-20`}
    >
      <motion.div
        variants={childrenVariantHeader}
        className={`${poppins.className} text-[#0038FF] text-2xl md:text-4xl font-bold text-center mb-6`}
      >
        WHO THE ORGANISERS ARE
      </motion.div>
      <motion.div
        variants={childrenVariantHeader}
        className={`${poppins2.className} w-full md:w-[50vw] text-center text-[#121212] place-self-center`}
      >
        The 100 African Digital Entrepreneur challenge is an initiative built by{" "}
        <strong>Valued African Ventures</strong>. A tribe totally dedicated to
        helping Africans all around the globe to build enterprise based on who
        they are by providing access to all needed information, resources,
        tools, network and funding.
      </motion.div>
      <div className=" grid grid-cols-1 md:grid-cols-5 items-center gap-5 mt-8">
        <motion.div variants={childrenVariant2} className="md:col-span-2">
          <Image
            src={"/assets/images/vav4.png"}
            alt={"vav benefits"}
            height={600}
            width={600}
          />
        </motion.div>
        <div className="grid  md:grid-flow-col md:grid-rows-3 md:col-span-3 gap-2 w-full ">
          {organisersList.map((organ, key) => (
            <motion.div
              variants={childrenVariant}
              className={
                "flex flex-col justify-center items-start gap-2 my-2 text-[#5B5B5B] text-[18px] w-full"
              }
              key={key}
            >
              <div className={`${poppins2.className} flex items-center gap-2 `}>
                {Bullet(organ.no)}
                <motion.div
                  variants={childrenVariant2}
                  className="font-bold text-[17px]"
                >
                  {organ.title}
                </motion.div>
              </div>
              <motion.div
                variants={childrenVariant}
                className=" text-[14px] text-[#121212]"
              >
                {organ.content}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export function Bullet(no: number) {
  return (
    <div className="flex justify-center items-center border-2 border-[#0038FF] rounded-full bg-transparent w-10 h-10 font-bold">
      {no}
    </div>
  );
}
