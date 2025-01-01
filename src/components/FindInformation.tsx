"use client";

import React from 'react';
import NewsUpdatesCard from './cards/NewsUpdatesCard';
import EventsCard from './cards/EventsCard';
import PhotoGalleryCard from './cards/PhotoGalleryCard';
import HelplinesCard from './cards/HelplinesCard';

const FindInformation = () => {
  // Example data - replace with actual data from CMS
  const sampleArticles = [
    { headline: "Miscreants torch bus in Gazipur", url: "https://en.prothomalo.com/bangladesh/local-news/dbmx3by8v7" },
    { headline: "Couple dies as mud house collapses in Gazipur", url: "https://en.prothomalo.com/bangladesh/local-news/om84py3yng" },
    { headline: "5 factories out of 1278 closed in Savar, Ashulia, Gazipur: CA's press wing", url: "https://en.prothomalo.com/business/local/fow88gi0ez" },
    { headline: "Body of missing expatriate found in Kaliakair", url: "https://en.prothomalo.com/bangladesh/Body-of-missing-expatriate-found-in-Kaliakair" }
  ];

  const sampleEvents = [
    { title: "This event and that event.", url: "/events/1" }
  ];

  const sampleHelplines = [
    { name: "Helpline 1", image: "/helplines/333.png" },
    { name: "Helpline 2", image: "/helplines/999.png" },
    { name: "Helpline 3", image: "/helplines/1090.png" },
    { name: "Helpline 4", image: "/helplines/106.png" },
    { name: "Helpline 5", image: "/helplines/1098.png" },
    { name: "Helpline 6", image: "/helplines/109.png" }
  ];


  const samplePhotos = [
    { src: "/asthetic-photos/HighTEch.webp", alt: "Bangabandhu Hi-Tech Park" },
    { src: "/asthetic-photos/Kaliakoir_Pic1.webp", alt: "Wow! Kaliakoir" },
    { src: "/asthetic-photos/Kaliakoir_rail.webp", alt: "Kaliakoir Rail" },
    { src: "/asthetic-photos/Mokhosh_swamp.webp", alt: "Mokhosh swamp" }
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white bg-[#007554] rounded-lg ">Find Information</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <NewsUpdatesCard articles={sampleArticles} />
        <EventsCard events={sampleEvents} />
        <PhotoGalleryCard photos={samplePhotos} />
        <HelplinesCard helplines={sampleHelplines} />
      </div>
    </div>
  );
};

export default FindInformation;