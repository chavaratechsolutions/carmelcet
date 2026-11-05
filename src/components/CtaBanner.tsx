"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-[#E5A93C] via-[#EDB348] to-[#F3B838] relative pt-12 pb-16 text-[#0B2347]">
      <div className="w-full px-[6.5vw] reveal-on-scroll">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Headline & Admissions desk info */}
          <div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#0B2347] tracking-tight leading-tight mb-2">
              Questions about seats, fees or{" "}
              <span className="italic font-normal">hostel?</span>
            </h2>
            <p className="text-[#0B2347]/90 font-medium text-xs sm:text-sm">
              Admissions desk · +91 90724 90001 · Mon–Sat, 9am–5pm
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#callback"
              className="bg-[#0B2347] hover:bg-[#07162E] text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Request a call back
            </a>

            <a
              href="https://wa.me/919072490001"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#0B2347] text-[#0B2347] hover:bg-[#0B2347]/10 font-bold px-6 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>WhatsApp us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
