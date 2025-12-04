"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const TiltDashboard = () => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-5xl mx-auto mt-16 perspective-1000"
        >
            <div className="relative rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden">
                {/* Fake Browser Chrome */}
                <div className="h-10 border-b border-zinc-100 flex items-center px-4 justify-between bg-zinc-50/50">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                    </div>
                    <div className="h-5 w-48 bg-zinc-100 rounded-md flex items-center justify-center">
                        <span className="text-[10px] text-zinc-400">canvas.app/dashboard</span>
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex h-[500px] bg-white">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-zinc-100 p-4 hidden md:flex flex-col gap-4 bg-zinc-50/30">
                        <div className="h-8 w-32 bg-zinc-100 rounded animate-pulse mb-4"></div>
                        <div className="space-y-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-zinc-100/80 cursor-pointer">
                                    <div className="w-4 h-4 bg-zinc-200 rounded-sm"></div>
                                    <div className="h-3 w-24 bg-zinc-100 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Area */}
                    <div className="flex-1 p-8">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <div className="h-4 w-24 bg-zinc-100 rounded mb-3"></div>
                                <div className="h-8 w-64 bg-zinc-900 rounded-md"></div>
                            </div>
                            <div className="flex gap-2">
                                <div className="h-9 w-24 bg-zinc-100 rounded-md"></div>
                                <div className="h-9 w-9 bg-zinc-900 rounded-md"></div>
                            </div>
                        </div>

                        {/* Charts Grid */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-32 rounded-lg border border-zinc-100 bg-zinc-50/50 p-4">
                                    <div className="h-4 w-12 bg-zinc-200 rounded mb-2"></div>
                                    <div className="h-6 w-20 bg-zinc-300 rounded"></div>
                                </div>
                            ))}
                        </div>

                        {/* List */}
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                                        <div className="h-3 w-32 bg-zinc-100 rounded"></div>
                                    </div>
                                    <div className="h-3 w-12 bg-zinc-50 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Glow Effect */}
            <div
                className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 blur-3xl -z-10 rounded-[3rem]"
            />
        </motion.div>
    );
};
