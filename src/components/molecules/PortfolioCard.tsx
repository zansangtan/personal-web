import React from 'react';
import { useTranslation } from 'react-i18next';

interface PortfolioCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  tags?: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  tags,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="w-full h-48 sm:h-56 bg-gray-300 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title || 'Project image'} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500">Project Image</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title || 'Project Title'}</h3>
        <div className="mb-3">
          {(tags && tags.length > 0) && tags.map(tag => (
            <span 
              key={tag} 
              className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description || 'Brief description of the project, highlighting key technologies and your role.'}
        </p>
        <div className="flex space-x-3">
          {projectUrl && (
            <a 
              href={projectUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
            >
              {t('portfolio.card.liveDemo')}
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md transition-colors duration-200"
            >
              {t('portfolio.card.viewCode')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard; 