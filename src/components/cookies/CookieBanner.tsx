import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { CookieButton } from './CookieButton';

export function CookieBanner() {
  const { showBanner, acceptCookies, declineCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-purple-500/20 p-6 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm md:text-base">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und den Datenverkehr zu analysieren. 
            Indem Sie auf „Akzeptieren" klicken, stimmen Sie der Verwendung von Cookies gemäß unserer{' '}
            <Link 
              to="/privacy" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Datenschutzerklärung
            </Link>
            {' '}zu.
          </p>
          <div className="flex gap-4">
            <CookieButton 
              variant="accept" 
              onClick={acceptCookies}
            >
              Akzeptieren
            </CookieButton>
            <CookieButton 
              variant="decline" 
              onClick={declineCookies}
            >
              Ablehnen
            </CookieButton>
          </div>
        </div>
      </div>
    </div>
  );
}