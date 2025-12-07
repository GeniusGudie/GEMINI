import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
                    Scale<span className="text-gold">whisper</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-gray-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="btn btn-primary text-sm px-5 py-2.5"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-dark-secondary border-t border-gray-800 shadow-xl">
                    <div className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-6 py-3 text-base font-medium border-l-4 transition-all ${location.pathname === link.path
                                        ? 'border-gold text-gold bg-white/5'
                                        : 'border-transparent text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-6 mt-4 mb-2">
                            <Link to="/contact" className="btn btn-primary w-full justify-center">
                                Get Started <ChevronRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
