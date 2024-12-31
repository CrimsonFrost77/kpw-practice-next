"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface NavLinksProps {
  mobile?: boolean;
  setMenuOpen?: (open: boolean) => void;
}

const NavLinks = ({ mobile = false, setMenuOpen }: NavLinksProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, translations } = useLanguage();

  const links = [
    { href: '/', key: 'navbar.home' },
    { href: '/about', key: 'navbar.about' },
    { href: '/employees', key: 'navbar.employees' },
    { href: '/forms', key: 'navbar.forms' },
    { href: '/projects', key: 'navbar.projects' },
    { href: '/notices', key: 'navbar.notices' },
    { href: '/contacts', key: 'navbar.contacts' },
  ];

  const dropdownLinks = [
    { href: '/tenders', key: 'navbar.tenders' },
    { href: '/gallery', key: 'navbar.gallery' },
    { href: '/news', key: 'navbar.news' },
  ];

  const handleClick = () => {
    if (mobile && setMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={`${mobile ? 'flex flex-col' : 'flex'}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`
            text-white whitespace-nowrap text-sm xl:text-base transition-all duration-300 ease-in-out
            ${mobile 
              ? 'px-6 py-4 hover:bg-[#49c581] block w-full'
              : 'px-3 xl:px-4 py-2 hover:bg-[#49c581] h-full flex items-center'}
          `}
          onClick={handleClick}
        >
          {translations[link.key][language]}
        </Link>
      ))}
      
      <div className={mobile ? 'w-full' : 'relative group'}>
        <button 
          className={`
            text-white w-full text-left text-sm xl:text-base transition-all duration-300 ease-in-out
            ${mobile 
              ? 'px-6 py-4 hover:bg-[#49c581]'
              : 'px-3 xl:px-4 py-2 hover:bg-[#49c581] h-full'
            }
          `}
          onClick={() => mobile && setActiveDropdown(activeDropdown === 'more' ? null : 'more')}
        >
          {translations['navbar.more'][language]}
        </button>
        <div className={`
          ${mobile 
            ? 'bg-[#006544] w-full'
            : 'absolute right-0 bg-[#007554] min-w-[200px] shadow-lg'
          } 
          ${mobile 
            ? activeDropdown === 'more' ? 'block' : 'hidden'
            : 'hidden group-hover:block z-40'
          }
        `}>
          {dropdownLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-white block text-sm xl:text-base transition-all duration-300 ease-in-out
                ${mobile
                  ? 'px-10 py-4 hover:bg-[#49c581]'
                  : 'px-4 py-2 hover:bg-[#49c581]'
                }
              `}
              onClick={handleClick}
            >
              {translations[link.key][language]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLinks;