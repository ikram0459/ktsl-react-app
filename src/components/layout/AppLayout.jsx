import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

function WhatsAppButton() {
  return (
    <a href="https://wa.me/353892444612" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110" data-testid="button-whatsapp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.64 15.05L2 22l4.95-1.3A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 7.1 12.3l-.3.5.85 3.1-3.2-.84-.48.27A8.2 8.2 0 1 1 12 3.8zm4.7 10.3c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.16.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.24-.76-.68-1.27-1.52-1.42-1.78-.15-.26-.02-.4.11-.53.11-.11.25-.29.38-.43.13-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.13-.57-1.38-.79-1.89-.21-.51-.42-.44-.57-.45h-.49c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.52.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
      </svg>
    </a>
  );
}

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}
