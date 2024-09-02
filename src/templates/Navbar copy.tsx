import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher'; // 引入 ThemeSwitcher 组件
import { buttonVariants } from '@/components/ui/button';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              <ThemeSwitcher /> {/* 添加 ThemeSwitcher 组件 */}
            </li>
            <li>
              <Link href="/sign-in">{t('sign_in')}</Link>
            </li>
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                {t('sign_up')}
              </Link>
            </li>
          </>
        }
      >
        
        <li>
          <Link href="/product">{t('product')}</Link>
        </li>

        <li>
          <Link href="/about">{t('about')}</Link>
        </li>

        <li>
        <Link href="/timeline">{t('timeline')}</Link>
        </li>

        <li>
          <Link href="/community">{t('community')}</Link>
        </li>

        <li>
          <Link href="/company">{t('company')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};

export { Navbar };
