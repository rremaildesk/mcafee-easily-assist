
import React from 'react';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import SEO from '../components/SEO';
import EditableText from '../components/EditableText';
import SocialShareButtons from '../components/SocialShareButtons';

const Services: React.FC = () => {
  const { siteConfig } = useSiteConfig();
  const page = siteConfig.pages.services;

  const getSectionContent = (sectionId: string) => page.sections.find(s => s.id === sectionId);

  return (
    <>
      <SEO
        title={page.title.value}
        description={page.metaDescription.value}
        keywords={page.keywords.value}
        canonicalUrl={page.url}
      />
      <main className="bg-mcafeeLightGray" style={{ fontFamily: siteConfig.theme.fontFamilyBody.value }}>
        <section className="py-16 md:py-20 bg-white shadow-sm">
          <div className="container mx-auto px-4 text-center">
            <EditableText path="pages.services.sections[0].heading.value" element="h1" className="text-4xl md:text-5xl font-heading font-bold text-mcafeeRed mb-4" />
            <EditableText path="pages.services.sections[0].text.value" element="p" className="text-lg md:text-xl max-w-4xl mx-auto text-mcafeeDarkGray mb-8" />
            <SocialShareButtons url={window.location.href} title={page.title.value} className="justify-center mt-4" />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {page.sections.slice(1).map((section, index) => ( // Skip intro section
                <div key={section.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  {/* Placeholder icon/image */}
                  <div className="text-mcafeeRed text-5xl mb-4 text-center">
                    {/* Could use actual icons based on service type */}
                    <img src={`https://picsum.photos/80/80?random=${index + 10}`} alt="" className="mx-auto rounded-full" />
                  </div>
                  <EditableText path={`pages.services.sections[${index + 1}].heading.value`} element="h3" className="text-2xl font-heading font-semibold text-mcafeeBlack mb-3 text-center" />
                  <EditableText path={`pages.services.sections[${index + 1}].text.value`} element="p" className="text-mcafeeDarkGray text-center leading-relaxed" />
                  <p className="mt-4 text-center">
                    <a href={`tel:${siteConfig.phoneNumber.value}`} className="text-mcafeeRed hover:underline font-semibold">
                      Call Us: <EditableText path="phoneNumber.value" className="inline-block" />
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-mcafeeRed text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Can't Find Your Issue Listed?
            </h2>
            <p className="text-xl mb-6">
              Don't worry, our expert technicians can assist with a wide range of McAfee problems.
            </p>
            <a
              href={`tel:${siteConfig.phoneNumber.value}`}
              className="inline-block bg-white text-mcafeeRed font-heading font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-mcafeeLightGray transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Support: <EditableText path="phoneNumber.value" className="inline-block" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
