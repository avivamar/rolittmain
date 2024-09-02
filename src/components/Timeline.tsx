'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 h-full w-0.5 bg-gray-200 dark:bg-gray-700 md:left-1/2 md:-ml-0.5"></div>
      {events.map((event, index) => (
        <TimelineEvent key={index} event={event} index={index} />
      ))}
    </div>
  );
};

const TimelineEvent: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      className="relative mb-12 md:mb-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {event.date}
          </time>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{event.description}</p>
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2 md:px-8">
          {!imageError ? (
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
              className="rounded-lg object-cover shadow-md"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-[300px] w-full items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
              <span className="text-sm text-gray-500 dark:text-gray-400">Image not available</span>
            </div>
          )}
        </div>
      </div>
      <div className="absolute left-4 top-0 -ml-1.5 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-ml-2"></div>
    </motion.div>
  );
};