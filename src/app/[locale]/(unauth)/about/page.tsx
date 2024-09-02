'use client'
import { useTranslations } from 'next-intl';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import Image from 'next/image';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { cn } from "@/utils/Helpers";
import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
// import { useTheme } from "next-themes";


export default function AboutPage() {
  const t = useTranslations('About');

  const items = [
    {
      title: t('mission_title'),
      description: t('mission_description'),
      imageSrc: "/mission.svg",
    },
    {
      title: t('vision_title'),
      description: t('vision_description'),
      imageSrc: "/vision.svg",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* 减小了 py 的值 */}
          <div className="mt-4"> 
          <MacbookScroll
            title={
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
                <TextGenerateEffect words="Rolitt for Life Change" />
              </h1>
            }
            src="/macbook-scroll.svg" // 图片尺寸：宽度 1000px，高度 1000px
            showGradient={false}
          >
 
          </MacbookScroll>
</div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-4xl mx-auto mt-16"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                <TextGenerateEffect words={t('title')} />
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-left text-gray-600 dark:text-gray-300 mt-4">
                {t('about-description')}
              </p>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {items.map((item, i) => (
                <CardContainer key={i} className="inter-var">
                  <CardBody className="bg-white dark:bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full h-full rounded-xl p-6 border transition-all duration-300">
                    <CardItem
                      translateZ="50"
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                      {item.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-gray-600 dark:text-gray-300 text-base"
                    >
                      {item.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={item.imageSrc}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                        alt={item.title}
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}