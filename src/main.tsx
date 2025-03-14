import { createRoot } from 'react-dom/client';
import './index.css';
import RootApp from './RootApp.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/theme-provide.tsx';
import SearchProvider from './provider/search-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SearchProvider>
          <RootApp />
        </SearchProvider>
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
);
