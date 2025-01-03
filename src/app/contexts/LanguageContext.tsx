'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

const translations = {
  'navbar.home': {
    en: 'Home',
    bn: 'হোম'
  },
  'navbar.about': {
    en: 'About',
    bn: 'সম্পর্কে'
  },
  'navbar.employees': {
    en: 'Employees/Members',
    bn: 'কর্মচারী/সদস্য'
  },
  'navbar.forms': {
    en: 'Forms',
    bn: 'ফরম'
  },
  'navbar.projects': {
    en: 'Project/Budgets',
    bn: 'প্রকল্প/বাজেট'
  },
  'navbar.notices': {
    en: 'Notice',
    bn: 'নোটিশ'
  },
  'navbar.contacts': {
    en: 'Contacts',
    bn: 'যোগাযোগ'
  },
  'navbar.more': {
    en: 'More',
    bn: 'আরও'
  },
  'navbar.tenders': {
    en: 'Tenders',
    bn: 'দরপত্র'
  },
  'navbar.gallery': {
    en: 'Photo Gallery',
    bn: 'ফটো গ্যালারি'
  },
  'navbar.news': {
    en: 'News and Updates',
    bn: 'খবর এবং আপডেট'
  },
  'site.title': {
    en: 'Kaliakair Municipality',
    bn: 'কালিয়াকৈর পৌরসভা'
  },
  'home-info.title': {
    en: 'Welcome to Kaliakair Municipality',
    bn: 'কালিয়াকৈর পৌরসভায় আপনাকে স্বাগতম'
  },
  'home-info.p1': {
    en: `Established in 2003 (with its foundations set in 2001), Kaliakoir Municipality is
              designated as a Class A municipality, consisting of a total of 9 wards. Covering an area
              of 28.02 sq. km, it supports a population of approximately 700,000 people and includes
              19,150 holdings.`,
    bn: `২০০৩ সালে প্রতিষ্ঠিত (২০০১ সালে ভিত্তি স্থাপন), কালিয়াকৈর পৌরসভা একটি এ শ্রেণির পৌরসভা হিসেবে নির্ধারিত, যা মোট ৯টি ওয়ার্ড নিয়ে গঠিত। ২৮.০২ বর্গ কিলোমিটার এলাকা জুড়ে বিস্তৃত এই পৌরসভায় প্রায় ৭,০০,০০০ জনসংখ্যা বসবাস করে এবং ১৯,১৫০টি হোল্ডিং রয়েছে।`
  },
  'about-info.title':{
    en:  'About kaliakor municipality',
    bn:  'কালিয়াকোর পৌরসভা সম্পর্কে'
  },
  'about-info.p1':{
    en:'Kaliakair Municipality, established in 2003, stands as a testament to urban development in the Gazipur District. Our municipality has grown from its humble beginnings to become a vital center of commerce and community life.',
    bn:'কালিয়াকৈর পৌরসভা, 2003 সালে প্রতিষ্ঠিত, গাজীপুর জেলার নগর উন্নয়নের একটি প্রমাণ হিসাবে দাঁড়িয়েছে। আমাদের পৌরসভা তার নম্র সূচনা থেকে বানিজ্য এবং সম্প্রদায়ের জীবনের একটি গুরুত্বপূর্ণ কেন্দ্রে পরিণত হয়েছে।'
  },
  'about-info.p2':{
    en:'Located at a strategic point in Gazipur District, Kaliakair Municipality serves as an important hub connecting various major urban centers.The municipality location has played a crucial role in its development as both a residential and commercial center ',
    bn:'গাজীপুর জেলার একটি কৌশলগত পয়েন্টে অবস্থিত, কালিয়াকৈর পৌরসভা বিভিন্ন প্রধান নগর কেন্দ্রের সাথে সংযোগ স্থাপনকারী একটি গুরুত্বপূর্ণ কেন্দ্র হিসেবে কাজ করে।পৌরসভার অবস্থানটি একটি আবাসিক এবং বাণিজ্যিক কেন্দ্র হিসাবে এর বিকাশে একটি গুরুত্বপূর্ণ ভূমিকা পালন করেছে'
  },
  'about-info.p3':{
    en:'The jurisdiction of Kaliakair Municipality covers various important areas including residential zones, commercial districts, and industrial areas. Each ward has been carefully planned to ensure balanced development and efficient service delivery to all residents',
    bn:'কালিয়াকৈর পৌরসভার অধিক্ষেত্র আবাসিক অঞ্চল, বাণিজ্যিক জেলা এবং শিল্প এলাকা সহ বিভিন্ন গুরুত্বপূর্ণ এলাকা জুড়ে। প্রতিটি ওয়ার্ডের সুষম উন্নয়ন এবং সমস্ত বাসিন্দাদের জন্য দক্ষ পরিষেবা সরবরাহ নিশ্চিত করার জন্য সতর্কতার সাথে পরিকল্পনা করা হয়েছে'
  },
  'about-info.p4':{
    en:'The future development plans for Kaliakair Municipality focus on enhancing infrastructure, improving public services, and creating more green spaces for residents. These initiatives aim to make Kaliakair an even more livable and sustainable urban center.',
    bn:'কালিয়াকৈর পৌরসভার ভবিষ্যত উন্নয়ন পরিকল্পনাগুলি অবকাঠামো উন্নত করা, জনসেবা উন্নত করা এবং বাসিন্দাদের জন্য আরও সবুজ স্থান তৈরি করাকে কেন্দ্র করে৷ এই উদ্যোগগুলির লক্ষ্য কালিয়াকৈরকে আরও বেশি বাসযোগ্য এবং টেকসই নগর কেন্দ্রে পরিণত করা।'
  }


};

//creating a context for language
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

//creating a provider for language
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  //setting the language from local storage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  //setting the language to local storage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  //returning the context provider
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

//creating a hook for language
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}