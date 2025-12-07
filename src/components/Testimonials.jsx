import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Scalewhisper is the Left Click team for us as their talent driven AI systems never 'vacation'.",
            author: "David, Canadian P&C Broker",
            role: "Founder, Insurance Co.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            quote: "I never thought automation could be this personal and effective. It's like having a team of 10 working 24/7.",
            author: "Sarah, Independent Broker",
            role: "CEO, Growth Partners",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ];

    return (
        <section className="section-padding bg-gray-100/5">
            <div className="container mx-auto px-6">
                <div className="flex items-center space-x-2 mb-12">
                    <span className="w-8 h-[1px] bg-gold"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-gold">Testimonials</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-2xl">
                    Some words from happy clients.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-10 rounded-2xl relative group hover:bg-white/10 transition-colors"
                        >
                            <Quote className="text-gold mb-6 opacity-50" size={40} />
                            <p className="text-2xl font-medium leading-relaxed mb-8 text-gray-200">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center mt-auto">
                                <img
                                    src={item.image}
                                    alt={item.author}
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-gold/50"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{item.author}</h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
