'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AppContentProps {
  pageContent: {
    features: string;
    comingSoon: string;
  };
  features: Array<{ title: string; description: string }>;
}

export default function AppContent({ pageContent, features }: AppContentProps) {
  return (
    <>
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/app/rolitt-app-mockup.png"
              alt="App Screenshot"
              width={482}
              height={960}
              className="rounded-3xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl font-semibold mb-6">
              {pageContent.features}
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            disabled
            asChild
          >
            <Link href="#">
              <FaGooglePlay className="w-6 h-6" />
              Google Play
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            disabled
            asChild
          >
            <Link href="#">
              <FaApple className="w-6 h-6" />
              App Store
            </Link>
          </Button>
        </div>
        <p className="text-muted-foreground">{pageContent.comingSoon}</p>
      </section>
    </>
  );
}