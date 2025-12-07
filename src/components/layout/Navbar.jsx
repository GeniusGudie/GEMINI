import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About Us', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Case Studies', id: 'case-studies' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark opacity-90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6">
                {/* Top bar with tagline */}
                {!scrolled && (
                    <div className="text-center mb-3 pb-3 border-b border-white-10">
                        <p className="text-sm text-gray-400">
                            Stop losing revenue to missed calls. Get 24/7 AI Receptionist coverage that books appointments automatically.
                        </p>
                    </div>
                )}

                <div className="flex justify-between items-center">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-2xl font-bold text-white tracking-tighter cursor-pointer"
                    >
                        Scale<span className="text-gold">whisper</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden-mobile flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="text-sm font-medium transition-colors hover:text-gold text-gray-300"
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn btn-primary text-sm px-5 py-2"
                        >
                            Reactivate My Old Leads
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="hidden-desktop text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="hidden-desktop absolute w-full bg-dark-secondary border-t border-gray-800 shadow-xl" style={{ top: '100%', left: 0 }}>
                    <div className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="px-6 py-3 text-base font-medium text-left text-gray-300 hover:text-white hover:bg-white-5 transition-all"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="px-6 mt-4 mb-2">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn btn-primary w-full justify-center flex items-center"
                            >
                                Reactivate My Old Leads
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
