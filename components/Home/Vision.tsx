import Image from "next/image";
import React from "react";
import { poppins, poppinsDesc, poppinsHeader } from "../Fonts";

export default function Vision() {
  return (
    <div className="flex justify-center items-center h-[60vh] my-10">
      <div className="w-2/5">
        <Image
          src={"/assets/images/vision.png"}
          alt={"vision"}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-start justify-center w-3/5 gap-5">
        <div className={`${poppinsHeader.className} text-3xl text-main`}>
          Our Vision
        </div>
        <div className={`${poppins.className} text-text`}>
          Engaging communities, identifying challenges, and transforming them
          through digital solutions.
        </div>

        <div className={`${poppinsDesc.className} text-text leading-[2rem]`}>
          Digifix is envisioned to equip individuals with essential digital
          skills, enabling them to create impactful minimum viable products that
          contribute to sustainable solutions within their communities.
        </div>
      </div>
    </div>
  );
}
