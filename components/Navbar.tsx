"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TextRotate from "./ui/text-rotate";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = ({ className }: { className?: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const navItemControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
        controls.start({
          width: "fit-content",
          transition: { duration: 0.5 },
          backgroundColor: "black",
          border: " 2px solid rgba(255,255,255,0.15)",
        });
        navItemControls.start({
          scale: 0.9,
          transition: { duration: 0.5 },
        });
      } else {
        setScrolled(false);
        controls.start({
          width: "100%",
          transition: { duration: 0.5 },
          backgroundColor: "transparent",
          border: "none",
        });
        navItemControls.start({ scale: 1 });
      }
    };

    // Check initial scroll position and set state accordingly
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ width: "100%" }}
      className={cn(
        "fixed top-10 inset-x-0 z-50 flex justify-between items-center mx-auto max-w-[1240px] gap-12 !box-content px-4 py-2 rounded-full bg-black",
        className
      )}
    >
      <Image
        src={require("@/public/images/logo/logo-Large.png")}
        alt="logo"
        width={100}
        height={100}
        style={{ width: "auto", height: "auto" }}
      />
      <motion.div
        className="flex items-center justify-center space-x-5"
        animate={navItemControls}
        initial={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item, index) => (
          <Link key={index} href={item.link} className="hover:opacity-80">
            <span className="hidden sm:block text-sm">{item.name}</span>
          </Link>
        ))}
      </motion.div>
      <motion.div className="flex gap-2 items-center">
        <div className="text-right">
          <p className="text-[12px]">Muhammad Babar</p>
          <div className="">
            <TextRotate
              words={["Software Devloper", "Web Developer"]}
              className="text-gray-300 text-[12px] whitespace-nowrap"
            />
          </div>
        </div>
        <div className="rounded-full w-[50px] h-[50px] border-2 border-[rgba(255,255,255,0.15)] overflow-clip p-[5px]">
          <Image
            src={require("@/public/images/heroPic-updated.png")}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full w-auto h-auto"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
