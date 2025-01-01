// Source: /about/page.tsx


import MunicipalityDashboard from '@/components/MunicipalityDashboard';
import TextWithImgSlider from '@/components/TextWithImgSlider';
import React from 'react';
import AboutPageText from '@/components/AboutPageText';
import ImageTextWrapper from '@/components/ImageTextWrapper';

export default function About() {
  

  const images = [
    {
      src: "/maps/Map_1_1.jpg",
      alt: "Kaliakair Municipality Map 1"
    },
    {
      src: "/maps/Map_2_1.jpg",
      alt: "Kaliakair Municipality Map 2"
    },
    {
      src: "/maps/map_jurisdiction2.jpg",
      alt: "Kaliakair Municipality Jurisdiction Map"
    }
  ];
 
  return (
    <div className="space-y-8">
      <MunicipalityDashboard />
      
      <TextWithImgSlider
        title="About Kaliakair Municipality"
        
        images={images}
       
        content={
          <>
            <AboutPageText />
          </>
        }
      />
    </div>
  );
}