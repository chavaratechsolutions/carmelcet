import React from "react";

export default function StatsStrip() {
  const stats = [
    {
      value: "300",
      label: "Seats every year",
      isGold: false,
    },
    {
      value: "4",
      label: "NBA-accredited programmes",
      isGold: false,
    },
    {
      value: "XX%",
      label: "Placed — 2026 batch",
      isGold: true,
    },
    {
      value: "XX+",
      label: "Recruiters on campus",
      isGold: false,
    },
    {
      value: "1831",
      label: "CMI education legacy",
      isGold: false,
    },
  ];

  return (
    <div className="relative z-30 w-full px-[6.5vw] -mt-[var(--stats-half-height,72px)] animate-stats-card">
      <div
        id="stats-strip-card"
        className="bg-white rounded-2xl shadow-[0_20px_45px_rgba(11,35,71,0.09)] border border-slate-100/80 py-8 px-4 sm:px-8 transition-transform duration-300 hover:shadow-[0_25px_50px_rgba(11,35,71,0.12)]"
      >
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-100 gap-y-6 md:gap-y-0">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center md:items-start text-center md:text-left px-4 lg:px-7 transition-all duration-300 hover:-translate-y-0.5 ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <span
                className={`font-editorial text-4xl sm:text-5xl font-normal tracking-tight mb-2 ${
                  stat.isGold ? "text-[#C88A24]" : "text-[#0B2347]"
                }`}
              >
                {stat.value}
              </span>
              <span className="text-slate-600 text-xs sm:text-sm font-medium leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
