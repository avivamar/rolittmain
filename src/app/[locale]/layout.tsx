import '@/styles/global.css';
import { ThemeProvider } from 'next-themes'

import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { AllLocales } from '@/utils/AppConfig';


/**
 * 生成给定语言环境的元数据的异步函数
 * @param props - 包含区域设置参数的对象
 * @returns 包含元数据的 Promise
 */
export async function generateMetadata(props: {
  params: { locale: string };
}): Promise<Metadata> {
  // 根据提供的区域设置获取翻译
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  // 获取网站的基础 URL，使用环境变量或默认值
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://rolitt.com';

  // 使用翻译字符串设置元数据的标题和描述
  const title = t('meta_title');
  const description = t('meta_description');

  // 构建用于社交分享的图像的 URL
  const image = `${url}/og-image.jpg`;

  // 返回包含生成的元数据的对象
  return {
    metadataBase: new URL(url),
    title,
    description,
    // 开放图谱元数据
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      // 包含共享图像的数组
      images: [{ url: image }],
    },
    // Twitter 卡片元数据
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // 包含共享图像的数组
      images: [image],
    },
    // 网站图标元数据
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
  };
}
export function generateStaticParams() {
  return AllLocales.map((locale) => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-[1440px] mx-auto px-4">
            <NextIntlClientProvider
              locale={props.params.locale}
              messages={messages}
            >
              {props.children}
            </NextIntlClientProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}