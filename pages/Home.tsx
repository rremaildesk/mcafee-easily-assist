
import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import SEO from '../components/SEO';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const Home: React.FC = () => {
  const { siteConfig } = useSiteConfig();
  const page = siteConfig.pages.home;

  const getSectionContent = (sectionId: string) => page.sections.find(s => s.id === sectionId);

  const heroSection = getSectionContent('hero');
  const servicesOverviewSection = getSectionContent('servicesOverview');

  return (
    <>
      <SEO
        title={page.title.value}
        description={page.metaDescription.value}
        keywords={page.keywords.value}
        canonicalUrl={page.url}
      />
      <main className="bg-mcafeeLightGray" style={{ fontFamily: siteConfig.theme.fontFamilyBody.value }}>
        {/* Hero Section */}
        <section className="relative bg-mcafeeBlack text-white py-16 md:py-24 overflow-hidden">
          {heroSection?.images?.[0] && (
            <div className="absolute inset-0">
              <EditableImage
                path={`pages.home.sections[0].images[0]`}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
          )}
          <div className="container mx-auto px-4 relative z-10 text-center">
            <EditableText path="pages.home.sections[0].heading.value" element="h1" className="text-4xl md:text-6xl font-heading font-bold mb-4" />
            <EditableText path="pages.home.sections[0].text.value" element="p" className="text-lg md:text-xl max-w-3xl mx-auto mb-8" />
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-mcafeeRed text-white font-heading font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-mcafeeDarkRed transition-all duration-300 transform hover:scale-105"
              >
                Contact Support Now
              </Link>
              <a
                href={`tel:${siteConfig.phoneNumber.value}`}
                className="bg-white text-mcafeeRed font-heading font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-mcafeeGray transition-all duration-300 transform hover:scale-105"
              >
                Call Us: <EditableText path="phoneNumber.value" className="inline-block" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <EditableText path="pages.home.sections[1].heading.value" element="h2" className="text-3xl md:text-4xl font-heading font-bold text-mcafeeBlack mb-6" />
            <EditableText path="pages.home.sections[1].text.value" element="p" className="text-lg max-w-4xl mx-auto text-mcafeeDarkGray mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder Service Cards - These could be made editable in Admin if more granular control is needed */}
              <div className="bg-mcafeeLightGray p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img src="https://picsum.photos/100/100?random=service1" alt="Installation Support" className="mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-heading font-semibold text-mcafeeRed mb-2">Installation Support</h3>
                <p className="text-mcafeeDarkGray">We ensure your McAfee software is installed correctly and running smoothly.</p>
              </div>
              <div className="bg-mcafeeLightGray p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img src="https://picsum.photos/100/100?random=service2" alt="Login & Account Help" className="mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-heading font-semibold text-mcafeeRed mb-2">Login & Account Help</h3>
                <p className="text-mcafeeDarkGray">Assistance with forgotten passwords, account lockout, and other login issues.</p>
              </div>
              <div className="bg-mcafeeLightGray p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <img src="https://picsum.photos/100/100?random=service3" alt="Billing & Renewal" className="mx-auto mb-4 rounded-full" />
                <h3 className="text-xl font-heading font-semibold text-mcafeeRed mb-2">Billing & Renewal</h3>
                <p className="text-mcafeeDarkGray">Seamless support for credit card updates, renewals, and subscription management.</p>
              </div>
            </div>

            <Link
              to="/services"
              className="mt-12 inline-block bg-mcafeeRed text-white font-heading font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-mcafeeDarkRed transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-mcafeeRed text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-6">
              Our experts are available 24/7 to provide fast and reliable support.
            </p>
            <a
              href={`tel:${siteConfig.phoneNumber.value}`}
              className="inline-block bg-white text-mcafeeRed font-heading font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-mcafeeLightGray transition-all duration-300 transform hover:scale-105"
            >
              Call Us Now: <EditableText path="phoneNumber.value" className="inline-block" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
