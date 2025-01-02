//home page welcoming text
"use client";
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

const InfoSection = () => {
  const { language, translations } = useLanguage();

  return (
    <div className="w-full">
      {/* Top Content Section */}
      <div className="flex gap-8 p-5 bg-[#eefafd] rounded-2xl mb-10 items-start flex-col lg:flex-row">
        {/* Title for mobile - shows first on mobile, hidden on desktop */}
        <div className="w-full text-center lg:hidden">
          <h1 className="text-[#0066cc] text-4xl font-bold mb-5 pb-2.5 border-b-3 border-[#0066cc] inline-block">
          {translations['home-info.title'][language]}
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex-none lg:w-2/5 flex flex-col gap-5 w-full max-w-[500px] mx-auto">
          <div className="relative w-[70%] mx-auto">
            <Image
              src="/maps/bangladesh_Kaliakair.webp"
              alt="Map of Bangladesh highlighting Kaliakair"
              width={400}
              height={300}
              className="w-full h-auto border border-gray-300 rounded-lg shadow-sm"
            />
          </div>
          <div className="relative w-[70%] mx-auto">
            <Image
              src="/maps/KaliakoirUpazilaRiver.webp"
              alt="Map of Kaliakair Upazila showing rivers and landmarks"
              width={400}
              height={300}
              className="w-full h-auto border border-gray-300 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 p-5 lg:p-5 w-full">
          {/* Title for desktop - hidden on mobile, shows in original position on desktop */}
          <h1 className="hidden lg:block text-[#0066cc] text-4xl font-bold mb-5 pb-2.5 border-b-3 border-[#0066cc]">
          {translations['home-info.title'][language]}
          </h1>

          <div className="space-y-4">
            <p className="bg-[#f0f8ff] p-4 border-l-4 border-red-500 rounded text-gray-800 leading-relaxed">
            {translations['home-info.p1'][language]}
            </p>

            <p className="bg-[#f0f8ff] p-4 border-l-4 border-[#1e90ff] rounded text-gray-800 leading-relaxed">
              Geographically, Kaliakair is located at latitude 24.0730°N and longitude 90.2167°E. It
              is bordered by Mirzapur and Sakhipur upazilas to the north, Savar and Dhamrai upazilas
              to the south, Gazipur Sadar and Sreepur upazilas to the east, and Mirzapur upazila to the
              west.
            </p>

            <p className="bg-[#f0f8ff] p-4 border-l-4 border-[#dc3545] rounded text-gray-800 leading-relaxed">
              The primary rivers in the area are Turag, Bangshi, and Salda. Other notable water
              bodies include Boali, Hawla, Ujan, and Markaj beels, along with the Goala and Betjuri
              canals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;