'use client';

import { TwitterLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { buttonVariants } from '@/components/ui/button';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';
import { Highlight } from '@/components/ui/hero-highlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AvatarCircles from '@/components/magicui/avatar-circles'; // 使用默认导入
import SplineWrapper from '@/components/SplineWrapper';
import SparklesText from "@/components/magicui/sparkles-text";

const MotionLink = motion(Link);

const Hero = () => {
  const t = useTranslations('Hero');
  console.log("Rendering Hero component");

  return (
    <Section className="py-36 relative">

  {/*
  <div className="absolute inset-0 z-0 opacity-50 w-full h-full">
  <SplineWrapper scene="https://prod.spline.design/oIKdzekHRT0aslGy/scene.splinecode" />
</div>
  */}
      <div className="relative z-10">
        <CenteredHero
          banner={{
            href: 'https://twitter.com/rolittai',
            text: (
              <>
                <TwitterLogoIcon className="mr-1 size-5" /> {t('follow_twitter')}
              </>
            ),
          }}
          title={t.rich('title', {
            important: (chunks) => (
              <span className="bg-gradient-to-r from-blue-600 via-yellow-500 to-red-300 bg-clip-text text-transparent">
                <Highlight className="text-black dark:text-white">
                  {chunks}
                </Highlight>
              </span>
            ),
          })}
          description={
            <TextGenerateEffect 
              words={t('description')} 
              className="text-gray-700 dark:text-yellow-300"
            />
          }
          // 在这里添加AvatarCircles组件
          extra={
            <div className="mt-8 mb-6" align="center">
              <br></br>
              <p> {t('avatar')}</p>
              <br></br>
              <AvatarCircles 
                numPeople={999} // 添加这个属性
                avatarUrls={[
                  "https://avatars.githubusercontent.com/u/16860528",
                  "https://avatars.githubusercontent.com/u/20110627",
                  "https://avatars.githubusercontent.com/u/106103625",
                  "https://avatars.githubusercontent.com/u/59228569",
                ]}
              />
            </div>
          }
          buttons={
            <>
             <MotionLink
                className={buttonVariants({ size: 'lg' })}
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SparklesText
                  text={t('primary_button')}
                  className="text-base font-semibold"
                  colors={{ first: "#FF48C3", second: "#1CDF67" }}
                 />
              </MotionLink>

              <MotionLink
                className={buttonVariants({ variant: 'outline', size: 'lg' })}
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <TwitterLogoIcon className="mr-2 size-5" />
                {t('secondary_button')}
              </MotionLink>
            </>
          }
        />
      </div>
    </Section>
  );
};

export { Hero };