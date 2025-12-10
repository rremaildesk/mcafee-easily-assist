
import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import SEO from '../components/SEO';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const Blog: React.FC = () => {
  const { siteConfig } = useSiteConfig();
  const page = siteConfig.pages.blog;
  const blogPosts = siteConfig.blogPosts;

  return (
    <>
      <SEO
        title={page.title.value}
        description={page.metaDescription.value}
        keywords={page.keywords.value}
        canonicalUrl={page.url}
      />
      <main className="bg-mcafeeLightGray" style={{ fontFamily: siteConfig.theme.fontFamilyBody.value }}>
        <section className="py-16 md:py-20 bg-white shadow-sm text-center">
          <div className="container mx-auto px-4">
            <EditableText path="pages.blog.title.value" element="h1" className="text-4xl md:text-5xl font-heading font-bold text-mcafeeRed mb-4" />
            <EditableText path="pages.blog.metaDescription.value" element="p" className="text-lg md:text-xl max-w-4xl mx-auto text-mcafeeDarkGray" />
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            {blogPosts.length === 0 ? (
              <p className="text-center text-xl text-mcafeeDarkGray">No blog posts yet. Check back soon!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <Link to={`/blog/${post.slug}`}>
                      <EditableImage
                        path={`blogPosts[${index}].imageUrl`}
                        className="w-full h-48 object-cover"
                        alt={post.imageUrl.alt}
                      />
                    </Link>
                    <div className="p-6">
                      <p className="text-sm text-mcafeeDarkGray mb-2">
                        Published on <EditableText path={`blogPosts[${index}].date.value`} className="inline-block" />
                      </p>
                      <Link to={`/blog/${post.slug}`} className="block">
                        <EditableText path={`blogPosts[${index}].title.value`} element="h2" className="text-xl font-heading font-semibold text-mcafeeBlack hover:text-mcafeeRed transition-colors duration-200 mb-2" />
                      </Link>
                      <EditableText path={`blogPosts[${index}].metaDescription.value`} element="p" className="text-mcafeeDarkGray mb-4 line-clamp-3" />
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-mcafeeRed font-heading font-semibold hover:underline"
                      >
                        Read More &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
