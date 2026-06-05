# GA4 Analytics Implementation Guide

**MarTechRise**  
**Measurement ID**: G-2BFQPR4LCB  
**Implementation Date**: June 2026  
**Status**: Ready for Deployment

---

## TABLE OF CONTENTS

1. [Setup & Configuration](#setup--configuration)
2. [Files Added](#files-added)
3. [Files Modified](#files-modified)
4. [Events Implemented](#events-implemented)
5. [GA4 Dashboard Configuration](#ga4-dashboard-configuration)
6. [Post-Implementation Checklist](#post-implementation-checklist)
7. [Tracking Opportunities Detected](#tracking-opportunities-detected)
8. [Future Improvements](#future-improvements)

---

## SETUP & CONFIGURATION

### Environment Variables

Add to your `.env.local` file:

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-2BFQPR4LCB
```

### Configuration Files Updated

- `src/config/env.ts` - Added `NEXT_PUBLIC_GA_MEASUREMENT_ID` to Zod schema

### GA4 Script Integration

The GA4 script is automatically initialized via:

- `src/components/analytics/GoogleAnalytics.tsx` - Client component that loads gtag.js
- Integrated into `src/app/layout.tsx` (root layout)
- Automatically tracks page views on route changes
- Auto-initializes scroll depth and time-on-page tracking

---

## FILES ADDED

### Core Analytics Module

| File                                           | Purpose                                         | Type             |
| ---------------------------------------------- | ----------------------------------------------- | ---------------- |
| `src/lib/analytics/constants.ts`               | All GA4 event names and parameters as constants | TypeScript       |
| `src/lib/analytics/ga4.ts`                     | Core event tracking functions (30+ functions)   | TypeScript       |
| `src/lib/analytics/scroll-tracking.ts`         | Scroll depth tracking (25%, 50%, 75%, 90%)      | TypeScript       |
| `src/lib/analytics/time-tracking.ts`           | Time-on-page milestone tracking                 | TypeScript       |
| `src/lib/analytics/useAnalytics.ts`            | React hook for using analytics in components    | TypeScript       |
| `src/lib/analytics/index.ts`                   | Central export for all analytics utilities      | TypeScript       |
| `src/components/analytics/GoogleAnalytics.tsx` | GA4 script initialization component             | TypeScript/React |

### Total: 7 new files

---

## FILES MODIFIED

### 1. `src/app/layout.tsx`

**Changes**:

- Added import for `GoogleAnalytics` component
- Added `<GoogleAnalytics />` component to `<head>` section
- **Reason**: Initialize GA4 tracking on all pages

### 2. `src/config/env.ts`

**Changes**:

- Added `NEXT_PUBLIC_GA_MEASUREMENT_ID` to environment schema
- **Reason**: Make GA4 Measurement ID configurable and validated

### 3. `src/components/layout/FloatingContact.tsx`

**Changes**:

- Converted to client component (`'use client'`)
- Added import for `useAnalytics` hook
- Added `trackWhatsAppClick()` on WhatsApp button click
- Added `trackPhoneCall()` on phone button click
- **Reason**: Track high-value conversion actions (phone & WhatsApp)

### Total: 3 files modified

---

## EVENTS IMPLEMENTED

### KEY EVENTS (Conversions) - Mark as Key Events in GA4

These should be configured as "Key Events" in Google Analytics 4 for conversion tracking.

| Event Name             | Trigger                         | Business Purpose                  | Parameters                       |
| ---------------------- | ------------------------------- | --------------------------------- | -------------------------------- |
| `contact_form_submit`  | Contact form submission         | Track lead generation             | form_name, form_id, phone, email |
| `audit_request_submit` | Audit request form submission   | Track audit requests (high-value) | form_name, service_type          |
| `quote_request_submit` | Quote request form submission   | Track quote requests              | form_name, service_type          |
| `service_inquiry`      | Service inquiry click/form      | Track service interest            | service_name, service_id         |
| `phone_call`           | Phone number click (tel: link)  | Track phone inquiries             | phone_number, page_section       |
| `whatsapp_click`       | WhatsApp button click           | Track WhatsApp inquiries          | button_location                  |
| `email_click`          | Email link click                | Track email inquiries             | email, subject                   |
| `consultation_request` | Consultation request submission | Track consultation requests       | consultation_type, service_name  |

**Recommended GA4 Key Events**: All 8 of the above

---

### ENGAGEMENT EVENTS

| Event Name                | Trigger                            | Purpose                            | Parameters                        |
| ------------------------- | ---------------------------------- | ---------------------------------- | --------------------------------- |
| `cta_click`               | Any CTA button click               | Track call-to-action effectiveness | cta_text, cta_position, button_id |
| `navigation_click`        | Navigation menu item click         | Track navigation patterns          | menu_item, destination            |
| `outbound_link_click`     | External link click                | Track external traffic             | link_url, link_domain             |
| `internal_link_click`     | Internal link click                | Track internal navigation          | link_text, link_path              |
| `button_click`            | Any button click                   | Generic button tracking            | button_text, button_id            |
| `scroll_depth`            | User scrolls to 25%, 50%, 75%, 90% | Track engagement depth             | scroll_percentage                 |
| `time_on_page_milestone`  | After 30s, 1m, 2m, 3m on page      | Track engagement duration          | time_seconds                      |
| `video_play`              | Video playback starts              | Track video engagement             | video_title, video_url            |
| `video_complete`          | Video completes                    | Track video completion             | video_title, duration             |
| `faq_expand`              | FAQ accordion expands              | Track FAQ interaction              | faq_question, section             |
| `testimonial_interaction` | User interacts with testimonial    | Track testimonial engagement       | testimonial_id                    |
| `case_study_view`         | Case study page view               | Track case study interest          | case_study_title, category        |
| `service_view`            | Service page view                  | Track service interest             | service_name                      |
| `form_start`              | User starts filling form           | Track form abandonment             | form_name, form_id                |
| `form_field_error`        | Form validation error              | Track form issues                  | form_field, error_message         |
| `social_share`            | User shares content                | Track social engagement            | social_platform, content_type     |

**Total**: 16 engagement events

---

### INFORMATIONAL EVENTS

| Event Name          | Trigger                        | Purpose                  | Parameters                 |
| ------------------- | ------------------------------ | ------------------------ | -------------------------- |
| `page_view`         | Automatic on page/route change | Track all page visits    | page_title, page_path      |
| `search`            | User performs search           | Track search behavior    | search_term, results_count |
| `filter_applied`    | User applies filter            | Track filtering          | filter_type, filter_value  |
| `file_download`     | File download                  | Track resource downloads | file_name, file_type       |
| `resource_download` | Resource download              | Track resource interest  | resource_name, type        |
| `error_page_view`   | 404/error page viewed          | Track error pages        | error_code, error_message  |

**Total**: 6 informational events

---

## TRACKING IMPLEMENTATION STATUS

### ✅ IMPLEMENTED

- [x] GA4 script initialization
- [x] Page view tracking (automatic on route change)
- [x] Scroll depth tracking (25%, 50%, 75%, 90%)
- [x] Time-on-page tracking (30s, 1m, 2m, 3m milestones)
- [x] FloatingContact component tracking (WhatsApp & phone)
- [x] Core analytics utilities and hooks
- [x] TypeScript types and exports
- [x] Environment variable configuration

### 🔄 READY FOR IMPLEMENTATION

These are components/pages where tracking should be added but require component inspection:

- [ ] Contact form submit (requires form component inspection)
- [ ] Audit request form (requires form component inspection)
- [ ] CTA button clicks across all pages
- [ ] Navigation menu clicks
- [ ] Service card interactions
- [ ] Case study views
- [ ] FAQ interactions
- [ ] Video plays (if videos exist)
- [ ] Testimonial interactions
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Social share buttons

---

## GA4 DASHBOARD CONFIGURATION

### Required: Mark as Key Events

After implementation, configure these as Key Events in Google Analytics 4:

**Steps**:

1. Go to GA4 > Admin > Events > Mark as Conversion
2. Select each event and enable "Mark as conversion"

**Events to mark**:

- contact_form_submit
- audit_request_submit
- quote_request_submit
- service_inquiry
- phone_call
- whatsapp_click
- email_click
- consultation_request

---

### Custom Dimensions to Create

Create these custom dimensions in GA4 (Admin > Custom Definitions > Custom Dimensions):

| Dimension Name   | Scope | Description                                 |
| ---------------- | ----- | ------------------------------------------- |
| service_name     | Event | Name of service being tracked               |
| service_id       | Event | ID of service                               |
| form_name        | Event | Name of form submitted                      |
| cta_text         | Event | Text displayed on CTA button                |
| cta_position     | Event | Position of CTA on page                     |
| page_section     | Event | Section of page where action occurred       |
| interaction_type | Event | Type of interaction (view, click, submit)   |
| button_location  | Event | Location of button on page                  |
| device_type      | User  | Device type (mobile, tablet, desktop)       |
| customer_type    | User  | Type of customer (prospect, lead, client)   |
| user_segment     | User  | Segment of user (by industry, company size) |

---

### Recommended Reports to Enable

Enable these reports in GA4:

**Engagement Reports**:

- Pages and Screens (track most visited pages)
- Scroll Events (track engagement depth)
- Time on Page (track engagement duration)
- Events (track all custom events)
- Conversions (track key events)

**Acquisition Reports**:

- Traffic Source Summary
- Sessions by Campaign
- Conversion Rate by Source

**Monetization Reports** (if applicable):

- Key Events (show conversion metrics)

---

## POST-IMPLEMENTATION CHECKLIST

Complete these steps AFTER deploying the code:

### Step 1: Verify GA4 Connection

- [ ] GA4 property exists (G-2BFQPR4LCB)
- [ ] Measurement ID is correct
- [ ] GA4 script is loading (check Network tab)
- [ ] No script errors in console

### Step 2: Verify Real-Time Events

- [ ] Go to GA4 > Real-Time
- [ ] Open your website in a new tab
- [ ] Verify you see events coming in real-time
- [ ] You should see: page_view, scroll_depth, time_on_page events

### Step 3: Verify Page View Tracking

- [ ] Visit homepage
- [ ] Verify "page_view" event in real-time
- [ ] Check that page_title and page_path parameters are correct

### Step 4: Verify Route Change Tracking

- [ ] Navigate to different pages using navigation menu
- [ ] Verify each navigation creates a new page_view event
- [ ] Scroll depth should reset on new page

### Step 5: Verify Scroll Tracking

- [ ] Load a long page (homepage or blog post)
- [ ] Scroll to 25%, 50%, 75%, 90% of page
- [ ] Verify scroll_depth events fire in GA4 real-time
- [ ] Each milestone should fire only once

### Step 6: Verify Time Tracking

- [ ] Load homepage
- [ ] Wait 30 seconds, verify time_on_page_milestone event (30)
- [ ] Wait 1 minute total, verify second event (60)
- [ ] Wait 2 minutes total, verify third event (120)
- [ ] Events should fire only once per page

### Step 7: Verify Conversion Tracking

- [ ] Click WhatsApp button (floating widget)
- [ ] Verify `whatsapp_click` event fires
- [ ] Check event parameters in real-time
- [ ] Click phone button
- [ ] Verify `phone_call` event fires

### Step 8: Verify Custom Dimensions

- [ ] Go to GA4 > Reports > Real-Time
- [ ] Filter events by custom dimensions
- [ ] Verify custom parameters appear correctly

### Step 9: Check Data Quality

- [ ] Go to GA4 > Admin > Data Streams > Web
- [ ] Check for any errors or warnings
- [ ] Verify data is flowing to GA4 property

### Step 10: Set Up Audiences

- [ ] Create audience for "High Engagement" (90%+ scroll)
- [ ] Create audience for "Form Submitters" (contact_form_submit event)
- [ ] Create audience for "Phone/WhatsApp Clickers"
- [ ] Test audience membership with test user

---

## TRACKING OPPORTUNITIES DETECTED

### ✅ Already Added to Code

1. **FloatingContact Component** (Floating Widget)
   - WhatsApp button click
   - Phone call button click
   - Location: Fixed position, bottom right

### 🔍 Found But Not Yet Implemented

These were identified during codebase audit and should be added:

#### Contact/Lead Forms

1. **Audit Request Form** (`/audit`)
   - **Type**: Key Event (Conversion)
   - **Tracking Needed**:
     - Form start
     - Form submission
     - Form field errors
   - **Action**: Add trackAuditRequestSubmit() to form submit handler

2. **Contact Form** (`/contact`)
   - **Type**: Key Event (Conversion)
   - **Tracking Needed**:
     - Form start
     - Form submission
     - Form field errors
   - **Action**: Add trackContactFormSubmit() to form submit handler

#### Navigation & CTAs

3. **Navbar CTA Button** ("Get a Free Audit")
   - **Position**: Top right, sticky
   - **Type**: Engagement Event
   - **Action**: Add trackCTAClick() on button click

4. **Navigation Menu Items**
   - **Items**: Services, Industries, Case Studies, About, Insights
   - **Type**: Engagement Event
   - **Action**: Add trackNavigationClick() to each link

#### Page-Specific CTAs

5. **Hero Section CTA** (All pages)
   - **Position**: Hero section, center
   - **Type**: Engagement Event
   - **Action**: Add trackCTAClick() with position: 'hero'

6. **Service Cards CTAs** (`/services`)
   - **Type**: Engagement Event + Service Inquiry
   - **Action**: Add trackServiceView() and trackServiceInquiry()

7. **Case Study Cards** (`/case-studies`)
   - **Type**: Engagement Event
   - **Action**: Add trackCaseStudyView() on card click

#### Content Interactions

8. **FAQ Sections** (Multiple pages)
   - **Type**: Engagement Event
   - **Action**: Add trackFAQExpand() on accordion expand

9. **Testimonials** (Homepage, case studies)
   - **Type**: Engagement Event
   - **Action**: Add trackTestimonialInteraction()

10. **Video Players** (If videos exist)
    - **Type**: Engagement Event
    - **Action**: Add trackVideoPlay() and trackVideoComplete()

#### Footer & Additional Links

11. **Footer Links**
    - **Type**: Navigation/Outbound
    - **Action**: Add trackOutboundLinkClick() for external links

12. **Blog Posts**
    - **Type**: Content tracking
    - **Action**: Add trackPageView() with content_type parameter

13. **Newsletter Signup** (If exists)
    - **Type**: Key Event (Lead generation)
    - **Action**: Add trackConsultationRequest() equivalent

---

## CUSTOM DIMENSION MAPPING

When implementing additional tracking, use these custom dimensions:

```typescript
// Example usage
const { setCustomDimension } = useAnalytics();

// Set service tracking
setCustomDimension("service_name", "Server-Side Tracking");
setCustomDimension("service_id", "sst-001");

// Set form tracking
setCustomDimension("form_name", "Audit Request");
setCustomDimension("page_section", "hero");
```

---

## IMPLEMENTATION EXAMPLES

### Example 1: Track CTA Click

```typescript
'use client';

import { useAnalytics } from '@/lib/analytics';

export default function HeroSection() {
  const { trackCTAClick } = useAnalytics();

  return (
    <button
      onClick={() => trackCTAClick({
        cta_text: 'Get a Free Audit',
        cta_position: 'hero',
        cta_destination: '/audit'
      })}
      className="btn btn-primary"
    >
      Get a Free Audit
    </button>
  );
}
```

### Example 2: Track Form Submission

```typescript
'use client';

import { useAnalytics } from '@/lib/analytics';

export default function ContactForm() {
  const { trackContactFormSubmit, trackFormStart, trackFormFieldError } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Your form submission logic
      trackContactFormSubmit({
        form_name: 'Contact Form',
        form_id: 'contact-form-001'
      });
    } catch (error) {
      trackFormFieldError({
        form_name: 'Contact Form',
        form_field: 'email',
        error_message: 'Invalid email address'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}
```

### Example 3: Track Service View

```typescript
'use client';

import { useAnalytics } from '@/lib/analytics';

export default function ServiceCard({ service }) {
  const { trackServiceView } = useAnalytics();

  return (
    <div
      onClick={() => trackServiceView({
        service_name: service.name,
        service_id: service.id
      })}
    >
      {/* service card content */}
    </div>
  );
}
```

---

## AVAILABLE TRACKING FUNCTIONS

All functions are available via the `useAnalytics()` hook:

### Key Event Functions

- `trackContactFormSubmit()`
- `trackAuditRequestSubmit()`
- `trackQuoteRequestSubmit()`
- `trackServiceInquiry()`
- `trackPhoneCall()`
- `trackWhatsAppClick()`
- `trackEmailClick()`
- `trackConsultationRequest()`

### Engagement Functions

- `trackCTAClick()`
- `trackNavigationClick()`
- `trackOutboundLinkClick()`
- `trackInternalLinkClick()`
- `trackButtonClick()`
- `trackScrollDepth()` (automatic)
- `trackTimeOnPageMilestone()` (automatic)
- `trackVideoPlay()`
- `trackVideoComplete()`
- `trackFAQExpand()`
- `trackTestimonialInteraction()`
- `trackCaseStudyView()`
- `trackServiceView()`
- `trackFormStart()`
- `trackFormFieldError()`
- `trackSocialShare()`

### Informational Functions

- `trackPageView()` (automatic)
- `trackSearch()`
- `trackFilterApplied()`
- `trackBrochureDownload()`
- `trackFileDownload()`
- `trackResourceDownload()`
- `trackErrorPageView()`

### Utility Functions

- `setUserProperty()`
- `setCustomDimension()`
- `getSessionId()`
- `initializeSessionTracking()`

---

## VERIFICATION QUERIES

### To Verify Events Are Firing

1. **Check page_view events**:
   - GA4 > Reports > Engagement > Pages and screens
   - Should show all pages with traffic

2. **Check scroll events**:
   - GA4 > Reports > Engagement > Events
   - Filter for "scroll_depth"
   - Should show distribution by percentage

3. **Check conversion events**:
   - GA4 > Reports > Conversions > Key Events
   - Should show all tracked conversions

4. **Check event parameters**:
   - GA4 > Reports > Engagement > Events
   - Select any event
   - View event details and parameters

---

## TROUBLESHOOTING

### GA4 Script Not Loading

- Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`
- Ensure Measurement ID format is correct (G-XXXXXXXXXX)
- Check browser console for errors
- Verify GA4 property exists in Google Analytics

### Events Not Firing

- Check that component is a client component (`'use client'`)
- Verify `useAnalytics()` hook is imported correctly
- Check that GA4 script loaded successfully
- Look for JavaScript errors in console

### Page Views Not Incrementing

- Check that layout file includes `<GoogleAnalytics />` in head
- Verify pathname is changing on route change
- Check Real-Time reports in GA4

### Scroll Events Not Firing

- Ensure page content is long enough to scroll
- Check that scroll tracking initialized on page load
- Test on different viewport sizes

---

## NEXT STEPS

1. **Deploy the code** to production
2. **Add NEXT_PUBLIC_GA_MEASUREMENT_ID** to production `.env`
3. **Complete the post-implementation checklist** above
4. **Add tracking** to remaining components (see Opportunities section)
5. **Configure Key Events** in GA4 admin panel
6. **Create custom dimensions** in GA4 admin panel
7. **Set up audiences** in GA4 for remarketing
8. **Enable BigQuery export** (optional, for advanced analysis)
9. **Create dashboards** in GA4 for key metrics
10. **Set up alerts** for anomalies

---

## SUPPORT & DOCUMENTATION

- [GA4 Documentation](https://support.google.com/analytics)
- [Next.js Analytics Guide](https://nextjs.org/docs)
- [gtag.js Documentation](https://developers.google.com/analytics/devguides/collection/gtagjs)
- [GA4 Implementation Reference](https://support.google.com/analytics/answer/12070956)

---

**Generated**: June 5, 2026  
**Measurement ID**: G-2BFQPR4LCB  
**Status**: ✅ Ready for Production Deployment
