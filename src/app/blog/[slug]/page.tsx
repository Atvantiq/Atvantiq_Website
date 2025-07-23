import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug,getAllBlogSlugs,getRelatedPosts } from '@/components/blogs/blogs-data';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/landing/Footer';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Atvantiq Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ params }) => {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = getRelatedPosts(post.id, post.category, 3);

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white text-sm font-medium px-4 py-2 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-center gap-6 text-gray-300 text-sm md:text-base">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By {post.author.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Sidebar Layout */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2">

              {/* Blog Content with Enhanced Styling */}
              <div className="blog-content mb-8">
                <div 
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Related Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 hover:border-[#2674D3]/50 transition-all duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share & Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-center py-8 border-t border-gray-800 gap-4">
                <Link 
                  href="/blogs"
                  className="flex items-center gap-2 text-[#1A82E8] hover:text-[#2674D3] transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to All Blogs
                </Link>
                
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm">Share:</span>
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-[#1A82E8] transition-colors p-2 hover:bg-gray-800 rounded-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-[#1A82E8] transition-colors p-2 hover:bg-gray-800 rounded-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-[#1A82E8] transition-colors p-2 hover:bg-gray-800 rounded-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Recent Posts */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#1A82E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Recent Posts
                  </h3>
                  
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link href={`/blogs/${relatedPost.slug}`} key={relatedPost.id}>
                        <div className="group flex gap-4 p-3 hover:bg-gray-800 rounded-xl transition-all duration-300 cursor-pointer">
                          <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white text-sm font-medium mb-1 line-clamp-2 group-hover:text-[#1A82E8] transition-colors">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span>{relatedPost.date}</span>
                              <span>•</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <Link 
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-[#1A82E8] hover:text-[#2674D3] font-medium text-sm mt-4 transition-colors"
                  >
                    View All Posts
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Categories */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#1A82E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Categories
                  </h3>
                  
                  <div className="space-y-2">
                    {['AI & ML', 'Cybersecurity', 'Cloud Computing', 'Digital Marketing', 'Development'].map((category) => (
                      <div key={category} className="flex items-center justify-between py-2 px-3 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer group">
                        <span className="text-gray-300 group-hover:text-white transition-colors">{category}</span>
                        <span className="text-xs text-gray-500 bg-gray-800 group-hover:bg-gray-700 px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 5) + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-[#2674D3]/20 to-[#1A82E8]/20 border border-[#2674D3]/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Stay Updated</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Get the latest insights and updates delivered straight to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2674D3] placeholder-gray-400 text-sm"
                    />
                    <button className="w-full bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#2674D3] to-[#1A82E8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get in touch with our experts to discuss how we can help you achieve your goals.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#2674D3] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default BlogPostPage;