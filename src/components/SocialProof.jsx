import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
    const logos = [
        "BrokerLink", "Hub International", "NFP", "Gallagher", "Westland"
    ];

    return (
        <section className="py-20 border-y border-white/5 bg-dark-secondary/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12">

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="w-8 h-[1px] bg-gold"></span>
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
                    <div className="md:w-1/2 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {logos.map((logo, index) => (
                                <div key={index} className="flex items-center justify-center h-24 border border-white/5 rounded-lg bg-white/5 hover:bg-white/10 hover:border-gold/20 transition-all">
                                    <span className="font-bold text-xl text-gray-300">{logo}</span>
                                </div>
                            ))}
                            <div className="flex items-center justify-center h-24 border border-white/5 rounded-lg bg-white/5 hover:bg-white/10 hover:border-gold/20 transition-all">
                                <span className="font-bold text-xl text-gray-300">Intact</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SocialProof;
