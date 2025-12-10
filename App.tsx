
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SiteConfigProvider, useSiteConfig } from './contexts/SiteConfigContext';
import { AdminProvider, useAdmin } from './contexts/AdminContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/AdminDashboard';

const AppContent: React.FC = () => {
  const { siteConfig } = useSiteConfig();
  const { isAdmin } = useAdmin();

  // Apply dynamic theme styles to the body or root container
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', siteConfig.theme.primaryColor.value);
    document.documentElement.style.setProperty('--accent-color', siteConfig.theme.accentColor.value);
    document.documentElement.style.setProperty('--text-color', siteConfig.theme.textColor.value);
    document.documentElement.style.setProperty('--background-color', siteConfig.theme.backgroundColor.value);
    document.documentElement.style.setProperty('--font-heading', siteConfig.theme.fontFamilyHeading.value);
    document.documentElement.style.setProperty('--font-body', siteConfig.theme.fontFamilyBody.value);

    // Also update body font family directly for consistent application across all elements
    document.body.style.fontFamily = siteConfig.theme.fontFamilyBody.value;

  }, [siteConfig.theme]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* AdminDashboard is always rendered, but its content is conditional on `isAdmin` */}
        </Routes>
      </div>
      <Footer />
      {isAdmin && <AdminDashboard />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AdminProvider>
        <SiteConfigProvider>
          <AppContent />
        </SiteConfigProvider>
      </AdminProvider>
    </Router>
  );
};

export default App;
