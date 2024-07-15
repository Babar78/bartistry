"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import CustomButton from "@/components/CustomButton";
import { IconCloudDown } from "@tabler/icons-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import LogosCarousel from "@/components/LogosCarousel";

// Importing Logos
import htmlLogo from "@/public/images/tech-logos/html.svg";
import cssLogo from "@/public/images/tech-logos/css.png";
import jsLogo from "@/public/images/tech-logos/js.svg";
import tsLogo from "@/public/images/tech-logos/ts.svg";
import reactLogo from "@/public/images/tech-logos/react.svg";
import nextLogo from "@/public/images/tech-logos/nextjs.svg";
import mongoLogo from "@/public/images/tech-logos/mongodb.svg";
import expressLogo from "@/public/images/tech-logos/express.svg";
import nodeLogo from "@/public/images/tech-logos/nodejs.svg";
import reduxLogo from "@/public/images/tech-logos/redux.svg";
import chartJsLogo from "@/public/images/tech-logos/chartjs.svg";
import dartLogo from "@/public/images/tech-logos/dart.svg";
import framerMotionLogo from "@/public/images/tech-logos/framermotion.png";
import mondayLogo from "@/public/images/tech-logos/mondaycom.svg";
import muiLogo from "@/public/images/tech-logos/mui.svg";

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

const techLogos = [
  { src: htmlLogo, altText: "HTML" },
  {
    src: cssLogo,
    altText: "CSS",
  },
  {
    src: jsLogo,
    altText: "JavaScript",
  },
  {
    src: tsLogo,
    altText: "TypeScript",
  },
  {
    src: reactLogo,
    altText: "React",
  },
  {
    src: nextLogo,
    altText: "Next.js",
  },
  {
    src: framerMotionLogo,
    altText: "Framer Motion",
  },
  {
    src: mongoLogo,
    altText: "MongoDB",
  },
  {
    src: expressLogo,
    altText: "Express",
  },
  {
    src: nodeLogo,
    altText: "Node.js",
  },
  {
    src: reduxLogo,
    altText: "Redux Toolkit",
  },
  {
    src: dartLogo,
    altText: "Dart",
  },
  {
    src: muiLogo,
    altText: "Material-UI",
  },
  {
    src: chartJsLogo,
    altText: "Chart.js",
  },

  {
    src: mondayLogo,
    altText: "Monday.com",
  },
];

const handleDownloadResume = () => {
  console.log("Download Resume");
};

const HeroSection = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col justify-center items-center max-w-[1240px] mx-auto relative">
      <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md relative">
        <div className="flex gap-[10px] items-center border-[1.5px] border-[rgba(255,255,255,0.15)] px-2 py-1 rounded-full text-[14px] text-white">
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
        <div className="mt-5">
          <p className="text-center text-gray-300 relative z-20">
            Crafting seamless digital experiences through innovative design and
            efficient code.
          </p>
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
          onClick={handleDownloadResume}
        />
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-[1240px] flex justify-center">
        <LogosCarousel items={techLogos} speed="normal" />
      </div>
    </section>
  );
};

export default HeroSection;
