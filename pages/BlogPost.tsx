
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import SEO from '../components/SEO';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';
import SocialShareButtons from '../components/SocialShareButtons';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { siteConfig } = useSiteConfig();

  const blogPost = siteConfig.blogPosts.find(post => post.slug === slug);

  if (!blogPost) {
    return <Navigate to="/blog" replace />; // Redirect to blog list if post not found
  }

  const getSectionContent = (sectionIndex: number) => blogPost.content[sectionIndex];

  return (
    <>
      <SEO
        title={blogPost.title.value}
        description={blogPost.metaDescription.value}
        keywords={blogPost.keywords.value}
        canonicalUrl={`/blog/${blogPost.slug}`}
      />
      <main className="bg-mcafeeLightGray" style={{ fontFamily: siteConfig.theme.fontFamilyBody.value }}>
        <article className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
          <header className="text-center mb-10">
            <EditableImage
              path={`blogPosts[${siteConfig.blogPosts.indexOf(blogPost)}].imageUrl`}
              className="w-full h-72 object-cover rounded-lg shadow-md mb-6"
              alt={blogPost.imageUrl.alt}
            />
            <EditableText path={`blogPosts[${siteConfig.blogPosts.indexOf(blogPost)}].title.value`} element="h1" className="text-4xl md:text-5xl font-heading font-bold text-mcafeeBlack mb-4" />
            <p className="text-mcafeeDarkGray text-lg">
              Published on <EditableText path={`blogPosts[${siteConfig.blogPosts.indexOf(blogPost)}].date.value`} className="inline-block" />
            </p>
            <div className="mt-6 flex justify-center">
              <SocialShareButtons url={window.location.href} title={blogPost.title.value} />
            </div>
          </header>

          <section className="prose prose-lg mx-auto max-w-none">
            {blogPost.content.map((section, index) => (
              <div key={section.id} className="mb-8">
                {section.heading && (
                  <EditableText
                    path={`blogPosts[${siteConfig.blogPosts.indexOf(blogPost)}].content[${index}].heading.value`}
                    element="h2"
                    className="text-2xl font-heading font-bold text-mcafeeBlack mb-4"
                  />
                )}
                {section.text && (
                  <EditableText
                    path={`blogPosts[${siteConfig.blogPosts.indexOf(blogPost)}].content[${index}].text.value`}
                    element="textarea" // Use textarea for editing rich content, and div for display
                    className="text-mcafeeBlack leading-relaxed mb-4"
                  />
                )}
                {section.images?.map((image, imgIndex) => (
                  <EditableImage
                    key={image.id}
                    path={`blogPosts[${siteConfig.blogPosts.indexOf(blogPost)}].content[${index}].images[${imgIndex}]`}
                    className="my-6 rounded-lg shadow-md mx-auto"
                    alt={image.alt}
                  />
                ))}
              </div>
            ))}
          </section>

          <footer className="mt-12 pt-8 border-t border-mcafeeGray text-center">
            <h3 className="text-xl font-heading font-semibold text-mcafeeBlack mb-4">
              Need more help with McAfee issues?
            </h3>
            <a
              href={`tel:${siteConfig.phoneNumber.value}`}
              className="inline-block bg-mcafeeRed text-white font-heading font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-mcafeeDarkRed transition-all duration-300 transform hover:scale-105"
            >
              Call Our Experts: <EditableText path="phoneNumber.value" className="inline-block" />
            </a>
          </footer>
        </article>
      </main>
    </>
  );
};

export default BlogPost;