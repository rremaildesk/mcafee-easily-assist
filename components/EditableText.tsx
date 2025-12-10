
import React from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useSiteConfig } from '../contexts/SiteConfigContext';

interface EditableTextProps {
  path: string; // Path to the field in siteConfig, e.g., 'pages.home.sections[0].heading.value'
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'textarea';
  className?: string;
  placeholder?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ path, element = 'p', className, placeholder }) => {
  const { isAdmin } = useAdmin();
  const { siteConfig, updateField } = useSiteConfig();

  // Safely get the value from the siteConfig object based on the path
  const getValue = (): string => {
    let current: any = siteConfig;
    const pathParts = path.split('.');
    for (const part of pathParts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else if (Array.isArray(current) && !isNaN(Number(part))) {
        current = current[Number(part)];
      } else {
        return ''; // Return empty string if path is invalid
      }
    }
    return (current && typeof current === 'object' && 'value' in current) ? current.value : (typeof current === 'string' ? current : '');
  };

  const textValue = getValue();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateField(path, e.target.value);
  };

  if (isAdmin) {
    if (element === 'textarea') {
      return (
        <textarea
          className={`w-full p-2 border border-mcafeeGray rounded resize-y ${className}`}
          value={textValue}
          onChange={handleChange}
          placeholder={placeholder || 'Edit text'}
          rows={5}
        />
      );
    }
    return (
      <input
        type="text"
        className={`w-full p-2 border border-mcafeeGray rounded ${className}`}
        value={textValue}
        onChange={handleChange}
        placeholder={placeholder || 'Edit text'}
      />
    );
  }

  // Render based on the specified element type
  switch (element) {
    case 'h1': return <h1 className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'h2': return <h2 className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'h3': return <h3 className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'h4': return <h4 className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'h5': return <h5 className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'h6': return <h6 className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'p': return <p className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'span': return <span className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'div': return <div className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
    case 'textarea': return <div className={className} dangerouslySetInnerHTML={{ __html: textValue }} />; // Render as div in view mode
    default: return <p className={className} dangerouslySetInnerHTML={{ __html: textValue }} />;
  }
};

export default EditableText;
