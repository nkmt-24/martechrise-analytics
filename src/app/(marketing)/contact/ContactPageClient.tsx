"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';

const ContactPageClient: React.FC = () => {
    return (
        <div className="pt-40 pb-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 text-center"
                    >
                        <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                            Let&apos;s Build Your <br />
                            <span className="text-indigo-600 italic">Data Legacy.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium text-balance">
                            Connect with our lead architects to discuss instrumentation, governance, or attribution strategy.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10">Direct Channels</h3>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-indigo-600 transition-colors">
                                            <Mail className="text-indigo-600" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-black text-slate-900 uppercase tracking-widest mb-1">Email Strategy</p>
                                            <p className="text-lg font-bold text-slate-400">hello@martechrise.ai</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-indigo-600 transition-colors">
                                            <Phone className="text-indigo-600" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-black text-slate-900 uppercase tracking-widest mb-1">Direct Line</p>
                                            <p className="text-lg font-bold text-slate-400">+91-6382915027</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-indigo-600 transition-colors">
                                            <MapPin className="text-indigo-600" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-black text-slate-900 uppercase tracking-widest mb-1">Headquarters</p>
                                            <p className="text-lg font-bold text-slate-400">Chennai, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 bg-indigo-600 rounded-[2.5rem] text-white">
                                <MessageSquare className="mb-6 opacity-60" size={32} />
                                <h4 className="text-2xl font-black mb-4">Request a Technical Audit</h4>
                                <p className="text-indigo-100 font-medium leading-relaxed opacity-80">
                                    Ready for a technical gap analysis? Our team can provide a high-level review of your current GA4 or Adobe Analytics implementation.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[15px] font-black text-slate-900 uppercase tracking-widest ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[15px] font-black text-slate-900 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-400 placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[15px] font-black text-slate-900 uppercase tracking-widest ml-1">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enterprise Inc."
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[15px] font-black text-slate-900 uppercase tracking-widest ml-1">Website URL</label>
                                    <input
                                        type="url"
                                        placeholder="https://example.com"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[15px] font-black text-slate-900 uppercase tracking-widest ml-1">Monthly Traffic</label>
                                    <select defaultValue="" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-400">
                                        <option value="" disabled>Select Traffic</option>
                                        <option>&lt;10K</option>
                                        <option>10K–50K</option>
                                        <option>50K–100K</option>
                                        <option>100K+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[15px] font-black text-slate-900 uppercase tracking-widest ml-1">Project Type</label>
                                    <select defaultValue="" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-400">
                                        <option value="" disabled>Select Project Type</option>
                                        <option>One-time project</option>
                                        <option>Ongoing support</option>
                                        <option>Not sure</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[15px] font-black text-slate-900 uppercase tracking-widest ml-1">What services are you interested in?</label>
                                <select defaultValue="" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-400">
                                    <option value="" disabled>Select a Service</option>
                                    <option>GA4 Setup</option>
                                    <option>Server-side Tracking</option>
                                    <option>Adobe Setup</option>
                                    <option>Data Layer</option>
                                    <option>Data Validation</option>
                                    <option>Not Sure</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[15px] font-black text-slate-900 uppercase tracking-widest ml-1">Describe your requirement (Optional)</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your measurement challenges..."
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-400"
                                />
                            </div>

                            <Button variant="primary" className="w-full h-16 text-lg font-black tracking-widest flex items-center justify-center gap-3">
                                Get Expert Consultation <Send size={18} />
                            </Button>

                            <div className="pt-4 flex flex-col md:flex-row gap-4 items-center justify-center text-sm font-bold text-slate-600">
                                <span className="flex items-center gap-2"><span className="text-green-500">✔</span> 100+ analytics implementations</span>
                                <span className="hidden md:block text-slate-300">•</span>
                                <span className="flex items-center gap-2"><span className="text-green-500">✔</span> Experience with GA4, GTM, Adobe</span>
                                <span className="hidden md:block text-slate-300">•</span>
                                <span className="flex items-center gap-2"><span className="text-green-500">✔</span> Trusted by startups & enterprises</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageClient;
