import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <App />

  </React.StrictMode>
);

// this will render all the react stuff in the index.html file through <div id="root"></div>
