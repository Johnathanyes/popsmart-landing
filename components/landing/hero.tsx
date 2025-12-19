"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Hero() {
    const [isScribbleActive, setIsScribbleActive] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsScribbleActive(true);
        }, 500); // Trigger after 1s
        return () => clearTimeout(timer);
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

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8"
                    >
                        High-converting popups, <br className="hidden md:block" />
                        <span className={`scribble-container ${isScribbleActive ? 'active' : ''}`}>
                            <span className={`scribble-text ${isScribbleActive ? 'active' : ''}`}>zero&#160;</span>
                            <svg className="scribble-svg" viewBox="0 0 100 35" preserveAspectRatio="none">
                                <path className="scribble-path" d="M 0 17 C 17 -20, 15 70, 35 15 C 48 -1, 44 45, 60 17 C 70 6, 82 26, 92 16" />
                            </svg>
                        </span>
                        performance cost
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        The lightweight visual builder for growth teams. Create multi-step campaigns that load instantly and never slow down your site.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                            Start for free
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base gap-2 w-full sm:w-auto">
                            <Play size={16} />
                            View Demo
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
