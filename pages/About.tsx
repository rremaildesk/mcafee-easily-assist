
import React from 'react';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import SEO from '../components/SEO';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const About: React.FC = () => {
  const { siteConfig } = useSiteConfig();
  const page = siteConfig.pages.about;

  const getSectionContent = (sectionId: string) => page.sections.find(s => s.id === sectionId);

  const introSection = getSectionContent('intro');
  const missionSection = getSectionContent('mission');
  const valuesSection = getSectionContent('values');

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
            <EditableText path="pages.about.sections[0].heading.value" element="h1" className="text-4xl md:text-5xl font-heading font-bold text-mcafeeRed mb-4" />
            <EditableText path="pages.about.sections[0].text.value" element="p" className="text-lg md:text-xl max-w-4xl mx-auto text-mcafeeDarkGray" />
            {introSection?.images?.[0] && (
              <div className="mt-8">
                <EditableImage
                  path={`pages.about.sections[0].images[0]`}
                  className="rounded-lg shadow-lg mx-auto w-full md:w-3/4 lg:w-2/3"
                  alt={introSection.images[0].alt}
                />
              </div>
            )}
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <EditableText path="pages.about.sections[1].heading.value" element="h2" className="text-3xl md:text-4xl font-heading font-bold text-mcafeeBlack mb-4" />
              <EditableText path="pages.about.sections[1].text.value" element="p" className="text-lg text-mcafeeDarkGray leading-relaxed" />
            </div>
            <div className="order-first md:order-last">
              <img src="https://picsum.photos/600/400?random=mission" alt="Mission statement illustration" className="rounded-lg shadow-lg mx-auto w-full" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <EditableText path="pages.about.sections[2].heading.value" element="h2" className="text-3xl md:text-4xl font-heading font-bold text-mcafeeBlack mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-mcafeeLightGray p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-heading font-semibold text-mcafeeRed mb-3">Customer First</h3>
                <p className="text-mcafeeDarkGray">Your security and satisfaction are our top priorities, guiding every interaction and solution.</p>
              </div>
              <div className="bg-mcafeeLightGray p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-heading font-semibold text-mcafeeRed mb-3">Expertise</h3>
                <p className="text-mcafeeDarkGray">Our team comprises highly trained and experienced McAfee specialists, equipped to handle any challenge.</p>
              </div>
              <div className="bg-mcafeeLightGray p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-heading font-semibold text-mcafeeRed mb-3">Availability</h3>
                <p className="text-mcafeeDarkGray">We are here for you 24/7, ensuring help is always just a call away, day or night.</p>
              </div>
            </div>
            {valuesSection?.images?.[0] && (
              <div className="mt-12">
                <EditableImage
                  path={`pages.about.sections[2].images[0]`}
                  className="rounded-lg shadow-lg mx-auto w-full md:w-3/4 lg:w-2/3"
                  alt={valuesSection.images[0].alt}
                />
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-mcafeeRed text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready for Reliable McAfee Support?
            </h2>
            <p className="text-xl mb-6">
              Our team is standing by to provide expert assistance.
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

export default About;
