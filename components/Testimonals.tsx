"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { IconSpeakerphone } from '@tabler/icons-react';

// Video item interface
interface VideoItem {
  id: string;
  videoUrl: string;
}

// Video data
const videoItems: VideoItem[] = [
  {
    id: '1',
    videoUrl: '/reels.mp4',
  },
  {
    id: '2',
    videoUrl: '/reels.mp4',
  },
];

// Testimonial and Client Video Combined Component
const ClientVideoSection: React.FC = () => {
  return (
    <div className="flex flex-col space-y-16 w-full max-w-7xl p-4">
      {/* Main Heading */}
      <h2 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent text-white from-neutral-50 to-neutral-400 bg-opacity-50 md:mt-0">
        What Our Clients Say
      </h2>

      {/* First Section: Testimonial on the left, Video on the right */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
      <TestimonialCard
          name="Abhinav Mahajan"
          followers="3M Followers"
          text="“Luminary lines significantly boosted my online presence, achieving impressive growth across all platforms. Highly recommend!”"
          stats={["300 million views generated", "2.19 million YouTube subscribers", "100+ Videos edited"]}
          avatar="/abinav.webP" // Updated unique avatar for Abhinav Mahajan Life
        />
        <VideoCard item={videoItems[0]} />
      </div>

      {/* Second Section: Video on the left, Testimonial on the right */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
      <TestimonialCard
          name="Nipun Fitness"
          followers="400k Followers"
          text="“Working with this team has transformed my content strategy and engagement. Highly recommend their services!”"
          stats={["100 million+ views generated", "100+ videos edited"]}
          avatar="/nipun.webP" // Updated unique avatar for Nipun Fitness
        />
        <VideoCard item={videoItems[1]} />
      </div>
    </div>
  );
};

// Video Card Component
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
    <div className="flex-1 flex justify-center mt-6 md:mt-0">
      <motion.div
        className="relative p-0 rounded-lg shadow-lg cursor-pointer h-96 flex flex-col justify-center items-center transition-transform duration-300 hover:shadow-xl"
        initial={{ y: 0, rotate: 0 }}
        whileHover={{
          y: -10,
          rotate: 5,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <video
          ref={videoRef}
          className="w-56 h-80 rounded-xl object-cover"
          src={item.videoUrl}
          autoPlay
          muted={isMuted}
          loop
        />
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 p-2 text-white rounded focus:outline-none hover:bg-gray-700"
        >
          {isMuted ? <IconSpeakerphone /> : 'Mute'}
        </button>
      </motion.div>
    </div>
  );
};

// Testimonial Card Component
interface TestimonialCardProps {
  name: string;
  followers: string;
  text: string;
  stats: string[];
  avatar: string; // Added avatar prop
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  followers,
  text,
  stats,
  avatar, // Avatar prop for different images
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full max-w-xl p-6 rounded-lg shadow-lg text-white hover:bg-gray-800 transition duration-300">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={avatar} // Dynamically passed avatar prop
          alt={name}
          className="w-20 h-20 rounded-full object-cover" // Increased size of the avatar
        />
      </div>

      {/* Text Area */}
      <div className="flex flex-col space-y-2 text-center md:text-left">
        {/* Name and Followers */}
        <div>
          <h3 className="text-3xl font-bold">{name}</h3> {/* Increased from text-2xl to text-3xl */}
          <p className="text-2xl text-gray-400">{followers}</p> {/* Increased from text-xl to text-2xl */}
        </div>

        {/* Testimonial Text */}
        <p className="text-xl text-gray-300">"{text}"</p> {/* Increased from text-lg to text-xl */}

        {/* Stats */}
        <div className="flex flex-col space-y-1 md:space-y-0 md:space-x-4 md:flex-row text-xl text-gray-400">
          {stats.map((stat, index) => (
            <p key={index}>{stat}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientVideoSection;
