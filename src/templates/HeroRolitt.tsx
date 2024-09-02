'use client';

import { useTranslations } from 'next-intl';
import { AuroraBackground } from '@/components/ui/aurora-background';
import SparklesText from "@/components/magicui/sparkles-text";
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { FacebookLogoIcon } from '@radix-ui/react-icons';
import { motion } from "framer-motion";


export const HeroRolitt = () => {
  const t = useTranslations('Hero');

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center px-4 py-20"
      >
        <Link
          href="https://facebook.com/rolittai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
          className="inline-flex items-center rounded-full px-4 py-1.5 mb-8 text-sm leading-6 text-white bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <FacebookLogoIcon className="mr-2" />
          {t('follow_twitter')}
        </Link>

        <h1 className="text-4xl md:text-7xl font-bold text-center text-white mb-6">
          {t.rich('title', {
            important: (chunks) => <SparklesText>{chunks}</SparklesText>,
          })}
        </h1>

        <p className="text-lg leading-8 text-gray-300 max-w-2xl mx-auto text-center">
          {t('description')}
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="#"
            className={buttonVariants({ size: 'lg' })}
          >
            {t('primary_button')}
          </Link>
          <Link
            href="https://github.com/ixartz/SaaS-Boilerplate"
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            {t('secondary_button')}
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};