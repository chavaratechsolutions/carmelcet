"use client";

import React from "react";
import {
  GraduationCap,
  Shield,
  Globe,
  BookOpen,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function PersonaSection() {
  const personas = [
    {
      id: "01",
      icon: GraduationCap,
      title: "I'm choosing a college",
      description: "Programmes, admissions and campus life",
      href: "#admissions",
    },
    {
      id: "02",
      icon: Shield,
      title: "I'm a parent",
      description: "Fees, safety, hostel and outcomes",
      href: "#admissions",
    },
    {
      id: "03",
      icon: Globe,
      title: "I'm applying from abroad",
      description: "NRI quota and a remote process",
      href: "#admissions",
    },
    {
      id: "04",
      icon: BookOpen,
      title: "I'm a current student",
      description: "AMS, calendars, bus, results",
      href: "#students",
    },
    {
      id: "05",
      icon: Briefcase,
      title: "I'm hiring",
      description: "Batch profile and placement cell",
      href: "#placements",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Coastal Seigaiha Wave Ripples Background Pattern - Gradient opacity from bottom to top */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 95%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 95%)",
        }}
      >
        <svg
          viewBox="0 0 1440 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <g id="persona-wave-scallop">
              {/* Scallop fill covering lower legs of previous row */}
              <path
                d="M -56 0 A 56 56 0 0 1 56 0 L 56 75 L -56 75 Z"
                fill="#FFFFFF"
              />
              {/* Concentric ripple arcs in subtle monochrome navy (~5% base strength) */}
              <path
                d="M -56 0 A 56 56 0 0 1 56 0"
                stroke="#0C1E37"
                strokeOpacity="0.05"
                strokeWidth="1.5"
              />
              <path
                d="M -45 0 A 45 45 0 0 1 45 0"
                stroke="#0C1E37"
                strokeOpacity="0.05"
                strokeWidth="1.5"
              />
              <path
                d="M -34 0 A 34 34 0 0 1 34 0"
                stroke="#0C1E37"
                strokeOpacity="0.05"
                strokeWidth="1.5"
              />
              <path
                d="M -23 0 A 23 23 0 0 1 23 0"
                stroke="#0C1E37"
                strokeOpacity="0.05"
                strokeWidth="1.5"
              />
              <path
                d="M -12 0 A 12 12 0 0 1 12 0"
                stroke="#0C1E37"
                strokeOpacity="0.05"
                strokeWidth="1.5"
              />
            </g>
          </defs>

          {/* 20 Staggered Rows */}
          {Array.from({ length: 20 }).map((_, r) => {
            const cy = r * 36;
            const xOffset = r % 2 === 0 ? 0 : 56;
            return (
              <g key={r}>
                {Array.from({ length: 16 }).map((_, c) => {
                  const cx = c * 112 - 56 + xOffset;
                  return (
                    <use
                      key={`${r}-${c}`}
                      href="#persona-wave-scallop"
                      x={cx}
                      y={cy}
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="w-full px-[6.5vw] relative z-10 reveal-on-scroll">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#C88A24]" />
            <span className="text-[#C88A24] font-bold text-xs uppercase tracking-widest">
              START HERE
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1E37] tracking-tight mb-3">
            What brings you here{" "}
            <span className="italic text-[#C88A24] font-normal">today?</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-lg font-normal">
            Pick the path that fits you — we'll show only what you need.
          </p>
        </div>

        {/* 5 Persona Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 reveal-stagger">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <a
                key={persona.id}
                href={persona.href}
                className="group relative rounded-2xl p-6 flex flex-col justify-between bg-[#F4F6F9] border border-slate-100 hover:border-[#1E3A60] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0A182F]/15 overflow-hidden block"
              >
                {/* Dark Navy Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#112340] to-[#0A182F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-full bg-white text-[#0B2347] border border-slate-200/60 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:bg-[#E5A93C] group-hover:text-[#0A182F] group-hover:border-[#E5A93C] group-hover:shadow-md">
                      <Icon className="w-5 h-5 stroke-[1.8] group-hover:stroke-[2.2] transition-all duration-300" />
                    </div>
                    <span className="font-editorial text-2xl font-bold text-slate-300 group-hover:text-[#E5A93C]/80 transition-colors duration-300">
                      {persona.id}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg leading-snug mb-2 text-[#0B2347] group-hover:text-white transition-colors duration-300">
                    {persona.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal group-hover:text-slate-300 transition-colors duration-300">
                    {persona.description}
                  </p>
                </div>

                <div className="relative z-10 inline-flex items-center gap-1.5 text-[#0B2347] group-hover:text-[#E5A93C] text-xs font-bold transition-all duration-300">
                  <span>Start</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
