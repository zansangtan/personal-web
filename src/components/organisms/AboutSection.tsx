import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
          {t('about.title')}
        </h2>
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0 text-center flex-shrink-0">
            <img 
              src="/images/profile.jpg" 
              alt={t('about.greeting')}
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-full mx-auto shadow-lg object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">{t('about.greeting')}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('about.p1')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('about.p2')}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t('about.p3')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about.p4')}
            </p>
            {/* Optional: Add a call to action button like 'Download CV' or 'View Resume' here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 