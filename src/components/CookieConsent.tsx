'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('CookieConsent');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 bg-background border border-border rounded-lg shadow-lg p-4 z-50 max-w-2xl mx-auto"
        >
          <p className="mb-4 text-sm">{t('message')}</p>
          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={handleClose}>
              {t('close')}
            </Button>
            <Button onClick={handleAccept}>{t('accept')}</Button>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            <Link href="/privacy-policy" className="underline hover:text-foreground">
              {t('privacy_policy')}
            </Link>
            {' | '}
            <Link href="/terms-of-service" className="underline hover:text-foreground">
              {t('terms_of_service')}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;