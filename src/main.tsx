import { createRoot } from 'react-dom/client';
import './index.css';
import RootApp from './RootApp.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/theme-provide.tsx';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RootApp />
    </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
);
