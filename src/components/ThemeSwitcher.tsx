'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/sounds/switch-theme.wav');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error('Error playing audio:', error));
    }
  };

  return (
    <Button onClick={toggleTheme} variant="outline" className="p-2">
      {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
    </Button>
  );
};

export default ThemeSwitcher;