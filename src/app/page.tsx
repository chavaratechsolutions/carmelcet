import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import PersonaSection from "@/components/PersonaSection";
import EventsSection from "@/components/EventsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import AcademicsSection from "@/components/AcademicsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import PlacementsSection from "@/components/PlacementsSection";
import StorySection from "@/components/StorySection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Scroll-Triggered Reveal Observer */}
      <ScrollObserver />

      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Floating Stats Strip */}
      <StatsStrip />

      {/* 4. Persona Section: "What brings you here today?" */}
      <PersonaSection />

      {/* 5. Events Section: "Don't miss what's next." */}
      <EventsSection />

      {/* 6. Campus Life Section: "Campus Events" */}
      <CampusLifeSection />

      {/* 7. Academics Section: "Four ways to engineer your future" */}
      <AcademicsSection />

      {/* 8. Admissions Section: "Three ways in. Pick yours." with timeline */}
      <AdmissionsSection />

      {/* 9. Placements Section: "Where CCET graduates go next" */}
      <PlacementsSection />

      {/* 10. Our Story: "Part of a CMI tradition since 1831" */}
      <StorySection />

      {/* 11. CTA Banner: "Questions about seats, fees or hostel?" */}
      <CtaBanner />

      {/* 12. Footer */}
      <Footer />
    </main>
  );
}
