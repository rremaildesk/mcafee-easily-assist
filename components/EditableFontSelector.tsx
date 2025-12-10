
import React from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useSiteConfig } from '../contexts/SiteConfigContext';

interface EditableFontSelectorProps {
  path: string; // Path to the font field in siteConfig, e.g., 'theme.fontFamilyHeading.value'
  label: string;
}

const availableFonts = [
  'Montserrat, sans-serif',
  'Open Sans, sans-serif',
  'Roboto, sans-serif',
  'Lato, sans-serif',
  'Oswald, sans-serif',
  'Playfair Display, serif',
  'Merriweather, serif',
  'Ubuntu, sans-serif',
];

const EditableFontSelector: React.FC<EditableFontSelectorProps> = ({ path, label }) => {
  const { isAdmin } = useAdmin();
  const { siteConfig, updateField } = useSiteConfig();

  // Safely get the value from the siteConfig object based on the path
  const getValue = (): string => {
    let current: any = siteConfig;
    const pathParts = path.split('.');
    for (const part of pathParts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return availableFonts[0]; // Default to first font if path is invalid
      }
    }
    return (current && typeof current === 'object' && 'value' in current) ? current.value : (typeof current === 'string' ? current : availableFonts[0]);
  };

  const fontValue = getValue();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateField(path, e.target.value);
  };

  if (!isAdmin) {
    return null; // Only render in admin mode
  }

  return (
    <div className="flex items-center gap-2 p-2 border border-mcafeeGray rounded-md bg-white">
      <label htmlFor={path} className="text-sm font-semibold text-mcafeeDarkGray min-w-[100px]">{label}:</label>
      <select
        id={path}
        value={fontValue}
        onChange={handleChange}
        className="flex-1 p-2 border border-mcafeeGray rounded text-sm"
        style={{ fontFamily: fontValue.split(',')[0] }} // Apply selected font to the selector
      >
        {availableFonts.map((font, index) => (
          <option key={index} value={font} style={{ fontFamily: font.split(',')[0] }}>
            {font.split(',')[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditableFontSelector;
