import React from 'react';

function BlogCard({ post, onSelect }) {
  return (
    <article className="blog-card" onClick={() => onSelect(post)}>
      <p className="blog-tag">{post.category}</p>
      <h3>{post.title}</h3>
      <p className="blog-excerpt">{post.excerpt}</p>
      <button type="button" className="read-button">Read article</button>
    </article>
  );
}

export default BlogCard;
