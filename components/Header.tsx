'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`z-20 bg-white fixed top-[36px] ${
        isVisible ? 'sticky-header' : 'sticky-header-hidden'
      }`}
    >
      <div className="flex justify-center items-center h-[5.25rem] px-20 border-b border-[rgba(88,88,88,0.08)]">
        <div className="relative h-[30px] w-full">
          <Image
            src="/logo.avif"
            alt="DoctorsNote"
            fill
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
