"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface Department {
  id: string;
  name: string;
  badge: string;
  seats: string;
  href: string;
  image: string;
  objectPosition?: string;
}

export default function AcademicsSection() {
  const departments: Department[] = [
    {
      id: "cse",
      name: "Computer Science & Engineering",
      badge: "NBA accredited",
      seats: "120 seats · AI, cloud, vision",
      href: "#cse",
      image: "/images/courses/CSE.JPG",
      objectPosition: "object-center",
    },
    {
      id: "eee",
      name: "Electrical & Electronics Engineering",
      badge: "NBA accredited",
      seats: "60 seats · Power, EVs, renewables",
      href: "#eee",
      image: "/images/courses/EEE.JPG",
      objectPosition: "object-center",
    },
    {
      id: "mech",
      name: "Mechanical Engineering",
      badge: "NBA accredited",
      seats: "60 seats · Design, maritime",
      href: "#mech",
      image: "/images/courses/ME.JPG",
      objectPosition: "object-center",
    },
    {
      id: "civil",
      name: "Civil Engineering",
      badge: "NBA accredited",
      seats: "60 seats · Structures, transport",
      href: "#civil",
      image: "/images/courses/CE.JPG",
      objectPosition: "object-center",
    },
  ];

  return (
    <section id="academics" className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="w-full px-[6.5vw] reveal-on-scroll">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#C88A24]" />
              <span className="text-[#C88A24] font-bold text-xs uppercase tracking-widest">
                ACADEMICS
              </span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0C1E37] tracking-tight mb-1.5">
              Four ways to engineer{" "}
              <span className="italic text-[#C88A24] font-normal">
                your future
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Every programme is AICTE-approved, KTU-affiliated and NBA-accredited.
            </p>
          </div>

          <a
            href="#compare"
            className="inline-flex items-center gap-2 text-[#0B2347] font-semibold text-xs sm:text-sm hover:gap-3 transition-all group"
          >
            <span>Compare programmes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4 Interactive Course Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6 reveal-stagger">
          {departments.map((dept) => (
            <a
              key={dept.id}
              href={dept.href}
              className="relative h-[340px] sm:h-[355px] lg:h-[365px] w-full rounded-2xl sm:rounded-[24px] overflow-hidden border border-slate-200/60 shadow-md hover:shadow-2xl hover:shadow-[#0B2347]/25 group transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-end p-4 sm:p-5 lg:p-4.5 xl:p-6 block bg-slate-900"
            >
              {/* Authentic Department Photography */}
              <img
                src={dept.image}
                alt={dept.name}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover ${
                  dept.objectPosition || "object-center"
                } group-hover:scale-106 transition-transform duration-700 select-none pointer-events-none`}
              />

              {/* Dark Gradient Overlay: 70% Deep Navy at bottom, 25% at 75%, transparent at top */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(7, 21, 39, 0.70) 0%, rgba(7, 21, 39, 0.25) 75%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              {/* Card Foreground UI Content */}
              <div className="relative z-10 flex flex-col">
                {/* Pill Badge: NBA Accredited */}
                <div className="mb-2.5 sm:mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#FFF8EE]/95 text-[#8C531B] border border-[#F6E1C3]/80 shadow-sm backdrop-blur-xs">
                    {dept.badge}
                  </span>
                </div>

                {/* Course Title (Single Line) */}
                <h3
                  className="font-bold text-[13px] sm:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[17px] text-white whitespace-nowrap overflow-hidden text-ellipsis mb-1.5 sm:mb-2 tracking-tight group-hover:text-[#F3BA4C] transition-colors duration-300 drop-shadow-sm"
                  title={dept.name}
                >
                  {dept.name}
                </h3>

                {/* Seats and Focus Areas */}
                <p className="text-slate-200 text-xs sm:text-[13px] font-normal leading-relaxed mb-3 sm:mb-4 drop-shadow-xs">
                  {dept.seats}
                </p>

                {/* CTA Link: Explore programme */}
                <div className="inline-flex items-center gap-1.5 text-[#E5A93C] group-hover:text-[#F0A51A] font-semibold text-xs sm:text-sm transition-all duration-300">
                  <span>Explore programme</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
