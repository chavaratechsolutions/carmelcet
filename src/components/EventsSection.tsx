"use client";

import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ChevronRight,
  CalendarDays,
} from "lucide-react";

// Halftone Isometric Cube Background Component matching reference design
function IsometricBackground() {
  const sqrt3_2 = 0.866025;
  const unitSize = 26;
  const numRows = 15;
  const numCols = 32;
  const dx = unitSize * 1.73205;
  const dy = unitSize * 1.5;
  const midRow = (numRows - 1) / 2;

  // Precompute isometric cube face geometries for each of the 15 halftone rows
  const rowDefs = Array.from({ length: numRows }).map((_, r) => {
    const dist = Math.abs(r - midRow) / midRow;
    // Scale peaks in the middle row and tapers into smaller diamonds at top & bottom
    const scale = Math.max(0.12, 1.0 - Math.pow(dist, 1.3) * 0.88);
    const s = unitSize * scale;
    const gap = 0.88;

    const shrink = (
      pts: { x: number; y: number }[],
      center: { x: number; y: number }
    ) =>
      pts.map((p) => ({
        x: (center.x + (p.x - center.x) * gap).toFixed(1),
        y: (center.y + (p.y - center.y) * gap).toFixed(1),
      }));

    const toD = (pts: { x: string; y: string }[]) =>
      `M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y} L ${pts[2].x} ${pts[2].y} L ${pts[3].x} ${pts[3].y} Z`;

    const topPts = shrink(
      [
        { x: 0, y: 0 },
        { x: s * sqrt3_2, y: -s * 0.5 },
        { x: 0, y: -s },
        { x: -s * sqrt3_2, y: -s * 0.5 },
      ],
      { x: 0, y: -s * 0.5 }
    );

    const leftPts = shrink(
      [
        { x: 0, y: 0 },
        { x: -s * sqrt3_2, y: -s * 0.5 },
        { x: -s * sqrt3_2, y: s * 0.5 },
        { x: 0, y: s },
      ],
      { x: -s * sqrt3_2 * 0.5, y: s * 0.25 }
    );

    const rightPts = shrink(
      [
        { x: 0, y: 0 },
        { x: 0, y: s },
        { x: s * sqrt3_2, y: s * 0.5 },
        { x: s * sqrt3_2, y: -s * 0.5 },
      ],
      { x: s * sqrt3_2 * 0.5, y: s * 0.25 }
    );

    return {
      id: `iso-cube-${r}`,
      top: toD(topPts),
      left: toD(leftPts),
      right: toD(rightPts),
    };
  });

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-60"
      style={{
        maskImage:
          "radial-gradient(ellipse 95% 85% at 50% 50%, black 40%, transparent 95%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 95% 85% at 50% 50%, black 40%, transparent 95%)",
      }}
    >
      <svg
        viewBox="0 0 1440 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {rowDefs.map((def) => (
            <g key={def.id} id={def.id}>
              {/* 3 isometric cube faces with very subtle depth lighting */}
              <path d={def.top} fill="#FFFFFF" fillOpacity="0.045" />
              <path d={def.left} fill="#FFFFFF" fillOpacity="0.03" />
              <path d={def.right} fill="#FFFFFF" fillOpacity="0.02" />
            </g>
          ))}
        </defs>

        {/* 15 Halftone Isometric Rows */}
        {Array.from({ length: numRows }).map((_, r) => {
          const cy = r * dy;
          const xOffset = r % 2 === 0 ? 0 : dx / 2;
          return (
            <g key={r}>
              {Array.from({ length: numCols }).map((_, c) => {
                const cx = c * dx - dx + xOffset;
                return (
                  <use
                    key={`${r}-${c}`}
                    href={`#iso-cube-${r}`}
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
  );
}

export default function EventsSection() {
  const upcomingEvents = [
    {
      day: "30",
      month: "OCT",
      title: "Building Management Systems — expert talk",
      meta: "Mechanical Engineering · Talk · Seminar Hall · 10:00 AM",
      href: "#",
    },
    {
      day: "06",
      month: "NOV",
      title: "Campus open day for KEAM 2027 aspirants",
      meta: "Admissions · Open day · Main block · 9:30 AM",
      href: "#",
    },
    {
      day: "21",
      month: "NOV",
      title: "Hackathon: AI for Kuttanad farmers",
      meta: "Computer Science · Competition · Computer Centre",
      href: "#",
    },
    {
      day: "05",
      month: "DEC",
      title: "Alumni meet 2026 — come home",
      meta: "Alumni · Reunion · Campus grounds · 4:00 PM",
      href: "#",
    },
  ];

  return (
    <section className="relative py-12 sm:py-14 bg-[#0B192C] text-white overflow-hidden">
      {/* Halftone Isometric Cube Background */}
      <IsometricBackground />

      <div className="w-full px-[6.5vw] relative z-10 reveal-on-scroll">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#E5A93C]" />
              <span className="text-[#E5A93C] font-bold text-xs uppercase tracking-widest">
                WHAT'S ON
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight mb-2 sm:mb-3">
              Don't miss{" "}
              <span className="italic text-[#E5A93C] font-normal">
                what's next.
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Talks, workshops, fests and open days at CCET. Most are open to
              visitors — families and school students welcome.
            </p>
          </div>

          <a
            href="#events"
            className="inline-flex items-center gap-2 text-[#E5A93C] hover:text-amber-300 font-semibold text-sm transition-colors group self-start md:self-end"
          >
            <span>All events & calendar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch reveal-stagger">
          {/* Left Column: Featured Event Card (Photo on left, details on right - fills full height) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 grid grid-cols-1 sm:grid-cols-12 text-slate-800 h-full">
            {/* Featured Image on Left */}
            <div className="sm:col-span-5 relative min-h-[220px] h-52 sm:h-full overflow-hidden bg-slate-900">
              <img
                src="/images/upcoming/A3%20Brochure%20with%20Front%20page-1.jpg"
                alt="Upcoming Event Brochure"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>

            {/* Event Content on Right */}
            <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between h-full">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
                  <span className="bg-amber-50 text-amber-900 border border-amber-200/60 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Fest
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Open to all colleges
                  </span>
                  <span className="bg-emerald-50 text-emerald-900 border border-emerald-200/60 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Free entry
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0C1E37] leading-snug mb-2.5">
                  Tech Fest 2026 — two days of robots, code and hackathons
                </h3>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 font-medium mb-3.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C88A24] flex-shrink-0" />
                    <span>Fri 14 – Sat 15 Nov</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C88A24] flex-shrink-0" />
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C88A24] flex-shrink-0" />
                    <span>Main campus, Punnapra</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  Robotics arena, a 24-hour hackathon, final-year project expo and a
                  startup pitch stage. School students and families can walk in —
                  no registration needed to visit.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#compete"
                  className="bg-[#E5A93C] hover:bg-[#d69829] text-[#111A24] font-bold px-5 py-2.5 rounded-md text-xs sm:text-sm transition-all shadow-md hover:shadow-lg"
                >
                  Register to compete
                </a>
                <a
                  href="#details"
                  className="inline-flex items-center gap-1.5 text-[#0B2347] font-bold text-xs sm:text-sm hover:underline group"
                >
                  <span>Event details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Upcoming Events List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 h-full">
            <div className="flex items-center justify-between text-xs px-1 mb-0.5">
              <span className="font-bold tracking-wider text-slate-400 uppercase">
                NEXT 4 WEEKS
              </span>
              <span className="text-slate-400 font-normal">Times in IST</span>
            </div>

            {upcomingEvents.map((evt, idx) => (
              <a
                key={idx}
                href={evt.href}
                className="bg-white rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group border border-slate-100"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex flex-col items-center justify-center min-w-[46px] pr-3 border-r border-slate-100">
                    <span className="font-editorial text-xl sm:text-2xl font-bold text-[#0B2347] leading-none">
                      {evt.day}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      {evt.month}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-[#0C1E37] group-hover:text-[#0B2347] leading-snug truncate">
                      {evt.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 truncate mt-0.5 font-normal">
                      {evt.meta}
                    </p>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B2347] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </a>
            ))}

            {/* Calendar Sync Translucent Box */}
            <div className="bg-white rounded-xl p-3.5 sm:p-4 text-center shadow-sm border border-slate-100 mt-1">
              <p className="text-xs text-slate-600 font-medium mb-2.5">
                Add the CCET calendar once — new events and changes sync automatically.
              </p>
              <div className="flex items-center justify-center gap-7">
                <button
                  type="button"
                  title="Google Calendar"
                  className="flex flex-col items-center gap-1 text-[#E5A93C] hover:text-[#d69829] transition-colors"
                >
                  <CalendarDays className="w-4.5 h-4.5 stroke-[2]" />
                  <span className="text-[10px] text-slate-500 font-medium">Google</span>
                </button>
                <button
                  type="button"
                  title="Outlook Calendar"
                  className="flex flex-col items-center gap-1 text-[#E5A93C] hover:text-[#d69829] transition-colors"
                >
                  <Calendar className="w-4.5 h-4.5 stroke-[2]" />
                  <span className="text-[10px] text-slate-500 font-medium">Outlook</span>
                </button>
                <button
                  type="button"
                  title="Apple Calendar"
                  className="flex flex-col items-center gap-1 text-[#E5A93C] hover:text-[#d69829] transition-colors"
                >
                  <CalendarDays className="w-4.5 h-4.5 stroke-[2]" />
                  <span className="text-[10px] text-slate-500 font-medium">Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
