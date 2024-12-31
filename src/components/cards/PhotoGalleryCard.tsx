import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera } from 'lucide-react';
import BaseCard from './BaseCard';

interface PhotoGalleryCardProps {
  featuredImage: string;
}

const PhotoGalleryCard = ({ featuredImage }: PhotoGalleryCardProps) => {
  return (
    <BaseCard title="Photo Gallery" icon={Camera}>
      <div className="relative w-full h-48 mb-4">
        <Image
          src={featuredImage}
          alt="Featured gallery image"
          fill
          className="object-cover rounded-lg"
        />
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