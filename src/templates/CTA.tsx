'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Section } from '@/features/landing/Section';
import { AuroraBackground } from '@/components/ui/aurora-background';

const CTA = () => {
  const t = useTranslations('CTA');
  const { theme } = useTheme();

  return (
    <Section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
      <AuroraBackground 
        className="absolute inset-0 z-0 opacity-50 dark:opacity-30" 
        imageLight="/images/aurora-light.png"
        imageDark="/images/aurora-dark.png"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2 
          className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('title')}
        </motion.h2>
        <motion.p 
          className="mb-8 text-base text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="default"
            size="lg"
            className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
            asChild
          >
            <a
              href="https://book.stripe.com/5kAcNd32o9Fbfo4289"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="rolitt pay"
              className="inline-flex items-center px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
            >
              {t('button_text')}
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white opacity-10 transition-all duration-300 group-hover:scale-100" />
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export { CTA };