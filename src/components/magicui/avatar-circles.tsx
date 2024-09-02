"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/Helpers";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex justify-center items-center", className)}>
      {avatarUrls.map((url, index) => (
        <motion.img
          key={index}
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1.5, x: 20 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.5, zIndex: 20 }}
        />
      ))}
      <motion.a
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
        href=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: avatarUrls.length * 0.1 }}
        whileHover={{ scale: 1.1 }}
      >
        +{numPeople}
      </motion.a>
    </div>
  );
};

export default AvatarCircles;