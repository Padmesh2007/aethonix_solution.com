import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Toast from './components/Toast';

// Pages
import AboutPage from './pages/AboutPage';
import CollabPage from './pages/CollabPage';
import ContactPage from './pages/ContactPage';
import KitsPage from './pages/KitsPage';
import LearnMorePage from './pages/LearnMorePage';
import PricingPage from './pages/PricingPage';
import HeadsPage from './pages/HeadsPage';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {

  const [theme, setTheme] = useState('light');
  const [toast, setToast] = useState('');

  useEffect(() => {

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const showToast = useCallback((msg) => {

    setToast(msg);
    setTimeout(() => setToast(''), 3000);

  }, []);

  return (

    <div className="min-h-screen">

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<AboutPage showToast={showToast} />} />

        <Route path="/about" element={<AboutPage showToast={showToast} />} />

        <Route path="/collab" element={<CollabPage showToast={showToast} />} />

        <Route path="/contact" element={<ContactPage showToast={showToast} />} />

        <Route path="/kits" element={<KitsPage showToast={showToast} />} />

        <Route path="/pricing" element={<PricingPage showToast={showToast} />} />

        <Route path="/learn-more" element={<LearnMorePage showToast={showToast} />} />

        <Route path="/heads" element={<HeadsPage />} />

        <Route path="*" element={<AboutPage showToast={showToast} />} />

      </Routes>

      <Toast message={toast} onClose={() => setToast('')} />

    </div>

  );

}

export default function App() {

  return (

    <BrowserRouter>

      <AppContent />

    </BrowserRouter>

  );

}