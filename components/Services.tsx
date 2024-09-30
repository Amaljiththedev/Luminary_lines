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
      title: "Optimize Short-Form Videos",
      description:
        "Craft engaging and optimized videos for platforms like Shorts, Reels, and TikTok to reach a broader audience.",
      icon: <IconBrandPagekit />,
    },
    {
      title: "Edutainment",
      description:
        "Create informative yet entertaining content that delivers value while keeping your audience hooked.",
      icon: <IconBrandRedux />,
    },
    {
      title: "Long-Form Videos",
      description:
        "Develop strategies for maintaining viewer retention on longer platforms like YouTube or podcasts.",
      icon: <IconVideo />,
    },
    {
      title: "Video Explainers",
      description:
        "Simplify complex ideas to educate and entertain your audience through concise and clear explainer videos.",
      icon: <IconLighter />,
    },
    {
      title: "Product Demos",
      description:
        "Showcase your product's features in dynamic videos that convert viewers into customers.",
      icon: <IconPackage />,
    },
    {
      title: "Motion Graphics",
      description:
        "Elevate your brand with engaging animations and dynamic motion graphics.",
      icon: <IconBadge3dFilled />,
    },
    {
      title: "Ads",
      description:
        "Create attention-grabbing promotional videos that drive engagement and sales.",
      icon: <IconAd />,
    },
    {
      title: "Launch Videos",
      description:
        "Produce impactful launch videos to introduce your brand in a memorable and original way.",
      icon: <IconRocket />,
    },
  ];

  return (
    <section className="relative z-10 py-10 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-16 bg-opacity-50">Transform Your Brand</h2>
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
