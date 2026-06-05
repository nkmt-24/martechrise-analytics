import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

interface ServiceWhyChooseUsProps {
  badge: string;
  heading: string;
  subheading: string;
  reasons: Reason[];
}

export const ServiceWhyChooseUs = ({
  badge,
  heading,
  subheading,
  reasons,
}: ServiceWhyChooseUsProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-10">
          <div className="md:w-1/2">
            <span className="inline-block text-xs font-bold tracking-wider text-brand-orange uppercase bg-brand-orange/5 px-2 py-1 mb-6 rounded-sm">
              {badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-gray-900 leading-tight tracking-tight">
              {heading}
            </h2>
          </div>
          <div className="md:w-1/2 md:mt-12">
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              {subheading}
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            // Dynamically get the icon component from lucide-react
            const Icon = (LucideIcons[reason.icon as keyof typeof LucideIcons] || LucideIcons.CheckCircle) as React.ComponentType<{ className?: string }>;
            
            return (
              <div 
                key={index} 
                className="bg-[#FAFAFA] border border-gray-100 p-8 rounded-xl flex flex-col items-start transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
