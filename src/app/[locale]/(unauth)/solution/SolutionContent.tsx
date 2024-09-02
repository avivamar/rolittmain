'use client';

import React from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from 'next/image';
import { HoverEffect } from "@/components/ui/card-hover-effect";

interface SolutionContentProps {
  solutions: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  pageContent: {
    title: string;
    description: string;
    solutionImageAlt: string;
  };
}

export default function SolutionContent({ solutions, pageContent }: SolutionContentProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-black">
      <BackgroundBeams />
      <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          <Image 
            src="/solution.svg" 
            alt={pageContent.solutionImageAlt} 
            width={1200}
            height={600}
            className="w-full h-full max-h-96 object-cover rounded-xl shadow-2xl"
          />

          <div className="text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              <TextGenerateEffect words={pageContent.title} />
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {pageContent.description}
            </p>
          </div>
          
          <HoverEffect 
            items={solutions} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" 
          />
        </div>
      </div>
    </div>
  );
}