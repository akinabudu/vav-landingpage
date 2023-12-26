import React from "react";
import { Button } from "../ui/button";

export default function SignUp() {
  return (
    <div className="h-[70vh] w-full flex flex-col justify-center items-center text-white py-20 px-48 gap-10">
      <div className="text-4xl font-extrabold uppercase">Sign up for the challenge</div>
      <div className="text-[20px] w-[40vw] text-center">
        Ready to unleash your inner lion? Join the 100 African Digital
        Entrepreneur Challenge today!
      </div>
      <Button size={"lg"} className="rounded-full text-lg font-bold">SIGN UP</Button>
    </div>
  );
}
