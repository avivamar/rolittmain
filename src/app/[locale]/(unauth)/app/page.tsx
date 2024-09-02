import React from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import dynamic from 'next/dynamic';
import { generateMetadata } from './metadata';

const AppContent = dynamic(() => import('./AppContent'), { ssr: false });

export { generateMetadata };
export default function AppPage() {
  const t = useTranslations('App');

  const features = [
    { title: t('feature1'),description: t('feature1_description') },
    { title: t('feature2'),description: t('feature2_description')},
    { title: t('feature3'),description: t('feature3_description') },
  ];

  const pageContent = {
    title: t('title'),
    description: t('description'),
    features: t('features'),
    comingSoon: t('comingSoon'),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {pageContent.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {pageContent.description}
            </p>
          </div>
        </section>

        <AppContent pageContent={pageContent} features={features} />
      </main>
      <Footer />
    </div>
  );
}