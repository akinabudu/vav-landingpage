import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const NavMenuItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "How it Works", link: "/works" },
  { title: "Benefits", link: "/benefits" },
  { title: "Features", link: "/features" },
];

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
<div className="w-full flex justify-center">

    <div className="w-full md:w-[60vw] bg-transparent grid grid-cols-5 gap-1 md:gap-2 text-white items-center mt-10 md:text-lg  text-[11px] justify-items-center justify-around px-5 md:px-20">
      {NavMenuItems.map((item, key) => (
        <Link
          href={item.link}
          key={key}
          className={`${pathname === item.link && "text-[#0038FF] font-bold"}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
</div>
  );
}
