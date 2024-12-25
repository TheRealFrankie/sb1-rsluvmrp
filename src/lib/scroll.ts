interface ScrollOptions {
  duration?: number;
  offset?: number;
  onComplete?: () => void;
}

export function smoothScrollToElement(element: Element, options: ScrollOptions = {}) {
  const {
    duration = 800,
    offset = 0,
    onComplete
  } = options;

  const start = window.scrollY;
  const elementY = element.getBoundingClientRect().top + window.scrollY;
  const targetY = elementY + offset;
  const diff = targetY - start;
  const easing = easeInOutCubic;
  let startTime: number;

  function animation(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    window.scrollTo(0, start + (diff * easing(progress)));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      onComplete?.();
    }
  }

  requestAnimationFrame(animation);
}

// Cubic easing for smooth acceleration and deceleration
function easeInOutCubic(t: number): number {
  return t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}