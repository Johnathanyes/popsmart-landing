import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export const Badge = ({ children, className = '' }: BadgeProps) => (
    <div className={`inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 text-zinc-950 ${className}`}>
        {children}
    </div>
);
