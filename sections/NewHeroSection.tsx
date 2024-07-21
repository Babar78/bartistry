"use client";
import React from "react";
import heroImage from "../public/images/bartistry-hero.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { IconCloudDown } from "@tabler/icons-react";
const words = [
  {
    text: "Full",
    className:
      "md:text-5xl text-3xl lg:text-[3.5rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 relative z-20",
  },
  {
    text: "Stack",
    className:
      "md:text-5xl text-3xl lg:text-[3.5rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 relative z-20",
  },
  {
    text: "Developer",
    className:
      "md:text-5xl text-3xl lg:text-[3.5rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 relative z-20",
  },
];

const NewHeroSection = () => {
  const handleDownloadResume = () => {
    console.log("Download Resume");
  };
  return (
    <section className="relative h-screen w-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className={cn("absolute h-full w-screen inset-0")}
      >
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </motion.div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="flex gap-[10px] items-center border-[1.5px] border-[rgba(255,255,255,0.15)] px-2 py-1 rounded-full text-[14px] text-white w-fit mx-auto z-10">
          <div className="bg-indigo-500 w-[10px] h-[10px] rounded-full"></div>
          <span>Open to Work</span>
        </div>
        <div className="content mt-5">
          <h1 className="text-2xl lg:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 relative z-20">
            I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-sky-500">
              Muhammad Babar,
            </span>
            <TypewriterEffectSmooth words={words} />
          </h1>
        </div>
        <div className="my-5">
          <p className="text-center text-gray-300 relative z-20">
            Crafting seamless digital experiences through innovative design and
            efficient code.
          </p>
        </div>
        <CustomButton
          id="resume-download"
          label="Download Resume"
          roundedFull={true}
          withIcon={true}
          icon={<IconCloudDown />}
          onClick={handleDownloadResume}
        />
      </div>
    </section>
  );
};

export default NewHeroSection;
