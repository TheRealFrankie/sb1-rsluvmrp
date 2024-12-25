import { useCallback } from 'react';
import { useScrollToElement } from './useScrollToElement';

export function useNavigateToRegister() {
  const scrollToElement = useScrollToElement();

  return useCallback(() => {
    scrollToElement('contact-form');
  }, [scrollToElement]);
}