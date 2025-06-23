"use client"

import { useEffect } from "react"

export function Analytics() {
  useEffect(() => {
    // Google Analytics
    if (typeof window !== "undefined") {
      // Track page views
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag("config", "GA_MEASUREMENT_ID", {
            page_title: document.title,
            page_location: window.location.href,
          })
        }
      }

      // Track contact form submissions
      const trackContactSubmission = () => {
        if (window.gtag) {
          window.gtag("event", "contact_form_submission", {
            event_category: "engagement",
            event_label: "portfolio_contact",
          })
        }
      }

      // Track CV downloads
      const trackCVDownload = () => {
        if (window.gtag) {
          window.gtag("event", "cv_download", {
            event_category: "engagement",
            event_label: "cv_pdf",
          })
        }
      }

      // Track project views
      const trackProjectView = (projectName: string) => {
        if (window.gtag) {
          window.gtag("event", "project_view", {
            event_category: "engagement",
            event_label: projectName,
          })
        }
      }

      // Make tracking functions globally available
      window.trackContactSubmission = trackContactSubmission
      window.trackCVDownload = trackCVDownload
      window.trackProjectView = trackProjectView

      trackPageView()
    }
  }, [])

  return null
}
