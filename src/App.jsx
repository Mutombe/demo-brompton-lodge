import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import SearchModal from './components/SearchModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import Dining from './pages/Dining';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <ScrollReset />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      <main className="min-h-[60vh]">
        <ErrorBoundary>
          <AnimatePresence mode="popLayout" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:slug" element={<RoomDetail />} />
              <Route path="/dining" element={<Dining />} />
              <Route path="/amenities" element={<Amenities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
      <ScrollToTop />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <FloatingWhatsApp />
      <Toaster
        position="top-center"
        theme="light"
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Inter, system-ui, sans-serif',
            borderRadius: '2px',
          },
        }}
      />
    </>
  );
}
