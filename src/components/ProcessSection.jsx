import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        {
            title: "Automate daily operations",
            subtitle: "Your path to excellence",
            description: "We deploy custom AI agents that handle your repetitive tasks—from data entry to policy renewals—so your team can focus on high-value client relationships.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            features: ["Zero manual data entry", "Instant policy processing", "Error-free documentation"]
        },
        {
            title: "Maximize efficiency & impact",
            subtitle: "Scale without headcount",
            description: "Our systems don't just save time; they multiply your output. Handle 10x the volume of leads and renewals without hiring a single new staff member.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            features: ["24/7 Operation", "Instant Scalability", "Real-time Analytics"]
        }
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                {steps.map((step, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-16 mb-32 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2"
                            style={{ width: '100%' }}
                        >
                            <div className="section-label bg-purple-500-10 border border-purple-500-20 text-purple-400">
                                {step.subtitle}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                {step.title}
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                {step.description}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {step.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <CheckCircle className="text-purple-500 mr-3 flex-shrink-0" size={20} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="text-white font-medium flex items-center hover:text-purple-400 transition-colors group">
                                Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </button>
                        </motion.div>

                        {/* Image/Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 relative"
                            style={{ width: '100%' }}
                        >
                            <div className="absolute inset-0 rounded-2xl blur-2xl" style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                                zIndex: -1
                            }}></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white-10 shadow-2xl bg-dark-secondary">
                                <div className="absolute inset-0 z-10" style={{
                                    background: 'linear-gradient(to top, var(--color-dark) 0%, transparent 50%, transparent 100%)'
                                }}></div>
                                <img src={step.image} alt={step.title} className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-500" style={{ objectFit: 'cover' }} />

                                {/* Floating UI Element Mockup */}
                                <div className="absolute p-4 border border-white-10 rounded-xl z-20 backdrop-blur-md transition-transform" style={{
                                    bottom: '1.5rem',
                                    left: '1.5rem',
                                    right: '1.5rem',
                                    backgroundColor: 'rgba(15, 15, 15, 0.8)',
                                    transform: 'translateY(0.5rem)'
                                }}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="rounded" style={{ height: '0.5rem', width: '6rem', backgroundColor: 'var(--color-gray-600)' }}></div>
                                        <div className="rounded" style={{ height: '0.5rem', width: '2rem', backgroundColor: 'var(--color-green-500)' }}></div>
                                    </div>
                                    <div className="rounded mb-2" style={{ height: '0.5rem', width: '100%', backgroundColor: 'var(--color-gray-700)' }}></div>
                                    <div className="rounded" style={{ height: '0.5rem', width: '66%', backgroundColor: 'var(--color-gray-700)' }}></div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSection;
