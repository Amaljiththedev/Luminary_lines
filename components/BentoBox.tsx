"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const logos = [
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716817722/facebook.svg_a4qmtg.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800282/instagram.svg_seeetv.png",
  "https://res.cloudinary.com/dl2adjye7/image/upload/v1716800359/youtube.png"
];

const lineWidth = 80; 
const lineHeight = 2; 

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center min-h-52">
      <div className="relative flex items-center">
        <div className="bg-[#000] border border-white/30 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <img src={logos[0]} alt="Logo 1" className="filter invert brightness-0" />
        </div>
        <div className="relative" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
            initial={{ x: '-40px' }}
            animate={{ x: `calc(${lineWidth}px + 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 2.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
          <img src={logos[1]} alt="Logo 2" className="filter invert brightness-0" />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="relative" style={{ width: `${lineWidth}px`, height: `${lineHeight}px`, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
          <motion.div
            className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent via-black to-transparent opacity-75"
            initial={{ x: '40px' }}
            animate={{ x: `calc(-${lineWidth}px - 40px)` }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatDelay: 3.5,
              ease: 'linear',
            }}
            style={{ willChange: 'transform' }}
          />
        </div>
        <div className="bg-black border border-white/30 rounded-2xl flex items-center justify-center w-14 h-14 p-4">
          <img src={logos[2]} alt="Logo 3" className="filter invert brightness-0" />
        </div>
      </div>
    </div>
  );
};

const data = [50, 40, 300, 320, 500, 350, 200, 230, 500];
const maxData = Math.max(...data);
const chartHeight = 400;
const chartWidth = 800;

const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] flex-1 rounded-xl border border-white/30 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: 'transform' }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: '#5D2CA8',
            filter: 'blur(100px)',
            transform: 'translate(-0%, -0%)',
            zIndex: 10,
            willChange: 'transform, top, left',
          }}
        />
      )}
      {children}
    </div>
  );
};

const PersonalBrandingAgency = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center relative">
      <div className="flex flex-row gap-8 justify-center h-full items-center relative">
        {logos.map((logo, index) => (
          <div key={index} className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-16 h-16 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2]">
            <img src={logo} alt={`Logo ${index + 1}`} className="filter invert brightness-0" />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              }}
              style={{ willChange: 'transform' }}
            />
          </div>
        ))}
      </div>
      <div className="text-left p-6 mt-4">
        <h1 className="text-white text-2xl font-bold mb-2">Your Personal Branding Agency</h1>
        <p className="text-gray-400 text-lg">Empowering individuals to build their unique brand identities.</p>
        <ul className="mt-4 text-gray-300">
          <li>✔️ Personal Brand Strategy</li>
          <li>✔️ Social Media Management</li>
          <li>✔️ Website Development</li>
          <li>✔️ Content Creation & Marketing</li>
          <li>✔️ Brand Identity Design</li>
        </ul>
      </div>
    </div>
  );
};

const BentoBox1 = () => {
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [chartRef]);

  return (
    <div className="bg-[#000000] flex justify-center items-center min-h-screen p-5 rounded-lg sm:py-24 ">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl min-h-[800px] md:min-h-[800px] md:h-[800px]">
        <CardWithEffect>
          <div className="flex flex-col justify-between h-full">
            <div className="mb-4 px-6 mt-6">
              <div className="text-white text-lg font-bold mb-2">Branding Insights</div>
              <div className="text-gray-400">
                We analyze your market position and help you stand out.
              </div>
            </div>
            {isChartVisible && (
              <svg width={chartWidth} height={chartHeight} ref={chartRef}>
                {/* Add your chart drawing logic here */}
              </svg>
            )}
          </div>
        </CardWithEffect>
        <div className="flex-1">
          <LogoBeam />
        </div>
        <CardWithEffect>
          <PersonalBrandingAgency />
        </CardWithEffect>
      </div>
    </div>
  );
};

export default BentoBox1;
