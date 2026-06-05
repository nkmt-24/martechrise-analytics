/**
 * GA4 Analytics Utilities
 * Core functions for tracking events in Google Analytics 4
 * 
 * Usage:
 * import { trackEvent, trackFormSubmit, trackCTAClick } from '@/lib/analytics/ga4'
 * 
 * // Track a custom event
 * trackEvent('cta_click', {
 *   cta_text: 'Get Started',
 *   cta_position: 'hero'
 * })
 * 
 * // Track form submission
 * trackFormSubmit('contact_form', {
 *   form_name: 'Contact Us'
 * })
 */

import { GA4_KEY_EVENTS, GA4_ENGAGEMENT_EVENTS, GA4_INFO_EVENTS, GA4_EVENT_PARAMS } from './constants';

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

/**
 * Core event tracking function
 * All other tracking functions use this as the base
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean | undefined>
): void {
  try {
    if (typeof window === 'undefined') return;
    if (!window.gtag) return;

    // Filter out undefined values
    const cleanParams = Object.fromEntries(
      Object.entries(eventParams || {}).filter(([, value]) => value !== undefined)
    );

    window.gtag('event', eventName, cleanParams);
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

/**
 * Track page view
 * Called automatically by route changes, but can be called manually if needed
 */
export function trackPageView(pageData?: {
  page_title?: string;
  page_path?: string;
  page_location?: string;
}): void {
  trackEvent(GA4_INFO_EVENTS.PAGE_VIEW, pageData);
}

// ============================================================================
// KEY EVENT TRACKING FUNCTIONS (Conversions)
// ============================================================================

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(params?: {
  form_name?: string;
  form_id?: string;
  phone?: boolean;
  email?: boolean;
}): void {
  trackEvent(GA4_KEY_EVENTS.CONTACT_FORM_SUBMIT, {
    form_name: params?.form_name || 'Contact Form',
    form_id: params?.form_id,
    ...params,
  });
}

/**
 * Track quote/audit request submission
 */
export function trackAuditRequestSubmit(params?: {
  form_name?: string;
  form_id?: string;
  service_type?: string;
}): void {
  trackEvent(GA4_KEY_EVENTS.AUDIT_REQUEST_SUBMIT, {
    form_name: params?.form_name || 'Audit Request',
    form_id: params?.form_id,
    ...params,
  });
}

/**
 * Track quote request submission
 */
export function trackQuoteRequestSubmit(params?: {
  form_name?: string;
  form_id?: string;
  service_type?: string;
}): void {
  trackEvent(GA4_KEY_EVENTS.QUOTE_REQUEST_SUBMIT, {
    form_name: params?.form_name || 'Quote Request',
    form_id: params?.form_id,
    ...params,
  });
}

/**
 * Track service inquiry
 */
export function trackServiceInquiry(params?: {
  service_name?: string;
  service_id?: string;
  inquiry_type?: string;
}): void {
  trackEvent(GA4_KEY_EVENTS.SERVICE_INQUIRY, {
    service_name: params?.service_name,
    service_id: params?.service_id,
    ...params,
  });
}

/**
 * Track phone call click
 */
export function trackPhoneCall(params?: {
  phone_number?: string;
  button_text?: string;
  page_section?: string;
}): void {
  trackEvent(GA4_KEY_EVENTS.PHONE_CALL, {
    button_text: params?.button_text || 'Call Now',
    ...params,
  });
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(params?: {
  phone_number?: string;
  message?: string;
  button_location?: string;
}): void {
  trackEvent(GA4_KEY_EVENTS.WHATSAPP_CLICK, {
    button_text: 'WhatsApp',
    button_location: params?.button_location,
    ...params,
  });
}

/**
 * Track email click
 */
export function trackEmailClick(params?: {
  email?: string;
  subject?: string;
  button_text?: string;
}): void {
  trackEvent(GA4_KEY_EVENTS.EMAIL_CLICK, {
    button_text: params?.button_text || 'Email',
    ...params,
  });
}

/**
 * Track consultation request
 */
export function trackConsultationRequest(params?: {
  consultation_type?: string;
  service_name?: string;
}): void {
  trackEvent(GA4_KEY_EVENTS.CONSULTATION_REQUEST, {
    ...params,
  });
}

// ============================================================================
// ENGAGEMENT EVENT TRACKING FUNCTIONS
// ============================================================================

/**
 * Track CTA button clicks
 */
export function trackCTAClick(params: {
  cta_text: string;
  cta_position?: string;
  cta_destination?: string;
  page_section?: string;
  button_id?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.CTA_CLICK, {
    button_text: params.cta_text,
    ...params,
  });
}

/**
 * Track navigation menu clicks
 */
export function trackNavigationClick(params: {
  menu_item: string;
  menu_location?: string;
  destination?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.NAVIGATION_CLICK, {
    link_text: params.menu_item,
    ...params,
  });
}

/**
 * Track outbound link clicks
 */
export function trackOutboundLinkClick(params: {
  link_url: string;
  link_text?: string;
  link_domain?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.OUTBOUND_LINK_CLICK, {
    ...params,
  });
}

/**
 * Track internal link clicks
 */
export function trackInternalLinkClick(params: {
  link_text: string;
  link_path: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.INTERNAL_LINK_CLICK, {
    link_url: params.link_path,
    ...params,
  });
}

/**
 * Track generic button clicks
 */
export function trackButtonClick(params: {
  button_text: string;
  button_id?: string;
  button_group?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.BUTTON_CLICK, params);
}

/**
 * Track scroll depth milestones
 */
export function trackScrollDepth(params: {
  scroll_percentage: number;
  page_title?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.SCROLL_DEPTH, {
    scroll_percentage: params.scroll_percentage,
    ...params,
  });
}

/**
 * Track time on page milestones
 */
export function trackTimeOnPageMilestone(params: {
  time_seconds: number;
  page_title?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.TIME_ON_PAGE, {
    engagement_time_msec: params.time_seconds * 1000,
    ...params,
  });
}

/**
 * Track video play
 */
export function trackVideoPlay(params: {
  video_title: string;
  video_url?: string;
  video_id?: string;
  page_section?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.VIDEO_PLAY, params);
}

/**
 * Track video completion
 */
export function trackVideoComplete(params: {
  video_title: string;
  video_url?: string;
  video_id?: string;
  video_duration?: number;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.VIDEO_COMPLETE, params);
}

/**
 * Track FAQ expansion
 */
export function trackFAQExpand(params: {
  faq_question: string;
  faq_item_id?: string;
  section?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.FAQ_EXPAND, {
    element_text: params.faq_question,
    ...params,
  });
}

/**
 * Track testimonial interaction
 */
export function trackTestimonialInteraction(params: {
  testimonial_id?: string;
  interaction_type?: string;
  testimonial_author?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.TESTIMONIAL_INTERACTION, params);
}

/**
 * Track case study view
 */
export function trackCaseStudyView(params: {
  case_study_title: string;
  case_study_id?: string;
  case_study_category?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.CASE_STUDY_VIEW, params);
}

/**
 * Track service view/interaction
 */
export function trackServiceView(params: {
  service_name: string;
  service_id?: string;
  service_category?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.SERVICE_VIEW, params);
}

/**
 * Track form start
 */
export function trackFormStart(params: {
  form_name: string;
  form_id?: string;
  form_location?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.FORM_START, params);
}

/**
 * Track form field errors
 */
export function trackFormFieldError(params: {
  form_name: string;
  form_field: string;
  error_message?: string;
  form_id?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.FORM_FIELD_ERROR, params);
}

/**
 * Track social share
 */
export function trackSocialShare(params: {
  social_platform: string;
  content_type?: string;
  content_id?: string;
  content_title?: string;
}): void {
  trackEvent(GA4_ENGAGEMENT_EVENTS.SOCIAL_SHARE, params);
}

// ============================================================================
// INFORMATIONAL EVENT TRACKING FUNCTIONS
// ============================================================================

/**
 * Track search
 */
export function trackSearch(params: {
  search_term: string;
  search_results_count?: number;
  page_location?: string;
}): void {
  trackEvent(GA4_INFO_EVENTS.SEARCH, params);
}

/**
 * Track filter application
 */
export function trackFilterApplied(params: {
  filter_type: string;
  filter_value?: string;
  page_location?: string;
}): void {
  trackEvent(GA4_INFO_EVENTS.FILTER_APPLIED, params);
}

/**
 * Track brochure download
 */
export function trackBrochureDownload(params?: {
  file_name?: string;
  file_type?: string;
}): void {
  trackEvent(GA4_KEY_EVENTS.CONSULTATION_REQUEST, {
    file_type: 'PDF',
    file_name: params?.file_name || 'brochure.pdf',
    ...params,
  });
}

/**
 * Track file download
 */
export function trackFileDownload(params: {
  file_name: string;
  file_type?: string;
  file_size?: number;
  download_location?: string;
}): void {
  trackEvent(GA4_INFO_EVENTS.FILE_DOWNLOAD, params);
}

/**
 * Track resource download
 */
export function trackResourceDownload(params: {
  resource_name: string;
  resource_type?: string;
  resource_id?: string;
}): void {
  trackEvent(GA4_INFO_EVENTS.RESOURCE_DOWNLOAD, {
    file_name: params.resource_name,
    ...params,
  });
}

/**
 * Track error page views
 */
export function trackErrorPageView(params: {
  error_code: number;
  error_message?: string;
  page_path?: string;
}): void {
  trackEvent(GA4_INFO_EVENTS.ERROR_PAGE_VIEW, params);
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Set user properties
 */
export function setUserProperty(key: string, value: string | number): void {
  try {
    if (typeof window === 'undefined') return;
    if (!window.gtag) return;

    window.gtag('config', {
      user_id: key === 'user_id' ? value : undefined,
      custom_map: {
        dimension1: 'customer_type',
        dimension2: 'subscription_status',
        dimension3: 'user_segment',
      },
    });
  } catch (error) {
    console.error('Error setting user property:', error);
  }
}

/**
 * Set custom dimension
 */
export function setCustomDimension(dimensionName: string, value: string | number): void {
  try {
    if (typeof window === 'undefined') return;
    if (!window.gtag) return;

    window.gtag('event', 'page_view', {
      [dimensionName]: value,
    });
  } catch (error) {
    console.error('Error setting custom dimension:', error);
  }
}

/**
 * Get session ID (for custom tracking)
 */
export function getSessionId(): string | null {
  try {
    if (typeof window === 'undefined') return null;
    // Session ID is typically stored in GA4 and accessible via gtag
    // This is a helper for custom implementations
    const sessionId = sessionStorage.getItem('ga_session_id');
    return sessionId || null;
  } catch (error) {
    console.error('Error getting session ID:', error);
    return null;
  }
}

/**
 * Initialize session tracking
 */
export function initializeSessionTracking(): void {
  try {
    if (typeof window === 'undefined') return;
    
    const sessionId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('ga_session_id', sessionId);
  } catch (error) {
    console.error('Error initializing session:', error);
  }
}
