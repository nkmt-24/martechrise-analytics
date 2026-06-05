/**
 * Time on Page Tracking
 * Automatically tracks when users spend specific amounts of time on a page
 * Prevents duplicate firing of events
 */

import { trackTimeOnPageMilestone } from './ga4';
import { TIME_MILESTONES } from './constants';

let timeTracked: Set<number> = new Set();
let startTime = 0;
let timeTrackingActive = false;
let timeoutIds: NodeJS.Timeout[] = [];

/**
 * Initialize time on page tracking
 * Call this once on page load
 */
export function initializeTimeTracking(): void {
  if (typeof window === 'undefined') return;
  if (timeTrackingActive) return;

  timeTracked.clear();
  startTime = Date.now();
  timeTrackingActive = true;

  // Set up timeouts for each milestone
  Object.entries(TIME_MILESTONES).forEach(([key, milliseconds]) => {
    const timeout = setTimeout(() => {
      const timeSeconds = milliseconds / 1000;
      if (!timeTracked.has(milliseconds)) {
        timeTracked.add(milliseconds);
        trackTimeOnPageMilestone({
          time_seconds: timeSeconds,
          page_title: document.title,
        });
      }
    }, milliseconds);

    timeoutIds.push(timeout);
  });
}

/**
 * Get time spent on current page (in seconds)
 */
export function getTimeOnPage(): number {
  if (!startTime) return 0;
  return Math.round((Date.now() - startTime) / 1000);
}

/**
 * Reset time tracking for page changes
 */
export function resetTimeTracking(): void {
  timeTracked.clear();
  startTime = 0;
  timeoutIds.forEach((id) => clearTimeout(id));
  timeoutIds = [];
  timeTrackingActive = false;
}

/**
 * Manually track a time milestone
 */
export function manuallyTrackTimeMilestone(seconds: number): void {
  const milliseconds = seconds * 1000;
  if (!timeTracked.has(milliseconds)) {
    timeTracked.add(milliseconds);
    trackTimeOnPageMilestone({
      time_seconds: seconds,
      page_title: document.title,
    });
  }
}
