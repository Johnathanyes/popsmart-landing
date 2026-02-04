"use client";

import React, { useState } from 'react';
import { Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '../ui/badge';

const PRICING_TIERS = [
    {
        name: 'Free',
        price: '$0',
        views: '5,000 monthly views',
        features: ['Core Features', 'Analytics', 'No Branding'],
        cta: 'Get Started',
        highlight: false
    },
    {
        name: 'Pro',
        price: '$29',
        views: '50,000 monthly views',
        features: ['Advanced Targeting', 'Priority Support', 'Zapier Integration'],
        cta: 'Start Free Trial',
        highlight: false
    },
    {
        name: 'Pro+',
        price: '$49',
        views: '100,000 monthly views',
        features: ['Everything in Pro', 'Advanced Analytics'],
        cta: 'Start Free Trial',
        highlight: true
    },
    {
        name: 'Pro++',
        price: '$99',
        views: '500,000 monthly views',
        features: ['Everything in Pro+', 'Priority Support', 'Team Members'],
        cta: 'Start Free Trial',
        highlight: false
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        views: 'Unlimited monthly views',
        features: ['Dedicated Success Manager', 'SLA Guarantees', 'Custom Contracts'],
        cta: 'Contact Sales',
        highlight: false
    }
];

export function Pricing() {
    const [pricingTier, setPricingTier] = useState(1);

    return (
        <section id="pricing" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Fair pricing for everyone.</h2>
                    <p className="text-zinc-500">Start for free, scale when you're ready.</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Slider Control */}
                        <div className="px-4">
                            <div className="flex justify-between text-sm font-medium text-zinc-500 mb-8">
                                <span>Free</span>
                                <span>Enterprise</span>
                            </div>
                            <Slider
                                value={[pricingTier]}
                                max={4}
                                step={1}
                                onValueChange={(vals: number[]) => setPricingTier(vals[0])}
                                className="mb-8"
                            />
                            <div className="space-y-4">
                                {PRICING_TIERS.map((tier, index) => (
                                    <div
                                        key={tier.name}
                                        className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors ${pricingTier === index ? 'bg-zinc-100' : 'hover:bg-zinc-50'
                                            }`}
                                        onClick={() => setPricingTier(index)}
                                    >
                                        <span className={`font-medium ${pricingTier === index ? 'text-zinc-900' : 'text-zinc-500'}`}>
                                            {tier.name}
                                        </span>
                                        <span className={`text-sm ${pricingTier === index ? 'text-zinc-900' : 'text-zinc-400'}`}>
                                            {tier.views.split(' ')[0]} views
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dynamic Card */}
                        <div className="flex justify-center md:justify-start">
                            <Card className="w-full max-w-md p-8 flex flex-col bg-white border-zinc-200 shadow-lg transition-all duration-300 relative">
                                {PRICING_TIERS[pricingTier].highlight && (
                                    <Badge className="absolute top-0 right-0 mt-4 mr-4 bg-primary text-primary-foreground text-xs px-3 py-1">
                                        POPULAR
                                    </Badge>
                                )}

                                <h3 className="text-lg font-semibold mb-2 text-zinc-900">{PRICING_TIERS[pricingTier].name}</h3>
                                <div className="text-3xl font-bold mb-6 text-zinc-900">
                                    {PRICING_TIERS[pricingTier].price}
                                    {PRICING_TIERS[pricingTier].price !== 'Custom' && <span className="text-sm font-normal text-zinc-500">/mo</span>}
                                </div>

                                <div className="space-y-4 mb-8 flex-1">
                                    <div className="flex items-center gap-3 text-sm font-medium text-zinc-900">
                                        <Users size={16} /> {PRICING_TIERS[pricingTier].views}
                                    </div>
                                    {PRICING_TIERS[pricingTier].features.map(feat => (
                                        <div key={feat} className="flex items-center gap-3 text-sm text-zinc-600">
                                            <Check size={16} className="text-zinc-900" /> {feat}
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className="w-full cursor-pointer"
                                >
                                    {PRICING_TIERS[pricingTier].cta}
                                </Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
