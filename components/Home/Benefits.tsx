import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "../ui/button";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const BenefitsList = [
  "Get to start 2024 around what works for you",
  "Opportunity to build something for yourself that makes a difference",
  "Get to build a business blueprint to setup your venture/ business",
  "Its digital so you can take the challenge and build wherever you are in the world",
];

export default function Benefits() {
  return (
    <div className=" bg-[#EEE] h-[80vh] py-20">
      <div className="px-48 ">
        <div className="w-full flex  items-center my-10 px-5">
          <hr className="w-full border border-black" />
          <div
            className={`${poppins.className} px-5 text-xl text-center w-[50vw]`}
          >
            Features and Benefits
          </div>
          <hr className="w-full border border-black" />
        </div>

        <div className=" grid grid-cols-5 items-center gap-5">
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
                  <Bullet />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <Image
              src={"/assets/images/vav2.png"}
              alt={"vav benefits"}
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Bullet() {
  return (
    <div className="flex justify-center items-center border-2 border-[#0038FF] rounded-full bg-transparent w-6 h-6">
      <div className="  rounded-full bg-[#0038FF] w-3 h-3" />
    </div>
  );
}
