import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            About <span className="text-gold">Scalewhisper</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            We're pioneers in AI automation for Canadian insurance brokers. Founded in 2025, we help you stop chasing new leads and recover revenue from your existing orphan database.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding bg-dark-secondary">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                We specialize in AI reactivation for orphan home and auto policies, partnering with brokers across Canada to generate massive commissions. Trusted by forward-thinking brokerages who understand that the future of insurance is automated.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                No fancy degrees – just smart AI that delivers fast money. We built Scalewhisper to solve a specific problem: the millions of dollars left on the table in neglected orphan policies.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-card p-8 rounded-xl border border-gray-800">
                                <div className="flex items-center mb-6">
                                    <Award className="text-gold mr-4" size={40} />
                                    <div>
                                        <h3 className="text-xl font-bold">Trusted Partner</h3>
                                        <p className="text-sm text-gray-500">For Canadian P&C Brokers</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                                        <p className="text-gray-300">Founded in 2025</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                                        <p className="text-gray-300">Focused on Home & Auto</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                                        <p className="text-gray-300">Results-Driven Approach</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                        <p className="text-gray-400">A lean squad of AI experts and insurance marketers focused on P&C success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: item * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 rounded-xl text-center border border-gray-800"
                            >
                                <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <Users size={32} className="text-gray-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Team Member</h3>
                                <p className="text-gold text-sm mb-4">Co-Founder</p>
                                <p className="text-gray-400 text-sm">
                                    Expert in AI automation and insurance sales processes.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
