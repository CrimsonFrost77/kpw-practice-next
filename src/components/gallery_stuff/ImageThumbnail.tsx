// ImageThumbnail.tsx
import React from 'react';
import Image from 'next/image';

interface ImageThumbnailProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ImageThumbnail = ({ src, alt, onClick }: ImageThumbnailProps) => {
  return (
    <div 
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white p-4 text-sm">{alt}</p>
      </div>
    </div>
  );
};

export default ImageThumbnail;
