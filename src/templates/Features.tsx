import { useTranslations } from 'next-intl';
import { cn } from "@/utils/Helpers";
import {
  IconTerminal2,
  IconEaseInOut,
  IconCurrencyDollar,
  IconCloud,
  IconRouteAltLeft,
  IconHelp,
} from "@tabler/icons-react";

const Features = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
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
        "flex flex-col py-10 px-6 relative group/feature",
        "border-b md:border-r dark:border-neutral-800",
        index % 3 === 0 && "md:border-l",
        index < 3 && "border-t"
      )}
    >
      <div className="mb-4 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover/feature:text-blue-600 dark:group-hover/feature:text-blue-400 transition duration-300">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-primary to-purple-500 group-hover/feature:w-full transition-all duration-300" />
    </div>
  );
};

export { Features };