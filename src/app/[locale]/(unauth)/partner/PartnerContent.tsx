"use client";

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartnerContent() {
  const t = useTranslations('Partner');

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
        <p className="text-xl mb-12 text-center">{t('subtitle')}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{t('why_partner_title')}</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('why_partner_1')}</li>
            <li>{t('why_partner_2')}</li>
            <li>{t('why_partner_3')}</li>
            <li>{t('why_partner_4')}</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="/rolitt-partnership.svg"
            alt="Business Partnership"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-4">{t('investment_opportunities_title')}</h2>
        <p className="mb-4">{t('investment_opportunities_description')}</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('investment_opportunity_1')}</li>
          <li>{t('investment_opportunity_2')}</li>
          <li>{t('investment_opportunity_3')}</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">{t('contact_us_title')}</h2>
        <p className="mb-6">{t('contact_us_description')}</p>
        <Button size="lg" asChild>
          <a href="mailto:support@rolitt.com">{t('contact_button')}</a>
        </Button>
      </motion.div>
    </div>
  );
}