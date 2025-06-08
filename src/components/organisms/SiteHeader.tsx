import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SiteHeader: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{t('header.title')}</h1>
          <p className="text-xs text-gray-500">{t('header.subtitle')}</p>
        </div>

        <nav className="hidden sm:flex items-center space-x-4">
          <ul className="flex space-x-1 md:space-x-3">
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block py-2 px-2 text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded hover:bg-gray-100">{t('header.nav.about')}</a></li>
            {/* <li><a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="block py-2 px-2 text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded hover:bg-gray-100">{t('header.nav.portfolio')}</a></li>
            <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="block py-2 px-2 text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded hover:bg-gray-100">{t('header.nav.gallery')}</a></li> */}
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block py-2 px-2 text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded hover:bg-gray-100">{t('header.nav.contact')}</a></li>
          </ul>
           <div className="flex items-center border-l border-gray-200 ml-4 pl-4">
            <button onClick={() => changeLanguage('en')} className={`text-sm font-medium ${i18n.language === 'en' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>EN</button>
            <span className="mx-1 text-gray-300">|</span>
            <button onClick={() => changeLanguage('zh')} className={`text-sm font-medium ${i18n.language.includes('zh') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>ZH</button>
          </div>
        </nav>

        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu" role="dialog" aria-modal="true">
          <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-30 transition-opacity duration-300 ease-linear"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          ></div>

          <div className="fixed inset-y-0 right-0 z-40 w-3/4 max-w-sm bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="flex justify-end mb-4">
              <button onClick={toggleMobileMenu} className="p-2">
                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="mt-8">
              <ul className="space-y-4">
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md">{t('header.nav.about')}</a></li>
                {/* <li><a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="block py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md">{t('header.nav.portfolio')}</a></li> */}
                {/* <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="block py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md">{t('header.nav.gallery')}</a></li> */}
                <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md">{t('header.nav.contact')}</a></li>
              </ul>
            </nav>
            <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex justify-center space-x-4">
                    <button onClick={() => changeLanguage('en')} className={`text-base font-medium ${i18n.language === 'en' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>English</button>
                    <button onClick={() => changeLanguage('zh')} className={`text-base font-medium ${i18n.language.includes('zh') ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>中文</button>
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader; 