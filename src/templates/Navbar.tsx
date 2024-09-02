'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Section } from '@/features/landing/Section';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const t = useTranslations('Navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ['home', 'about', 'timeline', 'app', 'partner','contact'];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <Section className="px-3 py-6">
      <div className="flex flex-col items-center">
      <motion.div 
  className="mb-6"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.75 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => {
    const audio = new Audio('/sounds/switch-theme.wav');
    audio.play().catch(error => {
      console.error('I am rolitt:', error);
      // 这里可以添加一些用户反馈，比如显示一个提示
    });
  }}
  onTap={() => {
    window.location.href = '/';
  }}
>
  <Logo />
</motion.div>
        <div className="w-full flex justify-center items-center relative">
          <nav className="hidden md:flex">
            <ul className="flex justify-center items-center space-x-8">
              {navItems.map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href={`/${item === 'home' ? '' : item}`} className="relative group">
                    <span className="text-lg font-medium">{t(item)}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.li>
              ))}
              <li>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/pre-order" className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 ease-in-out"></span>
                    <span className="relative px-4 py-2 bg-black text-white font-bold rounded-full border-2 border-purple-600 hover:border-pink-600 transition-colors duration-300">
                      {t('pre-order')}
                    </span>
                    <motion.span
                      className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </Link>
                </motion.div>
              </li>
            </ul>
          </nav>
          <div className="md:hidden absolute right-0">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4 absolute right-0">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.li key={item} variants={menuItemVariants}>
                  <Link href={`/${item === 'home' ? '' : item}`} className="text-lg font-medium">
                    {t(item)}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={menuItemVariants}>
                <Link href="/pre-order" className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full">
                  {t('pre-order')}
                </Link>
              </motion.li>
            </ul>
            <motion.div variants={menuItemVariants} className="mt-4 flex items-center space-x-4">
              <LocaleSwitcher />
              <ThemeSwitcher />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export { Navbar };