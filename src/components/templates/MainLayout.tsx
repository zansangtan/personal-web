import React, { ReactNode } from 'react';
import SiteHeader from '../organisms/SiteHeader';
import SiteFooter from '../organisms/SiteFooter';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout; 