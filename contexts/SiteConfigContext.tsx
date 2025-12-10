
import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { SiteConfig, EditableField, EditableImage, BlogPost as BlogPostType } from '../types';
import { INITIAL_SITE_CONFIG } from '../constants';

interface SiteConfigContextType {
  siteConfig: SiteConfig;
  updateField: (fieldPath: string, value: string) => void;
  updateImage: (fieldPath: string, src: string, alt: string) => void;
  addBlogPost: (newPost: BlogPostType) => void;
  updateBlogPost: (id: string, updatedPost: Partial<BlogPostType>) => void;
  deleteBlogPost: (id: string) => void;
  setSiteConfig: React.Dispatch<React.SetStateAction<SiteConfig>>; // Expose setSiteConfig
}

// Dummy BlogPost type for now, will be imported from types.ts
// Moved import to above, renaming to BlogPostType to avoid conflict
interface BlogPost {
  id: string;
  slug: string;
  title: EditableField;
  metaDescription: EditableField;
  keywords: EditableField;
  imageUrl: EditableImage;
  date: EditableField;
  content: { id: string; heading?: EditableField; text?: EditableField; }[];
}


const SiteConfigContext = createContext<SiteConfigContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'mcafee_site_config';

export const SiteConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    try {
      const storedConfig = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedConfig ? JSON.parse(storedConfig) : INITIAL_SITE_CONFIG;
    } catch (error) {
      console.error("Failed to parse site config from localStorage, using initial config:", error);
      return INITIAL_SITE_CONFIG;
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(siteConfig));
  }, [siteConfig]);

  const updateField = useCallback((fieldPath: string, value: string) => {
    setSiteConfig(prevConfig => {
      // Deep copy to ensure immutability for nested objects/arrays
      const newConfig = JSON.parse(JSON.stringify(prevConfig));
      let current: any = newConfig;
      const pathParts = fieldPath.split('.');

      for (let i = 0; i < pathParts.length; i++) {
        let part = pathParts[i];
        let arrayIndex: number | null = null;

        // Check if part is an array access, e.g., "sections[0]"
        const arrayMatch = part.match(/(.*)\[(\d+)\]$/);
        if (arrayMatch) {
          part = arrayMatch[1]; // e.g., "sections"
          arrayIndex = Number(arrayMatch[2]); // e.g., 0
        }

        if (i === pathParts.length - 1) {
          // This is the target field to update
          if (arrayIndex !== null) {
            if (current[part] && Array.isArray(current[part]) && arrayIndex < current[part].length) {
              current[part][arrayIndex] = { ...current[part][arrayIndex], value };
            }
          } else if (current[part] && typeof current[part] === 'object' && 'value' in current[part]) {
            current[part] = { ...current[part], value };
          } else {
            // For non-EditableField paths, like blog content text directly
            current[part] = { id: part, value };
          }
        } else {
          // Traverse deeper
          if (arrayIndex !== null) {
            if (!current[part]) {
              current[part] = [];
            }
            if (!current[part][arrayIndex]) {
              current[part][arrayIndex] = {};
            }
            current = current[part][arrayIndex];
          } else {
            if (!current[part]) {
              current[part] = {};
            }
            current = current[part];
          }
        }
      }
      return newConfig;
    });
  }, []);

  const updateImage = useCallback((fieldPath: string, src: string, alt: string) => {
    setSiteConfig(prevConfig => {
      // Deep copy to ensure immutability for nested objects/arrays
      const newConfig = JSON.parse(JSON.stringify(prevConfig));
      let current: any = newConfig;
      const pathParts = fieldPath.split('.');

      for (let i = 0; i < pathParts.length; i++) {
        let part = pathParts[i];
        let arrayIndex: number | null = null;

        // Check if part is an array access, e.g., "images[0]"
        const arrayMatch = part.match(/(.*)\[(\d+)\]$/);
        if (arrayMatch) {
          part = arrayMatch[1]; // e.g., "images"
          arrayIndex = Number(arrayMatch[2]); // e.g., 0
        }

        if (i === pathParts.length - 1) {
          // This is the target image object to update
          if (arrayIndex !== null) {
            if (current[part] && Array.isArray(current[part]) && arrayIndex < current[part].length) {
              current[part][arrayIndex] = { ...current[part][arrayIndex], src, alt };
            }
          } else if (current[part] && typeof current[part] === 'object' && 'src' in current[part]) {
            current[part] = { ...current[part], src, alt };
          } else {
            current[part] = { id: part, src, alt };
          }
        } else {
          // Traverse deeper
          if (arrayIndex !== null) {
            if (!current[part]) {
              current[part] = [];
            }
            if (!current[part][arrayIndex]) {
              current[part][arrayIndex] = {};
            }
            current = current[part][arrayIndex];
          } else {
            if (!current[part]) {
              current[part] = {};
            }
            current = current[part];
          }
        }
      }
      return newConfig;
    });
  }, []);

  const addBlogPost = useCallback((newPost: BlogPostType) => {
    setSiteConfig(prevConfig => ({
      ...prevConfig,
      blogPosts: [...prevConfig.blogPosts, newPost],
    }));
  }, []);

  const updateBlogPost = useCallback((id: string, updatedPost: Partial<BlogPostType>) => {
    setSiteConfig(prevConfig => ({
      ...prevConfig,
      blogPosts: prevConfig.blogPosts.map(post =>
        post.id === id ? { ...post, ...updatedPost } : post
      ),
    }));
  }, []);

  const deleteBlogPost = useCallback((id: string) => {
    setSiteConfig(prevConfig => ({
      ...prevConfig,
      blogPosts: prevConfig.blogPosts.filter(post => post.id !== id),
    }));
  }, []);

  return (
    <SiteConfigContext.Provider value={{ siteConfig, updateField, updateImage, addBlogPost, updateBlogPost, deleteBlogPost, setSiteConfig }}>
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = () => {
  const context = useContext(SiteConfigContext);
  if (context === undefined) {
    throw new Error('useSiteConfig must be used within a SiteConfigProvider');
  }
  return context;
};