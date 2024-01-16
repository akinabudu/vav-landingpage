import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Provider from "./provider";
import Image from "next/image";
// import ParticlesPage from '@/components/Home/Confetti'

export const metadata: Metadata = {
  title: "Digifix",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white w-full antialiased overflow-x-hidden relative">
        <Image
          src="/assets/bg/ellipse1_1.svg"
          className="absolute top-0 right-0 z-0"
          alt="logo"
          width={599}
          height={599}
        />
        <Image
          src="/assets/bg/ellipse1_2.svg"
          className="absolute top-0 right-0 z-10"
          alt="logo"
          width={480}
          height={480}
        />

        <Image
          src="/assets/bg/ellipse2_1.svg"
          className="absolute top-[125vh] left-0 z-0"
          alt="logo"
          width={299}
          height={299}
        />
        <Image
          src="/assets/bg/ellipse2_2.svg"
          className="absolute top-[125vh] left-0 z-10"
          alt="logo"
          width={180}
          height={180}
        />
        <Provider>{children}</Provider>
        {/* <Toaster />  */}
      </body>
    </html>
  );
}
