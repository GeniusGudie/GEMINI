import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        niche: '',
        databaseSize: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${formData.name}! We'll be in touch shortly to schedule your demo.`);
        // Here you would typically send the data to your backend
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section-padding bg-dark">
            <div className="container">
                <div className="card" style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid var(--color-gold)' }}>
                    <div className="text-center mb-8">
                        <h2 className="mb-2" style={{ fontSize: '2rem' }}>Book Your Free Demo</h2>
                        <p style={{ color: '#666' }}>
                            Ready to reactivate your leads? Fill out the form below to see if you qualify for a partnership.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="mb-2" style={{ display: 'block', fontWeight: '600' }}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="input-field"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2" style={{ display: 'block', fontWeight: '600' }}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="input-field"
                                placeholder="john@business.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mb-2" style={{ display: 'block', fontWeight: '600' }}>Business Niche</label>
                            <select
                                name="niche"
                                required
                                className="input-field"
                                value={formData.niche}
                                onChange={handleChange}
                            >
                                <option value="">Select your industry...</option>
                                <option value="Solar">Solar</option>
                                <option value="Roofing">Roofing</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Med Spa">Med Spa</option>
                                <option value="HVAC">HVAC</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-8">
                            <label className="mb-2" style={{ display: 'block', fontWeight: '600' }}>Database Size (Leads)</label>
                            <select
                                name="databaseSize"
                                required
                                className="input-field"
                                value={formData.databaseSize}
                                onChange={handleChange}
                            >
                                <option value="">Select list size...</option>
                                <option value="<500">Less than 500</option>
                                <option value="500-1000">500 - 1,000</option>
                                <option value="1000-5000">1,000 - 5,000</option>
                                <option value="5000+">5,000+</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Request Demo <Send size={18} style={{ marginLeft: '0.5rem' }} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
