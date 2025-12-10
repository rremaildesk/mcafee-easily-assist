
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import { useAdmin } from '../contexts/AdminContext';
import EditableText from './EditableText';
import EditableImage from './EditableImage';

const Header: React.FC = () => {
  const { siteConfig } = useSiteConfig();
  const { isAdmin, toggleAdmin } = useAdmin();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-mcafeeRed text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Using a placeholder image for the logo, could be EditableImage */}
          <EditableImage
            path="siteName" // A conceptual path for a logo, update if a specific logo image is added to SiteConfig
            src="https://picsum.photos/50/50?random=logo"
            alt={`${siteConfig.siteName.value} Logo`}
            className="w-10 h-10 rounded-full"
          />
          <EditableText path="siteName.value" element="h1" className="text-xl font-heading font-bold" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-semibold hover:text-mcafeeLightGray transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white p-2 rounded"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-mcafeeDarkRed absolute w-full top-full left-0 shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-lg font-semibold hover:text-mcafeeLightGray transition-colors duration-200 px-4 py-2 w-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Admin Toggle - always visible */}
      <div className="absolute top-1 right-1 p-1 bg-white rounded-full">
        <button
          onClick={toggleAdmin}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
            isAdmin ? 'bg-mcafeeRed text-white' : 'bg-mcafeeLightGray text-mcafeeDarkGray'
          }`}
        >
          {isAdmin ? 'Admin Mode ON' : 'Admin Mode OFF'}
        </button>
      </div>
    </header>
  );
};

export default Header;
