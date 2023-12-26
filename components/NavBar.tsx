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
    <div className="w-full bg-transparent grid grid-flow-col gap-4 text-white items-center mt-10  justify-items-center justify-center">
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
  );
}
