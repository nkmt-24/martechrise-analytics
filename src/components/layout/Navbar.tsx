"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'About', path: '/about' },
        { name: 'Insights', path: '/blog' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled
                ? 'py-4 glass border-b border-slate-100 shadow-sm'
                : 'py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/logo.png"
                        alt="MarTechRise Logo"
                        width={200}
                        height={70}
                        priority
                        className="h-14 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group text-left">
                            <Link
                                href={link.path}
                                className={`text-sm font-semibold tracking-tight transition-all hover:text-indigo-600 ${pathname === link.path
                                    ? 'text-indigo-600'
                                    : 'text-slate-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button
                        variant="primary"
                        href="/audit"
                        className="h-11 px-6 text-sm"
                    >
                        Get a Free Audit
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-slate-900 p-2"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden bg-white border-b border-slate-100 shadow-xl overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-2">
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}

                            <Button
                                variant="primary"
                                href="/audit"
                                className="w-full h-14"
                            >
                                Get a Free Audit
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
