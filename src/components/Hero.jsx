import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-dark section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="text-gold mb-4" style={{ fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            AI + SMS Lead Reactivation
          </div>
          <h1 className="mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}>
            Reactivate Your Old Leads with <span className="text-gold">AI + SMS</span>
          </h1>
          <p className="mb-8" style={{ fontSize: '1.25rem', color: '#A0A0A0', lineHeight: '1.8' }}>
            Get 10-30 Booked Appointments/Month without lifting a finger. We use AI to mine your dead leads for gold and split the profits 50/50.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={scrollToContact} className="btn btn-primary">
              Book Your Free Demo <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </button>
            <button onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline">
              How It Works
            </button>
          </div>
          <p className="mt-4" style={{ fontSize: '0.875rem', color: '#666' }}>
            Zero Upfront Cost • Performance Based • No Tech Skills Needed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
