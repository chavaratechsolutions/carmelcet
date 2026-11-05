"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function StorySection() {
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      {/* 1831 Watermark typography in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="font-editorial text-[160px] sm:text-[240px] md:text-[290px] font-bold text-slate-100/90 leading-none tracking-tighter">
          1831
        </span>
      </div>

      <div className="w-full px-[6.5vw] relative z-10 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center reveal-stagger">
          {/* Left Column: Mannanam Archive Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[540px] aspect-[560/440] rounded-[28px] overflow-hidden shadow-2xl border border-slate-100 group">
              <img
                src="/images/story-mannanam.jpg"
                alt="Mannanam, 1831 — CMI Archive"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Story Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#C88A24]" />
              <span className="text-[#C88A24] font-bold text-xs uppercase tracking-widest">
                OUR STORY
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#0C1E37] tracking-tight leading-tight mb-6">
              Part of a CMI tradition{" "}
              <span className="italic text-[#C88A24] font-normal">
                since 1831
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              Managed by St. Joseph's Carmel Educational & Charitable Trust of the
              CMI congregation — values-led education with a commitment to
              society.
            </p>

            <a
              href="#about-story"
              className="border-2 border-[#0B2347] text-[#0B2347] hover:bg-[#0B2347] hover:text-white font-bold px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Read our story</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
