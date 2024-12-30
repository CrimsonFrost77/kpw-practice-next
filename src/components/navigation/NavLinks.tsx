"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface NavLinksProps {
  mobile?: boolean;
  setMenuOpen?: (open: boolean) => void;
}

const NavLinks = ({ mobile = false, setMenuOpen }: NavLinksProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/employees', label: 'Employees/Members' },
    { href: '/forms', label: 'Forms' },
    { href: '/projects', label: 'Project/Budgets' },
    { href: '/notices', label: 'Notice' },
    { href: '/contacts', label: 'Contacts' },
  ];

  const dropdownLinks = [
    { href: '/tenders', label: 'Tenders' },
    { href: '/gallery', label: 'Photo Gallery' },
    { href: '/news', label: 'News and Updates' },
  ];

  const handleClick = () => {
    if (mobile && setMenuOpen) {
      setMenuOpen(false);
    }
  };

  const navLinkStyles = mobile
    ? "text-white px-6 py-4 hover:bg-[#008f66] block w-full text-left"
    : "text-white px-4 py-2 hover:text-gray-200 transition-colors whitespace-nowrap h-full flex items-center";

  return (
    <div className={`${mobile ? 'flex flex-col w-full' : 'flex items-center h-full'}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={navLinkStyles}
          onClick={handleClick}
        >
          {link.label}
        </Link>
      ))}
      
      <div className={`${mobile ? 'w-full' : 'relative group h-full'}`}>
        <button 
          className={mobile 
            ? "text-white px-6 py-4 hover:bg-[#008f66] block w-full text-left"
            : "text-white px-4 py-2 hover:text-gray-200 transition-colors h-full flex items-center"
          }
          onClick={() => mobile && setActiveDropdown(activeDropdown === 'more' ? null : 'more')}
        >
          More
        </button>
        <div className={`
          ${mobile 
            ? 'bg-[#006544] w-full'
            : 'absolute right-0 bg-[#007554] min-w-[200px] shadow-lg z-30'
          } 
          ${mobile 
            ? activeDropdown === 'more' ? 'block' : 'hidden'
            : 'hidden group-hover:block'
          }
        `}>
          {dropdownLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={mobile
                ? "text-white px-10 py-4 hover:bg-[#008f66] block w-full"
                : "text-white px-4 py-2 hover:bg-[#008f66] block whitespace-nowrap"
              }
              onClick={handleClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLinks;