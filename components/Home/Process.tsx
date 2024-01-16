import Image from "next/image";
import React from "react";
import { poppins, poppinsDesc, poppinsHeader } from "../Fonts";

const processItems = [
  {
    icon: "discover",
    title: "Discover",
    description:
      "Explore the digital online space to find community issues shared.",
  },
  {
    icon: "analyze",
    title: "Analyze",
    description: "Create problem statements and potential digital solutions.",
  },
  {
    icon: "discover",
    title: "Engage",
    description: "Share findings, seeking sponsorship or collaboration.",
  },
  {
    icon: "build",
    title: "Build",
    description: "Development groups create digital solutions.",
  },
  {
    icon: "deliver",
    title: "Deliver",
    description: "Handover solutions to stakeholders and beneficiaries.",
  },
  {
    icon: "sustain",
    title: "Sustain",
    description: "Work with beneficiaries for maintenance and sustainability.",
  },
];

export default function Process() {
  return (
    <div className="md:h-[90vh] my-10 relative ">
      <Image
        className="absolute z-0"
        src={"/assets/bg/process.svg"}
        alt={"process"}
        width={900}
        height={400}
      />
      <div className="absolute z-10 flex flex-col items-start justify-center w-full gap-10 py-10 px-10">
        <div className={`${poppinsHeader.className} text-3xl text-main`}>
          Our Process
        </div>
        <div className={`${poppins.className} text-text leading-[2rem]`}>
          The entire cycle of digital transformation effortlessly handled for
          you.
        </div>

        <div className="grid grid-cols-3 gap-10 w-full h-full my-5">
          {processItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start justify-start gap-3"
            >
              <Image
                src={`/assets/process/${item.icon}.svg`}
                alt={item.title}
                width={50}
                height={50}
              />
              <div className={`${poppins.className} text-xl text-text font-bold`}>
                {item.title}
              </div>
              <div
                className={`${poppinsDesc.className} text-sm text-text leading-[1rem] w-[70%]`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
