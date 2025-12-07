import React from 'react';
import Hero from './components/Hero';
import Explainer from './components/Explainer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="app">
      <Hero />
      <Explainer />
      <Testimonials />
      <FAQ />
      <ContactForm />

      <footer className="bg-dark-secondary" style={{ padding: '2rem 0', borderTop: '1px solid #333' }}>
        <div className="container text-center">
          <p style={{ color: '#888', marginBottom: '1rem' }}>
            &copy; {new Date().getFullYear()} ROYA AI Systems. All rights reserved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
