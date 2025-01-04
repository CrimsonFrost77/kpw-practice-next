// ImageThumbnail.tsx
"use client";
import React from 'react';
import Image from 'next/image';

interface ImageThumbnailProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageThumbnail = ({ src, alt, onClick }: ImageThumbnailProps) => {
  return (
    <button 
      onClick={onClick}
      className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer"
      aria-label={`Open ${alt} in gallery`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      {/* Overlay only shows on desktop hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end">
        <p className="text-white p-4 text-sm">{alt}</p>
      </div>
    </button>
  );
};

export default ImageThumbnail;