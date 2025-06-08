import React from 'react';
import { useTranslation } from 'react-i18next';
import GalleryCard from '../molecules/GalleryCard';

interface GalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
  altText: string;
}

const GalleryGrid: React.FC = () => {
  const { t } = useTranslation();
  const galleryImages: GalleryImage[] = t('gallery.images', { returnObjects: true }) as GalleryImage[] || [];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 sm:mb-16">
          {t('gallery.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map(image => (
            <GalleryCard
              key={image.id}
              imageUrl={image.imageUrl}
              caption={image.caption}
              altText={image.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid; 