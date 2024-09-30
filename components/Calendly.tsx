"use client";
import React from "react";
import { BackgroundGradient } from "./background-gradient";
import { InlineWidget } from "react-calendly";

export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900 w-full">
        {/* Calendly Widget Section */}
        <div className="flex justify-center">
          <InlineWidget
            url="https://calendly.com/luminarylines/30min" // Replace with your Calendly URL
            styles={{ width: '100%', height: '600px' }} // Set width and height as needed
          />
        </div>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Schedule a Meeting
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Choose a convenient time to connect with me.
        </p>
      </BackgroundGradient>
    </div>
  );
}
