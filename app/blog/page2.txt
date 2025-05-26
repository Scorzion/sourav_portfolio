"use client";

import Head from 'next/head';
import { useState } from 'react';

const Blog = () => {
  // Updated blog data with quant/competitive programming focus
  const blogPosts = [
    {
      id: 1,
      title: 'My First Quant Internship Experience',
      excerpt: 'How I landed and what I learned during my quant internship at a trading firm.',
      date: 'June 8, 2025',
      readTime: '6 min read',
      category: 'Quant'
    },
    {
      id: 2,
      title: 'Advanced C++ for HFT Systems',
      excerpt: 'Low-latency techniques and performance optimizations I use in competitive programming.',
      date: 'June 2, 2023',
      readTime: '8 min read',
      category: 'Coding'
    },
    {
      id: 3,
      title: 'Mathematics Behind Options Pricing',
      excerpt: 'Exploring Black-Scholes and binomial models from a CS student perspective.',
      date: 'May 30, 2025',
      readTime: '10 min read',
      category: 'Quant Math'
    },
    {
      id: 4,
      title: 'Codeforces Contest #1026 (Div. 2) Breakdown',
      excerpt: 'Problem analysis and solution approaches from a recent competition.',
      date: 'May 24, 2025',
      readTime: '7 min read',
      category: 'Competitive Programming'
    },
    {
      id: 5,
      title: 'Building a Backtesting Framework',
      excerpt: 'How I created a simple quant strategy backtester in Python.',
      date: 'May 12, 2025',
      readTime: '9 min read',
      category: 'Projects'
    },
    {
      id: 6,
      title: 'IISER to Quant: My Preparation',
      excerpt: 'Balancing academic curriculum with quant interview preparation.',
      date: 'Feb 10, 2025',
      readTime: '5 min read',
      category: 'Journey'
    },
  ];

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'Quant', count: blogPosts.filter(post => post.category.includes('Quant')).length },
    { name: 'Competitive Programming', count: blogPosts.filter(post => post.category === 'Competitive Programming').length },
    { name: 'Coding', count: blogPosts.filter(post => post.category === 'Coding').length },
    { name: 'Projects', count: blogPosts.filter(post => post.category === 'Projects').length },
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => 
        activeCategory === 'Quant' 
          ? post.category.includes('Quant') 
          : post.category === activeCategory
      );

  return (
    <div className="min-h-screen bg-primary">
      <Head>
        <title>Quant & CP Blog | Sourav Sharma</title>
        <meta name="description" content="Insights on quant development, competitive programming, and my journey from IISER Bhopal" />
      </Head>

      <main className="max-w-6xl mx-auto py-10 px-4 sm:px-6">
        <section className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-3 text-outline">Quant & CP Blog | Sourav Sharma</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey from IISER Bhopal to Quant & Software development | Contest writeups | Technical deep dives
          </p>
        </section>

        {/* Categories filter */}
        <section className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button 
              key={category.name}
              className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                activeCategory === category.name
                  ? 'bg-accent text-primary border-accent'
                  : 'border-accent text-accent hover:bg-accent/10'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name} <span className="text-muted-foreground ml-1">{category.count}</span>
            </button>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-[#232329] rounded-lg overflow-hidden border border-border hover:border-accent transition-colors duration-300 group"
            >
              <div className="p-5">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                  post.category === 'Quant' ? 'bg-accent/20 text-accent' :
                  post.category === 'Competitive Programming' ? 'bg-accent/20 text-accent' :
                  'bg-accent/20 text-accent'
                }`}>
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mb-2 text-primary-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-white">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="px-5 py-3 bg-primary border-t border-border">
                <button className="text-accent font-medium hover:text-accent-hover transition-colors flex items-center gap-1">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </article>
          ))}
        </section>

        {filteredPosts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No posts found in this category.</p>
          </div>
        )}

        <section className="mt-12 text-center max-w-3xl mx-auto border-t border-border pt-10">
          <h2 className="text-2xl font-bold mb-3 text-outline">Stay Updated</h2>
          <p className="text-muted-foreground mb-5">
            Subscribe for quant/competitive programming content updates
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="your.email@domain.com" 
              className="flex-grow px-4 py-2 bg-input text-foreground border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent text-primary/60 px-5 py-2 rounded-r-lg hover:bg-accent-hover transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;