
import { SiteConfig } from './types';

export const INITIAL_SITE_CONFIG: SiteConfig = {
  siteName: { id: 'siteName', value: 'McAfee 24/7 USA Assistance' },
  tagline: { id: 'tagline', value: 'Your Trusted Partner for McAfee Support in the USA' },
  phoneNumber: { id: 'phoneNumber', value: '+1 (510)-370-1986' },
  email: { id: 'email', value: 'support@mcafeeusaassistance.com' },
  address: { id: 'address', value: '123 Main St, Anytown, CA 90210, USA' },
  socialMedia: {
    facebook: { id: 'socialFacebook', value: 'https://facebook.com/mcafeeusaassistance' },
    twitter: { id: 'socialTwitter', value: 'https://twitter.com/mcafeeusa' },
    linkedin: { id: 'socialLinkedin', value: 'https://linkedin.com/company/mcafeeusaassistance' },
    instagram: { id: 'socialInstagram', value: 'https://instagram.com/mcafeeusa' },
  },
  theme: {
    primaryColor: { id: 'primaryColor', value: '#D91E18' }, // mcafeeRed
    accentColor: { id: 'accentColor', value: '#B01813' }, // mcafeeDarkRed
    textColor: { id: 'textColor', value: '#1F2937' }, // mcafeeBlack
    backgroundColor: { id: 'backgroundColor', value: '#F7F7F7' }, // mcafeeLightGray
    fontFamilyHeading: { id: 'fontFamilyHeading', value: 'Montserrat, sans-serif' },
    fontFamilyBody: { id: 'fontFamilyBody', value: 'Open Sans, sans-serif' },
  },
  pages: {
    home: {
      id: 'home',
      title: { id: 'homeTitle', value: 'Home - McAfee 24/7 USA Assistance | +1 (510)-370-1986' },
      metaDescription: { id: 'homeMetaDescription', value: 'Get 24/7 McAfee support for installation, uninstallation, reactivation, login, and billing issues in the USA. Call +1 (510)-370-1986 for immediate assistance.' },
      keywords: { id: 'homeKeywords', value: 'McAfee support, McAfee assistance, USA, 24/7, installation, uninstallation, reactivation, login, credit card, cancellation, renewal, +1 (510)-370-1986' },
      url: '/',
      sections: [
        {
          id: 'hero',
          heading: { id: 'homeHeroHeading', value: 'Seamless McAfee Protection, Anytime, Anywhere.' },
          text: { id: 'homeHeroText', value: 'Facing issues with your McAfee software? Our dedicated team provides 24/7 expert assistance across the USA for all your McAfee needs. From installation to advanced troubleshooting, we\'re here to help.' },
          images: [
            { id: 'homeHeroImage', src: 'https://picsum.photos/1200/600?random=1', alt: 'Customer support agent assisting a client' },
          ],
        },
        {
          id: 'servicesOverview',
          heading: { id: 'homeServicesOverviewHeading', value: 'Comprehensive Support for Your Peace of Mind' },
          text: { id: 'homeServicesOverviewText', value: 'We cover a wide range of common McAfee challenges to ensure your digital security is always optimal.' },
          images: [],
        },
      ],
    },
    about: {
      id: 'about',
      title: { id: 'aboutTitle', value: 'About Us - McAfee 24/7 USA Assistance | +1 (510)-370-1986' },
      metaDescription: { id: 'aboutMetaDescription', value: 'Learn about McAfee 24/7 USA Assistance: our mission, values, and commitment to providing expert McAfee support. Call +1 (510)-370-1986 for assistance.' },
      keywords: { id: 'aboutKeywords', value: 'About McAfee support, McAfee mission, McAfee values, expert assistance, USA support, +1 (510)-370-1986' },
      url: '/about',
      sections: [
        {
          id: 'intro',
          heading: { id: 'aboutIntroHeading', value: 'Our Commitment to Your Digital Safety' },
          text: { id: 'aboutIntroText', value: 'At McAfee 24/7 USA Assistance, we understand the critical importance of robust online security. Our mission is to provide unparalleled support for McAfee users across the United States, ensuring smooth operation and complete peace of mind. We are a team of certified professionals dedicated to resolving your McAfee issues promptly and efficiently, 24 hours a day, 7 days a week.' },
          images: [
            { id: 'aboutIntroImage', src: 'https://picsum.photos/800/500?random=2', alt: 'Diverse team of customer service representatives' },
          ],
        },
        {
          id: 'mission',
          heading: { id: 'aboutMissionHeading', value: 'Our Mission' },
          text: { id: 'aboutMissionText', value: 'To deliver reliable, accessible, and expert McAfee support, empowering our customers to navigate the digital world securely and confidently. We strive to be the most trusted resource for McAfee assistance in the USA.' },
          images: [],
        },
        {
          id: 'values',
          heading: { id: 'aboutValuesHeading', value: 'Our Values' },
          text: { id: 'aboutValuesText', value: 'Customer First: Your security and satisfaction are our top priorities.\nExpertise: Our team comprises highly trained and experienced McAfee specialists.\nAvailability: We are here for you 24/7, ensuring help is always just a call away.\nIntegrity: We operate with transparency and honesty in all our interactions.' },
          images: [
            { id: 'aboutValuesImage', src: 'https://picsum.photos/800/500?random=3', alt: 'Customer support staff collaborating' },
          ],
        },
      ],
    },
    services: {
      id: 'services',
      title: { id: 'servicesTitle', value: 'Our Services - McAfee 24/7 USA Assistance | +1 (510)-370-1986' },
      metaDescription: { id: 'servicesMetaDescription', value: 'Explore our comprehensive McAfee support services: installation, uninstallation, reactivation, login issues, credit card updates, cancellation, renewal, and more. Call +1 (510)-370-1986.' },
      keywords: { id: 'servicesKeywords', value: 'McAfee services, installation support, uninstallation help, reactivation, login assistance, credit card expiration, cancellation, renewal, McAfee USA, 24/7 support, +1 (510)-370-1986' },
      url: '/services',
      sections: [
        {
          id: 'intro',
          heading: { id: 'servicesIntroHeading', value: 'Expert McAfee Support for Every Challenge' },
          text: { id: 'servicesIntroText', value: 'No matter the McAfee issue you\'re facing, our certified experts are ready to provide immediate and effective solutions. Our goal is to minimize your downtime and maximize your protection.' },
          images: [],
        },
        {
          id: 'installation',
          heading: { id: 'servicesInstallationHeading', value: 'Installation Assistance' },
          text: { id: 'servicesInstallationText', value: 'Struggling with McAfee installation? We\'ll guide you through the process, ensuring your software is correctly installed and configured for optimal protection on all your devices. Call us at +1 (510)-370-1986.' },
          images: [],
        },
        {
          id: 'uninstallation',
          heading: { id: 'servicesUninstallationHeading', value: 'Uninstallation Support' },
          text: { id: 'servicesUninstallationText', value: 'Need to remove McAfee software completely? Our team provides comprehensive uninstallation assistance to prevent leftover files and ensure a clean system. Contact us at +1 (510)-370-1986.' },
          images: [],
        },
        {
          id: 'reactivation',
          heading: { id: 'servicesReactivationHeading', value: 'Reactivation & License Issues' },
          text: { id: 'servicesReactivationText', value: 'Experiencing problems reactivating your McAfee subscription or dealing with license key errors? We can help you get your protection back online quickly. Reach out to +1 (510)-370-1986.' },
          images: [],
        },
        {
          id: 'login',
          heading: { id: 'servicesLoginHeading', value: 'Login & Account Assistance' },
          text: { id: 'servicesLoginText', value: 'Forgotten password, account lockout, or other login challenges? Our support team will help you regain access to your McAfee account securely. Call +1 (510)-370-1986 for immediate help.' },
          images: [],
        },
        {
          id: 'creditCard',
          heading: { id: 'servicesCreditCardHeading', value: 'Credit Card & Billing Updates' },
          text: { id: 'servicesCreditCardText', value: 'Update your payment information, resolve billing discrepancies, or manage expired credit cards to ensure uninterrupted McAfee service. Contact our billing support at +1 (510)-370-1986.' },
          images: [],
        },
        {
          id: 'cancellation',
          heading: { id: 'servicesCancellationHeading', value: 'Cancellation Support' },
          text: { id: 'servicesCancellationText', value: 'Need to cancel your McAfee subscription? We can assist you with the cancellation process and answer any related questions. Call +1 (510)-370-1986.' },
          images: [],
        },
        {
          id: 'renewal',
          heading: { id: 'servicesRenewalHeading', value: 'Renewal Assistance' },
          text: { id: 'servicesRenewalText', value: 'Ensure seamless renewal of your McAfee subscription without any hiccups. We can help you manage your auto-renewal settings and process payments. Get help at +1 (510)-370-1986.' },
          images: [],
        },
        {
          id: 'otherIssues',
          heading: { id: 'servicesOtherIssuesHeading', value: 'General Troubleshooting & Other Issues' },
          text: { id: 'servicesOtherIssuesText', value: 'For any other McAfee-related problems, from virus removal to performance optimization, our expert technicians are just a call away. Dial +1 (510)-370-1986 for comprehensive support.' },
          images: [],
        },
      ],
    },
    contact: {
      id: 'contact',
      title: { id: 'contactTitle', value: 'Contact Us - McAfee 24/7 USA Assistance | +1 (510)-370-1986' },
      metaDescription: { id: 'contactMetaDescription', value: 'Contact McAfee 24/7 USA Assistance for immediate support. Call +1 (510)-370-1986, fill out our contact form, or find our address.' },
      keywords: { id: 'contactKeywords', value: 'Contact McAfee support, McAfee phone number, +1 (510)-370-1986, McAfee email, McAfee address, USA support, customer service' },
      url: '/contact',
      sections: [
        {
          id: 'intro',
          heading: { id: 'contactIntroHeading', value: 'Get in Touch for Immediate Assistance' },
          text: { id: 'contactIntroText', value: 'Our support team is available 24/7 to help you with any McAfee-related issue. Choose your preferred method to reach us.' },
          images: [
            { id: 'contactIntroImage', src: 'https://picsum.photos/1000/500?random=4', alt: 'Contact us for assistance' },
          ],
        },
      ],
    },
    blog: {
      id: 'blog',
      title: { id: 'blogTitle', value: 'Blog - McAfee 24/7 USA Assistance | +1 (510)-370-1986' },
      metaDescription: { id: 'blogMetaDescription', value: 'Read the latest articles and guides on common McAfee issues, solutions, and digital security tips from McAfee 24/7 USA Assistance. Call +1 (510)-370-1986.' },
      keywords: { id: 'blogKeywords', value: 'McAfee blog, McAfee articles, security tips, troubleshooting, virus removal, digital protection, USA McAfee, +1 (510)-370-1986' },
      url: '/blog',
      sections: [],
    },
  },
  blogPosts: [
    {
      id: 'blog1',
      slug: 'mcafee-installation-guide-plus-1-510-370-1986',
      title: { id: 'blog1Title', value: 'Comprehensive McAfee Installation Guide | +1 (510)-370-1986' },
      metaDescription: { id: 'blog1MetaDescription', value: 'A step-by-step guide to installing McAfee Total Protection. Facing issues? Call our experts at +1 (510)-370-1986 for professional assistance.' },
      keywords: { id: 'blog1Keywords', value: 'McAfee installation, install McAfee, McAfee guide, McAfee setup, installation issues, +1 (510)-370-1986' },
      imageUrl: { id: 'blog1Image', src: 'https://picsum.photos/800/450?random=5', alt: 'Computer screen showing McAfee installation' },
      date: { id: 'blog1Date', value: '2023-10-26' },
      content: [
        {
          id: 'blog1Intro',
          heading: { id: 'blog1IntroHeading', value: 'Getting Started with Your McAfee Protection' },
          text: { id: 'blog1IntroText', value: 'Installing antivirus software can sometimes be tricky, but with McAfee Total Protection, safeguarding your digital life is simpler than you think. This guide walks you through the entire installation process. If you encounter any issues, remember our support line is +1 (510)-370-1986, available 24/7.' },
        },
        {
          id: 'blog1Step1',
          heading: { id: 'blog1Step1Heading', value: 'Step 1: Prepare Your System' },
          text: { id: 'blog1Step1Text', value: 'Before you begin, ensure your computer meets McAfee\'s system requirements. It\'s also a good idea to uninstall any other antivirus software to prevent conflicts. Restart your computer after uninstallation.' },
        },
        {
          id: 'blog1Step2',
          heading: { id: 'blog1Step2Heading', value: 'Step 2: Download Your McAfee Product' },
          text: { id: 'blog1Step2Text', value: 'Log in to your McAfee account at my.mcafee.com. If you don\'t have an account, you\'ll need to create one. Once logged in, locate your product and click "Download". Save the installer file to a recognizable location on your computer.' },
        },
        {
          id: 'blog1Help',
          heading: { id: 'blog1HelpHeading', value: 'Need Immediate Help? Call Us!' },
          text: { id: 'blog1HelpText', value: 'If you\'re stuck at any point or prefer guided assistance, our experts are ready to help. Dial +1 (510)-370-1986 for professional McAfee installation support.' },
        },
      ],
    },
    {
      id: 'blog2',
      slug: 'troubleshooting-mcafee-login-issues-plus-1-510-370-1986',
      title: { id: 'blog2Title', value: 'Troubleshooting Common McAfee Login Issues | +1 (510)-370-1986' },
      metaDescription: { id: 'blog2MetaDescription', value: 'Solutions for common McAfee login problems like forgotten passwords or account lockout. For personalized help, call +1 (510)-370-1986 anytime.' },
      keywords: { id: 'blog2Keywords', value: 'McAfee login, login issues, forgotten password McAfee, McAfee account locked, troubleshooting McAfee, +1 (510)-370-1986' },
      imageUrl: { id: 'blog2Image', src: 'https://picsum.photos/800/450?random=6', alt: 'Person trying to log in on a laptop' },
      date: { id: 'blog2Date', value: '2023-10-20' },
      content: [
        {
          id: 'blog2Intro',
          heading: { id: 'blog2IntroHeading', value: 'Regaining Access to Your McAfee Account' },
          text: { id: 'blog2IntroText', value: 'Being locked out of your McAfee account can be frustrating, especially when you need to manage your security. This article covers the most common reasons for login issues and how to resolve them. If these steps don\'t work, don\'t hesitate to call us at +1 (510)-370-1986.' },
        },
        {
          id: 'blog2ForgotPassword',
          heading: { id: 'blog2ForgotPasswordHeading', value: 'Forgotten Password' },
          text: { id: 'blog2ForgotPasswordText', value: 'The most frequent issue! Navigate to my.mcafee.com, click "Forgot Password?", and follow the instructions to reset it. Ensure you check your spam folder for the reset email.' },
        },
        {
          id: 'blog2AccountLocked',
          heading: { id: 'blog2AccountLockedHeading', value: 'Account Locked Due to Multiple Attempts' },
          text: { id: 'blog2AccountLockedText', value: 'If you\'ve entered the wrong password too many times, your account might be temporarily locked. Wait for 30 minutes and try again, or use the "Forgot Password?" option.' },
        },
        {
          id: 'blog2Help',
          heading: { id: 'blog2HelpHeading', value: 'Need Direct Support for Login Issues?' },
          text: { id: 'blog2HelpText', value: 'For persistent login problems or if you suspect an account compromise, our security specialists are available 24/7. Call +1 (510)-370-1986 for expert assistance.' },
        },
      ],
    },
  ],
};
