
import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useSiteConfig } from '../contexts/SiteConfigContext';

interface EditableImageProps {
  path: string; // Path to the image object in siteConfig, e.g., 'pages.home.sections[0].images[0]'
  className?: string;
  width?: string;
  height?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ path, className, width, height }) => {
  const { isAdmin } = useAdmin();
  const { siteConfig, updateImage } = useSiteConfig();

  // Safely get the image object from the siteConfig based on the path
  const getImage = () => {
    let current: any = siteConfig;
    const pathParts = path.split('.');
    for (const part of pathParts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else if (Array.isArray(current) && !isNaN(Number(part))) {
        current = current[Number(part)];
      } else {
        return { src: 'https://picsum.photos/400/300?grayscale', alt: 'Placeholder image' };
      }
    }
    return current || { src: 'https://picsum.photos/400/300?grayscale', alt: 'Placeholder image' };
  };

  const image = getImage();

  const handleSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateImage(path, e.target.value, image.alt);
  };

  const handleAltChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateImage(path, image.src, e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateImage(path, reader.result as string, image.alt);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isAdmin) {
    return (
      <div className="flex flex-col gap-2 p-2 border border-dashed border-mcafeeGray rounded-md bg-white">
        <label className="text-sm font-semibold text-mcafeeDarkGray">Image URL:</label>
        <input
          type="text"
          className="w-full p-2 border border-mcafeeGray rounded text-sm"
          value={image.src}
          onChange={handleSrcChange}
          placeholder="Enter image URL"
        />
        <label className="text-sm font-semibold text-mcafeeDarkGray">Alt Text:</label>
        <input
          type="text"
          className="w-full p-2 border border-mcafeeGray rounded text-sm"
          value={image.alt}
          onChange={handleAltChange}
          placeholder="Enter alt text"
        />
        <label className="text-sm font-semibold text-mcafeeDarkGray">Upload File (Optional):</label>
        <input
          type="file"
          accept="image/*"
          className="w-full text-sm text-mcafeeBlack file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-mcafeeLightGray file:text-mcafeeDarkGray hover:file:bg-mcafeeGray"
          onChange={handleFileChange}
        />
        <img
          src={image.src}
          alt={image.alt}
          className={`max-w-full h-auto object-cover border border-mcafeeGray ${className}`}
          style={{ width: width || 'auto', height: height || 'auto' }}
        />
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      className={`${className}`}
      style={{ width: width || 'auto', height: height || 'auto' }}
    />
  );
};

export default EditableImage;
