"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CampusLifeSection() {
  // Hero 1:1 Box (fills 2 rows)
  const bigPhoto = {
    src: "/images/campus-encaenia.jpg",
    alt: "Encaenia — College Day Celebrations",
  };

  // Row 1: 3 Photos in ~4:3 Ratio
  const row1Photos = [
    {
      src: "/images/campus-onam.jpg",
      alt: "Onam on Campus",
    },
    {
      src: "/images/hero-campus.jpg",
      alt: "Carmel CET Campus Quadrangle",
    },
    {
      src: "/images/hero/IMG-20261004-WA0034.jpg",
      alt: "Campus Night Celebrations & Lights",
    },
  ];

  // Row 2: 4 Photos in ~1:1 Ratio (4th photo features the "More +" overlay)
  const row2Photos = [
    {
      src: "/images/hero/IMG_7359.JPG",
      alt: "Carmel CET Main Campus Grounds",
    },
    {
      src: "/images/hero/IMG_4226.JPG",
      alt: "Academic Honors & Student Activities",
    },
    {
      src: "/images/hero%20main/3Q6A4782.JPG",
      alt: "Campus Tech & Innovation Summits",
    },
    {
      src: "/images/hero%20main/3Q6A4033.JPG",
      alt: "Carmel CET Vibrant Student Community",
    },
  ];

  return (
    <section id="campus-life" className="relative py-10 sm:py-12 bg-[#F8F9FA] overflow-hidden">
      {/* Background Flowing Wave Ribbon Layer (Big Vector Inline SVG in Website Navy Blue & Warm Gold/Yellow) */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 opacity-80"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >

          <defs>
            {/* Website Signature Brand Colors: Deep Navy (#0B2347 / #0C1E37) & Warm Gold/Yellow (#C88A24 / #E5A93C / #F0A51A) */}
            
            {/* 1. Soft Navy Ambient Gradient */}
            <linearGradient id="wave-brand-navy-soft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1B4985" stopOpacity="0.06" />
              <stop offset="35%" stopColor="#0B2347" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#071526" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1B4985" stopOpacity="0.08" />
            </linearGradient>

            {/* 2. Deep Website Navy Gradient */}
            <linearGradient id="wave-brand-navy-deep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1B365D" stopOpacity="0.16" />
              <stop offset="30%" stopColor="#0B2347" stopOpacity="0.32" />
              <stop offset="75%" stopColor="#071526" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#0C1E37" stopOpacity="0.22" />
            </linearGradient>

            {/* 3. Navy to Gold Transition Gradient */}
            <linearGradient id="wave-brand-navy-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B2347" stopOpacity="0.25" />
              <stop offset="35%" stopColor="#1B4985" stopOpacity="0.32" />
              <stop offset="70%" stopColor="#C88A24" stopOpacity="0.40" />
              <stop offset="100%" stopColor="#E5A93C" stopOpacity="0.30" />
            </linearGradient>

            {/* 4. Core Website Gold/Yellow Gradient (#C88A24 / #E5A93C / #F0A51A) */}
            <linearGradient id="wave-brand-gold-core" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C88A24" stopOpacity="0.32" />
              <stop offset="30%" stopColor="#E5A93C" stopOpacity="0.55" />
              <stop offset="75%" stopColor="#F0A51A" stopOpacity="0.70" />
              <stop offset="100%" stopColor="#C88A24" stopOpacity="0.40" />
            </linearGradient>

            {/* 5. Warm Amber Yellow Ribbon Gradient */}
            <linearGradient id="wave-brand-yellow-warm" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5A93C" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#F0A51A" stopOpacity="0.45" />
              <stop offset="80%" stopColor="#C88A24" stopOpacity="0.50" />
              <stop offset="100%" stopColor="#0B2347" stopOpacity="0.20" />
            </linearGradient>

            {/* 6. Signature Glowing Golden Crest Highlight Thread */}
            <linearGradient id="wave-brand-highlight-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0A51A" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#FDE68A" stopOpacity="0.7" />
              <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="90%" stopColor="#F9C66B" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#C88A24" stopOpacity="0.3" />
            </linearGradient>

            {/* 7. Deep Navy Accent Contour Lines */}
            <linearGradient id="wave-brand-contour-navy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1B4985" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#0B2347" stopOpacity="0.60" />
              <stop offset="80%" stopColor="#071526" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#1B4985" stopOpacity="0.30" />
            </linearGradient>

            {/* 8. Gold Accent Contour Line */}
            <linearGradient id="wave-brand-contour-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C88A24" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F0A51A" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C88A24" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <path d="M 0.0,254.4 C 170.0,315.7 310.0,382.4 450.0,374.0 C 630.0,351.6 860.0,57.7 1080.0,50.0 C 1220.0,37.0 1360.0,136.4 1440.0,171.2 L 1440.0,206.6 C 1360.0,170.8 1220.0,69.5 1080.0,80.0 C 860.0,86.2 630.0,373.8 450.0,392.0 C 310.0,398.9 170.0,327.7 0.0,259.2 Z" fill="url(#wave-brand-navy-soft)" />
          <path d="M 0.0,259.2 C 170.0,327.7 310.0,398.9 450.0,392.0 C 630.0,373.8 860.0,86.2 1080.0,80.0 C 1220.0,69.5 1360.0,170.8 1440.0,206.6 L 1440.0,242.0 C 1360.0,205.2 1220.0,101.9 1080.0,110.0 C 860.0,114.8 630.0,396.0 450.0,410.0 C 310.0,415.3 170.0,339.8 0.0,264.0 Z" fill="url(#wave-brand-navy-soft)" />
          <path d="M 0.0,264.0 C 170.0,339.8 310.0,415.3 450.0,410.0 C 630.0,396.0 860.0,114.8 1080.0,110.0 C 1220.0,101.9 1360.0,205.2 1440.0,242.0 L 1440.0,277.4 C 1360.0,239.7 1220.0,134.3 1080.0,140.0 C 860.0,143.4 630.0,418.2 450.0,428.0 C 310.0,431.7 170.0,351.9 0.0,268.8 Z" fill="url(#wave-brand-navy-deep)" />
          <path d="M 0.0,268.8 C 170.0,351.9 310.0,431.7 450.0,428.0 C 630.0,418.2 860.0,143.4 1080.0,140.0 C 1220.0,134.3 1360.0,239.7 1440.0,277.4 L 1440.0,310.4 C 1360.0,271.8 1220.0,164.6 1080.0,168.0 C 860.0,170.0 630.0,438.9 450.0,444.8 C 310.0,447.0 170.0,363.1 0.0,273.3 Z" fill="url(#wave-brand-navy-deep)" />
          <path d="M 0.0,273.3 C 170.0,363.1 310.0,447.0 450.0,444.8 C 630.0,438.9 860.0,170.0 1080.0,168.0 C 1220.0,164.6 1360.0,271.8 1440.0,310.4 L 1440.0,341.1 C 1360.0,301.6 1220.0,192.7 1080.0,194.0 C 860.0,194.8 630.0,458.2 450.0,460.4 C 310.0,461.2 170.0,373.6 0.0,277.4 Z" fill="url(#wave-brand-navy-gold)" />
          <path d="M 0.0,277.4 C 170.0,373.6 310.0,461.2 450.0,460.4 C 630.0,458.2 860.0,194.8 1080.0,194.0 C 1220.0,192.7 1360.0,301.6 1440.0,341.1 L 1440.0,371.8 C 1360.0,331.5 1220.0,220.8 1080.0,220.0 C 860.0,219.5 630.0,477.4 450.0,476.0 C 310.0,475.5 170.0,384.0 0.0,281.6 Z" fill="url(#wave-brand-gold-core)" />
          <path d="M 0.0,281.6 C 170.0,384.0 310.0,475.5 450.0,476.0 C 630.0,477.4 860.0,219.5 1080.0,220.0 C 1220.0,220.8 1360.0,331.5 1440.0,371.8 L 1440.0,402.5 C 1360.0,361.3 1220.0,248.9 1080.0,246.0 C 860.0,244.3 630.0,496.6 450.0,491.6 C 310.0,489.7 170.0,394.5 0.0,285.8 Z" fill="url(#wave-brand-yellow-warm)" />
          <path d="M 0.0,285.8 C 170.0,394.5 310.0,489.7 450.0,491.6 C 630.0,496.6 860.0,244.3 1080.0,246.0 C 1220.0,248.9 1360.0,361.3 1440.0,402.5 L 1440.0,430.8 C 1360.0,388.9 1220.0,274.9 1080.0,270.0 C 860.0,267.1 630.0,514.4 450.0,506.0 C 310.0,502.8 170.0,404.1 0.0,289.6 Z" fill="url(#wave-brand-navy-deep)" />
          <path d="M 0.0,289.6 C 170.0,404.1 310.0,502.8 450.0,506.0 C 630.0,514.4 860.0,267.1 1080.0,270.0 C 1220.0,274.9 1360.0,388.9 1440.0,430.8 L 1440.0,460.3 C 1360.0,417.5 1220.0,301.9 1080.0,295.0 C 860.0,290.9 630.0,532.9 450.0,521.0 C 310.0,516.5 170.0,414.2 0.0,293.6 Z" fill="url(#wave-brand-navy-soft)" />
          {/* Glowing Website Gold/Yellow Crest Ribbon Line */}
          <path
            d="M 0.0,277.4 C 170.0,373.6 310.0,461.2 450.0,460.4 C 630.0,458.2 860.0,194.8 1080.0,194.0 C 1220.0,192.7 1360.0,301.6 1440.0,341.1"
            fill="none"
            stroke="url(#wave-brand-highlight-gold)"
            strokeWidth="3.0"
          />
          {/* Website Navy Contour Accent Line */}
          <path
            d="M 0.0,268.8 C 170.0,351.9 310.0,431.7 450.0,428.0 C 630.0,418.2 860.0,143.4 1080.0,140.0 C 1220.0,134.3 1360.0,239.7 1440.0,277.4"
            fill="none"
            stroke="url(#wave-brand-contour-navy)"
            strokeWidth="1.8"
          />
          {/* Website Gold Contour Accent Line */}
          <path
            d="M 0.0,281.6 C 170.0,384.0 310.0,475.5 450.0,476.0 C 630.0,477.4 860.0,219.5 1080.0,220.0 C 1220.0,220.8 1360.0,331.5 1440.0,371.8"
            fill="none"
            stroke="url(#wave-brand-contour-gold)"
            strokeWidth="1.6"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full px-[6.5vw] reveal-on-scroll">
        {/* Top Bar: Section Badge & Explore Link */}
        <div className="flex items-center justify-between mb-6 sm:mb-7">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#C88A24]" />
            <span className="text-[#C88A24] font-bold text-xs uppercase tracking-widest">
              CAMPUS LIFE
            </span>
          </div>

          <a
            href="#explore-campus"
            className="inline-flex items-center gap-2 text-[#0B2347] font-semibold text-xs sm:text-sm hover:gap-3 transition-all group"
          >
            <span>Explore campus life</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile-only Title (on tablet/desktop it is rotated on the left side) */}
        <h2 className="sm:hidden font-editorial text-3xl sm:text-4xl font-normal text-[#0C1E37] tracking-tight mb-5">
          Campus <span className="italic text-[#C88A24] font-normal">Events</span>
        </h2>

        {/* Main Content Layout: Rotated Title on Left + Photos on Right */}
        <div className="flex items-stretch gap-4 sm:gap-6 lg:gap-8">
          {/* Rotated Left Title: 90 degrees anticlockwise (-rotate-90) */}
          <div className="hidden sm:flex items-center justify-center w-12 sm:w-16 lg:w-20 flex-shrink-0 select-none">
            <h2 className="-rotate-90 whitespace-nowrap font-editorial text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] leading-none font-normal text-[#0C1E37] tracking-tight origin-center">
              Campus{" "}
              <span className="italic text-[#C88A24] font-normal">Events</span>
            </h2>
          </div>

          {/* Gallery Arrangement: 1:1 Box (spans 2 rows) + Right Subgrid (Row 1: 3 photos, Row 2: 4 photos) */}
          <div className="flex-1 min-w-0 flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 lg:gap-5 reveal-stagger">
            {/* Big 1:1 Box filling both rows */}
            <div className="w-full sm:w-[33%] lg:w-[34%] xl:w-[35%] flex-shrink-0">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 group bg-slate-100">
                <img
                  src={bigPhoto.src}
                  alt={bigPhoto.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Subgrid Stack: Row 1 + Row 2 (Total height equals the Big 1:1 Box, equal row heights) */}
            <div className="h-[240px] sm:h-auto flex-1 min-w-0 min-h-0 flex flex-col justify-between gap-3 sm:gap-4 lg:gap-5">
              {/* Row 1: 3 Photos in ~4:3 Ratio */}
              <div className="flex-1 min-h-0 grid grid-cols-3 gap-2.5 sm:gap-3.5 lg:gap-4">
                {row1Photos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="relative h-full w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 group bg-slate-100 min-h-0"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: 4 Photos in ~1:1 Ratio (4th photo features the "More +" overlay) */}
              <div className="flex-1 min-h-0 grid grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4">
                {row2Photos.map((photo, idx) => {
                  const isLast = idx === row2Photos.length - 1;

                  if (isLast) {
                    return (
                      <a
                        key={idx}
                        href="#explore-campus"
                        className="relative h-full w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 group block cursor-pointer bg-slate-900 min-h-0"
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* "More +" Overlay using the editorial font from "60+" */}
                        <div className="absolute inset-0 bg-[#0C1E37]/55 group-hover:bg-[#0C1E37]/70 backdrop-blur-[2px] transition-all flex items-center justify-center p-2 text-center">
                          <span className="font-editorial text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tight leading-none text-white group-hover:text-[#F0A51A] transition-colors">
                            More +
                          </span>
                        </div>
                      </a>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      className="relative h-full w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 group bg-slate-100 min-h-0"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
