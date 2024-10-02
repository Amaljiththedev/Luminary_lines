"use client";

import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

interface Testimonial {
  name: string;
  avatar: string;
  profileUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "@abhinavmahajanlife",
    avatar: "/abinav.webP",
    profileUrl: "https://www.instagram.com/abhinavmahajanlife",
  },
  {
    name: "@nipunfitness",
    avatar: "/nipun.webP",
    profileUrl: "https://www.instagram.com/nipunfitness",
  },
  {
    name: "@ajmal_fitlife",
    avatar: "/almen.webP",
    profileUrl: "https://www.instagram.com/ajmal_fitlife",
  },
  {
    name: "@_triedbutfailed",
    avatar: "/trie.webP",
    profileUrl: "https://www.instagram.com/_triedbutfailed",
  },
  {
    name: "@ashvinshibu",
    avatar: "/gay.webP",
    profileUrl: "https://www.youtube.com/@ashvinshibu",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <p className="flex justify-center text-white font-medium text-sm mb-6">
        Trusted by top creators, brands, and influencers
      </p>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}
