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

  return (
    <div className={`${mobile ? 'flex flex-col' : 'flex'}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`
            text-white whitespace-nowrap text-sm xl:text-base transition-all duration-300 ease-in-out
            ${mobile 
              ? 'px-6 py-4 hover:bg-[#008f66] block w-full'
              : 'px-3 xl:px-4 py-2 hover:bg-[#008f66] h-full flex items-center'}
          `}
          onClick={handleClick}
        >
          {link.label}
        </Link>
      ))}
      
      <div className={mobile ? 'w-full' : 'relative group'}>
        <button 
          className={`
            text-white w-full text-left text-sm xl:text-base transition-all duration-300 ease-in-out
            ${mobile 
              ? 'px-6 py-4 hover:bg-[#008f66]'
              : 'px-3 xl:px-4 py-2 hover:bg-[#008f66] h-full'
            }
          `}
          onClick={() => mobile && setActiveDropdown(activeDropdown === 'more' ? null : 'more')}
        >
          More
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
                  ? 'px-10 py-4 hover:bg-[#008f66]'
                  : 'px-4 py-2 hover:bg-[#008f66]'
                }
              `}
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