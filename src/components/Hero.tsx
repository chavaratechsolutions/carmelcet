"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    src: "/images/hero/DJI_20261008_84254_331%E2%80%AFPM.jpg",
    alt: "Aerial Drone View of Carmel CET Campus",
    title: "Campus Aerial Panorama",
    subtitle: "Carmel CET · Alappuzha",
  },
  {
    src: "/images/hero/IMG-20261004-WA0034.jpg",
    alt: "Carmel College Campus Celebrations & Night View",
    title: "Campus Celebrations & Fests",
    subtitle: "Illuminated College Frontage",
  },
  {
    src: "/images/hero/IMG_4226.JPG",
    alt: "Carmel CET Academic Honors & Leadership",
    title: "Leadership & Excellence",
    subtitle: "Academic Honors & Accolades",
  },
  {
    src: "/images/hero/IMG_7359.JPG",
    alt: "Carmel CET Main Campus Grounds",
    title: "Carmel CET Grounds",
    subtitle: "CMI Legacy in Education Since 1831",
  },
];

const heroBackgrounds = [
  "/images/hero%20main/356507398_2026-09-30_05-05-19.jpg",
  "/images/hero%20main/3Q6A4782.JPG",
  "/images/hero%20main/3Q6A4033.JPG",
];

export default function Hero() {
  const [heroHeight, setHeroHeight] = useState<string>(
    "calc(100vh - (var(--nav-total-height, 120px) + var(--stats-half-height, 72px)))"
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Cross-fade hero page background every 7 seconds
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 7000);
    return () => clearInterval(bgInterval);
  }, []);

  // Auto-advance slide every 4.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStart(null);
  };

  useEffect(() => {
    const calculateHeroHeight = () => {
      const headerEl = document.querySelector("header");
      const statsCardEl = document.getElementById("stats-strip-card");

      const navHeight = headerEl ? headerEl.offsetHeight : 120;
      const statsCardHeight = statsCardEl ? statsCardEl.offsetHeight : 144;
      const statsHalfHeight = statsCardHeight / 2;
      const totalDeduction = navHeight + statsHalfHeight;

      document.documentElement.style.setProperty("--nav-total-height", `${navHeight}px`);
      document.documentElement.style.setProperty("--stats-half-height", `${statsHalfHeight}px`);
      document.documentElement.style.setProperty("--hero-deduction", `${totalDeduction}px`);

      setHeroHeight(`calc(100vh - ${totalDeduction}px)`);
    };

    calculateHeroHeight();
    window.addEventListener("resize", calculateHeroHeight);
    return () => window.removeEventListener("resize", calculateHeroHeight);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-[#0D223F] text-white overflow-hidden px-[6.5vw] flex items-center justify-center py-6 lg:py-0 pb-[var(--stats-half-height,72px)]"
      style={{
        height: heroHeight,
        minHeight: "540px",
      }}
    >
      {/* Hero Page Background Photos (from public/images/hero main) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none animate-hero-backdrop">
        {heroBackgrounds.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${index === bgIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
          >
            <img
              src={src}
              alt="Carmel CET Campus Backdrop"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Layered overlays: calibrated to 12-15% visibility on left, 35% in center, and 40% on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162c]/86 via-[#081c36]/65 to-[#07162c]/60" />
      </div>

      {/* Decorative background grid and concentric rings matching the reference */}
      <div className="absolute top-10 left-[6.5vw] w-44 h-44 hero-dot-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 hero-concentric-rings pointer-events-none opacity-80" />

      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ animationDelay: "-3s" }}
      />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[6.5vw] items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Admissions status badge */}
            <div className="animate-hero-badge inline-flex items-center bg-[#FAF9F5] text-[#A86D16] text-xs font-semibold px-4 py-1.5 rounded-full border border-amber-200/60 shadow-sm mb-5 hover:border-amber-400 transition-colors">
              <span className="relative flex h-2 w-2 mr-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5A93C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C88A24]"></span>
              </span>
              <span>Admissions 2027 open · KEAM code CMA</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-hero-title font-editorial text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-normal tracking-tight text-white leading-[1.1] mb-5">
              Enlightened for{" "}
              <span className="italic text-[#E5A93C] font-normal">
                Excellence.
              </span>
            </h1>

            {/* Paragraph Description */}
            <p className="animate-hero-desc text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-normal">
              Engineers with integrity, built in Alappuzha. Four NBA-accredited
              B.Tech programmes, mentors who know your name, and a CMI legacy in
              education since 1831.
            </p>

            {/* Call to action buttons */}
            <div className="animate-hero-actions flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#admissions"
                className="btn-gold-shimmer bg-[#E5A93C] hover:bg-[#d49629] text-[#131b26] font-bold px-6 py-3 rounded-md text-sm flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#academics"
                className="bg-white hover:bg-slate-100 text-[#0D223F] font-bold px-6 py-3 rounded-md text-sm transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                Find your programme
              </a>

              <button
                type="button"
                className="flex items-center gap-3 text-slate-200 hover:text-[#E5A93C] font-medium text-sm transition-colors py-2 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full border border-slate-400 group-hover:border-[#E5A93C] flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch the campus film</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Card (9:16 Slider) */}
          {/* <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none lg:w-auto h-[calc(100vh-var(--nav-total-height,120px)-2*var(--stats-half-height,72px)-60px)] max-h-[530px] rounded-[30px] overflow-hidden shadow-2xl border border-white/10 group select-none"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${isActive ? "scale-100" : "scale-105"
                        }`}
                    />
                  </div>
                );
              })}

              
              <div className="absolute top-0 inset-x-0 h-1 bg-white/15 z-30">
                <div
                  key={currentSlide}
                  className={`h-full bg-[#E5A93C] ${isPaused ? "opacity-60" : "animate-hero-progress"
                    }`}
                  style={{
                    animationDuration: "4.5s",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                />
              </div>

              
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>

              
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />

              <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-1.5">
                {heroSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(dotIdx);
                    }}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === currentSlide
                      ? "w-6 bg-[#E5A93C] shadow-sm"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

