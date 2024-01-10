import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Provider from "./provider";
// import ParticlesPage from '@/components/Home/Confetti'


export const metadata: Metadata = {
  title: "VAV",
  description: "100 AFRICAN DIGITAL ENTREPRENEUR CHALLENGE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Provider>{children}</Provider>
        {/* <Toaster />  */}
      </body>
    </html>
  );
}
