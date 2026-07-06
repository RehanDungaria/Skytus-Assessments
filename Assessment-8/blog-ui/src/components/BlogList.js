import React from 'react';
import BlogCard from './BlogCard';

function BlogList({ posts, onSelect }) {
  return (
    <section className="blog-list-section">
      <h2>Latest Stories</h2>
      <p className="section-copy">Pick a story to read the full post.</p>
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default BlogList;
