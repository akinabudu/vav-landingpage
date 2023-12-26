import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="grid grid-flow-row gap-4 text-white container justify-items-center my-28">
      <div className="font-extrabold text-5xl text-center tracking-tight leading-[3.5rem]">
        100 AFRICAN DIGITAL <br /> ENTREPRENEUR CHALLENGE
      </div>
      <div className="text-center w-[50vw] my-6 font-semibold">
        Calling all Africans around the world! Are you a professional, an
        ideator, an innovator, and a self-believer yearning to launch your own
        enterprise? Are you ready to start building your dream business in the
        digital space? The journey begins now!
      </div>
      <Button className="uppercase text-xl font-bold py-10 px-10 rounded-xl">
        What is this about?
      </Button>
    </div>
  );
}
