
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface SocialShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title, className }) => {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
  };

  return (
    <div className={`flex space-x-3 ${className}`}>
      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-mcafeeDarkGray hover:text-mcafeeRed transition-colors duration-200"
        aria-label="Share on Facebook"
      >
        <FaFacebook size={24} />
      </a>
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-mcafeeDarkGray hover:text-mcafeeRed transition-colors duration-200"
        aria-label="Share on Twitter"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-mcafeeDarkGray hover:text-mcafeeRed transition-colors duration-200"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialShareButtons;
