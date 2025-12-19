import React from 'react';
import {
    Zap,
    Shield,
    LayoutDashboard, // This was used in the original Features section
    Users
} from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need.<br />Nothing that slows you down.</h2>
                    <p className="text-lg text-zinc-500">We stripped away the bloat. What's left is a pure, high-performance conversion engine.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Large Feature */}
                    <Card className="md:col-span-2 p-8 bg-zinc-50/50 border-zinc-100 relative overflow-hidden group hover:border-zinc-300 transition-colors">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                                <Zap className="w-6 h-6 text-zinc-900" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Lightning Fast Performance</h3>
                            <p className="text-zinc-500 max-w-md">5kb lightweight script. Deferred loading ensures your core web vitals and SEO are never impacted.</p>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Card>

                    {/* Tall Feature */}
                    <Card className="md:row-span-2 p-8 border-zinc-100 hover:border-zinc-300 transition-colors">
                        <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-zinc-900" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Granular Targeting</h3>
                        <p className="text-zinc-500 mb-8">Show the right message to the right user with advanced display rules.</p>
                        <div className="space-y-3">
                            {['Exit Intent', 'Scroll Depth', 'Inactivity Timer', 'Device Targeting'].map((item) => (
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
                            <LayoutDashboard className="w-5 h-5 text-zinc-900" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Visual Builder</h3>
                        <p className="text-sm text-zinc-500">Drag-and-drop WYSIWYG editor with mobile-first templates.</p>
                    </Card>

                    {/* Small Feature 2 */}
                    <Card className="p-8 border-zinc-100 hover:border-zinc-300 transition-colors">
                        <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                            <Users className="w-5 h-5 text-zinc-900" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Integrations</h3>
                        <p className="text-sm text-zinc-500">Connects seamlessly with Zapier to push leads anywhere.</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
