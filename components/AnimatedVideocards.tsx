"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { IconSpeakerphone } from '@tabler/icons-react';

interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  avatarUrl: string; // Avatar image
  name: string; // Person's name
}

const items: VideoItem[] = [
  { id: '1', title: 'Card 1', subtitle: 'Subtitle 1', videoUrl: 'reels.mp4', avatarUrl: '/nipun.png', name: 'nipunfitness' },
  { id: '2', title: 'Card 2', subtitle: 'Subtitle 2', videoUrl: '/reels.mp4', avatarUrl: '/trie.png', name: '_triedbutfailed' },
  { id: '3', title: 'Card 3', subtitle: 'Subtitle 3', videoUrl: '/reels.mp4', avatarUrl: '/abinav.png', name: 'abhinavmahajanlife' },
  { id: '4', title: 'Card 4', subtitle: 'Subtitle 4', videoUrl: '/reels.mp4', avatarUrl: '/almen.png', name: 'ajmal_fitlife' }, 
];

const AnimatedVideoCards: React.FC = () => {
  return (
    <div className="relative py-20 flex flex-col items-center justify-center space-y-8">
      {/* Heading at the top */}
      <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16 md:mb-20">
  Create Stories to Inspire
</h2>


      <div className="grid grid-cols-1 bg-black z-50 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl">
        {items.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const VideoCard: React.FC<{ item: VideoItem }> = ({ item }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      <motion.div
        className="border rounded shadow-lg cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105"
        initial={{ y: 0, rotate: -2 }}
        animate={{ y: [0, -10, 0], rotate: [4, -2, 4, -4] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl object-cover"
          src={item.videoUrl}
          autoPlay
          muted={isMuted}
          loop
        />

        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 p-2 bg-transparent text-white rounded focus:outline-none"
        >
          {isMuted ? <IconSpeakerphone /> : 'Mute'}
        </button>

        {/* Avatar and name inside the video card */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-white text-sm font-medium">{item.name}</span>
        </div>
      </motion.div>


    </div>
  );
};

export default AnimatedVideoCards;
