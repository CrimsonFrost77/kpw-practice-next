'use client';

import React from 'react'
import { useLanguage } from '@/app/contexts/LanguageContext'

function AboutPageText() {
  const { language, translations } = useLanguage();

  return (
    <div>
      <p className="text-gray-800 leading-relaxed mb-4">
        {translations['about-info.p1'][language]}
      </p>
      
      <p className="text-gray-800 leading-relaxed mb-4">
      {translations['about-info.p2'][language]}
      </p>
      
      <p className="text-gray-800 leading-relaxed mb-4">
      {translations['about-info.p3'][language]}
      </p>
      
      <p className="text-gray-800 leading-relaxed">
      {translations['about-info.p4'][language]}
      </p>
    </div>
  )
}

export default AboutPageText