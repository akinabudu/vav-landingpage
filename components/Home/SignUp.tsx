import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="h-full md:h-[70vh] w-full flex flex-col justify-center items-center text-white py-20 px-5 md:px-48 gap-10">
      <div className="text-2xl md:text-4xl font-extrabold uppercase">Sign up for the challenge</div>
      <div className="text-[14px] md:text-[20px] md:w-[40vw] text-center">
        Ready to unleash your inner lion? Join the 100 African Digital
        Entrepreneur Challenge today!
      </div>
      <Button size={"lg"} className="rounded-full text-lg font-bold">
        <Link
        href={"https://forms.gle/g8rXyWkMRBL2AJP7A"} 
        target="_blank"
        >
        SIGN UP
        </Link>
        
        </Button>
    </div>
  );
}
