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