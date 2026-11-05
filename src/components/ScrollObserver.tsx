"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // If the user prefers reduced motion, reveal all elements immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const viewportHeight = window.innerHeight;
          const rect = entry.boundingClientRect;

          // Calculate the height of the section visible in the viewport
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
          );
          const visibleRatio = rect.height > 0 ? visibleHeight / rect.height : 0;

          // Trigger when 40% of the section is visible in view or its top reaches 60% of viewport height (40% up from bottom)
          const isFortyPercentVisible =
            entry.intersectionRatio >= 0.4 ||
            visibleRatio >= 0.4 ||
            rect.top <= viewportHeight * 0.6;

          if (isFortyPercentVisible) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4],
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
