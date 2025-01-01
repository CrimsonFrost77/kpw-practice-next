"use client";

import React from 'react';
import GalleryGrid from './GalleryGrid';
import { useLanguage } from '@/app/contexts/LanguageContext';

// Sample data structure - you would replace this with your actual data
const galleryData = [
  {
    id: 1,
    thumbnailSrc: "/GalleryItems/Awareness-seminar/awareness-seminar2.jpeg",
    images: [
      {
        src: "/GalleryItems/Awareness-seminar/awareness-seminar1.jpeg",
        alt: "Awareness Seminar 2024",
        description: `The 2024 awareness seminar. The seminar was held in the municipal building.`
      },{
        src: "/GalleryItems/Awareness-seminar/awareness-seminar2.jpeg",
        alt: "Awareness Seminar 2024",
        description: `The 2024 awareness seminar. The seminar was held in the municipal building.`
      },{
        src: "/GalleryItems/Awareness-seminar/awareness-seminar3.jpeg",
        alt: "Awareness Seminar 2024",
        description: `The 2024 awareness seminar. The seminar was held in the municipal building.`
      },{
        src: "/GalleryItems/Awareness-seminar/awareness-seminar4.jpeg",
        alt: "Awareness Seminar 2024",
        description: `The 2024 awareness seminar. The seminar was held in the municipal building.`
      },{
        src: "/GalleryItems/Awareness-seminar/awareness-seminar5.jpeg",
        alt: "Awareness Seminar 2024",
        description: `The 2024 awareness seminar. The seminar was held in the municipal building.`
      },{
        src: "/GalleryItems/Awareness-seminar/awareness-seminar6.jpeg",
        alt: "Awareness Seminar 2024",
        description: `The 2024 awareness seminar. The seminar was held in the municipal building.`
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