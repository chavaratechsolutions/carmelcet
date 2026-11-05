"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function AdmissionsSection() {
  const routes = [
    {
      percentage: "50%",
      label: "OF SEATS",
      title: "Government Merit",
      description:
        "KEAM rank → CEE allotment → report to CCET with your allotment memo.",
      linkText: "Steps, documents & fees",
      href: "#gov-merit",
    },
    {
      percentage: "35%",
      label: "OF SEATS",
      title: "Management Merit",
      description:
        "Apply online → merit list on KEAM / JEE → admission & fee payment.",
      linkText: "Steps, documents & fees",
      href: "#mgmt-merit",
    },
    {
      percentage: "15%",
      label: "OF SEATS",
      title: "NRI quota",
      description:
        "Apply from abroad → upload sponsor documents → pay remotely.",
      linkText: "Steps, documents & fees",
      href: "#nri-quota",
    },
  ];

  const milestones = [
    { date: "XX Apr", label: "KEAM exam", active: true },
    { date: "XX Apr", label: "Management applications", active: true },
    { date: "XX Jun", label: "KEAM results", active: false },
    { date: "XX Jul", label: "CEE allotments", active: false },
    { date: "XX Aug", label: "Classes begin", active: false },
  ];

  return (
    <section
      id="admissions"
      className="relative bg-[#10243E] text-white overflow-hidden pt-16 sm:pt-20"
    >
      {/* Ambient Lighting Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-0 w-[550px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(40,85,150,0.28)_0%,_transparent_70%)]" />
        <div className="absolute top-1/4 -left-20 w-[600px] h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(30,70,130,0.22)_0%,_transparent_70%)]" />
      </div>

      {/* Decorative Dot Matrix in Top Right (10 columns x 8 rows) */}
      <div className="absolute right-[6.5vw] top-12 sm:top-14 pointer-events-none hidden sm:block z-0">
        <svg
          width="144"
          height="114"
          viewBox="0 0 144 114"
          fill="currentColor"
          className="text-white/20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={c * 15 + 4}
                cy={r * 15 + 4}
                r={1.5}
              />
            ))
          )}
        </svg>
      </div>

      {/* Decorative Left Circular Arc */}
      <div
        className="absolute rounded-full border-[1.5px] border-white/[0.13] pointer-events-none z-0 w-[440px] h-[440px] -left-48 top-6 sm:w-[620px] sm:h-[620px] sm:-left-40 sm:top-8 lg:w-[740px] lg:h-[740px] lg:left-[calc(6.5vw-410px)] lg:top-6"
      />

      <div className="w-full px-[6.5vw] pb-16 relative z-10 reveal-on-scroll">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#E5A93C]" />
            <span className="text-[#E5A93C] font-bold text-xs uppercase tracking-widest">
              ADMISSIONS 2027
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight mb-2">
            Three ways in.{" "}
            <span className="italic text-[#E5A93C] font-normal">
              Pick yours.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-normal">
            Each route has its own checklist, dates and fees — no guesswork.
          </p>
        </div>

        {/* 3 Quota Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 reveal-stagger">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-8 bg-[#142A4A]/80 border border-[#224572]/70 hover:border-[#E5A93C]/40 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="font-editorial text-4xl sm:text-5xl text-[#E5A93C] font-normal block leading-tight mb-1">
                  {route.percentage}
                </span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-5">
                  {route.label}
                </span>

                <h3 className="font-bold text-xl text-white mb-3">
                  {route.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {route.description}
                </p>
              </div>

              <a
                href={route.href}
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#E5A93C] font-semibold text-xs sm:text-sm transition-colors group"
              >
                <span>{route.linkText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Timeline: Key Dates 2027 */}
        <div className="pt-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-8">
            KEY DATES 2027
          </span>

          <div className="relative">
            {/* Timeline background track connecting node centers */}
            <div className="hidden sm:block absolute top-2.5 left-[10%] right-[10%] h-[2px] bg-[#244570]" />
            {/* Gold active segment for first 2 items */}
            <div className="hidden sm:block absolute top-2.5 left-[10%] w-[20%] h-[2px] bg-[#E5A93C]" />

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-2">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex flex-col items-start sm:items-center text-left sm:text-center relative z-10">
                  {/* Timeline Node Dot */}
                  <div
                    className={`w-5 h-5 rounded-full mb-3 flex items-center justify-center ${
                      milestone.active
                        ? "bg-[#E5A93C] shadow-md shadow-[#E5A93C]/30"
                        : "bg-[#10243E] border-2 border-[#2E5484]"
                    }`}
                  >
                    {milestone.active && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10243E]" />
                    )}
                  </div>

                  <span
                    className={`font-bold text-sm sm:text-base leading-tight mb-1 ${
                      milestone.active ? "text-[#E5A93C]" : "text-slate-200"
                    }`}
                  >
                    {milestone.date}
                  </span>
                  <span className="text-xs text-slate-400 font-normal leading-tight">
                    {milestone.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Organic Wave divider transitioning into white */}
      <div className="w-full overflow-hidden leading-none -mb-[1px] relative z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-14 block text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 C240,46 420,53 540,53 C700,53 840,38 990,37 C1140,36 1310,34 1440,30 L1440,60 L0,60 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
