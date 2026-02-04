import React from 'react';

export function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 font-bold text-xl mb-4">
                            mado
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            The high-performance popup builder for modern SaaS growth teams.
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
                    <p>© 2024 mado Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-zinc-900">Twitter</a>
                        <a href="#" className="hover:text-zinc-900">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
