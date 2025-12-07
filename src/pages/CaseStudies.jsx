import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, User, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    const studies = [
        {
            title: "Broker's Orphan Turnaround",
            result: "$50k in Commissions",
            desc: "From neglected database to $50k in commissions from home/auto transfers.",
            quote: "Turned my orphan list into $3k per transfer commissions. Game-changer!",
            author: "David, Canadian P&C Broker"
        },
        {
            title: "9-5er to Brokerage Empire",
            result: "6-Figure Profits",
            desc: "Quit job, hit 6-figure profits in year one with AI reactivation for P&C orphans.",
            quote: "I never thought automation could be this personal and effective.",
            author: "Sarah, Independent Broker"
        },
        {
            title: "The Efficiency Boost",
            result: "100x More Efficient",
            desc: "Automated follow-ups and booking saved 20+ hours per week.",
            quote: "Scalewhisper does the work of 3 assistants for a fraction of the cost.",
            author: "Michael, Agency Owner"
        }
    ];

    return (
        <div className="pt-24 min-h-screen">
            <section className="section-padding text-center">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Success <span className="text-gold">Stories</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
                        See how Canadian brokers are transforming their businesses with Scalewhisper.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {studies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 rounded-xl text-left border border-gray-800 flex flex-col h-full"
                            >
                                <div className="mb-6">
                                    <div className="bg-gold/10 inline-block px-4 py-2 rounded-full text-gold font-bold text-sm mb-4">
                                        {study.result}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                                    <p className="text-gray-400 mb-6">{study.desc}</p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-gray-800">
                                    <Quote className="text-gold mb-3 opacity-50" size={24} />
                                    <p className="text-gray-300 italic mb-4">"{study.quote}"</p>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                                            <User size={16} className="text-gray-400" />
                                        </div>
                                        <span className="text-sm text-gray-500">{study.author}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                            Start Your Success Story
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
