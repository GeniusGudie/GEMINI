import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card" style={{ marginBottom: '1rem', padding: '0' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--color-text-dark)'
                }}
            >
                {question}
                {isOpen ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gold" />}
            </button>
            {isOpen && (
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#666', borderTop: '1px solid #eee' }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Do I need any technical skills?",
            answer: "Absolutely not. Our system is completely done-for-you. We set up the AI, connect it to your database, and manage the conversations. You just handle the appointments."
        },
        {
            question: "Is there any upfront cost?",
            answer: "We operate on a performance basis for qualified partners. We only make money when you make money. It's a true 50/50 profit split on the deals we generate."
        },
        {
            question: "What kind of leads does this work for?",
            answer: "This works best for service-based businesses like roofers, solar companies, med spas, and real estate agents who have a list of old leads (at least 500+) that haven't converted."
        },
        {
            question: "How quickly can we start?",
            answer: "Once we agree to partner, we can have the AI up and running within 48 hours. You could see your first booked appointments this week."
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
                <div>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
