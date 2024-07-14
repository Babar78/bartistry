"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import CustomButton from "@/components/CustomButton";
import { IconCloudDown } from "@tabler/icons-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },
  {
    text: "Aceternity.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const HeroSection = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md relative">
        <div className="flex gap-[10px] items-center border-[1.5px] border-[rgba(255,255,255,0.15)] px-2 py-1 rounded-full text-[14px] text-white">
          <div className="bg-indigo-500 w-[10px] h-[10px] rounded-full"></div>
          <span>Open to Work</span>
        </div>
        <div className="content mt-5">
          <h1 className="md:text-xl text-md lg:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 relative z-20">
            I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-sky-500">
              Muhammad Babar,
            </span>{" "}
            <br />
            <span className="md:text-3xl text-lg lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 relative z-20">
              Full Stack Developer
            </span>
          </h1>
        </div>
        <div className="mt-5">
          <span className="text-center text-gray-400 relative z-20">
            Crafting seamless digital experiences through innovative design and
            efficient code.
          </span>
        </div>
        <div className="w-[40rem] h-40 relative z-10 mt-3 mb-5">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <CustomButton
          id="resume-download"
          label="Download Resume"
          roundedFull={true}
          withIcon={true}
          icon={<IconCloudDown />}
          onClick={() => alert("Download Resume")}
        />
      </div>
    </section>
  );
};

export default HeroSection;
