'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Section } from '@/features/landing/Section';
import { Logo } from './Logo';
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from '@radix-ui/react-icons';

const FooterRolitt = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="bg-white dark:bg-black text-black dark:text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo />
            <div className="flex space-x-4">
              <Link href="/" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link href="/" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6" />
              </Link>
              <Link href="/" aria-label="TikTok">
                <TiktokIcon className="w-6 h-6" />
              </Link>
              <Link href="/" aria-label="YouTube">
                <YoutubeIcon className="w-6 h-6" />
              </Link>
            </div>
            <p>(+1) 302-444-2859</p>
            <p>support@rolitt.com</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">{t('product')}</h3>
              <ul className="space-y-2">
                <li><Link href="/">{t('timeline')}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('company')}</h3>
              <ul className="space-y-2">
                <li><Link href="/">{t('blog')}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <Link 
              href="/" 
              className="bg-yellow-300 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors"
            >
              {t('join_waitlist')}
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p>&copy; 2023 Rolitt Inc. All rights reserved</p>
        </div>
      </div>
    </Section>
  );
};

export default FooterRolitt;