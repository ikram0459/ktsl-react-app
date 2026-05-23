const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

function createGtag() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  return gtag;
}

function loadGtagScript() {
  if (!GA_MEASUREMENT_ID) return;
  const existing = document.head.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`);
  if (existing) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function initializeAnalytics() {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID) return;
  if (window.gtag) return;

  const gtag = createGtag();
  loadGtagScript();
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    page_path: window.location.pathname + window.location.search + window.location.hash,
    page_location: window.location.href,
  });
}

export function trackPageView(path) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
  });
}

export function trackEvent(action, category = "engagement", label = "") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    page_path: window.location.pathname + window.location.search + window.location.hash,
  });
}
