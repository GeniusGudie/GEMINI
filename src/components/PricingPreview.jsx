import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPreview = () => {
    const plans = [
        {
            name: "Zero Risk",
            price: "Performance",
            desc: "Pay only when you get results. Perfect for starting out.",
            features: ["No upfront fees", "Pay per transfer", "Full AI Setup", "Weekly Reporting"],
            icon: <Shield className="text-purple-400" size={24} />,
            highlight: false
        },
        {
            name: "Frontend + Backend",
            price: "Hybrid",
            desc: "Lower commission split with a small upfront investment.",
            features: ["Reduced split %", "Priority Support", "Custom Workflows", "Dedicated Account Mgr"],
            icon: <Zap className="text-blue-400" size={24} />,
            highlight: true
        },
        {
            name: "Chunky Retainer",
            price: "Fixed",
            desc: "Predictable monthly cost for high-volume brokerages.",
            features: ["Unlimited Transfers", "24/7 Live Support", "White-label Options", "API Access"],
            icon: <Calendar className="text-pink-400" size={24} />,
            highlight: false
        }
    ];

    return (
        <section className="py-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                        Flexible plans for growth
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Choose your model</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We offer flexible structures to match your brokerage's cash flow and risk appetite.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-2xl border ${plan.highlight
                                    ? 'bg-white/5 border-purple-500/50 shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]'
                                    : 'bg-dark border-white/5'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-white/5 rounded-lg">
                                    {plan.icon}
                                </div>
                                {plan.highlight && <div className="text-purple-400 text-sm font-bold">Recommended</div>}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="text-3xl font-bold text-white mb-4">{plan.price}</div>
                            <p className="text-gray-400 text-sm mb-8 h-10">{plan.desc}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300 text-sm">
                                        <Check size={16} className="text-green-400 mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={`w-full btn justify-center ${plan.highlight
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white'
                                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                    }`}
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPreview;
