import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layout/App';
import './styles/global.css';
import './scripts/generator';
import './scripts/validator';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
