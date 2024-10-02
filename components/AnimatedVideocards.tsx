import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { IconSpeakerphone } from "@tabler/icons-react";

interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  avatarUrl: string; // Avatar image
  name: string; // Person's name
}

const items: VideoItem[] = [
  { id: "1", title: "Card 1", subtitle: "Subtitle 1", videoUrl: "reels.mp4", avatarUrl: "/nipun.webP", name: "@nipunfitness" },
  { id: "2", title: "Card 2", subtitle: "Subtitle 2", videoUrl: "/trie.mp4", avatarUrl: "/trie.webP", name: "@_triedbutfailed" },
  { id: "3", title: "Card 3", subtitle: "Subtitle 3", videoUrl: "/abhinav.mp4", avatarUrl: "/abinav.webP", name: "@abhinavmahajanlife" },
  { id: "4", title: "Card 4", subtitle: "Subtitle 4", videoUrl: "/ash.mp4", avatarUrl: "/gay.webP", name: "@ashvinshibu" },
];

const AnimatedVideoCards: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handleToggleMute = (id: string) => {
    setActiveVideoId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative py-24 flex flex-col items-center justify-center space-y-12">
      <h2 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16 md:mb-20">
        Create Stories to Inspire
      </h2>

      <div className="grid grid-cols-1 bg-black z-50 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-7xl">
        {items.map((item) => (
          <VideoCard
            key={item.id}
            item={item}
            isMuted={activeVideoId !== item.id}
            onToggleMute={() => handleToggleMute(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

const VideoCard: React.FC<{
  item: VideoItem;
  isMuted: boolean;
  onToggleMute: () => void;
}> = ({ item, isMuted, onToggleMute }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <motion.div
        className="border-2 rounded-lg shadow-xl cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-110"
        initial={{ y: 0, rotate: -2 }}
        animate={{ y: [0, -4, 0], rotate: [2, -2, 4, -4] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl object-cover"
          src={item.videoUrl}
          autoPlay
          muted={isMuted}
          loop
        />

        <button
          onClick={onToggleMute}
          className="absolute top-5 right-5 p-3 bg-gray-800 bg-opacity-50 text-white rounded-full focus:outline-none"
        >
          {isMuted ? <IconSpeakerphone size={24} /> : "Mute"}
        </button>

        {/* Avatar and name inside the video card */}
        <div className="absolute bottom-5 left-5 flex items-center space-x-3 bg-black bg-opacity-60 p-2 rounded-lg">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <span className="text-white text-base font-semibold">{item.name}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedVideoCards;
