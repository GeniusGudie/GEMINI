import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden flex items-center justify-center" style={{ minHeight: '70vh' }}>
      {/* Background Glows */}
      <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto pointer-events-none" style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}>
        <div className="absolute" style={{
          top: '-10%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }}></div>
        <div className="absolute" style={{
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-white">
            Turn Missed <Phone className="inline-block text-pink-500 rotate-12 mx-2" size={48} strokeWidth={2.5} /> Calls Into <br />
            <span className="text-purple-400">Booked Jobs</span> <br />
            Automatically
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop losing potential customers to voicemail. Our AI answers calls 24/7, qualifies leads, and books jobs directly into your calendar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg px-8 py-3 flex items-center shadow-lg shadow-purple-900/20 transition-all font-medium"
            >
              Get Started Free
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="text-gray-400 hover:text-white px-6 py-3 flex items-center transition-colors">
              <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-2 border border-gray-700">▶</span>
              Watch Demo
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Join thousands of businesses never missing a lead again
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
