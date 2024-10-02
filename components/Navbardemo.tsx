"use client";
import React from "react";
import { FloatingNav } from "./FloatingNavbar";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMyOppo,
  IconBrandYoutube,
  IconBriefcase2,
  IconHome,
  IconMessage,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-4 w-6 text-white" /> },
    { name: "Works", link: "#works", icon: <IconBriefcase2 className="h-4 w-4 text-white" /> },
    { name: "Services", link: "#Services", icon: <IconBrandMyOppo className="h-4 w-4 text-white" /> },
    { name: "YouTube Channel", link: "https://www.youtube.com/@LuminaryLinesedit", icon: <IconBrandYoutube className="h-4 w-4 text-white" /> },
    { name: "Instagram", link: "https://www.instagram.com/luminarylines", icon: <IconBrandInstagram className="h-4 w-4 text-white" /> },
  ];
  

  return (
    <div className="relative w-full flex justify-between items-center">
      <FloatingNav
        navItems={navItems}
        logo={<img src="/favicon.ico" alt="Logo" className="h-8 w-8" />}
      />
    </div>
  );
}