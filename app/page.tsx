"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Home/Hero";
import Unlock from "@/components/Home/Unlock";
import Video from "@/components/Home/Video";
import Benefits from "@/components/Home/Benefits";
import Steps from "@/components/Home/Steps";
import Organisers from "@/components/Home/Organisers";
import SignUp from "@/components/Home/SignUp";
import ParticlesPage from "@/components/Home/Particles";

export default function Home() {
  

  return (
    <>
      <NavBar />
      <Hero />
      <Unlock />
      <Video />
      <Benefits />
      <Steps />
      <Organisers />
      <SignUp />
      <ParticlesPage />
    </>
  );
}
