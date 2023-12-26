import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

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
    <div
      className={` flex flex-col justify-start items-center bg-[#EEE] w-full h-[90vh] py-20`}
    >
      <div
        className={`${poppins.className} text-[#0038FF] text-4xl font-bold text-center mb-6`}
      >
        WHO THE ORGANISERS ARE
      </div>
      <div
        className={`${poppins2.className} w-[50vw] text-center text-[#121212] place-self-center`}
      >
        The 100 African Digital Entrepreneur challenge is an initiative built by{" "}
        <strong>Valued African Ventures</strong>. A tribe totally dedicated to
        helping Africans all around the globe to build enterprise based on who
        they are by providing access to all needed information, resources,
        tools, network and funding.
      </div>
      <div className=" grid grid-cols-5 items-center gap-5 mt-8">
        <div className="col-span-2">
          <Image
            src={"/assets/images/vav1.png"}
            alt={"vav benefits"}
            height={600}
            width={600}
          />
        </div>
        <div className="grid grid-flow-col grid-rows-3 col-span-3 gap-2  ">
          {organisersList.map((organ, key) => (
            <div
              className={
                "flex flex-col justify-center items-start gap-2 my-2 text-[#5B5B5B] text-[18px]"
              }
              key={key}
            >
              <div className={`${poppins2.className} flex items-center gap-2 `}>
                {Bullet(organ.no)}
                <div className="font-bold text-[17px]">{organ.title}</div>
              </div>
              <div className=" text-[14px] text-[#121212]">{organ.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Bullet(no: number) {
  return (
    <div className="flex justify-center items-center border-2 border-[#0038FF] rounded-full bg-transparent w-10 h-10 font-bold">
      {no}
    </div>
  );
}
