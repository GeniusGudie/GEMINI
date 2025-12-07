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
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block mb-2 font-semibold text-white">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold text-white">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@business.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold text-white">Business Niche</label>
                    <select
                        name="niche"
                        required
                        value={formData.niche}
                        onChange={handleChange}
                    >
                        <option value="">Select your niche</option>
                        <option value="personal">Personal Lines</option>
                        <option value="commercial">Commercial Lines</option>
                        <option value="both">Both</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold text-white">Database Size</label>
                    <select
                        name="databaseSize"
                        required
                        value={formData.databaseSize}
                        onChange={handleChange}
                    >
                        <option value="">Select database size</option>
                        <option value="small">&lt; 1,000 leads</option>
                        <option value="medium">1,000 - 5,000 leads</option>
                        <option value="large">5,000 - 10,000 leads</option>
                        <option value="xlarge">10,000+ leads</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-full justify-center flex items-center text-lg py-4">
                    Book Your Free Demo
                    <Send size={20} className="ml-2" />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
