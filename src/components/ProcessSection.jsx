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
                        >
                            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
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
                                        <CheckCircle className="text-purple-500 mr-3" size={20} />
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
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl -z-10"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-secondary">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
                                <img src={step.image} alt={step.title} className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />

                                {/* Floating UI Element Mockup */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 bg-dark/80 backdrop-blur-md border border-white/10 rounded-xl z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="h-2 w-24 bg-gray-600 rounded"></div>
                                        <div className="h-2 w-8 bg-green-500 rounded"></div>
                                    </div>
                                    <div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
                                    <div className="h-2 w-2/3 bg-gray-700 rounded"></div>
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
