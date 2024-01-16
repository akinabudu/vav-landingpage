import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { poppins } from "./Fonts";


const NavMenuItems = [
  { title: "Home", link: "/" },
  { title: "Vision", link: "/vision" },
  { title: "Process", link: "/process" },
  { title: "Projects", link: "/projects" },
  { title: "Get Involved", link: "/getinvolved" },
  { title: "Contact", link: "/contact" },

];

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=" flex justify-between items-center mt-10 gap-10 w-full">
      <Link href={"/"} className=" flex items-center md:w-[20%] gap-3">
        <Image
          src={"/assets/images/logo.svg"}
          alt={"logo"}
          width={50}
          height={50}
        />
        <div className={`${poppins.className} text-3xl text-text`}>Digifix</div>
      </Link>
      <div className={`${poppins.className} w-full md:w-[60%] flex gap-1 md:gap-2 text-text items-center  md:text-md  text-[11px] justify-between`}>
        {NavMenuItems.map((item, key) => (
          <Link
            href={item.link}
            key={key}
            className={`${
              pathname === item.link && "text-text font-bold"
            }`}
          >
            {item.title}
          </Link>
        ))}

        <div className=" flex justify-center items-center rounded-md px-4 py-2 ml-8 border border-main text-main">Enquiry</div>
      </div>
    </div>
  );
}
