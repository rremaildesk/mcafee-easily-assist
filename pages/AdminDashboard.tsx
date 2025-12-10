
import React, { useState, useEffect } from 'react';
import { useSiteConfig } from '../contexts/SiteConfigContext';
import { useAdmin } from '../contexts/AdminContext';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';
import EditableColorPicker from '../components/EditableColorPicker';
import EditableFontSelector from '../components/EditableFontSelector';
import { BlogPost, PageContent, EditableSection } from '../types';

const AdminDashboard: React.FC = () => {
  const { isAdmin } = useAdmin();
  // Fix: Destructure setSiteConfig from useSiteConfig
  const { siteConfig, updateField, updateImage, addBlogPost, updateBlogPost, deleteBlogPost, setSiteConfig } = useSiteConfig();
  const [selectedPage, setSelectedPage] = useState<keyof typeof siteConfig.pages>('home');
  const [editingBlogPostId, setEditingBlogPostId] = useState<string | null>(null);

  if (!isAdmin) {
    return null;
  }

  const currentPageContent: PageContent = siteConfig.pages[selectedPage];

  const handleAddField = (path: string, defaultValue: string = '') => {
    updateField(path, defaultValue);
  };

  const handleAddSection = (pagePath: string, sectionIdPrefix: string) => {
    // Fix: Using setSiteConfig, which is now available from context
    setSiteConfig(prev => {
      const newConfig = { ...prev };
      const page: PageContent = (newConfig as any).pages[pagePath];
      const newSection: EditableSection = {
        id: `${sectionIdPrefix}_${page.sections.length + 1}`,
        heading: { id: `heading-${page.sections.length + 1}`, value: `New Section Heading ${page.sections.length + 1}` },
        text: { id: `text-${page.sections.length + 1}`, value: `This is new section content ${page.sections.length + 1}.` },
        images: [],
      };
      page.sections.push(newSection);
      return newConfig;
    });
  };

  const handleAddBlogPost = () => {
    const newId = `blog${siteConfig.blogPosts.length + 1}`;
    const newPost: BlogPost = {
      id: newId,
      slug: `new-blog-post-${newId}`,
      title: { id: `${newId}Title`, value: `New Blog Post Title | ${siteConfig.phoneNumber.value}` },
      metaDescription: { id: `${newId}MetaDescription`, value: 'A brief description of this new blog post.' },
      keywords: { id: `${newId}Keywords`, value: 'new post, blog, topic' },
      imageUrl: { id: `${newId}Image`, src: 'https://picsum.photos/800/450?random=newpost', alt: 'New blog post image' },
      date: { id: `${newId}Date`, value: new Date().toISOString().split('T')[0] },
      content: [
        {
          id: `${newId}Intro`,
          heading: { id: `${newId}IntroHeading`, value: 'Introduction to My New Post' },
          text: { id: `${newId}IntroText`, value: 'This is the introductory paragraph of the new blog post.' },
        },
      ],
    };
    addBlogPost(newPost);
    setEditingBlogPostId(newId); // Immediately start editing the new post
  };

  // Removed handleUpdateBlogPost as updateField can now handle blog post fields directly

  // Removed handleUpdateBlogPostImage as updateImage can now handle blog post image fields directly

  const handleAddBlogPostContentSection = (postId: string) => {
    // Fix: Using setSiteConfig, which is now available from context
    setSiteConfig(prev => {
      const newConfig = { ...prev };
      const blogPostToUpdate = newConfig.blogPosts.find(p => p.id === postId);
      if (blogPostToUpdate) {
        const newSectionId = `content${blogPostToUpdate.content.length + 1}`;
        blogPostToUpdate.content.push({
          id: newSectionId,
          heading: { id: `${postId}_${newSectionId}_heading`, value: `New Content Heading ${blogPostToUpdate.content.length + 1}` },
          text: { id: `${postId}_${newSectionId}_text`, value: `This is a new content paragraph for section ${blogPostToUpdate.content.length + 1}.` },
          images: [],
        });
      }
      return newConfig;
    });
  };

  const handleRemoveBlogPostContentSection = (postId: string, sectionId: string) => {
    // Fix: Using setSiteConfig, which is now available from context
    setSiteConfig(prev => {
      const newConfig = { ...prev };
      const blogPostToUpdate = newConfig.blogPosts.find(p => p.id === postId);
      if (blogPostToUpdate) {
        blogPostToUpdate.content = blogPostToUpdate.content.filter(s => s.id !== sectionId);
      }
      return newConfig;
    });
  };


  const handleUpdateLayout = (elementPath: string, newElement: string) => {
    // This is a simplified layout update. A real system would need more complex logic
    // to change component types or reorder elements.
    // For now, this will update the 'element' prop if EditableText was generic enough
    // to accept and re-render based on it.
    console.log(`Updating layout for ${elementPath} to ${newElement}`);
    // This example won't implement full layout manipulation via strings.
    // It would require a more robust component registry and dynamic rendering logic.
    alert('Layout customization is complex and currently limited to simple text/image edits. Full layout changes require code modifications.');
  };


  return (
    <div className="fixed inset-0 bg-white z-[100] p-4 overflow-y-auto" style={{ fontFamily: siteConfig.theme.fontFamilyBody.value }}>
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-3xl font-heading font-bold text-mcafeeRed">Admin Dashboard</h1>
        <button
          onClick={() => { /* In a real app, this would log out or simply toggle admin mode off */ }}
          className="bg-mcafeeDarkGray text-white px-4 py-2 rounded-md hover:bg-mcafeeBlack transition-colors duration-200"
        >
          Exit Admin
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Global Settings */}
        <div className="lg:col-span-1 bg-mcafeeLightGray p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-bold text-mcafeeBlack mb-4">Global Settings</h2>
          <div className="space-y-4">
            <EditableText path="siteName.value" placeholder="Site Name" label="Site Name" className="text-xl font-heading font-semibold" />
            <EditableText path="tagline.value" placeholder="Tagline" label="Tagline" className="text-base" />
            <EditableText path="phoneNumber.value" placeholder="Phone Number" label="Phone Number" />
            <EditableText path="email.value" placeholder="Email" label="Email" />
            <EditableText path="address.value" placeholder="Address" label="Address" />
            <EditableText path="socialMedia.facebook.value" placeholder="Facebook URL" label="Facebook URL" />
            <EditableText path="socialMedia.twitter.value" placeholder="Twitter URL" label="Twitter URL" />
            <EditableText path="socialMedia.linkedin.value" placeholder="LinkedIn URL" label="LinkedIn URL" />
            <EditableText path="socialMedia.instagram.value" placeholder="Instagram URL" label="Instagram URL" />
          </div>

          <h3 className="text-xl font-heading font-bold text-mcafeeBlack mt-8 mb-4">Theme Customization</h3>
          <div className="space-y-4">
            <EditableColorPicker path="theme.primaryColor.value" label="Primary Color" />
            <EditableColorPicker path="theme.accentColor.value" label="Accent Color" />
            <EditableColorPicker path="theme.textColor.value" label="Text Color" />
            <EditableColorPicker path="theme.backgroundColor.value" label="Background Color" />
            <EditableFontSelector path="theme.fontFamilyHeading.value" label="Heading Font" />
            <EditableFontSelector path="theme.fontFamilyBody.value" label="Body Font" />
          </div>
        </div>

        {/* Page Content Editing */}
        <div className="lg:col-span-2 bg-mcafeeLightGray p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-heading font-bold text-mcafeeBlack mb-4">Page Content Editing</h2>
          <div className="mb-6">
            <label htmlFor="select-page" className="block text-mcafeeDarkGray text-sm font-semibold mb-2">Select Page:</label>
            <select
              id="select-page"
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value as keyof typeof siteConfig.pages)}
              className="w-full p-2 border border-mcafeeGray rounded-md focus:outline-none focus:ring-2 focus:ring-mcafeeRed"
            >
              {Object.keys(siteConfig.pages).map(pageKey => (
                <option key={pageKey} value={pageKey}>
                  {pageKey.charAt(0).toUpperCase() + pageKey.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {currentPageContent && (
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-bold text-mcafeeRed mb-3">{currentPageContent.title.value}</h3>
              <div className="border p-4 rounded-md bg-white space-y-3">
                <p className="font-semibold">SEO Settings</p>
                <EditableText path={`pages.${selectedPage}.title.value`} placeholder="Page Title" label="Page Title" />
                <EditableText path={`pages.${selectedPage}.metaDescription.value`} element="textarea" placeholder="Meta Description" label="Meta Description" />
                <EditableText path={`pages.${selectedPage}.keywords.value`} placeholder="Keywords (comma-separated)" label="Keywords" />
              </div>

              {currentPageContent.sections.map((section, sectionIndex) => (
                <div key={section.id} className="border p-4 rounded-md bg-white space-y-3">
                  <h4 className="font-semibold text-mcafeeDarkGray">Section: {section.id}</h4>
                  {section.heading && (
                    <EditableText path={`pages.${selectedPage}.sections[${sectionIndex}].heading.value`} placeholder="Section Heading" label="Section Heading" />
                  )}
                  {section.text && (
                    <EditableText path={`pages.${selectedPage}.sections[${sectionIndex}].text.value`} element="textarea" placeholder="Section Text" label="Section Text" />
                  )}
                  {section.images?.map((image, imageIndex) => (
                    <div key={image.id}>
                      <p className="text-sm font-medium text-mcafeeDarkGray mt-2">Image {imageIndex + 1}:</p>
                      <EditableImage path={`pages.${selectedPage}.sections[${sectionIndex}].images[${imageIndex}]`} />
                    </div>
                  ))}
                </div>
              ))}
              <button
                onClick={() => handleAddSection(selectedPage, selectedPage)}
                className="bg-mcafeeDarkRed text-white px-4 py-2 rounded-md hover:bg-mcafeeRed transition-colors duration-200 mt-4"
              >
                Add New Section
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Blog Post Management */}
      <div className="bg-mcafeeLightGray p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-heading font-bold text-mcafeeBlack mb-4">Blog Post Management</h2>
        <button
          onClick={handleAddBlogPost}
          className="bg-mcafeeRed text-white px-4 py-2 rounded-md hover:bg-mcafeeDarkRed transition-colors duration-200 mb-6"
        >
          Add New Blog Post
        </button>

        <div className="space-y-4">
          {siteConfig.blogPosts.map((post, postIndex) => (
            <div key={post.id} className="border p-4 rounded-md bg-white">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-heading font-bold text-mcafeeBlack">{post.title.value}</h3>
                <div>
                  <button
                    onClick={() => setEditingBlogPostId(post.id === editingBlogPostId ? null : post.id)}
                    className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-600 transition-colors mr-2"
                  >
                    {editingBlogPostId === post.id ? 'Close Edit' : 'Edit'}
                  </button>
                  <button
                    onClick={() => deleteBlogPost(post.id)}
                    className="bg-red-500 text-white px-3 py-1 text-sm rounded-md hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {editingBlogPostId === post.id && (
                <div className="space-y-4 mt-4">
                  {/* Fix: Use updateField directly, passing the full path */}
                  <EditableText path={`blogPosts[${postIndex}].title.value`} placeholder="Blog Post Title" label="Title" onChange={(e) => updateField(`blogPosts[${postIndex}].title.value`, e.target.value)} />
                  <EditableText path={`blogPosts[${postIndex}].slug`} placeholder="URL Slug (e.g., my-great-post)" label="Slug" onChange={(e) => updateField(`blogPosts[${postIndex}].slug`, e.target.value)} />
                  <EditableText path={`blogPosts[${postIndex}].date.value`} placeholder="YYYY-MM-DD" label="Publish Date" onChange={(e) => updateField(`blogPosts[${postIndex}].date.value`, e.target.value)} />
                  <EditableText path={`blogPosts[${postIndex}].metaDescription.value`} element="textarea" placeholder="Meta Description" label="Meta Description" onChange={(e) => updateField(`blogPosts[${postIndex}].metaDescription.value`, e.target.value)} />
                  <EditableText path={`blogPosts[${postIndex}].keywords.value`} placeholder="Keywords (comma-separated)" label="Keywords" onChange={(e) => updateField(`blogPosts[${postIndex}].keywords.value`, e.target.value)} />
                  <p className="font-semibold text-mcafeeDarkGray text-sm mt-2">Featured Image:</p>
                  <EditableImage path={`blogPosts[${postIndex}].imageUrl`} />

                  <h4 className="font-semibold text-mcafeeBlack mt-6 mb-3">Post Content Sections:</h4>
                  {post.content.map((section, sectionIndex) => (
                    <div key={section.id} className="border p-3 rounded-md bg-mcafeeLightGray space-y-2 relative">
                      <button
                        onClick={() => handleRemoveBlogPostContentSection(post.id, section.id)}
                        className="absolute top-2 right-2 bg-red-400 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs hover:bg-red-500"
                      >
                        X
                      </button>
                      {section.heading && (
                        <EditableText path={`blogPosts[${postIndex}].content[${sectionIndex}].heading.value`} placeholder="Content Heading" label="Heading" onChange={(e) => updateField(`blogPosts[${postIndex}].content[${sectionIndex}].heading.value`, e.target.value)} />
                      )}
                      {section.text && (
                        <EditableText path={`blogPosts[${postIndex}].content[${sectionIndex}].text.value`} element="textarea" placeholder="Content Text" label="Text" onChange={(e) => updateField(`blogPosts[${postIndex}].content[${sectionIndex}].text.value`, e.target.value)} />
                      )}
                      {section.images?.map((image, imgIndex) => (
                        <div key={image.id}>
                          <p className="text-xs font-medium text-mcafeeDarkGray mt-1">Content Image {imgIndex + 1}:</p>
                          <EditableImage path={`blogPosts[${postIndex}].content[${sectionIndex}].images[${imgIndex}]`} />
                        </div>
                      ))}
                    </div>
                  ))}
                  <button
                    onClick={() => handleAddBlogPostContentSection(post.id)}
                    className="bg-mcafeeDarkRed text-white px-4 py-2 rounded-md hover:bg-mcafeeRed transition-colors duration-200 mt-4"
                  >
                    Add Content Section
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;