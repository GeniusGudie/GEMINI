import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, DollarSign, Shield, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const steps = [
        { title: "Approach", desc: "Target your orphan database." },
        { title: "Demo", desc: "Show it on your data." },
        { title: "Agreement", desc: "Zero-risk setup." },
        { title: "Build", desc: "Custom AI for home/auto reviews." },
        { title: "Activate", desc: "Launch SMS engagements." },
        { title: "Book", desc: "Auto-schedule policy reviews." },
        { title: "Profit", desc: "Earn $800–$3,500 instantly + renewals." },
        { title: "Optimize", desc: "Ongoing tweaks." }
    ];

    const packages = [
        { title: "Fresh Leads", desc: "AI-generated new prospects." },
        { title: "Speed to Lead", desc: "Instant responses." },
        { title: "Out of Hours", desc: "24/7 coverage." },
        { title: "Document Collection", desc: "Automate policy transfers." }
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero */}
            <section className="section-padding text-center">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        AI + SMS <span className="text-gold">Orphan Reactivation</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        Our flagship service: Revive Canadian P&C orphan leads with AI-powered SMS. Simple process from outreach to commission.
                    </p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="section-padding bg-dark-secondary">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 rounded-lg border border-gray-800 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold text-gold">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white relative z-10">{step.title}</h3>
                                <p className="text-gray-400 relative z-10">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-Ons */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-center">Add-On Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {packages.map((pkg, index) => (
                            <div key={index} className="glass-panel p-8 rounded-xl flex items-center">
                                <div className="bg-gold/10 p-4 rounded-full mr-6">
                                    <Zap className="text-gold" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                                    <p className="text-gray-400">{pkg.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deal Structures */}
            <section className="section-padding bg-dark-secondary">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-12">Flexible Deal Structures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="glass-card p-8 rounded-xl border border-gold/30">
                            <h3 className="text-2xl font-bold mb-4 text-gold">Zero Risk</h3>
                            <p className="text-gray-300 mb-6">Pay only on results.</p>
                            <ul className="text-left space-y-3 mb-8 text-gray-400 text-sm">
                                <li className="flex items-center"><Shield size={16} className="mr-2 text-gold" /> No upfront fees</li>
                                <li className="flex items-center"><Shield size={16} className="mr-2 text-gold" /> Performance based</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary w-full">Choose This</Link>
                        </div>
                        <div className="glass-card p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold mb-4 text-white">Frontend + Backend</h3>
                            <p className="text-gray-300 mb-6">Upfront + share.</p>
                            <ul className="text-left space-y-3 mb-8 text-gray-400 text-sm">
                                <li className="flex items-center"><DollarSign size={16} className="mr-2 text-gold" /> Lower commission split</li>
                                <li className="flex items-center"><DollarSign size={16} className="mr-2 text-gold" /> Shared risk</li>
                            </ul>
                            <Link to="/contact" className="btn btn-outline w-full">Choose This</Link>
                        </div>
                        <div className="glass-card p-8 rounded-xl border border-gray-800">
                            <h3 className="text-2xl font-bold mb-4 text-white">Chunky Retainer</h3>
                            <p className="text-gray-300 mb-6">Fixed monthly.</p>
                            <ul className="text-left space-y-3 mb-8 text-gray-400 text-sm">
                                <li className="flex items-center"><Calendar size={16} className="mr-2 text-gold" /> Predictable costs</li>
                                <li className="flex items-center"><Calendar size={16} className="mr-2 text-gold" /> High volume</li>
                            </ul>
                            <Link to="/contact" className="btn btn-outline w-full">Choose This</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
