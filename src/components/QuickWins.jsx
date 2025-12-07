import React from 'react';
import { Zap, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const QuickWins = () => {
    const wins = [
        {
            icon: <Zap size={28} className="text-purple-400" />,
            stat: "$125,000",
            title: "Lost Revenue at Risk",
            description: "Average small business loses this annually to missed calls and slow follow-ups."
        },
        {
            icon: <TrendingUp size={28} className="text-purple-400" />,
            stat: "99%",
            title: "AI Prevents Missed Calls",
            description: "Ensure every potential customer gets an immediate, professional response."
        },
        {
            icon: <Clock size={28} className="text-purple-400" />,
            stat: "98%",
            title: "Customer Satisfaction",
            description: "Give callers the instant attention they expect and deserve, 24/7."
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stop Letting Missed Calls <br /><span className="text-purple-400">Cost You Thousands</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Turn every missed call into a revenue opportunity with our AI receptionist.
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
                            className="bg-dark-card p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
                                {win.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-red-500 mb-2">{win.stat}</h3>
                            <h4 className="text-lg font-semibold text-white mb-3">{win.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
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
