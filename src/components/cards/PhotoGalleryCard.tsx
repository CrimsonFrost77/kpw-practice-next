"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera } from 'lucide-react';
import BaseCard from './BaseCard';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryCardProps {
  photos: Photo[];
}

const PhotoGalleryCard = ({ photos }: PhotoGalleryCardProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    // Set up the interval for auto-rotation
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Change image every 5 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [photos.length]);

  // Handle manual navigation
  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <BaseCard title="Photo Gallery" icon={Camera}>
      <div className="relative w-full h-48 mb-4 group">
        {/* Current Image */}
        <div className="relative w-full h-full">
          <Image
            src={photos[currentPhotoIndex].src}
            alt={photos[currentPhotoIndex].alt}
            fill
            className="object-contain rounded-lg transition-opacity duration-500"
          />
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${currentPhotoIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/60 hover:bg-white/80'}`}
              onClick={() => setCurrentPhotoIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Only visible on hover */}
        <button
          onClick={goToPrevPhoto}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            hover:bg-black/70"
          aria-label="Previous photo"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
        
        <button
          onClick={goToNextPhoto}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            hover:bg-black/70"
          aria-label="Next photo"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>

      <Link
        href="/gallery"
        className="inline-block bg-[#007554] text-white px-4 py-2 rounded hover:bg-[#006544] transition-colors duration-200"
      >
        View More Photos
      </Link>
    </BaseCard>
  );
};

export default PhotoGalleryCard;