// /components/BlogSection.tsx

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {blogPosts } from './blogs-data';

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Cybersecurity', 'AI & ML', 'Cloud Computing', 'Solar', 'Digital Marketing', 'Development'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Latest <span className="bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3] bg-clip-text text-transparent">Insights</span> & Blog
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and insights from our expert team. 
            Explore our comprehensive guides and industry analysis.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          
          {/* Categories Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none bg-gray-800 border border-gray-700 text-white px-6 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2674D3] focus:border-transparent cursor-pointer min-w-[200px]"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-gray-800">
                  {category === 'All' ? 'Categories' : category}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 md:max-w-md">
            <input
              type="text"
              placeholder="Search Here"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full bg-gray-800 border border-gray-700 text-white px-6 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2674D3] focus:border-transparent placeholder-gray-400"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-[#2674D3]/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                {/* Featured Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#1A82E8] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <span className="bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;