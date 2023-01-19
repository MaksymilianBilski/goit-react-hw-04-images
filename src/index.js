import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import ImagesFinderProvider from 'context/ImagesFinderContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ImagesFinderProvider>
    <App />
  </ImagesFinderProvider>
);
