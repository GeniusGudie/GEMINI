import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-secondary pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="text-2xl font-bold text-white tracking-tighter mb-6 block">
                            Scale<span className="text-gold">whisper</span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Helping Canadian insurance brokers revive orphan home and auto policies with AI-driven automation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Navigation</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
                            <li><Link to="/case-studies" className="text-gray-400 hover:text-gold transition-colors">Case Studies</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400">Orphan Reactivation</li>
                            <li className="text-gray-400">AI + SMS Automation</li>
                            <li className="text-gray-400">Policy Review Booking</li>
                            <li className="text-gray-400">Lead Qualification</li>
                            <li className="text-gray-400">24/7 Support</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Mail className="text-gold mr-3 mt-1 flex-shrink-0" size={18} />
                                <span className="text-gray-400">info@scalewhisper.com</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="text-gold mr-3 mt-1 flex-shrink-0" size={18} />
                                <span className="text-gray-400">(123) 456-7890</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="text-gold mr-3 mt-1 flex-shrink-0" size={18} />
                                <span className="text-gray-400">123 AI Gold St,<br />Toronto, ON, Canada</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Scalewhisper. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
