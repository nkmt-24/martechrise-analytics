'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, ArrowRight, Check, Send } from 'lucide-react';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('Welcome aboard! Check your inbox.');
                setEmail('');
                setTimeout(() => {
                    setStatus('idle');
                    setMessage('');
                }, 5000);
            } else {
                setStatus('error');
                setMessage(data.message || 'Something went wrong. Please try again.');
                setTimeout(() => {
                    setStatus('idle');
                    setMessage('');
                }, 5000);
            }
        } catch (error) {
            setStatus('error');
            setMessage('Network error. Please try again.');
            setTimeout(() => {
                setStatus('idle');
                setMessage('');
            }, 5000);
        }
    };


    return (
        <footer className="bg-slate-900 text-white">

            {/* Newsletter Section
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 md:px-6 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
                                    <Send size={16} className="text-indigo-400" />
                                    <span className="text-sm font-medium text-indigo-300">Join 500+ Analytics Professionals</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                    Get Weekly Analytics Insights
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Expert tips on GA4, server-side tracking, and data-driven marketing.
                                    Straight to your inbox, no spam.
                                </p>
                                <div className="flex flex-wrap gap-6 mt-8">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-slate-400">No spam, ever</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-slate-400">Unsubscribe anytime</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-slate-400">Weekly insights</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <Mail className="text-slate-400" size={20} />
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your work email"
                                            required
                                            disabled={status === 'loading' || status === 'success'}
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-indigo-600/50 disabled:to-purple-600/50 disabled:cursor-not-allowed rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Subscribing...</span>
                                            </>
                                        ) : status === 'success' ? (
                                            <>
                                                <Check size={20} />
                                                <span>Successfully Subscribed!</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Subscribe Now</span>
                                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    {message && (
                                        <div className={`p-4 rounded-lg ${status === 'success' ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                                            <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                                {message}
                                            </p>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  */}

            {/* Main Footer Content */}
            <div className="relative container mx-auto px-4 md:px-6 py-16">
                <div className="grid lg:grid-cols-12 gap-12 mb-16">
                    {/* Company Info - Spans 4 columns */}
                    <div className="lg:col-span-4">
                        {/* Logo with white background */}
                        <div className="inline-block mb-6 shadow-xl">
                            <Image
                                src="/assets/logo.png"
                                alt="MarTechRise Logo"
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </div>

                        <h4 className="text-xl font-bold mb-4 text-white">
                            Enterprise Analytics Experts
                        </h4>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            We build precision tracking systems that transform your data into actionable growth insights.
                            Trusted by enterprise brands worldwide.
                        </p>
                        {/* Contact Information */}
                        <div className="space-y-3">
                            <a
                                href="tel:+916382915027"
                                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                            >
                                <Phone size={18} className="text-primary flex-shrink-0" />
                                <span className="font-medium">+91 63829 15027</span>
                            </a>

                            <div className="flex items-start gap-3 text-slate-300">
                                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="font-medium">
                                    Chennai, Tamil Nadu, India
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Links - Spans 8 columns, divided into 3 sections */}
                    <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
                        {/* Services */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>
                                Services
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>All Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services#analytics" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Analytics Implementation</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services#server-side" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Server-Side Tracking</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services#conversion" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Conversion Tracking</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/audit" className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group font-medium">
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        <span>Free Audit</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                                Company
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Case Studies</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/industries" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Industries</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Blog & Insights</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal & Trust */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
                                Legal
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/privacy" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Privacy Policy</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Terms of Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookie-policy" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                                        <span>Cookie Policy</span>
                                    </Link>
                                </li>
                            </ul>

                            {/* Trust Badges 
                            <div className="mt-8 space-y-3">
                                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-green-400 font-medium">99.9% Data Accuracy</span>
                                </div>
                                <div className="flex items-center gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-blue-400 font-medium">GDPR/CCPA Compliant</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
                            <div>© {new Date().getFullYear()} MarTechRise. All rights reserved.</div>
                            <div className="hidden sm:block w-px h-4 bg-white/10"></div>
                            <div className="flex items-center gap-2">
                                <span>Powered by</span>
                                <Link
                                    href="https://nkmoderntechnology.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition-all"
                                >
                                    NK Modern Technology
                                </Link>
                            </div>
                        </div>
                        <div className="text-sm text-slate-500">
                            Making data work for enterprise growth
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
