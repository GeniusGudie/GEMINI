import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            role: "Solar Agency Owner",
            quote: "I had a list of 5,000 dead leads. ROYA's AI reactivated them and booked 47 appointments in the first month. We closed 12 deals. It's literally free money.",
            result: "12 Closed Deals"
        },
        {
            role: "Former 9-5 Employee",
            quote: "I started this as a side hustle using the ROYA model. I just partnered with local businesses, plugged in the AI, and now I'm hitting 8-figures in profit sharing.",
            result: "8-Figure Run Rate"
        }
    ];

    return (
        <section className="section-padding bg-dark-secondary">
            <div className="container">
                <h2 className="text-center mb-8" style={{ color: 'white', fontSize: '2.5rem' }}>Real Results</h2>
                <div className="grid-cols-2">
                    {testimonials.map((item, index) => (
                        <div key={index} className="card dark">
                            <div className="mb-4 text-gold">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" style={{ display: 'inline-block', marginRight: '4px' }} />
                                ))}
                            </div>
                            <p className="mb-4" style={{ fontSize: '1.125rem', fontStyle: 'italic' }}>"{item.quote}"</p>
                            <div style={{ borderTop: '1px solid #333', paddingTop: '1rem', marginTop: '1rem' }}>
                                <p className="text-gold" style={{ fontWeight: 'bold' }}>{item.role}</p>
                                <p style={{ fontSize: '0.875rem', color: '#888' }}>Result: {item.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
