import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "800", subsets: ["latin"] });
const poppins2 = Poppins({ weight: "500", subsets: ["latin"] });

export default function Unlock() {
  return (
    <div className=" bg-[#EEE] h-[70vh] py-20">
      <div className="px-48 grid grid-cols-5 gap-5 items-center">
        <div className="grid grid-flow-row col-span-3 gap-6  justify-start px-5">
          <strong
            className={`${poppins.className} font-extrabold text-5xl leading-[3.5rem]`}
          >
            Unlocking Your
            <br /> Digital
            <br /> Entrepreneurial
            <br /> Potential
          </strong>
          <div className={`${poppins2.className} leading-[25.65px] text-[#5B5B5B] text-[18px]`}>
            Build what matters to you into an enterprise, conquer the web!
            African&apos;s digital revolution is here, and you're at the helm.
            Join the 100 African DE Challenge and turn your ideas into
            game-changing ventures. Apply now! #DigitalAfrica
          </div>
          <Button size={"lg"} className="w-[15vw] py-10 px-5 text-xl">Tell me More</Button>
        </div>
        <div className="col-span-2">
          <Image
            src={"/assets/images/vav3.png"}
            alt={"vav unlock"}
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
