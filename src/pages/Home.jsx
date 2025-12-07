import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import ProcessSection from '../components/ProcessSection';
import BentoServices from '../components/BentoServices';
import PricingPreview from '../components/PricingPreview';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import QuickWins from '../components/QuickWins';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="home-page bg-dark overflow-hidden">
            <Hero />
            <SocialProof />
            <ProcessSection />
            <BentoServices />

            {/* Efficiency Section (Quick Wins) */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center mb-12">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                        Maximize efficiency
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Immediate impact</h2>
                </div>
                <QuickWins />
            </section>

            <PricingPreview />
            <Testimonials />

            {/* FAQ & Contact Split */}
            <section className="py-24 bg-dark-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">Ask whatever you have in your mind.</h2>
                            <p className="text-gray-400 mb-12">
                                Whether you're a small brokerage or a national firm, we have answers.
                            </p>

                            {/* Simple FAQ List */}
                            <div className="space-y-6">
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-white mb-2">Is there an upfront cost?</h3>
                                    <p className="text-gray-400">For our Zero Risk plan, absolutely not. We only earn when you do.</p>
                                </div>
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-white mb-2">How fast can we launch?</h3>
                                    <p className="text-gray-400">Typically within 3-5 days. We just need your list and approval on the scripts.</p>
                                </div>
                                <div className="border-b border-white/10 pb-6">
                                    <h3 className="text-lg font-bold text-white mb-2">Is it compliant?</h3>
                                    <p className="text-gray-400">Yes, fully PIPEDA compliant. We use enterprise-grade encryption for all data.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-dark border border-white/5 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">We're here to help</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative text-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="container relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Let's talk about <br /> your next big move.</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join 50+ Canadian brokers who are scaling faster with AI.
                    </p>
                    <button className="btn btn-primary text-lg px-12 py-5 rounded-full shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]">
                        Book a Demo
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
