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