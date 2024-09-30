"use client";

import { FC, useRef } from "react";
import AnimatedVideoCards from "@/components/AnimatedVideocards";
import { BackgroundGradientAnimation } from "@/components/Background";
import { BackgroundBeams } from "@/components/background-beams";
import { Component } from "@/components/Charts";
import { HeroHighlightDemo } from "@/components/HeroHighlightdemo"; // Pass scrollToBackgroundGradient here
import { InfiniteMovingCardsDemo } from "@/components/Movingcard";
import { FloatingNavDemo } from "@/components/Navbardemo";
import Testimonals from "@/components/Testimonals";
import { TimelineDemo } from "@/components/TImelineDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffect";
import { FeaturesSectionDemo } from "@/components/Services";
import { BackgroundGradientDemo } from "@/components/Calendly";
import Footer from "@/components/Footer";
import { ThreeDCardDemo } from "@/components/ThreeDcarddemo";

const HomePage: FC = () => {
  // Create a ref for the BackgroundGradientDemo section
  const backgroundGradientRef = useRef<HTMLDivElement>(null);

  // Scroll handler to go to the BackgroundGradientDemo section
  const scrollToBackgroundGradient = () => {
    if (backgroundGradientRef.current) {
      backgroundGradientRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <FloatingNavDemo />

      {/* Hero Section */}
      <section className="relative h-[100vh] z-10 flex items-center justify-center bg-black text-white overflow-hidden">
        <BackgroundGradientAnimation>
          <div className=" items-center justify-center w-full h-full">
            {/* Pass the scroll function to HeroHighlightDemo */}
            <HeroHighlightDemo scrollToBackgroundGradient={scrollToBackgroundGradient} />
          </div>
        </BackgroundGradientAnimation>
      </section>

      <div className="relative bg-black text-white overflow-hidden">
        {/* Content Sections */}
        <section className="relative py-6 sm:py-4 lg:py-16 xl:py-20 2xl:py-24 -mb-32">
          <BackgroundBeams className="absolute -z-10 inset-0" />
          <div className="max-w-7xl bg-black mx-auto px-4 z-50">
            <AnimatedVideoCards />
          </div>
        </section>

        <section className="relative py-6">
          <BackgroundBeams className="inset-0" />
          <div className="max-w-7xl mx-auto px-4 z-10">
            <TimelineDemo />
          </div>
        </section>

        <section className="relative py-8 bg-grid-white/[0.1]">
          <BackgroundBeams className="absolute inset-0 -z-10" />
          <div className="max-w-7xl mx-auto px-4 z-50">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 flex justify-center text-white -mb-10">Case Study</h1>
            <ThreeDCardDemo />
            <Component />



            <div className="mt-12">
              <Testimonals />
            </div>
            <div className="mt-12">
              <FeaturesSectionDemo />
            </div>
            <div className="mt-12">
              <h1 className="text-4xl md:text-7xl mb-16 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-60">
                Let's Connect To Make The Change
              </h1>

              {/* Assign the ref here */}
              <div ref={backgroundGradientRef}>
                <BackgroundGradientDemo />
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-50 w-full bg-gray-900 text-center mb-24">
          <Footer scrollToBackgroundGradient={scrollToBackgroundGradient} />
        </footer>
      </div>
    </>
  );
};

export default HomePage;
