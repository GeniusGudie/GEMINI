import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-dark-secondary border-t border-white-10 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-2xl font-bold text-white tracking-tighter mb-4 block cursor-pointer"
                        >
                            Scale<span className="text-gold">whisper</span>
                        </button>
                        <p className="text-gray-400 mb-6">
                            24/7 AI Receptionist & Appointment Booking Automation.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <div className="flex flex-col space-y-3">
                            <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors text-left">Home</button>
                            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors text-left">About Us</button>
                            <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-left">Services</button>
                            <button onClick={() => scrollToSection('case-studies')} className="text-gray-400 hover:text-white transition-colors text-left">Case Studies</button>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Services</h4>
                        <div className="flex flex-col space-y-3">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Lead Generation</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">AI Automation</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">CRM Integration</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <div className="flex flex-col space-y-3">
                            <a href="mailto:hello@scalewhisper.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                                <Mail size={16} className="mr-2" />
                                hello@scalewhisper.com
                            </a>
                            <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-white transition-colors">
                                <Phone size={16} className="mr-2" />
                                (123) 456-7890
                            </a>
                            <div className="flex items-start text-gray-400">
                                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                                <span>Toronto, ON, Canada</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Scalewhisper. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
