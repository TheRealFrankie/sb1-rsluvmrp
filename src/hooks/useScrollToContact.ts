import { useCallback } from 'react';
import { smoothScrollToElement } from '@/lib/scroll';

export function useScrollToContact() {
  return useCallback(() => {
    const contactForm = document.querySelector('[data-contact-form]');
    if (!contactForm) return;

    // Update URL hash
    history.pushState(null, '', '#contact');

    // Scroll to form with animation
    smoothScrollToElement(contactForm, {
      duration: 800,
      offset: -100, // Offset to account for fixed header
      onComplete: () => {
        // Add highlight effect
        contactForm.classList.add('highlight-form');
        
        // Focus the first input for accessibility
        const firstInput = contactForm.querySelector('input, textarea, button');
        if (firstInput instanceof HTMLElement) {
          firstInput.focus();
        }

        // Remove highlight after animation
        setTimeout(() => {
          contactForm.classList.remove('highlight-form');
        }, 1500);
      }
    });
  }, []);
}