import React from 'react';
import { useTranslation } from 'react-i18next';

const SiteFooter: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">
          {t('footer.copyright', { year: currentYear })}
        </p>
        {/* <div className="mt-2 text-center text-xs">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> 
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default SiteFooter; 