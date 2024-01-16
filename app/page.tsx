"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Home/Hero";
import Video from "@/components/Home/Video";
import SignUp from "@/components/Home/SignUp";
import ParticlesPage from "@/components/Home/Particles";
import Vision from "@/components/Home/Vision";
import WhyWeDoIt from "@/components/Home/WhyWeDoIt";
import Process from "@/components/Home/Process";
import { Discoveries } from "@/components/Home/Discoveries";

export default function Home() {
  

  return (
    <>
      <NavBar />
      <Hero />
      <Vision/>
      <WhyWeDoIt/>
      <Process/>
      <Discoveries/>
      
      {/* <ParticlesPage /> */}
    </>
  );
}
