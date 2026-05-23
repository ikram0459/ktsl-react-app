import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "khanTechCookieConsent";

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
  }, []);

  const handleChoice = (value) => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(STORAGE_KEY, value);

    if (value === "accepted" && window.dataLayer) {
      window.dataLayer.push({ event: "cookie_consent_accepted" });
    }
    if (value === "rejected" && window.dataLayer) {
      window.dataLayer.push({ event: "cookie_consent_rejected" });
    }

    setIsClosing(true);
    window.setTimeout(() => setConsent(value), 300);
  };

  if (consent) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 w-full max-w-sm rounded-3xl border border-border/60 bg-card/95 p-4 shadow-2xl backdrop-blur-xl text-xs text-foreground transition-all duration-300 ${isClosing ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
      <div className="mb-3">
        <p className="font-semibold text-foreground mb-2 text-sm">Cookie consent</p>
        <p className="text-muted-foreground leading-snug">
          We use cookies, including Google Analytics, to improve this site. Please accept cookies for the best experience or decline if you prefer not to be tracked.
          <span className="block mt-2">
            Read our <Link to="/cookies" className="text-primary hover:underline">Cookies Policy</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </span>
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
          onClick={() => handleChoice("accepted")}
        >
          Yes, accept
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary"
          onClick={() => handleChoice("rejected")}
        >
          No, reject
        </button>
      </div>
    </div>
  );
}
