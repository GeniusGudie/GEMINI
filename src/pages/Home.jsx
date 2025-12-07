import React from 'react';
import Hero from '../components/Hero';
import Explainer from '../components/Explainer';
import QuickWins from '../components/QuickWins';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <QuickWins />
            <Explainer />
            <Testimonials />
            <FAQ />
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale?</h2>
                        <p className="text-gray-400">Book your free demo today and start recovering revenue.</p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Home;
