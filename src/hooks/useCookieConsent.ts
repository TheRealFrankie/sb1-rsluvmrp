import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookieConsent';

export function useCookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
    // Here you can add logic to enable analytics or other cookie-dependent features
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setShowBanner(false);
    // Here you can add logic to ensure cookies are disabled
  };

  return {
    showBanner,
    acceptCookies,
    declineCookies,
  };
}