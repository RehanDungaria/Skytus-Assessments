import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // <-- Correct path for CSS in the root of src
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);