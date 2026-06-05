# GA4 Component Tracking Implementation Checklist

This document provides a step-by-step guide to add GA4 tracking to components identified during the codebase audit.

---

## PRIORITY 1: HIGH (Key Conversions)

These are high-value conversion actions that must be tracked.

### 1. Contact Form (`/src/app/(marketing)/contact/page.tsx` or component)

**Event to Track**: `contact_form_submit`  
**Business Value**: Lead generation (Contact inquiries)  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function ContactForm() {
  const { trackContactFormSubmit, trackFormStart, trackFormFieldError } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Track form start (optional but recommended)
      trackFormStart({
        form_name: 'Contact Form',
        form_id: 'contact-form-001'
      });

      // Your form submission logic
      const result = await submitForm(/* ... */);

      // Track successful submission
      trackContactFormSubmit({
        form_name: 'Contact Form',
        form_id: 'contact-form-001',
        phone: true,
        email: true
      });
    } catch (error) {
      // Track errors
      trackFormFieldError({
        form_name: 'Contact Form',
        form_field: 'general',
        error_message: 'Form submission failed'
      });
    }
  };

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

**Checklist**:

- [ ] Import useAnalytics hook
- [ ] Add trackFormStart on form interaction
- [ ] Add trackContactFormSubmit on successful submission
- [ ] Add trackFormFieldError on validation errors
- [ ] Test in browser
- [ ] Verify event in GA4 Real-Time

---

### 2. Audit Request Form (`/src/app/(marketing)/audit/page.tsx` or component)

**Event to Track**: `audit_request_submit`  
**Business Value**: High-value audit requests (Service inquiry)  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function AuditRequestForm() {
  const { trackAuditRequestSubmit, trackFormStart, trackFormFieldError } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      trackFormStart({
        form_name: 'Audit Request',
        form_id: 'audit-form-001'
      });

      const result = await submitAuditRequest(/* ... */);

      trackAuditRequestSubmit({
        form_name: 'Audit Request',
        form_id: 'audit-form-001',
        service_type: 'GA4 Audit' // or dynamic value
      });
    } catch (error) {
      trackFormFieldError({
        form_name: 'Audit Request',
        form_field: 'general',
        error_message: error.message
      });
    }
  };

  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

**Checklist**:

- [ ] Import useAnalytics hook
- [ ] Add trackAuditRequestSubmit on form submission
- [ ] Include service_type parameter
- [ ] Test form submission
- [ ] Verify in GA4

---

### 3. Email Links (Footer, Contact Section)

**Event to Track**: `email_click`  
**Business Value**: Email inquiry conversion  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function EmailLink({ email, subject }) {
  const { trackEmailClick } = useAnalytics();

  return (
    <a
      href={`mailto:${email}?subject=${subject}`}
      onClick={() => trackEmailClick({
        email: email,
        subject: subject,
        button_text: 'Email Us'
      })}
    >
      Email Us
    </a>
  );
}
```

**Checklist**:

- [ ] Find all mailto: links in codebase
- [ ] Add trackEmailClick to each
- [ ] Include email and subject parameters
- [ ] Test clicks
- [ ] Verify in GA4

---

## PRIORITY 2: MEDIUM (Engagement)

These track important engagement metrics but are not direct conversions.

### 4. CTA Buttons (Across all pages)

**Event to Track**: `cta_click`  
**Business Value**: Engagement with primary calls-to-action  
**Common CTA Buttons to Track**:

- "Get a Free Audit" (navbar, hero, footer)
- "Learn More" (service cards)
- "View Case Study" (case study cards)
- "Schedule Consultation"
- "Request Quote"

**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function CTAButton({ text, destination, position }) {
  const { trackCTAClick } = useAnalytics();

  return (
    <button
      onClick={() => trackCTAClick({
        cta_text: text,
        cta_position: position, // 'hero' | 'floating' | 'footer' etc
        cta_destination: destination
      })}
    >
      {text}
    </button>
  );
}
```

**Checklist**:

- [ ] Identify all CTA buttons in design
- [ ] Add trackCTAClick to each
- [ ] Standardize cta_position values (hero, floating, footer, etc.)
- [ ] Test each CTA
- [ ] Verify in GA4

---

### 5. Navigation Menu (`/src/components/layout/Navbar.tsx`)

**Event to Track**: `navigation_click`  
**Business Value**: Track navigation patterns  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';
import Link from 'next/link';

export function NavLink({ name, path }) {
  const { trackNavigationClick } = useAnalytics();

  return (
    <Link
      href={path}
      onClick={() => trackNavigationClick({
        menu_item: name,
        destination: path,
        menu_location: 'header'
      })}
    >
      {name}
    </Link>
  );
}
```

**Checklist**:

- [ ] Update Navbar component
- [ ] Add trackNavigationClick to each nav link
- [ ] Include menu_location parameter
- [ ] Test each navigation item
- [ ] Verify in GA4

---

### 6. Service Cards (`/src/components/sections/services` or similar)

**Event to Track**: `service_view` and `service_inquiry`  
**Business Value**: Track service interest  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function ServiceCard({ service }) {
  const { trackServiceView, trackServiceInquiry } = useAnalytics();

  return (
    <div
      onClick={() => trackServiceView({
        service_name: service.name,
        service_id: service.id
      })}
    >
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button
        onClick={() => trackServiceInquiry({
          service_name: service.name,
          service_id: service.id,
          inquiry_type: 'more_info'
        })}
      >
        Learn More
      </button>
    </div>
  );
}
```

**Checklist**:

- [ ] Find service card component
- [ ] Add trackServiceView on card view
- [ ] Add trackServiceInquiry on "Learn More" click
- [ ] Include service_name and service_id
- [ ] Test card interactions
- [ ] Verify in GA4

---

### 7. Case Study Cards (`/src/components/case-study` or `/case-studies`)

**Event to Track**: `case_study_view`  
**Business Value**: Track case study interest  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function CaseStudyCard({ study }) {
  const { trackCaseStudyView } = useAnalytics();

  return (
    <div
      onClick={() => trackCaseStudyView({
        case_study_title: study.title,
        case_study_id: study.id,
        case_study_category: study.category
      })}
    >
      <h3>{study.title}</h3>
      {/* ... case study content ... */}
    </div>
  );
}
```

**Checklist**:

- [ ] Find case study card component
- [ ] Add trackCaseStudyView on click
- [ ] Include study title and ID
- [ ] Test interactions
- [ ] Verify in GA4

---

### 8. FAQ Sections (Multiple pages)

**Event to Track**: `faq_expand`  
**Business Value**: Track FAQ usage  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';
import { useState } from 'react';

export function FAQItem({ question, answer, id, section }) {
  const [isOpen, setIsOpen] = useState(false);
  const { trackFAQExpand } = useAnalytics();

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) { // Only track when expanding
      trackFAQExpand({
        faq_question: question,
        faq_item_id: id,
        section: section
      });
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>{question}</button>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}
```

**Checklist**:

- [ ] Find FAQ component(s)
- [ ] Add trackFAQExpand on accordion expand
- [ ] Include question and section info
- [ ] Only track expand (not collapse)
- [ ] Test accordion
- [ ] Verify in GA4

---

## PRIORITY 3: LOW (Additional Engagement)

These provide additional insights but are lower priority.

### 9. Testimonials

**Event to Track**: `testimonial_interaction`  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function Testimonial({ testimonial, id }) {
  const { trackTestimonialInteraction } = useAnalytics();

  return (
    <div
      onClick={() => trackTestimonialInteraction({
        testimonial_id: id,
        testimonial_author: testimonial.author
      })}
    >
      {/* testimonial content */}
    </div>
  );
}
```

---

### 10. Videos (If any)

**Event to Track**: `video_play`, `video_complete`  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function VideoPlayer({ videoUrl, title }) {
  const { trackVideoPlay, trackVideoComplete } = useAnalytics();

  return (
    <video
      onPlay={() => trackVideoPlay({
        video_title: title,
        video_url: videoUrl
      })}
      onEnded={() => trackVideoComplete({
        video_title: title,
        video_url: videoUrl
      })}
    >
      <source src={videoUrl} />
    </video>
  );
}
```

---

### 11. Social Share Buttons (If any)

**Event to Track**: `social_share`  
**Implementation**:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export function ShareButtons({ title, url }) {
  const { trackSocialShare } = useAnalytics();

  return (
    <>
      <button
        onClick={() => {
          trackSocialShare({
            social_platform: 'twitter',
            content_type: 'blog_post',
            content_title: title
          });
          // share to Twitter
        }}
      >
        Share on Twitter
      </button>
      <button
        onClick={() => {
          trackSocialShare({
            social_platform: 'linkedin',
            content_type: 'blog_post',
            content_title: title
          });
          // share to LinkedIn
        }}
      >
        Share on LinkedIn
      </button>
    </>
  );
}
```

---

## IMPLEMENTATION ROADMAP

### Week 1 (Priority 1)

- [ ] Contact form tracking
- [ ] Audit form tracking
- [ ] Email link tracking

### Week 2 (Priority 2)

- [ ] CTA button tracking across pages
- [ ] Navigation tracking
- [ ] Service card tracking

### Week 3 (Priority 2)

- [ ] Case study tracking
- [ ] FAQ tracking

### Week 4 (Priority 3)

- [ ] Testimonial tracking
- [ ] Video tracking
- [ ] Social share tracking
- [ ] Polish and optimization

---

## TESTING CHECKLIST FOR EACH IMPLEMENTATION

For each component you add tracking to:

1. **Local Testing**
   - [ ] Import useAnalytics hook
   - [ ] Call tracking function on correct event
   - [ ] Check browser console for errors
   - [ ] Open GA4 Real-Time in another tab
   - [ ] Trigger the event
   - [ ] Verify event appears in GA4 Real-Time within 30 seconds
   - [ ] Check event parameters are correct

2. **Component Testing**
   - [ ] Test on mobile and desktop
   - [ ] Test with slow network (DevTools throttling)
   - [ ] Test multiple interactions in sequence
   - [ ] Verify no duplicate events fire
   - [ ] Check TypeScript compilation passes

3. **GA4 Verification**
   - [ ] Event appears in GA4 > Reports > Engagement > Events
   - [ ] Event parameters display correctly
   - [ ] Event count is accurate
   - [ ] No errors in GA4 Data Quality report

---

## BULK UPDATES

If you have many components to update, use find-and-replace:

1. Find all button/link onClick handlers
2. Add useAnalytics() hook at top of component
3. Add tracking function call
4. Test each one

Example pattern:

```
<button onClick={() => handleClick()}>
```

Becomes:

```
<button onClick={() => {
  trackSomething({ /* params */ });
  handleClick();
}}>
```

---

## COMMON ISSUES

### Issue: Events not appearing

**Solution**:

1. Verify `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
2. Ensure component is a Client Component (`'use client'`)
3. Check function is called on correct event
4. Wait 30 seconds and refresh GA4

### Issue: Wrong event parameters

**Solution**:

1. Check parameter names match function signature
2. Use TypeScript - it will show you available parameters
3. Verify you're passing the right values
4. Check GA4 Real-Time to see actual parameters sent

### Issue: Too many duplicate events

**Solution**:

1. Check that event is only fired once per interaction
2. Verify onClick vs onChange event
3. Make sure tracking function is not in render loop
4. Use proper event handlers, not during render

---

## GETTING HELP

- TypeScript will autocomplete all available functions
- Check `src/lib/analytics/ga4.ts` for function signatures
- See `GA4_IMPLEMENTATION_GUIDE.md` for detailed examples
- GA4 Real-Time is your best debugging tool

---

**Start with Priority 1 components** - these provide the most business value!

Good luck! 🚀
