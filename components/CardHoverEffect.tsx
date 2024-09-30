import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Adobe Premiere Pro",
    description:
      "A leading video editing software that provides professional-level tools for video production and editing.",
    link: "/projects/adobe-premiere-pro", // Add appropriate links here
  },
  {
    title: "Final Cut Pro",
    description:
      "Apple's professional video editing software known for its powerful tools and seamless integration with macOS.",
    link: "/projects/final-cut-pro", // Add appropriate links here
  },
  {
    title: "DaVinci Resolve",
    description:
      "A comprehensive software solution that combines professional editing, color correction, visual effects, and audio post-production.",
    link: "/projects/davinci-resolve", // Add appropriate links here
  },
  {
    title: "Adobe After Effects",
    description:
      "A powerful software used for creating motion graphics and visual effects, essential for video compositing.",
    link: "/projects/adobe-after-effects", // Add appropriate links here
  },
  {
    title: "Camtasia",
    description:
      "A user-friendly screen recording and video editing software ideal for creating tutorials and instructional videos.",
    link: "/projects/camtasia", // Add appropriate links here
  },
  {
    title: "Filmora",
    description:
      "An intuitive video editing software that offers a wide range of creative options, perfect for beginners and intermediate users.",
    link: "/projects/filmora", // Add appropriate links here
  },
];
