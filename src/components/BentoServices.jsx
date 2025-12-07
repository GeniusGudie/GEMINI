import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, MessageSquare, BarChart } from 'lucide-react';

const BentoServices = () => {
    return (
        <section className="py-24 bg-dark-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Innovative services for growth</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive automation solutions tailored for the modern insurance brokerage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Large Card - Lead Gen */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-dark border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Orphan Reactivation</h3>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Turn your dormant database into a goldmine. Our AI agents autonomously contact, qualify, and book appointments with your orphan leads.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">SMS Automation</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">Booking Engine</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tall Card - Hiring */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:row-span-2 bg-dark border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={120} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Digital Workers</h3>
                            <p className="text-gray-400 mb-6">
                                Why hire more staff when you can deploy AI agents? 24/7 availability, zero training time, and instant scalability.
                            </p>
                            <div className="mt-auto space-y-2">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-gray-400">Cost vs Human</span>
                                        <span className="text-xs text-green-400">-85%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full w-[15%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Card - Sales Admin */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-dark border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
                    >
                        <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 text-pink-400">
                            <BarChart size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Sales Admin</h3>
                        <p className="text-gray-400 text-sm">
                            Automate follow-ups, data entry, and CRM updates.
                        </p>
                    </motion.div>

                    {/* Small Card - Support */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-dark border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
                    >
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 text-green-400">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                        <p className="text-gray-400 text-sm">
                            Instant responses to client queries, any time of day.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BentoServices;
