import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'App' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    keywords: t('meta_keywords'),
    openGraph: {
      title: t('meta_og_title'),
      description: t('meta_og_description'),
      url: `${baseUrl}/app`,
      siteName: 'Rolitt',
      images: [
        {
          url: `${baseUrl}/app-screenshot.png`,
          width: 1200,
          height: 630,
          alt: 'Rolitt Robot Control App Screenshot',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta_twitter_title'),
      description: t('meta_twitter_description'),
      images: [`${baseUrl}/app-screenshot.png`],
    },
    alternates: {
      languages: {
        'en-US': `${baseUrl}/en/app`,
        'zh-HK': `${baseUrl}/zh/app`,
        'ja-JP': `${baseUrl}/ja/app`,
      },
    },
    robots: 'index, follow',
  };
}