
import React from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { useSiteConfig } from '../contexts/SiteConfigContext';

interface EditableColorPickerProps {
  path: string; // Path to the color field in siteConfig, e.g., 'theme.primaryColor.value'
  label: string;
}

const EditableColorPicker: React.FC<EditableColorPickerProps> = ({ path, label }) => {
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
        return '#000000'; // Default to black if path is invalid
      }
    }
    return (current && typeof current === 'object' && 'value' in current) ? current.value : (typeof current === 'string' ? current : '#000000');
  };

  const colorValue = getValue();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateField(path, e.target.value);
  };

  if (!isAdmin) {
    return null; // Only render in admin mode
  }

  return (
    <div className="flex items-center gap-2 p-2 border border-mcafeeGray rounded-md bg-white">
      <label htmlFor={path} className="text-sm font-semibold text-mcafeeDarkGray min-w-[100px]">{label}:</label>
      <input
        type="color"
        id={path}
        value={colorValue}
        onChange={handleChange}
        className="w-10 h-10 border border-mcafeeGray rounded-md cursor-pointer"
      />
      <input
        type="text"
        value={colorValue}
        onChange={handleChange}
        className="flex-1 p-2 border border-mcafeeGray rounded text-sm"
      />
    </div>
  );
};

export default EditableColorPicker;
