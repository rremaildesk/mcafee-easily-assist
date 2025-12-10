
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import EditableText from './EditableText';

const Footer: React.FC = () => {
  const { siteConfig } = useSiteConfig();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mcafeeBlack text-mcafeeLightGray py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-heading font-semibold mb-3 text-white">Contact Us 24/7</h3>
          <p className="mb-2">
            Phone: <a href={`tel:${siteConfig.phoneNumber.value}`} className="text-mcafeeRed hover:underline">
              <EditableText path="phoneNumber.value" className="inline-block" />
            </a>
          </p>
          <p className="mb-2">
            Email: <a href={`mailto:${siteConfig.email.value}`} className="text-mcafeeRed hover:underline">
              <EditableText path="email.value" className="inline-block" />
            </a>
          </p>
          <p className="mb-2">
            Address: <EditableText path="address.value" className="inline-block" />
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-heading font-semibold mb-3 text-white">Quick Links</h3>
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-mcafeeLightGray hover:text-mcafeeRed transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-heading font-semibold mb-3 text-white">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href={siteConfig.socialMedia.facebook.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mcafeeLightGray hover:text-mcafeeRed transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href={siteConfig.socialMedia.twitter.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mcafeeLightGray hover:text-mcafeeRed transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={siteConfig.socialMedia.linkedin.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mcafeeLightGray hover:text-mcafeeRed transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href={siteConfig.socialMedia.instagram.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mcafeeLightGray hover:text-mcafeeRed transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>
          &copy; {currentYear} <EditableText path="siteName.value" className="inline-block" />. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
