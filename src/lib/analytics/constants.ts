/**
 * GA4 Event Constants
 * Centralized definitions for all GA4 events used throughout the application
 */

// ============================================================================
// KEY EVENTS (Conversions) - These should be marked as Key Events in GA4
// ============================================================================
export const GA4_KEY_EVENTS = {
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  QUOTE_REQUEST_SUBMIT: 'quote_request_submit',
  AUDIT_REQUEST_SUBMIT: 'audit_request_submit',
  SERVICE_INQUIRY: 'service_inquiry',
  PHONE_CALL: 'phone_call',
  WHATSAPP_CLICK: 'whatsapp_click',
  EMAIL_CLICK: 'email_click',
  CONSULTATION_REQUEST: 'consultation_request',
} as const;

// ============================================================================
// ENGAGEMENT EVENTS - User interactions that show engagement
// ============================================================================
export const GA4_ENGAGEMENT_EVENTS = {
  CTA_CLICK: 'cta_click',
  NAVIGATION_CLICK: 'navigation_click',
  OUTBOUND_LINK_CLICK: 'outbound_link_click',
  INTERNAL_LINK_CLICK: 'internal_link_click',
  BUTTON_CLICK: 'button_click',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page_milestone',
  VIDEO_PLAY: 'video_play',
  VIDEO_COMPLETE: 'video_complete',
  FAQ_EXPAND: 'faq_expand',
  TESTIMONIAL_INTERACTION: 'testimonial_interaction',
  CASE_STUDY_VIEW: 'case_study_view',
  SERVICE_VIEW: 'service_view',
  FORM_START: 'form_start',
  FORM_FIELD_ERROR: 'form_field_error',
  SOCIAL_SHARE: 'social_share',
} as const;

// ============================================================================
// INFORMATIONAL EVENTS - Page views and navigation tracking
// ============================================================================
export const GA4_INFO_EVENTS = {
  PAGE_VIEW: 'page_view',
  SEARCH: 'search',
  FILTER_APPLIED: 'filter_applied',
  BROCHURE_DOWNLOAD: 'brochure_download',
  FILE_DOWNLOAD: 'file_download',
  RESOURCE_DOWNLOAD: 'resource_download',
  ERROR_PAGE_VIEW: 'error_page_view',
} as const;

// ============================================================================
// EVENT PARAMETERS
// ============================================================================
export const GA4_EVENT_PARAMS = {
  PAGE_TITLE: 'page_title',
  PAGE_LOCATION: 'page_location',
  PAGE_PATH: 'page_path',
  REFERRER: 'referrer',
  CTA_TEXT: 'cta_text',
  CTA_POSITION: 'cta_position',
  BUTTON_TEXT: 'button_text',
  BUTTON_ID: 'button_id',
  FORM_ID: 'form_id',
  FORM_NAME: 'form_name',
  FORM_FIELD: 'form_field',
  ERROR_MESSAGE: 'error_message',
  LINK_TEXT: 'link_text',
  LINK_URL: 'link_url',
  LINK_DOMAIN: 'link_domain',
  ENGAGEMENT_TIME: 'engagement_time_msec',
  SESSION_ID: 'session_id',
  USER_ID: 'user_id',
  SCROLL_PERCENTAGE: 'scroll_percentage',
  VIDEO_DURATION: 'video_duration',
  VIDEO_CURRENT_TIME: 'video_current_time',
  VIDEO_URL: 'video_url',
  VIDEO_TITLE: 'video_title',
  SEARCH_TERM: 'search_term',
  SEARCH_RESULTS_COUNT: 'search_results_count',
  FILE_NAME: 'file_name',
  FILE_TYPE: 'file_type',
  FILE_SIZE: 'file_size',
  ELEMENT_ID: 'element_id',
  ELEMENT_CLASS: 'element_class',
  ELEMENT_TEXT: 'element_text',
  SERVICE_NAME: 'service_name',
  SERVICE_ID: 'service_id',
  INDUSTRY_NAME: 'industry_name',
  INDUSTRY_ID: 'industry_id',
  CASE_STUDY_TITLE: 'case_study_title',
  CASE_STUDY_ID: 'case_study_id',
  TESTIMONIAL_ID: 'testimonial_id',
  FAQ_ITEM_ID: 'faq_item_id',
  FAQ_QUESTION: 'faq_question',
  DEVICE_TYPE: 'device_type',
  TRAFFIC_SOURCE: 'traffic_source',
  CAMPAIGN_NAME: 'campaign_name',
  CAMPAIGN_MEDIUM: 'campaign_medium',
  CAMPAIGN_SOURCE: 'campaign_source',
} as const;

// ============================================================================
// EVENT CATEGORIES FOR ORGANIZATION
// ============================================================================
export const GA4_EVENT_CATEGORIES = {
  CONVERSION: 'Conversion',
  ENGAGEMENT: 'Engagement',
  NAVIGATION: 'Navigation',
  FORM: 'Form',
  CONTENT: 'Content',
  MEDIA: 'Media',
  COMMERCE: 'Commerce',
  LEAD_GENERATION: 'Lead Generation',
  PHONE: 'Phone',
  SOCIAL: 'Social',
  ERROR: 'Error',
} as const;

// ============================================================================
// SCROLL TRACKING MILESTONES
// ============================================================================
export const SCROLL_MILESTONES = {
  25: 25,
  50: 50,
  75: 75,
  90: 90,
} as const;

// ============================================================================
// TIME MILESTONES (in milliseconds)
// ============================================================================
export const TIME_MILESTONES = {
  '30_SECONDS': 30000,
  '1_MINUTE': 60000,
  '2_MINUTES': 120000,
  '3_MINUTES': 180000,
} as const;

// ============================================================================
// CTA POSITIONS FOR TRACKING
// ============================================================================
export const CTA_POSITIONS = {
  HERO: 'hero',
  ABOVE_FOLD: 'above_fold',
  MIDDLE: 'middle',
  BOTTOM: 'bottom',
  FLOATING: 'floating',
  STICKY: 'sticky',
  SIDEBAR: 'sidebar',
  INLINE: 'inline',
  FOOTER: 'footer',
  POPUP: 'popup',
  BANNER: 'banner',
} as const;
