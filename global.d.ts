interface Window {
  gtag?: (...args: any[]) => void;
  trackContactSubmission?: () => void;
  trackCVDownload?: () => void;
  trackProjectView?: (projectName: string) => void;
}