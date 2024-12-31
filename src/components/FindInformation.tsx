import React from 'react';
import NewsUpdatesCard from './cards/NewsUpdatesCard';
import EventsCard from './cards/EventsCard';
import PhotoGalleryCard from './cards/PhotoGalleryCard';
import HelplinesCard from './cards/HelplinesCard';

const FindInformation = () => {
  // Example data - replace with actual data from CMS
  const sampleArticles = [
    { headline: "Miscreants torch bus in Gazipur", url: "/news/1" },
    { headline: "Couple dies as mud house collapses in Gazipur", url: "/news/2" },
    { headline: "5 factories out of 1278 closed in Savar, Ashulia, Gazipur: CA's press wing", url: "/news/3" },
    { headline: "Body of missing expatriate found in Kaliakair", url: "/news/4" }
  ];

  const sampleEvents = [
    { title: "This event and that event.", url: "/events/1" }
  ];

  const sampleHelplines = [
    { name: "Helpline 1", image: "/helplines/333.png" },
    { name: "Helpline 2", image: "/helplines/999.png" },
    { name: "Helpline 3", image: "/helplines/109.png" },
    { name: "Helpline 4", image: "/helplines/106.png" }
  ];

  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-[#007554]">Find Information</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <NewsUpdatesCard articles={sampleArticles} />
        <EventsCard events={sampleEvents} />
        <PhotoGalleryCard featuredImage="/path/to/featured/image.jpg" />
        <HelplinesCard helplines={sampleHelplines} />
      </div>
    </div>
  );
};

export default FindInformation;