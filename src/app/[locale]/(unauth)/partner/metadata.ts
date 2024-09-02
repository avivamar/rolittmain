import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: 'Partner' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    keywords: t('meta_keywords'),
    openGraph: {
      title: t('meta_og_title'),
      description: t('meta_og_description'),
      url: `${baseUrl}/partner`,
      siteName: 'Rolitt',
      images: [
        {
          url: `${baseUrl}/partnership.png`,
          width: 1200,
          height: 630,
          alt: 'Rolitt Partnership Opportunities',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta_twitter_title'),
      description: t('meta_twitter_description'),
      images: [`${baseUrl}/partnership.png`],
    },
    alternates: {
      languages: {
        'en-US': `${baseUrl}/en/partner`,
        'zh-HK': `${baseUrl}/zh/partner`,
        'ja-JP': `${baseUrl}/ja/partner`,
      },
    },
    robots: 'index, follow',
  };
}