import React from 'react';

function BlogDetail({ post, onBack }) {
  return (
    <section className="blog-detail-section">
      <button type="button" className="back-button" onClick={onBack}>
        ← Back to all posts
      </button>
      <p className="blog-tag">{post.category}</p>
      <h2>{post.title}</h2>
      <p className="detail-author">By {post.author} · {post.date}</p>
      <p className="detail-content">{post.content}</p>
    </section>
  );
}

export default BlogDetail;
