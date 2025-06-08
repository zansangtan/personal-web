import React from 'react';
import { useTranslation } from 'react-i18next';
import PortfolioCard from '../molecules/PortfolioCard';

// Define a type for our project data for type safety
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  tags: string[];
}

const PortfolioGrid: React.FC = () => {
  const { t } = useTranslation();
  const projects: Project[] = t('portfolio.projects', { returnObjects: true }) as Project[] || [];

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 sm:mb-16">
          {t('portfolio.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map(project => (
            <PortfolioCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid; 