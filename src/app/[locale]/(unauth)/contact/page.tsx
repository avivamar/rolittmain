'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/Rolittai', icon: FaTwitter },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61560959570699', icon: FaFacebook },
  { name: 'YouTube', href: 'https://www.youtube.com/@RolittRobot', icon: FaYoutube },
  { name: 'Instagram', href: 'https://www.instagram.com/rolittrobot/', icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/rolitt', icon: FaLinkedin },
];

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // 这里添加实际的表单提交逻辑
      await new Promise(resolve => setTimeout(resolve, 2000)); // 模拟API调用
      toast({
        title: t('submission_successful'),
        description: t('we_will_get_back_to_you'),
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: t('submission_failed'),
        description: t('please_try_again_later'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
        <StarsBackground />
        <ShootingStars />
        <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">
          <h1 className="text-4xl font-bold text-center mb-12">{t('contact_us')}</h1>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* 左侧联系表单 */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t('name_placeholder')}</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-gray-800 border-secondary-primary dark:border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t('email')}</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-gray-800 border-secondary-primary dark:border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t('message')}</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-32 bg-white dark:bg-gray-800 border-secondary-primary dark:border-gray-700"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {isSubmitting ? t('sending') : t('send')}
                </Button>
              </form>
            </motion.div>


            {/* 右侧联系信息 */}
            <motion.div 
              className="w-full lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-black dark:text-primary" />
                <p><a href="mailto:support@rolitt.com">support@rolitt.com</a></p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-black dark:text-primary" />
                <p>Dover,DE, USA</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-black dark:text-primary" />
                <p>+1 302 444 2859</p>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{t('follow_us')}</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-primary transition-colors"
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}