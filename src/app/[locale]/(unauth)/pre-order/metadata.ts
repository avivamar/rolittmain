import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'PreOrder' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    keywords: t('meta_keywords'),
    openGraph: {
      title: t('meta_og_title'),
      description: t('meta_og_description'),
      url: `${baseUrl}/pre-order`,
      siteName: 'Rolitt',
      images: [
        {
          url: `${baseUrl}/pre-order-image.png`,
          width: 1200,
          height: 630,
          alt: 'Rolitt Pre-order',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta_twitter_title'),
      description: t('meta_twitter_description'),
      images: [`${baseUrl}/pre-order-image.png`],
    },
    alternates: {
      languages: {
        'en-US': `${baseUrl}/en/pre-order`,
        'zh-HK': `${baseUrl}/zh/pre-order`,
        'ja-JP': `${baseUrl}/ja/pre-order`,
      },
    },
    robots: 'index, follow',
  };
}