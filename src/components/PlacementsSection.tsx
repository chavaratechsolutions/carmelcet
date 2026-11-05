"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function PlacementsSection() {
  const recruiters = [
    { name: "TCS", src: "/images/recruiters/tcs.png" },
    { name: "Infosys", src: "/images/recruiters/Infosys_logo.png" },
    { name: "Tech Mahindra", src: "/images/recruiters/Tech_Mahindra.png" },
    { name: "Allianz", src: "/images/recruiters/allianz.png" },
    { name: "Sutherland", src: "/images/recruiters/sutherland.png" },
    { name: "[24]7.ai", src: "/images/recruiters/247.ai.jpg" },
    { name: "ESAF Bank", src: "/images/recruiters/ESAF.png" },
    { name: "PlanetSpark", src: "/images/recruiters/planet_spark.png" },
    { name: "Aarbee Structures", src: "/images/recruiters/aarbee.png" },
    { name: "Aurus", src: "/images/recruiters/aurus.png" },
    { name: "HRH Next", src: "/images/recruiters/HRHnext.png" },
    { name: "Technologics", src: "/images/recruiters/TECHNOLOGICS.png" },
    { name: "Paradigm IT", src: "/images/recruiters/Paradigm.png" },
    { name: "GICE", src: "/images/recruiters/gice.jpg" },
    { name: "Tharayil Power", src: "/images/recruiters/tharayil_power.jpeg" },
    { name: "USDC", src: "/images/recruiters/usdc.png" },
  ];

  // Row 1 sequence (Left to Right)
  const marqueeRecruitersRow1 = [
    ...recruiters,
    ...recruiters,
    ...recruiters,
    ...recruiters,
  ];

  // Row 2 sequence (Right to Left) - exact reverse order from the top row
  const reversedRecruiters = [...recruiters].reverse();
  const marqueeRecruitersRow2 = [
    ...reversedRecruiters,
    ...reversedRecruiters,
    ...reversedRecruiters,
    ...reversedRecruiters,
  ];

  return (
    <section id="placements" className="py-20 bg-white">
      <div className="w-full px-[6.5vw] reveal-on-scroll">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#C88A24]" />
            <span className="text-[#C88A24] font-bold text-xs uppercase tracking-widest">
              PLACEMENTS
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1E37] tracking-tight mb-2">
            Where CCET graduates{" "}
            <span className="italic text-[#C88A24] font-normal">go next</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Published every year — highest, median and offers for each batch and branch.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-24 reveal-stagger">
          {/* Left Column: Placement Data */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Key Placement Stat */}
            <div className="flex flex-wrap items-baseline gap-3 mb-8">
              <span className="font-editorial text-5xl sm:text-6xl text-[#0B2347] font-normal tracking-tight">
                XX%
              </span>
              <span className="text-slate-700 text-sm sm:text-base font-normal max-w-sm">
                of eligible 2026 graduates placed before convocation
              </span>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              <div className="bg-[#F4F6F9] rounded-xl p-5 border border-slate-100">
                <span className="font-editorial text-2xl sm:text-3xl text-[#0B2347] font-normal block mb-1">
                  XX LPA
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Highest package
                </span>
              </div>

              <div className="bg-[#F4F6F9] rounded-xl p-5 border border-slate-100">
                <span className="font-editorial text-2xl sm:text-3xl text-[#0B2347] font-normal block mb-1">
                  XX LPA
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Median package
                </span>
              </div>

              <div className="bg-[#F4F6F9] rounded-xl p-5 border border-slate-100">
                <span className="font-editorial text-2xl sm:text-3xl text-[#0B2347] font-normal block mb-1">
                  XXX
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Offers in 2026
                </span>
              </div>
            </div>

            {/* Read Placement Report Action */}
            <a
              href="#placement-report"
              className="border-2 border-[#0B2347] text-[#0B2347] hover:bg-[#0B2347] hover:text-white font-bold px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Read the placement report</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Visual Card with Overlapping Testimonial */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Graduate at work image */}
              <div className="relative aspect-square rounded-[30px] overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="/images/placement-work.jpg"
                  alt="Graduate at work"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Testimonial Bubble */}
              <div className="absolute -left-4 sm:-left-8 bottom-10 bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(11,35,71,0.14)] border border-slate-100 max-w-[320px] sm:max-w-[340px] z-20">
                <p className="font-editorial italic text-slate-800 text-sm sm:text-[15px] leading-snug mb-4">
                  "The project lab and my mentor got me ready for my first job before I graduated."
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 text-[#0B2347] font-bold text-xs flex items-center justify-center border border-slate-200">
                    AJ
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-[#0C1E37] leading-none mb-1">
                      Anitta Joseph
                    </h5>
                    <p className="text-[11px] text-slate-500 font-normal">
                      CSE 2025 · Software Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by Recruiters Strip */}
        <div className="pt-12 border-t border-slate-100 text-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-8">
            TRUSTED BY RECRUITERS INCLUDING
          </span>

          {/* Dual-row continuous marquee with opposing directions & soft edge masks */}
          <div className="relative w-full overflow-hidden py-2 space-y-3 sm:space-y-4">
            {/* Soft gradient fade on left and right edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Row 1: Left to Right */}
            <div className="flex items-center gap-3 sm:gap-4 animate-marquee-ltr hover:[animation-play-state:paused] w-max select-none">
              {marqueeRecruitersRow1.map((company, index) => (
                <div
                  key={`r1-${company.name}-${index}`}
                  className="h-16 w-36 sm:w-44 shrink-0 flex items-center justify-center p-3 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 group cursor-default"
                  title={company.name}
                >
                  <img
                    src={company.src}
                    alt={`${company.name} logo`}
                    loading="lazy"
                    draggable={false}
                    className="max-h-8 sm:max-h-9 max-w-[105px] sm:max-w-[115px] w-auto h-auto object-contain mix-blend-multiply filter grayscale contrast-125 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Row 2: Right to Left */}
            <div className="flex items-center gap-3 sm:gap-4 animate-marquee-rtl hover:[animation-play-state:paused] w-max select-none">
              {marqueeRecruitersRow2.map((company, index) => (
                <div
                  key={`r2-${company.name}-${index}`}
                  className="h-16 w-36 sm:w-44 shrink-0 flex items-center justify-center p-3 rounded-xl bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-300 group cursor-default"
                  title={company.name}
                >
                  <img
                    src={company.src}
                    alt={`${company.name} logo`}
                    loading="lazy"
                    draggable={false}
                    className="max-h-8 sm:max-h-9 max-w-[105px] sm:max-w-[115px] w-auto h-auto object-contain mix-blend-multiply filter grayscale contrast-125 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
