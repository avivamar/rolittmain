import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Section } from '@/features/landing/Section';
import { Timeline } from '@/components/Timeline';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Timeline' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
      images: [
        {
          url: '/images/timeline/time.png',
          width: 1200,
          height: 630,
          alt: t('meta_og_image_alt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta_title'),
      description: t('meta_description'),
      images: ['/images/timeline/time.png'],
    },
  };
}

export default async function TimelinePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Timeline' });

  const timelineEvents = [
    {
      date: t('event1.date'),
      title: t('event1.title'),
      description: t('event1.description'),
      image: {
        src: '/timeline/time.png',
        width: 400,
        height: 300,
      },
    },
    {
      date: t('event2.date'),
      title: t('event2.title'),
      description: t('event2.description'),
      image: {
        src: '/timeline/time.png',
        width: 400,
        height: 300,
      },
    },
    {
      date: t('event3.date'),
      title: t('event3.title'),
      description: t('event3.description'),
      image: {
        src: '/timeline/time.png',
        width: 400,
        height: 300,
      },
    },
    {
      date: t('event4.date'),
      title: t('event4.title'),
      description: t('event4.description'),
      image: {
        src: '/timeline/time.png',
        width: 400,
        height: 300,
      },
    },
    {
      date: t('event5.date'),
      title: t('event5.title'),
      description: t('event5.description'),
      image: {
        src: '/timeline/time.png',
        width: 400,
        height: 300,
      },
    },
    // 添加更多事件...
  ];

  return (
    <>
    <Navbar />
    <Section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            {t('title')}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl">
            {t('description')}
          </p>
        </div>
        <div className="mt-16">
          <Timeline events={timelineEvents} />
        </div>
      </div>
    </Section>
    <Footer />
    </>
  );
}