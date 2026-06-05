/**
 * Scroll Depth Tracking
 * Automatically tracks when users scroll to specific depth percentages
 * Prevents duplicate firing of events
 */

import { trackScrollDepth } from './ga4';
import { SCROLL_MILESTONES } from './constants';

let scrollTracked: Set<number> = new Set();
let scrollTrackingActive = false;

/**
 * Initialize scroll depth tracking
 * Call this once on page load
 */
export function initializeScrollTracking(): void {
  if (typeof window === 'undefined') return;
  if (scrollTrackingActive) return;

  scrollTracked.clear();
  scrollTrackingActive = true;

  let scrollTimeout: NodeJS.Timeout;

  const handleScroll = () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      const scrollPercentage = getScrollPercentage();

      // Check each milestone
      Object.values(SCROLL_MILESTONES).forEach((milestone) => {
        if (scrollPercentage >= milestone && !scrollTracked.has(milestone)) {
          scrollTracked.add(milestone);
          trackScrollDepth({
            scroll_percentage: milestone,
            page_title: document.title,
          });
        }
      });
    }, 100); // Debounce scroll event
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Get current scroll percentage
 */
export function getScrollPercentage(): number {
  if (typeof window === 'undefined') return 0;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;

  const totalScroll = documentHeight - windowHeight;
  if (totalScroll === 0) return 100; // Page is shorter than viewport

  return Math.round((scrollTop / totalScroll) * 100);
}

/**
 * Reset scroll tracking for page changes
 */
export function resetScrollTracking(): void {
  scrollTracked.clear();
}

/**
 * Manually track scroll to a specific percentage
 */
export function manuallyTrackScrollMilestone(percentage: number): void {
  if (!scrollTracked.has(percentage)) {
    scrollTracked.add(percentage);
    trackScrollDepth({
      scroll_percentage: percentage,
      page_title: document.title,
    });
  }
}
