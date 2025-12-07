import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark-secondary to-dark -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300 font-medium tracking-wide">AI-NATIVE AUTOMATION</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-white">
              The definitive AI growth partner for fast-moving <span className="text-gold">insurance brokers.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              Revive orphan policies, automate outreach, and unlock hidden commissions without lifting a finger.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4 group">
                Start Growth Engine
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/case-studies" className="btn btn-outline text-lg px-8 py-4">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
