import React from 'react';
import MainLayout from '../components/templates/MainLayout';
import AboutSection from '../components/organisms/AboutSection';
import PortfolioGrid from '../components/organisms/PortfolioGrid';
import GalleryGrid from '../components/organisms/GalleryGrid';
import ContactDetailsSection from '../components/organisms/ContactDetailsSection';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <AboutSection />
      {/* <PortfolioGrid />
      <GalleryGrid /> */}
      <ContactDetailsSection />
    </MainLayout>
  );
};

export default HomePage; 