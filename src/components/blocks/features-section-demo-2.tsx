import { cn } from "@/utils/Helpers";
import { useTranslations } from 'next-intl';
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

export default function FeaturesSectionDemo() {
  const t = useTranslations('Features');

  const features = [
    {
      title: t('feature1_title'),
      description: t('feature1_description'),
      icon: <IconTerminal2 />,
    },
    {
      title: t('feature2_title'),
      description: t('feature2_description'),
      icon: <IconEaseInOut />,
    },
    {
      title: t('feature3_title'),
      description: t('feature3_description'),
      icon: <IconCurrencyDollar />,
    },
    {
      title: t('feature4_title'),
      description: t('feature4_description'),
      icon: <IconCloud />,
    },
    {
      title: t('feature5_title'),
      description: t('feature5_description'),
      icon: <IconRouteAltLeft />,
    },
    {
      title: t('feature6_title'),
      description: t('feature6_description'),
      icon: <IconHelp />,
    },
    {
      title: t('feature7_title'),
      description: t('feature7_description'),
      icon: <IconHelp />,
    },
    {
      title: t('feature8_title'),
      description: t('feature8_description'),
      icon: <IconHelp />,
    },
  ];
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
          {t('section_subtitle')}
        </h2>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {t('section_title')}
        </h3>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          {t('section_description')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
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
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gradient-to-b from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700 group-hover/feature:bg-gradient-to-r group-hover/feature:from-pink-500 group-hover/feature:to-yellow-500 transition-all duration-300 origin-center" />
<span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-gray-800 dark:text-gray-200 group-hover/feature:text-blue-600 dark:group-hover/feature:text-yellow-400">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
