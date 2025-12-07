import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
    const logos = [
        "BrokerLink", "Hub International", "NFP", "Gallagher", "Westland", "Intact"
    ];

    return (
        <section className="py-20 border-t border-b border-white-10" style={{ backgroundColor: 'rgba(10, 10, 10, 0.3)' }}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12">

                    {/* Text Content */}
                    <div style={{ width: '100%', maxWidth: '50%' }} className="w-full">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="divider"></span>
                            <span className="text-xs font-bold tracking-widest uppercase text-gold">Proven Results</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Millions in commissions generated (& more saved).
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We build custom AI agents that have generated millions in revenue for Canadian P&C brokers. From reviving dead leads to automating renewals, our systems work 24/7 so you don't have to.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Brokers Trusted</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">$5M+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Revenue Generated</p>
                            </div>
                        </div>
                    </div>

                    {/* Logos / Visual */}
                    <div style={{ width: '100%', maxWidth: '50%' }} className="w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-500" style={{ opacity: 0.5, filter: 'grayscale(100%)' }}>
                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center border border-white-10 rounded-lg bg-white-5 hover:bg-white-10 transition-all"
                                    style={{ height: '6rem', borderColor: 'rgba(255, 255, 255, 0.05)' }}
                                >
                                    <span className="font-bold text-xl text-gray-300">{logo}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SocialProof;
