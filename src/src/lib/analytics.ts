/**
 * Analytics & Tracking Library
 * Centralized analytics tracking for Google Analytics, Facebook Pixel, etc.
 */

// Types
interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

interface PageView {
  title: string;
  path: string;
}

/**
 * Initialize Google Analytics
 */
export function initGA() {
  const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics not configured');
    return false;
  }

  // GA4 is loaded via script tag in index.html
  if (window.gtag) {
    console.log('Google Analytics initialized');
    return true;
  }
  
  return false;
}

/**
 * Track page view
 */
export function trackPageView(data: PageView) {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: data.title,
      page_path: data.path,
    });
  }
}

/**
 * Track custom event
 */
export function trackEvent(event: AnalyticsEvent) {
  if (window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmission(projectType: string) {
  trackEvent({
    category: 'Contact',
    action: 'form_submission',
    label: projectType,
    value: 1,
  });
}

/**
 * Track price estimate request
 */
export function trackPriceEstimate(data: {
  roomType: string;
  area: number;
  estimatedPrice: number;
}) {
  trackEvent({
    category: 'Price Estimator',
    action: 'estimate_requested',
    label: data.roomType,
    value: data.estimatedPrice,
  });
}

/**
 * Track portfolio view
 */
export function trackPortfolioView(projectName: string) {
  trackEvent({
    category: 'Portfolio',
    action: 'project_viewed',
    label: projectName,
  });
}

/**
 * Track virtual tour interaction
 */
export function trackVirtualTourInteraction(sceneName: string) {
  trackEvent({
    category: 'Virtual Tour',
    action: 'scene_viewed',
    label: sceneName,
  });
}

/**
 * Track CTA clicks
 */
export function trackCTAClick(ctaName: string, location: string) {
  trackEvent({
    category: 'CTA',
    action: 'click',
    label: `${ctaName} - ${location}`,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number) {
  const milestones = [25, 50, 75, 100];
  const milestone = milestones.find(m => percentage >= m && percentage < m + 5);
  
  if (milestone) {
    trackEvent({
      category: 'Engagement',
      action: 'scroll_depth',
      label: `${milestone}%`,
      value: milestone,
    });
  }
}

/**
 * Track outbound link clicks
 */
export function trackOutboundLink(url: string, label?: string) {
  trackEvent({
    category: 'Outbound',
    action: 'click',
    label: label || url,
  });
}

/**
 * Track social media clicks
 */
export function trackSocialClick(platform: string) {
  trackEvent({
    category: 'Social Media',
    action: 'click',
    label: platform,
  });
}

/**
 * Track phone call clicks
 */
export function trackPhoneClick() {
  trackEvent({
    category: 'Contact',
    action: 'phone_click',
    label: 'Click to call',
  });
}

/**
 * Track email clicks
 */
export function trackEmailClick() {
  trackEvent({
    category: 'Contact',
    action: 'email_click',
    label: 'Click to email',
  });
}

/**
 * Track file downloads
 */
export function trackDownload(fileName: string) {
  trackEvent({
    category: 'Downloads',
    action: 'file_download',
    label: fileName,
  });
}

/**
 * Initialize scroll depth tracking
 */
export function initScrollTracking() {
  let tracked25 = false;
  let tracked50 = false;
  let tracked75 = false;
  let tracked100 = false;

  window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 25 && !tracked25) {
      trackScrollDepth(25);
      tracked25 = true;
    }
    if (scrollPercentage >= 50 && !tracked50) {
      trackScrollDepth(50);
      tracked50 = true;
    }
    if (scrollPercentage >= 75 && !tracked75) {
      trackScrollDepth(75);
      tracked75 = true;
    }
    if (scrollPercentage >= 100 && !tracked100) {
      trackScrollDepth(100);
      tracked100 = true;
    }
  });
}

/**
 * Initialize exit intent tracking
 */
export function initExitIntent() {
  document.addEventListener('mouseout', (e) => {
    if (e.clientY <= 0) {
      trackEvent({
        category: 'Engagement',
        action: 'exit_intent',
        label: window.location.pathname,
      });
    }
  });
}

/**
 * Track time on page
 */
export function trackTimeOnPage() {
  const startTime = Date.now();

  window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // seconds
    
    trackEvent({
      category: 'Engagement',
      action: 'time_on_page',
      label: window.location.pathname,
      value: timeSpent,
    });
  });
}

/**
 * Initialize Facebook Pixel (if configured)
 */
export function initFacebookPixel() {
  const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;
  
  if (!FB_PIXEL_ID || FB_PIXEL_ID.includes('YOUR_')) {
    return false;
  }

  if (window.fbq) {
    window.fbq('track', 'PageView');
    return true;
  }
  
  return false;
}

/**
 * Track Facebook conversion
 */
export function trackFBConversion(eventName: string, data?: any) {
  if (window.fbq) {
    window.fbq('track', eventName, data);
  }
}

/**
 * Initialize all tracking
 */
export function initializeAnalytics() {
  initGA();
  initScrollTracking();
  initExitIntent();
  trackTimeOnPage();
  initFacebookPixel();
  
  console.log('Analytics initialized');
}

// TypeScript declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default {
  init: initializeAnalytics,
  trackPageView,
  trackEvent,
  trackContactFormSubmission,
  trackPriceEstimate,
  trackPortfolioView,
  trackVirtualTourInteraction,
  trackCTAClick,
  trackScrollDepth,
  trackOutboundLink,
  trackSocialClick,
  trackPhoneClick,
  trackEmailClick,
  trackDownload,
};
