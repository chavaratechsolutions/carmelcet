"use client";

import React, { useState } from "react";
import { Phone, Search, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: "Admissions",
      href: "#admissions",
      children: [
        "Government Merit (KEAM)",
        "Management Merit",
        "NRI Quota",
        "Fee Structure & Scholarships",
        "Eligibility & Checklist",
      ],
    },
    {
      name: "Academics",
      href: "#academics",
      children: [
        "Computer Science & Engineering",
        "Electrical & Electronics Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Basic Sciences & Humanities",
      ],
    },
    {
      name: "Research & Industry",
      href: "#research",
      children: [
        "Innovation & Incubation Cell",
        "MoUs & Industry Tie-ups",
        "Funded Projects",
        "Publications & Patents",
      ],
    },
    {
      name: "Campus Life",
      href: "#campus-life",
      children: [
        "Student Clubs & Societies",
        "Hostel & Dining",
        "Sports & Gymnasium",
        "Annual Fests & Cultural Events",
      ],
    },
    {
      name: "About",
      href: "#story",
      children: [
        "CMI Education Legacy Since 1831",
        "Leadership & Governance",
        "Vision & Mission",
        "Accreditations & Approvals",
      ],
    },
  ];

  return (
    <header className="w-full relative z-50 animate-navbar-smooth">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#071526] text-slate-300 text-[11px] sm:text-xs py-2 px-[2vw] border-b border-slate-800">
        <div className="w-full flex flex-wrap items-center justify-between gap-y-2">
          {/* Left contact info */}
          <div className="flex items-center gap-2 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
            <a href="tel:04772287248" className="hover:text-white transition-colors">
              0477 2287248
            </a>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">KEAM college code CMA</span>
          </div>

          {/* Right quick links + Language toggle */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <nav className="hidden lg:flex items-center gap-5 text-slate-300">
              <a href="#students" className="hover:text-white transition-colors">
                Current Students
              </a>
              <a href="#parents" className="hover:text-white transition-colors">
                Parents
              </a>
              <a href="#alumni" className="hover:text-white transition-colors">
                Alumni
              </a>
              <a href="#recruiters" className="hover:text-white transition-colors">
                Recruiters
              </a>
              <a href="#disclosures" className="hover:text-white transition-colors">
                Disclosures
              </a>
              <a href="#ams-login" className="hover:text-white transition-colors font-medium text-slate-200">
                AMS Login
              </a>
            </nav>

            {/* Language toggle pills */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-700">
              <span className="bg-[#E5A93C] text-[#071526] font-bold text-[10px] px-2 py-0.5 rounded-full shadow-sm">
                EN
              </span>
              <span className="text-slate-400 text-[11px] hover:text-white cursor-pointer px-1">
                ML
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0">
        <div className="w-full px-[3vw] h-20 flex items-center justify-between">
          {/* Logo & College Identity */}
          <Link
            href="/"
            className="flex items-center group py-1 animate-nav-logo"
            aria-label="Carmel College of Engineering & Technology Home"
          >
            <img
              src="/images/logo/09-logo_carmel.bmp"
              alt="Carmel College of Engineering & Technology, Alappuzha"
              className="h-11 sm:h-12 md:h-13 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 lg:gap-6 animate-nav-links">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-slate-800 hover:text-[#0B2347] font-semibold text-sm py-2 whitespace-nowrap transition-colors"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0" />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && item.children && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {item.children.map((subItem) => (
                      <a
                        key={subItem}
                        href={item.href}
                        className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B2347] transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons & Search */}
          <div className="hidden sm:flex items-center gap-4 animate-nav-actions">
            <button
              aria-label="Search"
              className="p-2 text-slate-700 hover:text-[#0B2347] hover:bg-slate-100 rounded-full transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="#admissions"
              className="border border-slate-400 text-[#0B2347] hover:bg-slate-50 font-semibold px-4 py-2 rounded-md text-sm transition-all shadow-sm"
            >
              Enquire
            </a>
            <a
              href="#admissions"
              className="bg-[#122B4D] hover:bg-[#0c1e36] text-white font-semibold px-5 py-2 rounded-md text-sm transition-all shadow-md hover:shadow-lg"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2 animate-nav-actions">
            <button
              aria-label="Search"
              className="p-2 text-slate-700"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-2xl px-[3vw] py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-slate-100 pb-3">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bold text-[#0B2347] text-base block mb-2"
                >
                  {item.name}
                </a>
                <div className="pl-3 flex flex-col gap-1.5">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-600 hover:text-[#0B2347]"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center border border-slate-300 text-[#0B2347] font-semibold py-2.5 rounded-md text-sm"
              >
                Enquire
              </a>
              <a
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#122B4D] text-white font-semibold py-2.5 rounded-md text-sm"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
