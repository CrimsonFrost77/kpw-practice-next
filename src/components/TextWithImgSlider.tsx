'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface TextWithImgSliderProps {
  titleKey: string;
  images: {
    src: string;
    alt: string;
  }[];
  content: React.ReactNode;
}

const TextWithImgSlider = ({ titleKey, images, content }: TextWithImgSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language, translations } = useLanguage();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-[#0d3d35] text-2xl font-bold mb-6">
        {translations[titleKey][language]}
      </h2>
      
      {/* Responsive container with float behavior */}
      <div className="relative">
        {/* Image Slider - Floated on larger screens */}
        <div className="float-right ml-6 mb-4 w-full md:w-96">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              fill
              className="object-cover"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-[#0d3d35]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text Content - Wraps around the floated image */}
        <div className="prose max-w-none text-justify">
          {content}
        </div>

        {/* Clear float */}
        <div className="clear-both" />
      </div>
    </div>
  );
};

export default TextWithImgSlider;