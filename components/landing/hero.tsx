"use client";

import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import { useState } from 'react';

export function Hero() {
    const [isScribbleActive, setIsScribbleActive] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsScribbleActive(true);
        }, 300); // Trigger after 1s
        return () => clearTimeout(timer);
    }, []);


    return (
        <section className="relative pt-32 pb-24 overflow-hidden">
            {/* Aurora Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-white to-white -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <div>

                    <h1
                        className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8"
                    >
                        High-conversion popups, <br className="hidden md:block" />
                        <span className={`scribble-container ${isScribbleActive ? 'active' : ''}`}>
                            <span className={`scribble-text ${isScribbleActive ? 'active' : ''}`}>zero&#160;</span>
                            <svg className="scribble-svg" viewBox="0 0 100 35" preserveAspectRatio="none">
                                <path className="scribble-path" d="M 0 17 
                                                                C 17 -20, 15 70, 35 15 
                                                                C 42 -1, 44 45, 60 17 
                                                                C 70 6, 82 26, 92 16" />
                            </svg>
                        </span>
                        performance cost
                    </h1>

                    <p
                        className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        The lightweight campaign builder for growth teams. Create campaigns that load instantly and never slow down your site.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                            Start for free
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base gap-2 w-full sm:w-auto">
                            <Play size={16} />
                            View Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
