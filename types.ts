
export interface EditableField {
  id: string;
  value: string;
}

export interface EditableImage {
  id: string;
  src: string;
  alt: string;
}

export interface EditableSection {
  id: string;
  heading?: EditableField;
  text?: EditableField;
  images?: EditableImage[];
}

export interface PageContent {
  id: string;
  title: EditableField;
  metaDescription: EditableField;
  keywords: EditableField;
  url: string; // Used for routing and canonical URL
  sections: EditableSection[];
}

export interface BlogPost {
  id: string;
  slug: string; // URL-friendly identifier
  title: EditableField;
  metaDescription: EditableField;
  keywords: EditableField;
  imageUrl: EditableImage;
  date: EditableField;
  content: EditableSection[];
}

export interface ThemeConfig {
  primaryColor: EditableField; // e.g., mcafeeRed
  accentColor: EditableField; // e.g., mcafeeDarkRed
  textColor: EditableField; // e.g., mcafeeBlack
  backgroundColor: EditableField; // e.g., mcafeeLightGray
  fontFamilyHeading: EditableField; // e.g., Montserrat
  fontFamilyBody: EditableField; // e.g., Open Sans
}

export interface SiteConfig {
  siteName: EditableField;
  tagline: EditableField;
  phoneNumber: EditableField;
  email: EditableField;
  address: EditableField;
  socialMedia: {
    facebook: EditableField;
    twitter: EditableField;
    linkedin: EditableField;
    instagram: EditableField;
  };
  theme: ThemeConfig;
  pages: {
    home: PageContent;
    about: PageContent;
    services: PageContent;
    contact: PageContent;
    blog: PageContent; // Placeholder for blog landing page SEO
  };
  blogPosts: BlogPost[];
}
