# GA4 Quick Setup Guide

> **TLDR**: Add one environment variable, that's it! Everything else is automatic.

---

## 1. SET ENVIRONMENT VARIABLE

Add to `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-2BFQPR4LCB
```

---

## 2. THAT'S IT! 🎉

The GA4 integration is now live with:

- ✅ Automatic page view tracking
- ✅ Automatic scroll depth tracking (25%, 50%, 75%, 90%)
- ✅ Automatic time-on-page tracking (30s, 1m, 2m, 3m)
- ✅ WhatsApp button tracking (already added)
- ✅ Phone button tracking (already added)

---

## 3. TEST IT WORKS

```bash
npm run dev
```

1. Open GA4 Real-Time report
2. Visit your website
3. You should see events appearing in real-time

---

## 4. ADD TRACKING TO YOUR COMPONENTS

To track user actions, use the `useAnalytics()` hook:

```typescript
'use client';
import { useAnalytics } from '@/lib/analytics';

export default function MyComponent() {
  const { trackCTAClick } = useAnalytics();

  return (
    <button onClick={() => trackCTAClick({
      cta_text: 'Click Me',
      cta_position: 'hero'
    })}>
      Click Me
    </button>
  );
}
```

---

## 5. AVAILABLE TRACKING FUNCTIONS

### Conversions

- `trackContactFormSubmit()`
- `trackAuditRequestSubmit()`
- `trackQuoteRequestSubmit()`
- `trackServiceInquiry()`
- `trackPhoneCall()` ✅ Already done
- `trackWhatsAppClick()` ✅ Already done
- `trackEmailClick()`
- `trackConsultationRequest()`

### Engagement

- `trackCTAClick()`
- `trackNavigationClick()`
- `trackButtonClick()`
- `trackFAQExpand()`
- `trackTestimonialInteraction()`
- `trackCaseStudyView()`
- `trackServiceView()`
- `trackVideoPlay()`
- `trackVideoComplete()`
- And 7 more...

### Automatic (No Code Needed)

- `page_view` ✅ Automatic
- `scroll_depth` ✅ Automatic
- `time_on_page_milestone` ✅ Automatic

---

## 6. KEY EVENTS TO MARK IN GA4

After deployment, mark these as Key Events (Conversions) in GA4:

1. Go to GA4 > Admin > Events
2. Search for each event
3. Click "Mark as conversion"

Events to mark:

- contact_form_submit
- audit_request_submit
- quote_request_submit
- service_inquiry
- phone_call
- whatsapp_click
- email_click
- consultation_request

---

## 7. VERIFY IN GA4

Check GA4 > Reports > Real-Time:

You should see:

- 📊 page_view events on page loads
- 📍 scroll_depth events as you scroll
- ⏱️ time_on_page_milestone events at 30s, 1m, 2m, 3m
- 📞 phone_call and whatsapp_click events when you click those buttons

---

## COMMON TASKS

### Track a Button Click

```typescript
const { trackButtonClick } = useAnalytics();

<button onClick={() => trackButtonClick({ button_text: 'Download' })}>
  Download
</button>
```

### Track a Form Submit

```typescript
const { trackContactFormSubmit } = useAnalytics();

<form onSubmit={async (e) => {
  e.preventDefault();
  trackContactFormSubmit({ form_name: 'Contact' });
  // submit form...
}}>
```

### Track Navigation

```typescript
const { trackNavigationClick } = useAnalytics();

<a onClick={() => trackNavigationClick({
  menu_item: 'Services',
  destination: '/services'
})}>
  Services
</a>
```

### Track Video

```typescript
const { trackVideoPlay, trackVideoComplete } = useAnalytics();

<video
  onPlay={() => trackVideoPlay({ video_title: 'Product Demo' })}
  onEnded={() => trackVideoComplete({ video_title: 'Product Demo' })}
>
```

---

## TROUBLESHOOTING

**Events not appearing in GA4?**

1. Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
2. Refresh browser and check GA4 Real-Time (might take 30 seconds)
3. Check browser console for errors
4. Verify GA4 property exists and is active

**Events appearing but tracking wrong data?**

1. Check the parameters passed to the function
2. Use browser DevTools Network tab to inspect gtag calls
3. Verify event name is correct

**Component not tracking?**

1. Ensure component is a Client Component (`'use client'` at top)
2. Verify `useAnalytics()` is imported correctly
3. Check that function is called on correct event (onClick, onSubmit, etc.)

---

## FULL DOCUMENTATION

For complete setup and configuration:

- See `GA4_SUMMARY.md` for detailed overview
- See `GA4_IMPLEMENTATION_GUIDE.md` for complete setup guide

---

## PRODUCTION CHECKLIST

Before deploying to production:

- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env`
- [ ] Run `npm run build` to verify no errors
- [ ] Test locally: `npm run dev` and check GA4 Real-Time
- [ ] Deploy to production
- [ ] Verify data flowing in GA4 Real-Time

After deploying to production:

- [ ] Mark Key Events in GA4 admin
- [ ] Create custom dimensions in GA4
- [ ] Set up conversion tracking
- [ ] Create audiences for remarketing
- [ ] Monitor data in GA4 reports

---

**Ready to go!** 🚀

Questions? Check GA4_IMPLEMENTATION_GUIDE.md
