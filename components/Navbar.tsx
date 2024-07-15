"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TextRotate from "./ui/text-rotate";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const Navbar = ({ className }: { className?: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const navItemControls = useAnimation();

  //   Toggle Nabar on Mobile Version
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        if (window.scrollY > 20) {
          setScrolled(true);
          controls.start({
            width: "fit-content",
            transition: { duration: 0.5 },
            border: "2px solid rgba(255,255,255,0.15)",
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
      }
    };
    // Check initial scroll position and set state accordingly
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, window.innerWidth]);

  return (
    <motion.nav
      animate={controls}
      initial={{ width: `100%` }}
      className={cn(
        "navbar relative w-full flex justify-between items-center mx-auto max-w-[1240px] py-2 gap-12 !box-content rounded-full !bg-black",
        className
      )}
    >
      <Image
        src={require("@/public/images/logo/logo-Large.png")}
        alt="logo"
        width={100}
        height={100}
        style={{ width: "auto", height: "auto" }}
        className="ml-4"
      />
      <motion.div
        className="min-[900px]:flex items-center justify-center space-x-5 hidden"
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
      <motion.div className="min-[900px]:flex hidden gap-2 items-center mr-4">
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

      {/* Mobile Version Navbar */}
      <div className="min-[900px]:hidden block text-white mr-4">
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          color="white"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {opened && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: opened ? "auto" : 0,
                  opacity: opened ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-[rgba(0,0,0,0)] backdrop-blur-lg rounded-2xl border border-white/[0.2] shadow-xl"
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  layout // layout ensures smooth animation
                  className="w-[90vw] h-fit p-4 px-8 text-center flex flex-col justify-center items-center gap-5"
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        key={index}
                        href={item.link}
                        className="hover:opacity-80 block"
                      >
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
