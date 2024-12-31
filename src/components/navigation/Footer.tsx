"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-transparent p-0 font-sans">
      {/* Footer Container */}
      <div className="max-w-[1200px] mx-auto bg-white/90 
        shadow-[5px_0_10px_-5px_rgba(0,0,0,0.1),-5px_0_10px_-5px_rgba(0,0,0,0.1),0_5px_10px_-5px_rgba(0,0,0,0.1)]
        border-l border-r border-b border-black/10">
        {/* Footer Top Image */}
        <div className="relative w-full h-12">
          <Image
            src="/artwork/foot.jpg"
            alt="Decorative Image Above Footer"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Footer Content */}
        <div className="px-5 py-5">
          <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
            <div className="text-sm text-gray-600 mb-2.5 md:mb-0">
              Last Updated: 2024-11-01 23:59:53
            </div>
            <div className="text-sm text-gray-600 mb-2.5 md:mb-0">
              Planning and Implementation: Cabinet Division, a2i, BCC, DoICT & BASIS
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-5 flex flex-wrap md:flex-nowrap justify-center items-center">
            <div className="relative h-10 w-40 mx-2.5">
              <Image
                src="/Bangladesh_Gov_Logo.png"
                alt="Bangladesh Government Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-4 w-40 mx-2.5">
              <Image
                src="/artwork/CF_logo_horizontal_blktype.png"
                alt="Logo 2"
                fill
                className="object-contain"
              />
            </div>
            <Link 
              href="https://github.com/CrimsonFrost77/KPW-Repo2"
              className="relative h-8 w-40 mx-2.5"
            >
              <Image
                src="/artwork/Logo_alxx.png"
                alt="Company Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;