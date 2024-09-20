import ReactDOM from 'react-dom/client';
import './globals.css';
import App from './app';
import React from 'react';
import { ThemeProvider } from './providers/shadcn-provider';
import { TmaProvider } from './providers/tma-provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <TmaProvider>
        <App />
      </TmaProvider>
    </ThemeProvider>
  </React.StrictMode>
);
