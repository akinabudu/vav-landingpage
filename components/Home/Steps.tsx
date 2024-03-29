import React from "react";
import { GrMap, GrLike } from "react-icons/gr";
import { RiUserReceived2Line } from "react-icons/ri";
import { TbWorldSearch } from "react-icons/tb";
import { PiHandPointingBold } from "react-icons/pi";
import { Poppins } from "next/font/google";
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
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

const StepsList = [
  {
    icon: <GrMap size={50} />,
    step: "01 STEP",
    color: "bg-[#E6B938]",
    title: "Sign up for the Challenge",
    content: "It's quick, easy, and free!",
  },
  {
    icon: <RiUserReceived2Line size={50} />,
    step: "02 STEP",
    color: "bg-[#5FBBC5]",
    title: "Receive Your Welcome Kit",
    content:
      "Gain instant access to valuable resources and exclusive community forums access.",
  },
  {
    icon: <TbWorldSearch size={50} />,
    step: "03 STEP",
    color: "bg-[#9C246E]",
    title: "Engage and Learn",
    content:
      "Participate in workshops and start building your entrepreneurial foundation.",
  },
  {
    icon: <GrLike size={50} />,
    step: "04 STEP",
    color: "bg-[#098581]",
    title: "VISUAL",
    content:
      "Take the exercises given and create a short journal on your progress",
  },
  {
    icon: <PiHandPointingBold size={50} />,
    step: "05 STEP",
    color: "bg-[#E6B938]",
    title: "forecast",
    content:
      "Share your final result as a story to use on social media by tagging us in your journey .",
  },
];

export default function Steps() {
  return (
    <section id="works" className="flex flex-col items-center py-10 justify-center md:px-5 w-full ">
      <div className="text-white text-4xl font-bold my-5">STEPS TO TAKE</div>
      <div className="h-fit p-10 px-5 md:px-20 bg-[#EEE]/90 w-full md:w-[60vw] md:rounded-3xl">
        {StepsList.map((step, key) => (
          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView={"whileInView"}
            key={key}
            className="flex flex-col md:flex-row -gap-20 my-10 group md:odd:justify-start md:even:justify-end"
          >
            <motion.div
              variants={childrenVariant2}
              className="md:group-odd:order-1 md:group-even:order-2 flex flex-col  justify-center items-center border-4 border-black rounded-full md:py-12 w-full md:w-[13vw] my-2 py-2"
            >
              <div>{step.icon}</div>
              <div className=" text-[22px] font-bold">{step.step}</div>
            </motion.div>
            <motion.div
              variants={childrenVariant}
              className="md:group-odd:order-2 md:group-even:order-1  flex flex-col justify-center w-fit items-center"
            >
              <div
                className={`${poppins.className} ${step.color} uppercase px-5 md:px-10 py-2 rounded-lg w-fit mb-1 text-[18px] md:text-[22px] `}
              >
                {step.title}
              </div>
              <div className=" w-[2px] h-[24px] bg-black " />

              <div
                className={`${poppins.className} text-[16px] w-full md:w-[20vw] mt-1 text-center`}
              >
                {step.content}
              </div>
            </motion.div>
          </motion.div>
        ))}

        <div
          className={`${poppins.className} text-[16px] w-full my-4 text-center`}
        >
          We would review all stories we are tagged and we will be building a
          free custom made landing page for the participant with the most
          exciting and interesting project and an awesome WHY do it statement.
        </div>
        <div
          className={`${poppins.className} text-[16px] w-full my-4 text-center`}
        >
          Add hashtag <strong>#1000AfricanEntrepreneurchallenge</strong> to your
          story post so that we can see what you done also you add tag the
          account <strong>1000Africanchallenge</strong> on Instagram.
        </div>
      </div>
    </section>
  );
}
