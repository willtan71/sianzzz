import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "For Startups",
      description:
        "One-stop solution provider for startups and solopreneurs ... by solopreneurs (we know you)!",
      icon: <IconTerminal2 />,
    },
    {
      title: "Sustainability & Growth",
      description:
        "Long-term win-win partnership for sustainability and your business growth.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Bootstrap Breakthrough",
      description:
        "Solutions that won't break the bank. We deliver result without the ridiculous costs.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Robust Build",
      description: "We build your project on robust state-of-the-art cloud architecture that ensure scalability.",
      icon: <IconCloud />,
    },
    {
      title: "Efficient Workflow",
      description: "Streamline your operations and maximize productivity with our efficient workflow solutions.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Responsive Helpdesk",
      description:
        "Get fast, friendly support whenever you need it.",
      icon: <IconHelp />,
    },
    {
      title: "Tailored To Your Needs",
      description:
        "Solutions crafted uniquely for your business goals.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "Talk to us. Let us bring your business to the next level!",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

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
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
