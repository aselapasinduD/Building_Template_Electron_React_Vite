import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';

const rootElement = document.getElementById('root');

if (rootElement !== null) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <App />
    );
} else {
    console.error("No element with id 'root' found");
}