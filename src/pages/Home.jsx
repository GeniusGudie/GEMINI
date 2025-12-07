import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <SocialProof />

            {/* Some of our work (Case Studies Preview) */}
            <section className="section-padding bg-dark">
                <div className="container mx-auto px-6">
                    <div className="flex items-center space-x-2 mb-12">
                        <span className="w-8 h-[1px] bg-gold"></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-gold">Case Studies</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-16">Some of our work.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-dark-secondary border border-white/5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <div className="bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                                    +300% ROI
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Orphan Reactivation</h3>
                                <p className="text-gray-400 mb-4">Automated SMS campaign for 5k+ leads.</p>
                                <Link to="/case-studies" className="inline-flex items-center text-gold font-bold group-hover:translate-x-2 transition-transform">
                                    View Case Study <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                            {/* Placeholder for image */}
                            <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-dark-secondary border border-white/5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <div className="bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                                    $50k Revenue
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Policy Review Booking</h3>
                                <p className="text-gray-400 mb-4">Hands-free appointment setting.</p>
                                <Link to="/case-studies" className="inline-flex items-center text-gold font-bold group-hover:translate-x-2 transition-transform">
                                    View Case Study <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                            {/* Placeholder for image */}
                            <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AI Natives (Team) */}
            <section className="section-padding bg-dark-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="flex items-center space-x-2 mb-12">
                        <span className="w-8 h-[1px] bg-gold"></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-gold">Team</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">AI-natives since 2020.</h2>
                    <p className="text-gray-400 max-w-2xl mb-16 text-lg">
                        We don't just use AI; we build it. Our team consists of engineers and insurance veterans dedicated to solving the specific problems of Canadian brokers.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-6 p-6 rounded-xl border border-white/5 bg-white/5">
                            <div className="w-20 h-20 bg-gray-700 rounded-full flex-shrink-0"></div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Matt S.</h3>
                                <p className="text-gold text-sm mb-2">Co-Founder & Tech Lead</p>
                                <p className="text-gray-400 text-sm">"We build systems that feel human but scale like software."</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6 p-6 rounded-xl border border-white/5 bg-white/5">
                            <div className="w-20 h-20 bg-gray-700 rounded-full flex-shrink-0"></div>
                            <div>
                                <h3 className="text-xl font-bold text-white">David R.</h3>
                                <p className="text-gold text-sm mb-2">Head of Strategy</p>
                                <p className="text-gray-400 text-sm">"Insurance is about relationships. We just help you manage more of them."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialization (Services) */}
            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="flex items-center space-x-2 mb-12">
                        <span className="w-8 h-[1px] bg-gold"></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-gold">Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-16">What we specialize in.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        <div className="border-t border-white/10 pt-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Lead Generation</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">Orphan Reactivation</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">Cold Outreach</span>
                            </div>
                            <p className="text-gray-400">Turning dormant databases into active revenue streams.</p>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Project Management</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">CRM Integration</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">Workflow Auto</span>
                            </div>
                            <p className="text-gray-400">Seamlessly integrating AI into your existing brokerage stack.</p>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Hiring Systems</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">AI Agents</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">24/7 Support</span>
                            </div>
                            <p className="text-gray-400">Digital employees that never sleep or take vacations.</p>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Sales Administration</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">Booking</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">Follow-ups</span>
                            </div>
                            <p className="text-gray-400">Automating the administrative burden of sales.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <section className="section-padding">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale?</h2>
                        <p className="text-gray-400">Book your free demo today and start recovering revenue.</p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Home;
