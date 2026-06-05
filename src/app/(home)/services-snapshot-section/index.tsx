"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, DownloadCloud, Search, TrendingUp, Award, User, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

// Mock UI Component: Bar Chart
const MiniBarChart = () => (
    <div className="flex items-end justify-between h-20 w-full gap-1.5 px-2">
        {[40, 60, 30, 80, 50, 90, 45, 75, 60, 100, 30].map((height, i) => (
            <div
                key={i}
                className={`w-full rounded-t-sm ${i === 5 ? 'bg-orange-500' : 'bg-slate-800'}`}
                style={{ height: `${height}%` }}
            />
        ))}
    </div>
);

// Mock UI Component: Leaderboard row
const LeaderboardRow = ({ rank, name, points, imgUrl, isUp }: any) => (
    <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
        <div className="flex items-center gap-3">
            <span className="text-slate-500 font-medium w-4">{rank}</span>
            {isUp ?
                <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-transparent border-b-green-500" /> :
                <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-transparent border-t-orange-500" />
            }
            <img src={imgUrl} className="w-6 h-6 rounded-full bg-slate-200" alt={name} />
            <span className="text-sm text-slate-700 font-medium">{name}</span>
        </div>
        <span className={`text-sm font-bold ${rank === 1 ? 'text-green-500' : rank === 2 ? 'text-indigo-500' : 'text-orange-500'}`}>
            {points}
        </span>
    </div>
);

const ServicesSnapshotSection: React.FC = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-[1200px]">

                {/* Header Text */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-[54px] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        Smart, Simple & Powerful<br /> Digital Analytics Platform
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        MarTechRise simplifies data attribution with AI tools and interactive dashboards, offering an
                        exceptional analytics experience for enterprises and marketers.
                    </p>
                </div>

                {/* Dashboard / Grid Section */}
                <div className="flex flex-col gap-6">

                    {/* TOP ROW */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* 1. Multi-Device Accessibility */}
                        <div className="lg:col-span-2 rounded-[32px] border border-slate-200 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group hover:border-slate-300 transition-colors">
                            {/* Texture background */}
                            <div className="absolute top-0 left-0 w-64 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px] opacity-40 ml-4 pointer-events-none" />

                            <div className="flex-1 z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Cross-Platform Dashboard</h3>
                                <p className="text-slate-500 mb-8 max-w-sm">
                                    Monitor performance anytime, anywhere—on desktop, tablet, or mobile devices.
                                </p>
                                <div className="flex items-center gap-3">
                                    <Button href="/services/digital-analytics" variant="primary" className="h-12 px-6">
                                        Explore Dashboard
                                    </Button>
                                </div>
                            </div>

                            {/* Mock Graphic */}
                            <div className="flex-1 w-full bg-slate-50 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl border border-slate-200 p-6 pt-8 relative overflow-hidden h-[300px] shadow-inner">
                                {/* Dashboard Mockup top header */}
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center -rotate-12">
                                        <TrendingUp className="text-white w-5 h-5" />
                                    </div>
                                    <div className="font-bold text-xl text-slate-800 leading-tight">
                                        Alytics<br /><span className="text-sm font-medium text-slate-500">Desktop Version</span>
                                    </div>
                                </div>

                                {/* Inner Window Mockup */}
                                <div className="bg-white rounded-t-xl border border-slate-200 shadow-xl w-[120%] h-full flex absolute bottom-0 right-[-10%]">
                                    {/* Sidebar */}
                                    <div className="w-24 border-r border-slate-100 p-3 pt-4 flex flex-col gap-3">
                                        <div className="h-6 bg-slate-100 rounded mb-2" />
                                        <div className="h-4 bg-slate-100 rounded w-3/4" />
                                        <div className="h-4 bg-slate-100 rounded w-full" />
                                        <div className="h-4 bg-slate-100 rounded w-5/6" />
                                        <div className="h-4 bg-slate-100 rounded w-3/4" />
                                    </div>
                                    {/* Content Area */}
                                    <div className="flex-1 p-4 bg-slate-50/50">
                                        <div className="h-6 w-32 bg-slate-200 rounded mb-4" />
                                        <div className="flex gap-4">
                                            <div className="w-32 h-32 bg-white rounded-xl border border-slate-100 shadow-sm p-3">
                                                <div className="text-[10px] text-slate-400 mb-1">Time Spent</div>
                                                <div className="font-bold text-lg mb-2">13.6 Hours</div>
                                                <MiniBarChart />
                                            </div>
                                            <div className="w-32 h-32 bg-white rounded-xl border border-slate-100 shadow-sm p-3 flex flex-col items-center justify-center">
                                                <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-orange-500 border-r-orange-500 relative flex items-center justify-center">
                                                    <span className="text-sm font-bold">80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. AI-Powered Learning (Video Mockup) */}
                        <div className="rounded-[32px] border border-slate-200 p-6 md:p-10 flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:border-slate-300 transition-colors">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">AI-Assisted Guidance</h3>
                            <p className="text-slate-500 mb-8 max-w-xs text-sm">
                                Get personalized recommendations and automated strategy consultations.
                            </p>

                            <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 p-4 relative overflow-hidden min-h-[220px]">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 pointer-events-none z-10" />
                                <h4 className="font-semibold text-slate-800 mb-4 px-2">Consultants & Experts</h4>

                                {/* Video Call Mockup grid */}
                                <div className="grid grid-cols-2 gap-2 mb-4 relative z-0">
                                    <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="expert" />
                                    </div>
                                    <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="expert" />
                                    </div>
                                </div>

                                {/* Floating Event Card */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3 flex items-center gap-3 z-20">
                                    <div className="w-10 h-10 bg-blue-500 rounded-lg text-white font-bold flex flex-col items-center justify-center leading-tight">
                                        <span className="text-[10px] uppercase font-medium opacity-80">Dec</span>
                                        <span>31</span>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900">Analytics Strategy Call</div>
                                        <div className="text-[10px] text-slate-500">December 31st, 2024 • 11:00 AM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* BOTTOM ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* 3. Progress Tracking */}
                        <div className="rounded-[32px] border border-slate-200 p-6 pt-8 md:p-8 md:pt-10 flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Data Tracking</h3>
                            <p className="text-slate-500 text-sm mb-8 h-10">
                                Monitor ROI and KPIs with in-depth custom reports.
                            </p>

                            <div className="flex-1 bg-slate-50/50 rounded-2xl flex items-end justify-center pt-8 overflow-hidden">
                                {/* Mobile Phone Mockup */}
                                <div className="w-56 bg-white rounded-t-[32px] border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-6 pb-0 translate-y-4">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <div className="text-xs font-medium text-slate-400 mb-1">Time Spent</div>
                                            <div className="text-2xl font-bold text-slate-900">13.6 Hours</div>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-orange-200 text-orange-500 flex items-center justify-center">
                                            <ArrowRight size={14} className="-rotate-45" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 mb-8 text-xs font-medium text-slate-500">
                                        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-orange-400" /> Platform A</div>
                                        <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-slate-300" /> Platform B</div>
                                    </div>

                                    <MiniBarChart />
                                </div>
                            </div>
                        </div>

                        {/* 4. Gamification */}
                        <div className="rounded-[32px] border border-slate-200 p-6 pt-8 md:p-8 md:pt-10 flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Goal Achievements</h3>
                            <p className="text-slate-500 text-sm mb-8 h-10">
                                Keep teams excited with clear target tracking and milestones!
                            </p>

                            <div className="flex-1 bg-slate-50/50 rounded-2xl flex items-end justify-center pt-8 overflow-hidden">
                                {/* App Card Mockup */}
                                <div className="w-64 bg-white rounded-t-[24px] border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-6 pb-2 translate-y-4">
                                    <h4 className="font-semibold text-slate-800 text-lg mb-4">Leader Board</h4>

                                    <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-3 tracking-wider px-1">
                                        <span>RANK</span>
                                        <span className="-ml-4">CAMPAIGN</span>
                                        <span>ROAS</span>
                                    </div>

                                    <div className="flex flex-col">
                                        <LeaderboardRow rank={1} name="Holiday Sale" points={"13.450"} imgUrl="https://i.pravatar.cc/150?u=1a" isUp={true} />
                                        <LeaderboardRow rank={2} name="Summer Promo" points={"11.236"} imgUrl="https://i.pravatar.cc/150?u=2a" isUp={false} />
                                        <LeaderboardRow rank={3} name="Retargeting" points={"08.164"} imgUrl="https://i.pravatar.cc/150?u=3a" isUp={false} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5. AI Search & Recommendations */}
                        <div className="rounded-[32px] border border-slate-200 p-6 pt-8 md:p-8 md:pt-10 flex flex-col bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-300 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Powered Insights</h3>
                            <p className="text-slate-500 text-sm mb-8 h-10">
                                Get automated trend spotting and anomaly detection instantly.
                            </p>

                            <div className="flex-1 bg-slate-50/50 rounded-2xl flex items-end justify-center pt-8 overflow-hidden">
                                {/* App Card Mockup */}
                                <div className="w-64 bg-white rounded-t-[24px] border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-6 pb-2 translate-y-4">
                                    <h4 className="font-semibold text-slate-800 text-lg mb-4">AI - Recommendation</h4>

                                    <div className="relative mb-6">
                                        <div className="w-full h-10 border border-slate-200 rounded-full flex items-center px-4 text-xs font-medium text-slate-800">
                                            Traffic Anomal|
                                        </div>
                                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                    </div>

                                    <div className="flex flex-col gap-4 opacity-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center">
                                                <Star className="text-slate-400 w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-2 w-full bg-slate-200 rounded-full mb-2" />
                                                <div className="h-2 w-2/3 bg-slate-200 rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center">
                                                <User className="text-slate-400 w-4 h-4" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-2 w-full bg-slate-200 rounded-full mb-2" />
                                                <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <Link href="/services">
                        <div className="inline-flex flex-row items-center gap-3 border border-orange-200 hover:border-orange-500 bg-white rounded-full py-2 pr-6 pl-2 transition-all cursor-pointer group shadow-sm hover:shadow-md">
                            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-slate-700">Browse More Features</span>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ServicesSnapshotSection;
