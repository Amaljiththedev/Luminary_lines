import { cn } from "@/lib/utils";
import {
  IconEdit,
  IconBriefcase,
  IconBuildingStore,
  IconUser,
  IconBook,
  IconClock,
  IconUsers,
  IconCertificate,
  IconBrandPagekit,
  IconBrandRedux,
  IconVideo,
  IconLighter,
  IconPackage,
  IconRocket,
  IconAd,
  IconBadge3dFilled,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Elevate Your Short-Form Videos",
      description:
        "Produce captivating short-form videos tailored for platforms like Shorts, Reels, and TikTok, maximizing engagement and reach.",
      icon: <IconBrandPagekit />,
    },
    {
      title: "Engaging Edutainment",
      description:
        "Combine education and entertainment to create content that informs and captivates your audience, ensuring they stay engaged.",
      icon: <IconBrandRedux />,
    },
    {
      title: "Master Long-Form Videos",
      description:
        "Develop strategies to maintain viewer interest and retention on longer formats, including YouTube videos and podcasts.",
      icon: <IconVideo />,
    },
    {
      title: "Compelling Video Explainers",
      description:
        "Transform complex concepts into clear, concise explainer videos that educate your audience while keeping them entertained.",
      icon: <IconLighter />,
    },
    {
      title: "Dynamic Product Demos",
      description:
        "Showcase your products in action with dynamic videos designed to convert viewers into loyal customers.",
      icon: <IconPackage />,
    },
    {
      title: "Stunning Motion Graphics",
      description:
        "Enhance your brand's storytelling with engaging animations and dynamic motion graphics that capture attention.",
      icon: <IconBadge3dFilled />,
    },
    {
      title: "Impactful Ads",
      description:
        "Create eye-catching promotional videos that drive engagement, boost visibility, and increase sales.",
      icon: <IconAd />,
    },
    {
      title: "Memorable Launch Videos",
      description:
        "Craft powerful launch videos that introduce your brand in a unique and unforgettable way, making a lasting impression.",
      icon: <IconRocket />,
    },
  ];
  

  return (
    <section className="relative z-10 py-10 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-white text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16 bg-opacity-50">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col mx-auto py-10 relative group/feature border-b border-neutral-800 dark:border-neutral-700",
        (index === 0 || index === 4) && "border-l dark:border-neutral-700",
        index < 4 && "lg:border-b dark:border-neutral-700"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-neutral-300 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-600 dark:bg-neutral-800 group-hover/feature:bg-cyan-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 dark:text-neutral-200">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-400 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
