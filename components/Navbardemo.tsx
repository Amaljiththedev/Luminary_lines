"use client";
import React from "react";
import { FloatingNav } from "./FloatingNavbar";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconHome,
  IconMessage,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-4 w-6 text-white" /> },
    { name: "About", link: "/about", icon: <IconUser className="h-4 w-4 text-white" /> },
    { name: "YouTube Channel", link: "/yt", icon: <IconBrandYoutube className="h-4 w-4 text-white" /> },
    { name: "Instagram", link: "/contact", icon: <IconBrandInstagram className="h-4 w-4 text-white" /> },
    
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