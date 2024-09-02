'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from '@/features/landing/Section';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';

const FAQ = () => {
  const t = useTranslations('FAQ');

  const faqItems = [
    { question: 'question1', answer: 'answer1' },
    { question: 'question2', answer: 'answer2' },
    { question: 'question3', answer: 'answer3' },
    { question: 'question4', answer: 'answer4' },
    { question: 'question5', answer: 'answer5' },
    { question: 'question6', answer: 'answer6' },
    { question: 'question7', answer: 'answer7' },
    { question: 'question8', answer: 'answer8' },
  ];

  return (
    <Section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <StarsBackground />
      <ShootingStars />
      <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            {t('mainTitle')}
        </h1>
          <p className="text-xl md:text-2xl text-foreground/80">
            {t('subTitle')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <Accordion type="multiple" className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={`item-${index + 1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index + 1}`} className="bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:text-gray-800 dark:hover:text-primary transition-colors">
    {t(item.question)}
  </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-foreground/80">
                    {t(item.answer)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
};

export { FAQ };