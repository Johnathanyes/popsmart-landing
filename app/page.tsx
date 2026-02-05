"use client";

import React from 'react';
import { Navigation } from '@/components/landing/navigation';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { Pricing } from '@/components/landing/pricing';
import { Footer } from '@/components/landing/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-950">
      <Navigation />

      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
