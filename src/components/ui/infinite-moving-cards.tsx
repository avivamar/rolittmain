"use client";

import React, { useEffect, useState, useRef } from "react";

// 直接在文件中实现 cn 函数
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface InfiniteMovingCardsProps {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "normal",
  pauseOnHover = false,
  className,
}: InfiniteMovingCardsProps) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "25s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
 <li
 className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px] transition-all duration-300 ease-in-out hover:scale-105"
 style={{
   background: "rgba(235, 255, 127, 0.5)",
   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
   backdropFilter: "blur(5px)",
 }}
>
 <blockquote>
   <span className="relative z-20 text-sm leading-[1.6] text-gray-800 dark:text-gray-200 font-normal">
     {item.quote}
   </span>
   <div className="relative z-20 mt-6 flex flex-row items-center">
     <span className="flex flex-col gap-1">
       <span className="text-sm leading-[1.6] text-gray-900 dark:text-gray-100 font-semibold">
         {item.name}
       </span>
       <span className="text-sm leading-[1.6] text-gray-700 dark:text-gray-300 font-normal">
         {item.title}
       </span>
     </span>
   </div>
 </blockquote>
</li>
        ))}
      </ul>
    </div>
);
};
