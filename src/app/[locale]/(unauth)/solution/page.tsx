import { Suspense } from 'react';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import SolutionContent from './SolutionContent';
import { useTranslations } from 'next-intl';

function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-64 bg-gray-300 rounded-lg"></div>
      <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}

export default function SolutionPage() {
  const t = useTranslations('Solution');

  const solutions = [
    {
      title: t('solution1_title'),
      description: t('solution1_description'),
      link: '/solution/1',
    },
    {
      title: t('solution2_title'),
      description: t('solution2_description'),
      link: '/solution/2',
    },
    {
      title: t('solution3_title'),
      description: t('solution3_description'),
      link: '/solution/3',
    },
    {
      title: t('solution4_title'),
      description: t('solution4_description'),
      link: '/solution/4',
    },
    {
      title: t('solution5_title'),
      description: t('solution5_description'),
      link: '/solution/5',
    },
    {
      title: t('solution6_title'),
      description: t('solution6_description'),
      link: '/solution/6',
    },
  ];

  const pageContent = {
    title: t('title'),
    description: t('description'),
    solutionImageAlt: t('solution_image_alt'),
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSkeleton />}>
          <SolutionContent solutions={solutions} pageContent={pageContent} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}