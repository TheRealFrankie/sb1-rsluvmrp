import { useEffect } from 'react';
import { CHATBOT_CONFIG, CHATBOT_SCRIPT_URL } from './ChatbotConfig';

export function ChatbotContainer() {
  useEffect(() => {
    // Set global configuration
    window.VG_CONFIG = CHATBOT_CONFIG;

    // Create and append script
    const script = document.createElement('script');
    script.src = CHATBOT_SCRIPT_URL;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="VG_OVERLAY_CONTAINER" className="z-chatbot" />;
}