import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider';
import './styles/index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <ThemeProvider>
      <App />
      </ThemeProvider>

  </Router>,
);
