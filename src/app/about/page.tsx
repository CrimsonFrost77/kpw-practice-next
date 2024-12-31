// Source: /about/page.tsx


import MunicipalityDashboard from '@/components/MunicipalityDashboard';
import TextWithImgSlider from '@/components/TextWithImgSlider';

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
            <p className="text-gray-800 leading-relaxed mb-4">
              Kaliakair Municipality, established in 2003, stands as a testament to urban
              development in the Gazipur District. Our municipality has grown from its humble
              beginnings to become a vital center of commerce and community life.
            </p>
            
            <p className="text-gray-800 leading-relaxed mb-4">
              Located at a strategic point in Gazipur District, Kaliakair Municipality serves
              as an important hub connecting various major urban centers. The municipality's
              location has played a crucial role in its development as both a residential and
              commercial center.
            </p>
            
            <p className="text-gray-800 leading-relaxed mb-4">
              The jurisdiction of Kaliakair Municipality covers various important areas
              including residential zones, commercial districts, and industrial areas. Each
              ward has been carefully planned to ensure balanced development and efficient
              service delivery to all residents.
            </p>
            
            <p className="text-gray-800 leading-relaxed">
              The future development plans for Kaliakair Municipality focus on enhancing
              infrastructure, improving public services, and creating more green spaces for
              residents. These initiatives aim to make Kaliakair an even more livable and
              sustainable urban center.
            </p>
          </>
        }
      />
    </div>
  );
}