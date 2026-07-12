import React from 'react';
import './Loader.css';

const Loader = ({ size = 'medium', fullPage = false }) => {
  const loader = <div className={`spinner ${size}`}></div>;

  if (fullPage) {
    return <div className="loader-overlay">{loader}</div>;
  }

  return loader;
};

export default Loader;
