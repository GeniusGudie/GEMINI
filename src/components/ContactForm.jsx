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
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="john@business.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Business Niche</label>
                    <select
                        name="niche"
                        required
                        className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
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

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Database Size (Leads)</label>
                    <select
                        name="databaseSize"
                        required
                        className="w-full bg-dark border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
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

                <button type="submit" className="btn btn-primary w-full flex items-center justify-center py-4 text-lg">
                    Request Demo <Send size={18} className="ml-2" />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
