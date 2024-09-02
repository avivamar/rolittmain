import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Your Company Name',
  description: 'Explore our innovative solutions for your business needs.',
  openGraph: {
    type: 'website',
    url: 'https://yourcompany.com/solutions',
    title: 'Solutions | Your Company Name',
    description: 'Explore our innovative solutions for your business needs.',
    images: [
      {
        url: 'https://yourcompany.com/og-image-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Solutions Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions | Your Company Name',
    description: 'Explore our innovative solutions for your business needs.',
    images: [
      {
        url: 'https://yourcompany.com/twitter-image-solutions.jpg',
        alt: 'Solutions Image',
      },
    ],
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  // 添加其他元数据，如 OpenGraph 标签等
};