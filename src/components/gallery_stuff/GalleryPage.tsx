"use client";

import React from 'react';
import GalleryGrid from './GalleryGrid';
import { useLanguage } from '@/app/contexts/LanguageContext';

// Sample data structure - you would replace this with your actual data
const galleryData = [
  {
    id: 1,
    thumbnailSrc: "/asthetic-photos/HighTEch.webp",
    images: [
      {
        src: "/asthetic-photos/HighTEch.webp",
        alt: "Bangabandhu Hi-Tech Park",
        description: "The Bangabandhu Hi-Tech Park in Kaliakair is a state-of-the-art technology park that serves as a hub for IT and technology companies. The park features modern infrastructure and facilities to support the growing tech industry in Bangladesh."
      },
      // Add more images for this group
    ]
  },
  // Add more gallery items
];

const GalleryPage = () => {
  const { language } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white bg-[#007554] rounded-lg p-4">
        {language === 'en' ? 'Photo Gallery' : 'ফটো গ্যালারি'}
      </h1>
      <GalleryGrid galleries={galleryData} />
    </div>
  );
};

export default GalleryPage;