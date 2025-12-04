"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  ChevronRight,
  LayoutDashboard,
  Zap,
  Shield,
  Users,
  Menu,
  X,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { TiltDashboard } from '@/components/tilt-dashboard';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-950 selection:bg-zinc-100">

      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="w-6 h-6 bg-zinc-950 rounded-md flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
              </div>
              Canvas
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
              <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-zinc-900 transition-colors">Customers</a>
              <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button size="sm">Get Started</Button>
          </div>

          <button className="md:hidden text-zinc-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#" className="text-zinc-900" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#" className="text-zinc-900" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#" className="text-zinc-900" onClick={() => setMobileMenuOpen(false)}>Login</a>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* Aurora Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-white to-white -z-10"></div>

          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="flex justify-center mb-8">
                <Badge className="bg-zinc-50 text-zinc-600 hover:bg-zinc-100 px-4 py-1.5 gap-2 font-normal border-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Canvas v2.0 is now available
                  <ChevronRight size={14} className="text-zinc-400" />
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8"
              >
                Beautifully simple <br className="hidden md:block" />
                project management.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Remove the clutter. Canvas provides a stark, powerful interface for teams who value clarity over complexity.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                  Start for free
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base gap-2 w-full sm:w-auto">
                  <Play size={16} />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* 3D Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <TiltDashboard />
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-y border-zinc-100 bg-zinc-50/30">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-zinc-500 mb-8">TRUSTED BY INNOVATIVE TEAMS</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-40">
              {['Acme Corp', 'GlobalBank', 'Capsule', 'Vortex', 'Finite'].map((logo) => (
                <span key={logo} className="text-xl font-bold text-zinc-900">{logo}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need.<br />Nothing you don't.</h2>
              <p className="text-lg text-zinc-500">We stripped away the bloat. What's left is a pure, high-speed workflow engine designed for flow state.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Feature */}
              <Card className="md:col-span-2 p-8 bg-zinc-50/50 border-zinc-100 relative overflow-hidden group hover:border-zinc-300 transition-colors">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                    <Zap className="w-6 h-6 text-zinc-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-zinc-500 max-w-md">Built on a modern edge network. Interactions are instant (under 50ms). No loading spinners, just flow.</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>

              {/* Tall Feature */}
              <Card className="md:row-span-2 p-8 border-zinc-100 hover:border-zinc-300 transition-colors">
                <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-zinc-500 mb-8">SSO, Audit logs, and SOC2 Type II compliance included out of the box.</p>
                <div className="space-y-3">
                  {['SAML Auth', 'Audit Logs', 'Role Based Access'].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 rounded border border-zinc-100 bg-zinc-50 text-sm font-medium">
                      {item}
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Small Feature 1 */}
              <Card className="p-8 border-zinc-100 hover:border-zinc-300 transition-colors">
                <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-zinc-900" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time</h3>
                <p className="text-sm text-zinc-500">See who is viewing a doc and edit together without conflict.</p>
              </Card>

              {/* Small Feature 2 */}
              <Card className="p-8 border-zinc-100 hover:border-zinc-300 transition-colors">
                <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                  <LayoutDashboard className="w-5 h-5 text-zinc-900" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Integrations</h3>
                <p className="text-sm text-zinc-500">Connects seamlessly with Linear, GitHub, and Slack.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section id="testimonials" className="py-24 bg-zinc-900 text-zinc-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8">
              {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-500 text-xl">★</span>)}
            </div>
            <blockquote className="text-3xl md:text-4xl font-medium leading-tight mb-10">
              "Canvas has completely replaced our fragmented toolset. It's the first time our team actually enjoys updating their status. The simplicity is a feature."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-zinc-700 rounded-full border-2 border-zinc-600"></div>
              <div className="text-left">
                <div className="font-bold">Sarah Jenkins</div>
                <div className="text-zinc-400 text-sm">CTO at Horizon AI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Fair pricing for everyone.</h2>
              <p className="text-zinc-500">Start for free, scale when you're ready.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <Card className="p-8 flex flex-col border-zinc-200 hover:border-zinc-300 transition-colors">
                <h3 className="text-lg font-semibold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-6">$0 <span className="text-sm font-normal text-zinc-500">/mo</span></div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Up to 5 members', 'Basic Workflows', '1 GB Storage'].map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-zinc-600">
                      <Check size={16} className="text-zinc-900" /> {feat}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">Get Started</Button>
              </Card>

              {/* Pro */}
              <Card className="p-8 flex flex-col bg-zinc-900 text-white border-zinc-900 ring-4 ring-zinc-100 relative md:-translate-y-4">
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                <h3 className="text-lg font-semibold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-6">$12 <span className="text-sm font-normal text-zinc-400">/user/mo</span></div>
                <div className="space-y-4 mb-8 flex-1">
                  {['Unlimited members', 'Advanced Analytics', 'Priority Support', 'Private Channels'].map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Check size={16} className="text-white" /> {feat}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-white text-zinc-900 hover:bg-zinc-100">Start Free Trial</Button>
              </Card>

              {/* Enterprise */}
              <Card className="p-8 flex flex-col border-zinc-200 hover:border-zinc-300 transition-colors">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-6">Custom</div>
                <div className="space-y-4 mb-8 flex-1">
                  {['SSO & SAML', 'Dedicated Success Manager', 'SLA Guarantees', 'Custom Contracts'].map(feat => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-zinc-600">
                      <Check size={16} className="text-zinc-900" /> {feat}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="w-5 h-5 bg-zinc-900 rounded-md"></div>
                Canvas
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Designing the future of work with tools that get out of your way.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-zinc-900">Product</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-zinc-900">Changelog</a></li>
                <li><a href="#" className="hover:text-zinc-900">Documentation</a></li>
                <li><a href="#" className="hover:text-zinc-900">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-zinc-900">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-zinc-900">About</a></li>
                <li><a href="#" className="hover:text-zinc-900">Blog</a></li>
                <li><a href="#" className="hover:text-zinc-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-zinc-900">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-zinc-900">Privacy</a></li>
                <li><a href="#" className="hover:text-zinc-900">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-200 flex justify-between items-center text-sm text-zinc-500">
            <p>© 2024 Canvas Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-zinc-900">Twitter</a>
              <a href="#" className="hover:text-zinc-900">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}