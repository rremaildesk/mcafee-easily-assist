
import React, { useState } from 'react';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import SEO from '../components/SEO';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const Contact: React.FC = () => {
  const { siteConfig } = useSiteConfig();
  const page = siteConfig.pages.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend.
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
  };

  const introSection = page.sections.find(s => s.id === 'intro');

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
            <EditableText path="pages.contact.sections[0].heading.value" element="h1" className="text-4xl md:text-5xl font-heading font-bold text-mcafeeRed mb-4" />
            <EditableText path="pages.contact.sections[0].text.value" element="p" className="text-lg md:text-xl max-w-4xl mx-auto text-mcafeeDarkGray" />
            {introSection?.images?.[0] && (
              <div className="mt-8">
                <EditableImage
                  path={`pages.contact.sections[0].images[0]`}
                  className="rounded-lg shadow-lg mx-auto w-full md:w-3/4 lg:w-2/3"
                  alt={introSection.images[0].alt}
                />
              </div>
            )}
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-heading font-bold text-mcafeeBlack mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-mcafeeDarkGray text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-mcafeeGray rounded-md focus:outline-none focus:ring-2 focus:ring-mcafeeRed"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-mcafeeDarkGray text-sm font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-mcafeeGray rounded-md focus:outline-none focus:ring-2 focus:ring-mcafeeRed"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-mcafeeDarkGray text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-mcafeeGray rounded-md focus:outline-none focus:ring-2 focus:ring-mcafeeRed"
                    placeholder="Issue with McAfee Installation"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-mcafeeDarkGray text-sm font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 border border-mcafeeGray rounded-md focus:outline-none focus:ring-2 focus:ring-mcafeeRed resize-y"
                    placeholder="Please describe your issue in detail..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-mcafeeRed text-white font-heading font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-mcafeeDarkRed transition-all duration-300 transform hover:scale-105"
                >
                  Submit Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-heading font-bold text-mcafeeBlack mb-6">Our Contact Details</h2>
                <div className="space-y-4">
                  <p className="text-lg text-mcafeeDarkGray">
                    <span className="font-semibold text-mcafeeRed">Phone:</span>{' '}
                    <a href={`tel:${siteConfig.phoneNumber.value}`} className="hover:underline">
                      <EditableText path="phoneNumber.value" className="inline-block" />
                    </a>
                  </p>
                  <p className="text-lg text-mcafeeDarkGray">
                    <span className="font-semibold text-mcafeeRed">Email:</span>{' '}
                    <a href={`mailto:${siteConfig.email.value}`} className="hover:underline">
                      <EditableText path="email.value" className="inline-block" />
                    </a>
                  </p>
                  <p className="text-lg text-mcafeeDarkGray">
                    <span className="font-semibold text-mcafeeRed">Address:</span>{' '}
                    <EditableText path="address.value" className="inline-block" />
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-heading font-bold text-mcafeeBlack mb-4">24/7 Assistance</h3>
                <p className="text-mcafeeDarkGray text-lg">
                  We are available around the clock to ensure you always have the support you need for your McAfee products.
                </p>
                <img src="https://picsum.photos/400/250?random=support" alt="24/7 customer support" className="mt-6 rounded-lg shadow-md mx-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
