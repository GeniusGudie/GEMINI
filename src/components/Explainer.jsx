import React from 'react';
import { Database, MessageSquare, CalendarCheck } from 'lucide-react';

const Explainer = () => {
    const steps = [
        {
            icon: <Database size={48} className="text-gold" />,
            title: "1. Connect Your Database",
            description: "We securely connect to your list of old, unconverted leads. These are the 'dead' leads sitting in your CRM gathering dust."
        },
        {
            icon: <MessageSquare size={48} className="text-gold" />,
            title: "2. AI Reactivation",
            description: "Our AI 'Sleeping Beauty' android sends personalized SMS messages to wake up these leads, engaging them in natural conversation."
        },
        {
            icon: <CalendarCheck size={48} className="text-gold" />,
            title: "3. Booked Appointments",
            description: "The AI qualifies the leads and books them directly onto your calendar. You only pay when you get results."
        }
    ];

    return (
        <section id="how-it-works" className="section-padding bg-white">
            <div className="container">
                <div className="text-center mb-8">
                    <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Cash in on Your Old Leads</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        Stop chasing new cold leads. There is gold hidden in your existing database. Here is how we extract it.
                    </p>
                </div>

                <div className="grid-cols-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                    {steps.map((step, index) => (
                        <div key={index} className="card text-center" style={{ border: 'none', boxShadow: 'none', background: 'transparent' }}>
                            <div style={{
                                background: 'rgba(212, 175, 55, 0.1)',
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                {step.icon}
                            </div>
                            <h3 className="mb-2" style={{ fontSize: '1.5rem' }}>{step.title}</h3>
                            <p style={{ color: '#666' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explainer;
