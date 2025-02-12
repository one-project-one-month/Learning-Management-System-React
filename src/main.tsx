import { createRoot } from 'react-dom/client';
import './style/app.css';
import RootApp from './RootApp.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <RootApp />
    </BrowserRouter>
  </HelmetProvider>
);
