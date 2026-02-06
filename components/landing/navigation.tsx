"use client";

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { DialogTitle } from '@radix-ui/react-dialog';

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-baseline gap-8">
                    <a href="#" className="font-bold text-3xl tracking-tight leading-none">
                        mado
                    </a>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
                        <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
                        <a href="#testimonials" className="hover:text-zinc-900 transition-colors">Customers</a>
                        <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
                    </nav>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm">
                        <a href="app.usemado.tech">
                            Log in
                        </a>
                    </Button>
                    <Button size="sm">
                        <a href="app.usemado.tech">
                            Get Started
                        </a>
                    </Button>
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <button className="md:hidden text-zinc-900">
                            <Menu size={24} />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="pt-24">
                        <div className="flex flex-col gap-6 text-lg font-medium">
                            <DialogTitle>Navigation</DialogTitle>
                            <a href="#" className="text-zinc-900">Features</a>
                            <a href="#" className="text-zinc-900">Pricing</a>
                            <a href="#" className="text-zinc-900">Login</a>
                            <Button className="w-full">Get Started</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
