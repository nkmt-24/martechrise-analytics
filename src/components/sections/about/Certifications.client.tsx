"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Award, ShieldCheck, Star } from "lucide-react";

const certifications = [
  {
    provider: "Adobe",
    title: "Adobe Certified Professional – Adobe Analytics",
    description: "Expertise in implementation, reporting, and advanced analysis.",
    color: "from-red-500/20 to-orange-500/5",
    iconColor: "text-red-500"
  },
  {
    provider: "Adobe",
    title: "Adobe Experience Platform (AEP) Certification",
    description: "Hands-on experience in Real-Time CDP, data ingestion, and audience activation.",
    color: "from-red-500/20 to-orange-500/5",
    iconColor: "text-red-500"
  },
  {
    provider: "Adobe",
    title: "Adobe Customer Journey Analytics (CJA) Certification",
    description: "Cross-channel journey analysis, unified data insights, and advanced workspace reporting.",
    color: "from-red-500/20 to-orange-500/5",
    iconColor: "text-red-500"
  },
  {
    provider: "Google",
    title: "Google Analytics Certification (GA4)",
    description: "Strong foundation in event-based tracking, attribution, and insights.",
    color: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-blue-500"
  },
  {
    provider: "Tealium",
    title: "Tealium iQ Tag Management Certification",
    description: "Proficient in scalable tag management and data layer architecture.",
    color: "from-teal-500/20 to-emerald-500/5",
    iconColor: "text-teal-500"
  },
  {
    provider: "Microsoft",
    title: "Microsoft Power BI Certification",
    description: "Data visualization, dashboard creation, and business intelligence reporting.",
    color: "from-yellow-500/20 to-amber-500/5",
    iconColor: "text-yellow-600"
  }
];

export const CertificationsClient = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>Verified Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Certified <span className="text-gradient-brand">Expertise</span>
            </h2>
            <p className="text-lg text-foreground/70">
              We hold official certifications across the industry's leading analytics and data platforms to ensure enterprise-grade implementations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card border border-border hover:border-foreground/20 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-card-soft hover:-translate-y-1"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center shadow-sm ${cert.iconColor}`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <BadgeCheck className="w-5 h-5 text-green-500/80" />
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-3">
                  {cert.provider}
                </div>

                <h3 className="text-xl font-semibold text-foreground leading-snug mb-3 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
