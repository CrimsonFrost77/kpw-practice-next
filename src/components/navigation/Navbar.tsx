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
      <nav className="fixed left-0 right-0 top-0 bg-[#007554] z-50 h-[125px] shadow-lg">
        <div className="max-w-[1200px] mx-auto h-full">
          <div className="flex items-center h-full relative px-4">
            {/* Logo and Title Section */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-6">
                <div className="relative w-[80px] h-[80px]">
                  <Image
                    src="/git_logo_transparent.webp"
                    alt="Kaliakair-pourashava-logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="text-white text-2xl font-semibold hidden md:block">
                  Kaliakair Municipality
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-auto">
              <NavLinks />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-auto text-white text-3xl md:hidden"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="absolute top-[125px] right-4 bg-[#007554] text-white py-1 px-4 rounded-b-md z-20">
          <div className="flex items-center gap-2">
            <Link href="#" className={`hover:opacity-80 ${currentLang === 'bn' ? 'font-bold' : ''}`}>
              বাংলা
            </Link>
            <span>|</span>
            <Link href="#" className={`hover:opacity-80 ${currentLang === 'en' ? 'font-bold underline' : ''}`}>
              English
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#007554] z-40 md:hidden pt-[125px]">
          <div className="flex flex-col">
            <NavLinks mobile={true} setMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;