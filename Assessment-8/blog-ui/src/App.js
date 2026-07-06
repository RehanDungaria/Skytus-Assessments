import { useState } from 'react';
import './App.css';
import BlogDetail from './components/BlogDetail';
import BlogList from './components/BlogList';

const initialPosts = [
  {
    id: 1,
    title: 'Why Minimal Design Makes Reading Better',
    category: 'Design',
    excerpt: 'A simple layout helps your readers focus on the story, not the noise around it.',
    author: 'Mia Chen',
    date: 'June 10, 2026',
    content:
      'Minimal design reduces distractions and makes every sentence easier to scan. In this post, we explore how spacing, contrast, and clear headings work together to create a calm reading experience for modern blog readers.'
  },
  {
    id: 2,
    title: 'How React State Powers a Smooth Blog Flow',
    category: 'React',
    excerpt: 'State keeps the selected article easy to switch and makes the interface feel seamless.',
    author: 'Noah Patel',
    date: 'June 8, 2026',
    content:
      'React state lets us store the full list of blog posts and update which one is currently open. This gives the app a true single-page experience where the content changes dynamically without a browser refresh.'
  },
  {
    id: 3,
    title: 'Five Tips for Writing Short, Strong Blog Posts',
    category: 'Writing',
    excerpt: 'Clear ideas and strong structure make every post more engaging and memorable.',
    author: 'Ava Lewis',
    date: 'June 5, 2026',
    content:
      'Short posts work best when each paragraph has a clear purpose. Start with a strong hook, organize the key points, and end with one takeaway your readers can remember long after they finish.'
  },
  {
id: 4,
title: 'Why ReactJS Is Perfect for Modern Web Development',
category: 'Technology',
excerpt: 'React helps developers build fast, scalable, and interactive user interfaces.',
author: 'Daniel Scott',
date: 'June 9, 2026',
content:
'ReactJS simplifies frontend development through reusable components and efficient state management. Its virtual DOM improves performance, making it an excellent choice for modern web applications.'
},

{
id: 5,
title: 'The Importance of Responsive Web Design',
category: 'Design',
excerpt: 'A responsive layout ensures a great experience on every device.',
author: 'Sophia Martinez',
date: 'June 7, 2026',
content:
'Responsive design allows websites to adapt seamlessly to different screen sizes. By using flexible layouts and media queries, developers can create interfaces that look great on desktops, tablets, and smartphones.'
},

{
id: 6,
title: 'Boost Productivity with JavaScript ES6 Features',
category: 'JavaScript',
excerpt: 'Modern JavaScript features make code cleaner and easier to maintain.',
author: 'Ethan Brooks',
date: 'June 3, 2026',
content:
'ES6 introduced powerful features such as arrow functions, template literals, destructuring, and modules. These additions help developers write more concise and readable code while improving overall productivity.'
}

];

function App() {
  const [posts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <main className="app-shell">
      <header className="hero-panel">
        <p className="eyebrow">Simple Blog UI</p>
        <h1>Read stories, pick one, and explore the details.</h1>
        <p className="hero-copy">
          This React app uses state, props, components, and click events to create a clean single-page blog experience.
        </p>
      </header>

      {selectedPost ? (
        <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <BlogList posts={posts} onSelect={setSelectedPost} />
      )}
    </main>
  );
}

export default App;
