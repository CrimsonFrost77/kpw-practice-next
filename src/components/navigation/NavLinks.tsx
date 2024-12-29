"use client";

import React from 'react';
import Link from 'next/link';

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks = ({ mobile = false }: NavLinksProps) => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/employees', label: 'Employees/Members' },
    { href: '/forms', label: 'Forms' },
    { href: '/projects', label: 'Projects/Budgets' },
    { href: '/notices', label: 'Notice' },
    { href: '/contacts', label: 'Contacts' },
  ];

  const dropdownLinks = [
    { href: '/tenders', label: 'Tenders' },
    { href: '/gallery', label: 'Photo Gallery' },
    { href: '/news', label: 'News and Updates' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            mobile
              ? 'block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100'
              : 'px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100'
          }`}
        >
          {link.label}
        </Link>
      ))}
      
      <div className={`${mobile ? 'relative' : 'relative group'}`}>
        <button className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 w-full text-left">
          More
        </button>
        <div className={`${
          mobile
            ? 'pl-4 space-y-2'
            : 'absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block'
        }`}>
          {dropdownLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                mobile
                  ? 'block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100'
                  : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavLinks;