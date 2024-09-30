"use client";

import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <p className="flex justify-center text-white font-medium text-base mb-6">
        Trusted by top creators, brands, and influencers
      </p>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    name: "@abhinavmahajanlife",
    avatar: "/abinav.png",
    profileUrl: "https://www.instagram.com/abhinavmahajanlife",
  },
  {
    name: "@nipunfitness",
    avatar: "/nipun.png",
    profileUrl: "https://www.instagram.com/nipunfitness",
  },
  {
    name: "@ajmal_fitlife",
    avatar: "/almen.png",
    profileUrl: "https://www.instagram.com/ajmal_fitlife",
  },
  {
    name: "@_triedbutfailed",
    avatar: "/trie.png",
    profileUrl: "https://www.instagram.com/_triedbutfailed",
  },
  {
    name: "@ashvinshibu",
    avatar: "/gay.png",
    profileUrl: "https://www.youtube.com/@ashvinshibu",
  },
];