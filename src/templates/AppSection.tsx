"use client";
import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../public/rolitt-app.json';
import { Section } from '@/features/landing/Section';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export const AppSection = () => {
  const t = useTranslations('AppSection');

  return (
    <Section className="py-24 sm:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 space-y-4 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        <div className="flex justify-center">
          <Lottie
            loop
            animationData={lottieJson}
            play
            className="w-full h-auto"
            style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
          />
        </div>
      </motion.div>
    </Section>
  );
};