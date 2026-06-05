"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Lock, TrendingUp, AlertTriangle, ArrowRight,
  BarChart3, Zap, Database, Globe, ShoppingCart,
  CheckCircle2, Server, Activity, ArrowUpRight, Plus, Minus
} from 'lucide-react';
import { cn } from '@/lib/cn';

interface FAQ {
  question: string;
  answer: string;
}

export default function IndustriesClient({ faqs }: { faqs: FAQ[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                Industry Solutions
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Specialized Analytics for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">Complex Data</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              We build highly accurate, compliant, and robust tracking infrastructure tailored for the unique challenges of E-commerce and Financial Services.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#ecommerce"
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 w-full sm:w-auto"
              >
                <div className="bg-brand-cyan/20 p-3 rounded-xl group-hover:bg-brand-cyan/30 transition-colors">
                  <ShoppingCart className="w-6 h-6 text-brand-cyan" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Solutions for</div>
                  <div className="text-lg font-semibold text-white">E-commerce</div>
                </div>
              </Link>
              
              <Link
                href="#fintech"
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 w-full sm:w-auto"
              >
                <div className="bg-brand-blue/20 p-3 rounded-xl group-hover:bg-brand-blue/30 transition-colors">
                  <Shield className="w-6 h-6 text-brand-blue" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Solutions for</div>
                  <div className="text-lg font-semibold text-white">Fintech & Banking</div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-[#0a0a0a] border-y border-white/5 py-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
            {[
              { val: "30-40%", label: "Data Lost to Ad Blockers" },
              { val: "100%", label: "PCI-DSS Compliant" },
              { val: "24hrs", label: "Apple ITP Cookie Limit" },
              { val: "0", label: "PII Leaks Guaranteed" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-white mb-1 font-display">{stat.val}</span>
                <span className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES OVERVIEW */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Why Generalized Tracking Fails</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Generic analytics setups are designed for simple content sites. When applied to complex e-commerce funnels or secure financial applications, they inevitably break—causing revenue discrepancies, compliance violations, and marketing inefficiencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. E-COMMERCE DEEP SECTION */}
      <section id="ecommerce" className="py-24 bg-white scroll-mt-10">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-brand-cyan/10 text-brand-cyan px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <ShoppingCart className="w-4 h-4" />
                E-commerce Analytics
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Stop Losing 30% of Your Revenue Data
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fix broken tracking, implement robust server-side infrastructure, and recover lost conversions from iOS users, ad blockers, and third-party payment processor redirects.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Revenue mismatch between GA4 and Shopify/WooCommerce',
                  'iOS users not tracked due to ATT restrictions',
                  'Payment processor redirects breaking attribution',
                  'Meta ads showing half the actual conversions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/analytics-audit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                Book Free E-commerce Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-gray-50 p-8 md:p-12 border border-gray-200 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Tracking Challenges We Solve</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { title: 'Revenue Mismatches', desc: 'Fixed with server-side purchase tracking via webhooks ensuring 100% accuracy.' },
                  { title: 'iOS Attribution Loss', desc: 'Recovered with server-side GTM + Meta CAPI for extended cookie lifespans.' },
                  { title: 'Ad Blocker Impact', desc: 'Bypassed with first-party tracking, routing data through your own subdomain.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* 5. E-COMMERCE RELATED SERVICES */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Recommended Services for E-commerce</h3>
              <Link href="/services" className="text-brand-cyan font-semibold hover:underline hidden sm:block text-sm">View all services &rarr;</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Tracking Architecture', href: '/services/tracking-architecture', desc: 'Design scalable data layers for complex catalogs.' },
                { title: 'Analytics Implementation', href: '/services/analytics-implementation', desc: 'Flawless GA4 & GTM setup for exact revenue matching.' },
                { title: 'Conversion Tracking', href: '/services/conversion-event-tracking', desc: 'Track every add-to-cart, checkout step, and purchase.' },
                { title: 'Server-Side Tracking', href: '/services/server-side-tracking', desc: 'Bypass ad blockers and implement Meta CAPI.' }
              ].map((svc, idx) => (
                <Link key={idx} href={svc.href} className="group block bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-brand-cyan/50 hover:bg-white hover:shadow-xl hover:shadow-brand-cyan/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-brand-cyan transition-colors">{svc.title}</h4>
                  <p className="text-sm text-gray-600">{svc.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          
          {/* E-commerce Platforms */}
          <div className="bg-[#050505] rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">E-commerce Platforms We Support</h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">Deep expertise implementing analytics across all major headless and monolithic platforms.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {['Shopify Plus', 'WooCommerce', 'Adobe Commerce', 'Next.js Headless'].map((platform, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="font-bold text-white">{platform}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINTECH DEEP SECTION */}
      <section id="fintech" className="py-24 bg-gray-50 scroll-mt-10 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative rounded-3xl bg-white p-8 md:p-12 border border-gray-200 shadow-xl overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Security & Compliance Challenges</h3>
              <div className="space-y-4 relative z-10">
                {[
                  { title: 'PII Leaking to Ad Platforms', icon: Lock, problem: 'Pixels capturing emails/phones in URLs.' },
                  { title: 'PCI-DSS Non-Compliance', icon: Shield, problem: 'Payment pages storing card data in browser.' },
                  { title: 'Broken Loan Funnels', icon: BarChart3, problem: 'Multi-step applications breaking across sessions.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow flex gap-4 items-center">
                    <div className="bg-brand-blue/10 p-3 rounded-xl flex-shrink-0">
                      <item.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.problem}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                PCI-DSS Compliant Analytics
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Track Financial Conversions Without Compromising Security
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade server-side analytics for fintech, banking, and BFSI. Measure multi-step funnels while maintaining PCI-DSS compliance and completely scrubbing PII.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
              >
                Book Free Security Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* 7. FINTECH RELATED SERVICES */}
          <div className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Recommended Services for Fintech</h3>
              <Link href="/services" className="text-brand-blue font-semibold hover:underline hidden sm:block text-sm">View all services &rarr;</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Server-Side Tracking', href: '/services/server-side-tracking', desc: 'Secure proxy for all tracking data to scrub PII before transmission.' },
                { title: 'QA & Data Validation', href: '/services/qa-data-validation', desc: 'Automated monitoring to ensure no sensitive data is leaked.' },
                { title: 'Tracking Architecture', href: '/services/tracking-architecture', desc: 'Compliance-first measurement planning for complex apps.' },
                { title: 'Analytics Reporting', href: '/services/analytics-reporting-attribution', desc: 'Unified dashboards for user acquisition and LTV.' }
              ].map((svc, idx) => (
                <Link key={idx} href={svc.href} className="group block bg-white border border-gray-200 p-6 rounded-2xl hover:border-brand-blue/50 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">{svc.title}</h4>
                  <p className="text-sm text-gray-600">{svc.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Fintech Platforms */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Financial Technology Stack</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { cat: 'Digital Banking', icon: Database, items: 'Temenos, Mambu, Backbase' },
                { cat: 'Payment Processors', icon: Zap, items: 'Stripe, Adyen, Braintree' },
                { cat: 'Lending & Credit', icon: TrendingUp, items: 'LendingClub, Blend, Roostify' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl flex gap-5 items-center hover:shadow-md transition-shadow">
                  <div className="bg-brand-blue/10 p-4 rounded-xl flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.cat}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (AEO/SEO OPTIMIZED) */}
      <section className="py-24 bg-white border-t border-gray-200" id="faq">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Industry Tracking FAQs</h2>
            <p className="text-lg text-gray-600">Common questions about technical analytics implementation for specialized industries.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  openFaqIndex === index ? "border-gray-900 bg-gray-50" : "border-gray-200 bg-white hover:border-gray-300"
                )}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                  <span className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors",
                    openFaqIndex === index ? "bg-gray-900 border-gray-900 text-white" : "border-gray-200 text-gray-500"
                  )}>
                    {openFaqIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base border-t border-gray-200/60 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-[#050505] rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl border border-gray-800">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 tracking-tight">Ready to Upgrade Your Analytics?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Whether you need to recover lost e-commerce revenue data or secure your fintech tracking infrastructure, our experts are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="/analytics-audit"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Get a Free Technical Audit
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
