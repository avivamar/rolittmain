'use client';

import { TimerIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';
import { PulsatingButton } from '@/components/ui/pulsating-button';
import { AuroraBackground } from '@/components/ui/aurora-background';

const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section className="relative overflow-hidden">
      <AuroraBackground className="absolute inset-0 z-0 opacity-50" />
      <div className="relative z-10">
        <CTABanner
          title={t('title')}
          description={t('description')}
          buttons={
            
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a
                href="https://rolitt.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="rolitt pay"
              >
                  <TimerIcon className="mr-2 size-5" />
                  {t('button_text')}
              </a>
            </Button>
            
          }
        />
      </div>
    </Section>
  );
};

export { CTARolitt };