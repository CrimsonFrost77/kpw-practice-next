"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'bn' : 'en');
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed left-0 right-0 top-0 bg-[#007554] shadow-lg z-50">
        <div className=" mx-auto">
          <div className="flex justify-between items-center h-[125px] px-4">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-6">
              <div className="relative w-[80px] h-[80px]">
                <Image
                  src="/git_logo_transparent.webp"
                  alt="Kaliakair-pourashava-logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-white text-2xl font-semibold block">
                Kaliakair Municipality
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden [@media(min-width:925px)]:flex [&>div]:text-base xl:text-base">
              <NavLinks />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-3xl [@media(min-width:925px)]:hidden"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Language Switcher - Moved inside nav */}
        <div className="absolute top-[125px] right-4 bg-[#007554] text-white py-1 px-4 rounded-b-md z-30">
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleLanguage} 
              className={`hover:opacity-90 ${currentLang === 'bn' ? 'font-bold underline' : ''}`}
            >
              বাংলা
            </button>
            <span>|</span>
            <button 
              onClick={toggleLanguage} 
              className={`hover:opacity-90 ${currentLang === 'en' ? 'font-bold underline' : ''}`}
            >
              English
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Wrapper */}
      <div className="fixed top-[125px] left-0 right-0 overflow-hidden [@media(min-width:925px)]:hidden z-40">
        <div 
          className={`
            bg-[#007554] w-full transform
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          <NavLinks mobile={true} setMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </>
  );
};

export default Navbar;