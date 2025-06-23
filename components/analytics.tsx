"use client"

import { useEffect } from "react"


export function Analytics() {
  useEffect(() => {

    if (typeof window !== "undefined") {

      const trackPageView = () => {
        if (window.gtag) {
          window.gtag("config", "GA_MEASUREMENT_ID", {
            page_title: document.title,
            page_location: window.location.href,
          })
        }
      }

      const trackContactSubmission = () => {
        if (window.gtag) {
          window.gtag("event", "contact_form_submission", {
            event_category: "engagement",
            event_label: "portfolio_contact",
          })
        }
      }

      const trackCVDownload = () => {
        if (window.gtag) {
          window.gtag("event", "cv_download", {
            event_category: "engagement",
            event_label: "cv_pdf",
          })
        }
      }

      const trackProjectView = (projectName: string) => {
        if (window.gtag) {
          window.gtag("event", "project_view", {
            event_category: "engagement",
            event_label: projectName,
          })
        }
      }

      window.trackContactSubmission = trackContactSubmission
      window.trackCVDownload = trackCVDownload
      window.trackProjectView = trackProjectView

      trackPageView()
    }
  }, [])

  return null
}
