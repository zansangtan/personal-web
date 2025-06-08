import React from 'react';

interface GalleryCardProps {
  imageUrl?: string;
  caption?: string;
  altText?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ imageUrl, caption, altText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="w-full h-64 sm:h-72 bg-gray-300 flex items-center justify-center relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={altText || caption || 'Gallery image'} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <span className="text-gray-500">Gallery Image</span>
        )}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs sm:text-sm truncate transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCard; 