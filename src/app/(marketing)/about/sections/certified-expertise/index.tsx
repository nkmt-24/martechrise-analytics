import React from 'react';
import { certifiedExpertiseContent } from './content';
import { CheckCircle2, Award } from 'lucide-react';

const CertifiedExpertise: React.FC = () => {
    return (
        <section className="py-32 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">{certifiedExpertiseContent.title}</h2>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {certifiedExpertiseContent.certifications.map((cert, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-100 transition-all group">
                            <Award className="w-10 h-10 text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{cert.name}</h3>
                            <p className="text-slate-600 leading-relaxed">{cert.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">{certifiedExpertiseContent.commitmentTitle}</h3>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                {certifiedExpertiseContent.commitmentDesc}
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <h4 className="text-xl font-bold text-white mb-6">{certifiedExpertiseContent.ensuresTitle}</h4>
                            <ul className="space-y-4">
                                {certifiedExpertiseContent.ensures.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-indigo-400 mr-4 flex-shrink-0 mt-1" />
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertifiedExpertise;
