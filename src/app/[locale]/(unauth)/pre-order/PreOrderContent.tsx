'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ImagesSlider } from "@/components/ui/images-slider";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PreOrderContent() {
  const t = useTranslations('PreOrder');
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const handlePreOrder = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: 'robot_toy' }),
      });
      const session = await response.json();
      const stripe = await stripePromise;
      const result = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const images = ['/robot1.jpg', '/robot2.jpg', '/robot3.jpg'];

  return (
    <div className="relative overflow-hidden">
      <StarsBackground />
      <ShootingStars />
      <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">{t('title')}</h1>
          <p className="text-xl text-center mb-12">{t('description')}</p>
        </motion.div>

        <ImagesSlider className="h-[40rem] mb-12" images={images}>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {t('sliderTitle')}
            </motion.p>
            <Button
              onClick={handlePreOrder}
              disabled={isLoading}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              {isLoading ? t('processing') : t('preOrderNow')}
            </Button>
          </motion.div>
        </ImagesSlider>

        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">{t('features')}</TabsTrigger>
            <TabsTrigger value="specs">{t('specs')}</TabsTrigger>
            <TabsTrigger value="rules">{t('preOrderRules')}</TabsTrigger>
          </TabsList>
          <TabsContent value="features">
            <Card>
              <CardContent className="space-y-2 pt-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('feature1')}</li>
                  <li>{t('feature2')}</li>
                  <li>{t('feature3')}</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="specs">
            <Card>
              <CardContent className="space-y-2 pt-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('spec1')}</li>
                  <li>{t('spec2')}</li>
                  <li>{t('spec3')}</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="rules">
            <Card>
              <CardContent className="space-y-2 pt-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('rule1')}</li>
                  <li>{t('rule2')}</li>
                  <li>{t('rule3')}</li>
                  <li>{t('rule4')}</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">{t('earlyBirdOffer')}</h2>
          <p className="mb-6">{t('offerDescription')}</p>
          <Badge variant="secondary" className="text-lg p-2">
            20% OFF
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            onClick={handlePreOrder}
            disabled={isLoading}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            {isLoading ? t('processing') : t('preOrderNow')}
          </Button>
          <p className="mt-4 text-sm opacity-75">{t('termsAndConditions')}</p>
        </motion.div>
      </div>
    </div>
  );
}