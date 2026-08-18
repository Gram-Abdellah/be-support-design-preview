"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";

const CALENDLY_URL =
  "https://calendly.com/abdellahgram01/be-support-discovery-call?locale=fr&hide_gdpr_banner=1&background_color=f3ede2&text_color=1e2b48&primary_color=bb6a35";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget(options: { url: string; parentElement: HTMLElement }): void;
    };
  }
}

export default function CalendlyInlineWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  const initializeCalendly = useCallback(() => {
    const container = containerRef.current;

    if (!container || !window.Calendly || container.querySelector("iframe")) {
      return;
    }

    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: container,
    });
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="calendly-inline-widget h-[760px] min-h-[760px] min-w-0 w-full sm:h-[660px] sm:min-h-[660px] min-[1100px]:h-[600px] min-[1100px]:min-h-[600px]"
        data-url={CALENDLY_URL}
        aria-label="Calendrier de réservation Be-Support"
      />
      <Script
        id="calendly-contact-inline-widget"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={initializeCalendly}
      />
    </>
  );
}
