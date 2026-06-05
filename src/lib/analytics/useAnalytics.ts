/**
 * useAnalytics Hook
 * Provides easy access to analytics functions in client components
 * 
 * Usage:
 * 'use client'
 * import { useAnalytics } from '@/lib/analytics/useAnalytics'
 * 
 * export default function MyComponent() {
 *   const { trackCTAClick, trackFormSubmit } = useAnalytics()
 * 
 *   return (
 *     <button onClick={() => trackCTAClick({ cta_text: 'Click me', cta_position: 'hero' })}>
 *       Click Me
 *     </button>
 *   )
 * }
 */

'use client';

import {
  trackEvent,
  trackPageView,
  trackContactFormSubmit,
  trackAuditRequestSubmit,
  trackQuoteRequestSubmit,
  trackServiceInquiry,
  trackPhoneCall,
  trackWhatsAppClick,
  trackEmailClick,
  trackConsultationRequest,
  trackCTAClick,
  trackNavigationClick,
  trackOutboundLinkClick,
  trackInternalLinkClick,
  trackButtonClick,
  trackScrollDepth,
  trackTimeOnPageMilestone,
  trackVideoPlay,
  trackVideoComplete,
  trackFAQExpand,
  trackTestimonialInteraction,
  trackCaseStudyView,
  trackServiceView,
  trackFormStart,
  trackFormFieldError,
  trackSocialShare,
  trackSearch,
  trackFilterApplied,
  trackBrochureDownload,
  trackFileDownload,
  trackResourceDownload,
  trackErrorPageView,
  setUserProperty,
  setCustomDimension,
  getSessionId,
  initializeSessionTracking,
} from './ga4';

interface UseAnalyticsReturn {
  trackEvent: typeof trackEvent;
  trackPageView: typeof trackPageView;
  trackContactFormSubmit: typeof trackContactFormSubmit;
  trackAuditRequestSubmit: typeof trackAuditRequestSubmit;
  trackQuoteRequestSubmit: typeof trackQuoteRequestSubmit;
  trackServiceInquiry: typeof trackServiceInquiry;
  trackPhoneCall: typeof trackPhoneCall;
  trackWhatsAppClick: typeof trackWhatsAppClick;
  trackEmailClick: typeof trackEmailClick;
  trackConsultationRequest: typeof trackConsultationRequest;
  trackCTAClick: typeof trackCTAClick;
  trackNavigationClick: typeof trackNavigationClick;
  trackOutboundLinkClick: typeof trackOutboundLinkClick;
  trackInternalLinkClick: typeof trackInternalLinkClick;
  trackButtonClick: typeof trackButtonClick;
  trackScrollDepth: typeof trackScrollDepth;
  trackTimeOnPageMilestone: typeof trackTimeOnPageMilestone;
  trackVideoPlay: typeof trackVideoPlay;
  trackVideoComplete: typeof trackVideoComplete;
  trackFAQExpand: typeof trackFAQExpand;
  trackTestimonialInteraction: typeof trackTestimonialInteraction;
  trackCaseStudyView: typeof trackCaseStudyView;
  trackServiceView: typeof trackServiceView;
  trackFormStart: typeof trackFormStart;
  trackFormFieldError: typeof trackFormFieldError;
  trackSocialShare: typeof trackSocialShare;
  trackSearch: typeof trackSearch;
  trackFilterApplied: typeof trackFilterApplied;
  trackBrochureDownload: typeof trackBrochureDownload;
  trackFileDownload: typeof trackFileDownload;
  trackResourceDownload: typeof trackResourceDownload;
  trackErrorPageView: typeof trackErrorPageView;
  setUserProperty: typeof setUserProperty;
  setCustomDimension: typeof setCustomDimension;
  getSessionId: typeof getSessionId;
  initializeSessionTracking: typeof initializeSessionTracking;
}

/**
 * useAnalytics Hook
 * Returns all analytics tracking functions
 */
export function useAnalytics(): UseAnalyticsReturn {
  return {
    trackEvent,
    trackPageView,
    trackContactFormSubmit,
    trackAuditRequestSubmit,
    trackQuoteRequestSubmit,
    trackServiceInquiry,
    trackPhoneCall,
    trackWhatsAppClick,
    trackEmailClick,
    trackConsultationRequest,
    trackCTAClick,
    trackNavigationClick,
    trackOutboundLinkClick,
    trackInternalLinkClick,
    trackButtonClick,
    trackScrollDepth,
    trackTimeOnPageMilestone,
    trackVideoPlay,
    trackVideoComplete,
    trackFAQExpand,
    trackTestimonialInteraction,
    trackCaseStudyView,
    trackServiceView,
    trackFormStart,
    trackFormFieldError,
    trackSocialShare,
    trackSearch,
    trackFilterApplied,
    trackBrochureDownload,
    trackFileDownload,
    trackResourceDownload,
    trackErrorPageView,
    setUserProperty,
    setCustomDimension,
    getSessionId,
    initializeSessionTracking,
  };
}
