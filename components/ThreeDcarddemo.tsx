"use client";

import React, { useState, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { IconSpeakerphone, IconVolume3 } from "@tabler/icons-react";

export function ThreeDCardDemo() {
  const [isMuted, setIsMuted] = useState(true); // State to handle mute/unmute
  const videoRef = useRef(null); // Reference to store video element

  // Toggle mute state
  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMuteState = !prev;
      if (videoRef.current) {
        if (newMuteState) {
          videoRef.current.muted = true; // Mute the video
        } else {
          videoRef.current.muted = false; // Unmute the video
        }
      }
      return newMuteState;
    });
  };

  return (
    <>
      <CardContainer className="flex justify-center items-center min-h-screen">
        <CardBody className="relative group/card max-w-7xl w-full dark:hover:shadow-4xl hover:shadow-emerald-500/[0.1] border-white/[0.2] h-auto rounded-xl p-8 border mx-auto flex flex-col items-center">
          {/* Card Title */}
          <CardItem translateZ="50" className="text-3xl font-bold text-white text-center">
            Empowering Creators and Brands
          </CardItem>

          {/* Card Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-base max-w-3xl mt-3 text-white text-center"
          >
            We help creators and brands establish a strong online presence. Watch our intro video to learn more!
          </CardItem>

          {/* Local Video */}
          <CardItem translateZ="80" className="w-full mt-6">
            <div className="rounded-xl w-full h-96 overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full"
                src="/reels.mp4" // Update this to your local video path
                autoPlay
                loop
                muted
              />
            </div>
          </CardItem>

          {/* Mute/Unmute Button */}
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={toggleMute}
              className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              {/* Spinning Border Effect */}
              <span className="absolute inset-0 z-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

              {/* Dynamic Text (Mute/Unmute) */}
              <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {isMuted ? <IconSpeakerphone /> : <IconVolume3 />}
              </span>
            </button>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
