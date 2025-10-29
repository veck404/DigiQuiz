'use client';

import { useEffect } from "react";

/**
 * Applies smooth scrolling behavior to the entire document when mounted.
 * Restores the previous scroll behavior on unmount to avoid leaking styles.
 */
export function SmoothScroll() {
  useEffect(() => {
    const html = document.documentElement;
    const originalBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollBehavior = originalBehavior;
    };
  }, []);

  return null;
}
