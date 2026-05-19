import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import './styles/index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import App from './App.jsx';

AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
