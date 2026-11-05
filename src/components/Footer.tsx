"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const columns = [
    {
      title: "Admissions",
      links: [
        { label: "How to apply", href: "#how-to-apply" },
        { label: "Government Merit", href: "#gov-merit" },
        { label: "Management Merit", href: "#mgmt-merit" },
        { label: "NRI quota", href: "#nri-quota" },
        { label: "Fees & scholarships", href: "#fees" },
        { label: "Visit campus", href: "#visit" },
      ],
    },
    {
      title: "Academics",
      links: [
        { label: "Civil Engineering", href: "#civil" },
        { label: "Electrical & Electronics", href: "#eee" },
        { label: "Mechanical Engineering", href: "#mech" },
        { label: "Computer Science", href: "#cse" },
        { label: "Basic Sciences", href: "#basic-sciences" },
        { label: "Central Library", href: "#library" },
      ],
    },
    {
      title: "Students",
      links: [
        { label: "AMS Login", href: "#ams" },
        { label: "Academic calendars", href: "#calendars" },
        { label: "Students handbook", href: "#handbook" },
        { label: "Grievance & ICC", href: "#grievance" },
        { label: "Anti-ragging", href: "#anti-ragging" },
        { label: "Bus routes", href: "#bus-routes" },
      ],
    },
    {
      title: "Disclosures",
      links: [
        { label: "Mandatory disclosure", href: "#mandatory" },
        { label: "AICTE approval", href: "#aicte" },
        { label: "KTU affiliation", href: "#ktu" },
        { label: "IQAC & NBA", href: "#nba" },
        { label: "Financial statements", href: "#financials" },
        { label: "Policies", href: "#policies" },
      ],
    },
  ];

  return (
    <footer className="bg-[#08162A] text-white relative">
      {/* Top Wave divider from golden banner into deep navy */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-16 block text-[#F3B838]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,70 960,70 1440,0 L1440,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="w-full px-[6.5vw] pt-12 pb-16">
        {/* Main 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800">
          {/* Column 1: College Identity & Details */}
          <div className="lg:col-span-4 flex flex-col items-start pr-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E5A93C] text-[#08162A] font-bold text-xl flex items-center justify-center shadow-md">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-[15px] leading-snug">
                  Carmel College of Engineering & Technology
                </span>
                <span className="text-slate-400 text-xs">
                  A CMI Educational Institution · Alappuzha
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-1">
              Punnapra P O, Alappuzha, Kerala 688004
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-5">
              0477 2287248 · office@carmelcet.in
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-300">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Columns 2-5: Nav Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="font-bold text-sm text-white mb-4">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Carmel College of Engineering & Technology</p>
          <p className="text-slate-400">
            KTU · DTE Kerala · CEE Kerala · AICTE
          </p>
        </div>
      </div>
    </footer>
  );
}
