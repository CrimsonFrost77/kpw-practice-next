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
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/KPLogo_white.png"
                alt="Kaliakair-pourashava-logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <h1 className="text-xl font-semibold hidden md:block">
                {currentLang === 'en' ? 'Kaliakair Municipality' : 'কালিয়াকৈর পৌরসভা'}
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {currentLang === 'en' ? 'বাংলা' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <div className="flex flex-col space-y-2">
              <NavLinks mobile />
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 text-left rounded-md text-gray-700 hover:bg-gray-100"
              >
                {currentLang === 'en' ? 'বাংলা' : 'English'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;