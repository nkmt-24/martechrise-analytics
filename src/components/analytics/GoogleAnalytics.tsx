'use client';

/**
 * GA4 Script Component
 * Initializes Google Analytics 4 on the client side
 * 
 * Place this component in your root layout:
 * import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <head>
 *         <GoogleAnalytics />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   )
 * }
 */

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initializeScrollTracking, resetScrollTracking } from '@/lib/analytics/scroll-tracking';
import { initializeTimeTracking, resetTimeTracking } from '@/lib/analytics/time-tracking';
import { trackPageView } from '@/lib/analytics/ga4';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      console.warn('GA_MEASUREMENT_ID is not configured');
      return;
    }

    // Reset tracking on route change
    resetScrollTracking();
    resetTimeTracking();

    // Track page view
    trackPageView({
      page_title: document.title,
      page_path: pathname,
    });

    // Initialize scroll and time tracking
    initializeScrollTracking();
    initializeTimeTracking();
  }, [pathname]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* GA4 Initialization Script */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              page_title: document.title,
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
        }}
      />
    </>
  );
}
