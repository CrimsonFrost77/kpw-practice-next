// GalleryGrid.tsx
import React, { useState } from 'react';
import ImageThumbnail from './ImageThumbnail';
import GalleryModal from './GalleryModal';

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

interface GalleryItem {
  id: number;
  thumbnailSrc: string;
  images: GalleryImage[];
}

interface GalleryGridProps {
  galleries: GalleryItem[];
}

const GalleryGrid = ({ galleries }: GalleryGridProps) => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleries.map((gallery) => (
          <ImageThumbnail
            key={gallery.id}
            src={gallery.thumbnailSrc}
            alt={gallery.images[0].alt}
            onClick={() => handleThumbnailClick(gallery)}
          />
        ))}
      </div>

      {selectedGallery && (
        <GalleryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={selectedGallery.images}
        />
      )}
    </>
  );
};

export default GalleryGrid;