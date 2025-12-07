import React from 'react';
import { Zap, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const QuickWins = () => {
    const wins = [
        {
            icon: <Zap size={32} className="text-gold" />,
            title: "Reactivate Orphans",
            description: "Turn neglected databases into active transfers in weeks, not months."
        },
        {
            icon: <TrendingUp size={32} className="text-gold" />,
            title: "Boost Commissions",
            description: "Increase your revenue by 20-50% with automated SMS outreach."
        },
        {
            icon: <Clock size={32} className="text-gold" />,
            title: "Save Time",
            description: "Scale your brokerage with add-ons like fresh leads and 24/7 support."
        }
    ];

    return (
        <section className="section-padding bg-dark-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Wins for Your Brokerage</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Immediate impact on your bottom line with our AI-driven approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {wins.map((win, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-xl border border-gray-800 hover:border-gold/30 transition-all duration-300"
                        >
                            <div className="bg-dark/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-gray-800">
                                {win.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{win.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {win.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickWins;
