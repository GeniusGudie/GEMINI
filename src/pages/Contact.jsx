import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="pt-24 min-h-screen">
            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Get in <span className="text-gold">Touch</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-12">
                                Ready to reactivate your P&C orphans? Book a free demo or reach out to us directly.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-dark-secondary p-4 rounded-lg border border-gray-800 mr-6">
                                        <Mail className="text-gold" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Email Us</h3>
                                        <p className="text-gray-400">info@scalewhisper.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-dark-secondary p-4 rounded-lg border border-gray-800 mr-6">
                                        <Phone className="text-gold" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Call Us</h3>
                                        <p className="text-gray-400">(123) 456-7890</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-dark-secondary p-4 rounded-lg border border-gray-800 mr-6">
                                        <MapPin className="text-gold" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                                        <p className="text-gray-400">
                                            123 AI Gold St,<br />
                                            Toronto, ON, Canada
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-dark-secondary p-8 rounded-2xl border border-gray-800"
                        >
                            <h2 className="text-2xl font-bold mb-6">Book a Free Demo</h2>
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
