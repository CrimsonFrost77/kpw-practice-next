"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';
import { useLanguage } from '@/app/contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed left-0 right-0 top-0 bg-[#007554]/80 hover:bg-[#257a5f] shadow-lg z-50 transition-all duration-500 ease-in-out">
        <div className=" mx-auto">
          <div className="flex justify-between items-center h-[125px] px-4 [@media(min-width:1200px)]:pl-24">
            {/* Logo Section */}
            <div className="flex items-center gap-6 [@media(max-width:925px)]:absolute [@media(max-width:925px)]:left-1/2 [@media(max-width:925px)]:-translate-x-1/2 transition-all duration-500 ease-in-out">
              <Link href="/" className="flex items-center gap-6 cursor-pointer">
                <div className="relative w-[80px] h-[80px] min-w-[80px] transition-all duration-500 ease-in-out">
                  <Image
                    src="/git_logo_transparent.webp"
                    alt="Kaliakair-pourashava-logo"
                    fill
                    className="object-contain transition-all duration-500 ease-in-out"
                  />
                </div>
                <h1 className="text-white text-2xl [@media(max-width:925px)]:text-3xl font-semibold block transition-all duration-500 ease-in-out">
                  {translations['site.title'][language]}
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden [@media(min-width:925px)]:flex [&>div]:text-base xl:text-base cursor-pointer">
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

        {/* Language Switcher */}
        <div className="absolute top-[125px] right-4 bg-[#007554] text-white py-1 px-4 rounded-b-md z-30">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLanguage('bn')} 
              className={`hover:opacity-90 ${language === 'bn' ? 'font-bold underline' : ''}`}
            >
              বাংলা
            </button>
            <span>|</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`hover:opacity-90 ${language === 'en' ? 'font-bold underline' : ''}`}
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