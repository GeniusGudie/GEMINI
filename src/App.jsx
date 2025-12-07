import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import QuickWins from './components/QuickWins';
import { CheckCircle, X, Zap, Clock, Users, Shield, ChevronDown, Phone } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="app flex flex-col min-h-screen bg-dark overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Stats Section */}
        <div id="quickwins">
          <QuickWins />
        </div>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
              Our Mission — We Drive Innovation To The <span className="text-purple-400">Forefront Of The Industries</span> Through Comprehensive AI Automation
            </h2>
            <div className="w-24 h-24 rounded-full border-2 border-purple-500 flex items-center justify-center mx-auto mt-12 relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20"></div>
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mt-8">
              ScaleWhisper is dedicated to revolutionizing how businesses handle communication. We believe no call should go unanswered and no opportunity lost.
            </p>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Getting Started Is <span className="text-purple-400">Easy</span></h2>
            <p className="text-center text-gray-400 mb-16">Simple steps to streamline your communication</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <Zap size={24} />, title: 'Connect Your Phone', desc: 'Simple forwarding setup takes 2 minutes' },
                { icon: <CheckCircle size={24} />, title: 'Personalize AI', desc: 'Customize your assistant\'s voice and script' },
                { icon: <Clock size={24} />, title: 'Turn On 24/7', desc: 'Instant coverage for all missed calls' },
                { icon: <Users size={24} />, title: 'Watch Leads Grow', desc: 'See appointments fill your calendar' }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-dark-card border border-gray-800 flex items-center justify-center mx-auto mb-4 group-hover:border-purple-500 transition-colors text-purple-400">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section id="services" className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Core Features - All <span className="text-purple-400">Automation</span>
            </h2>
            <p className="text-center text-gray-400 mb-16">Unlock the full potential of intelligent call handling</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-dark-card p-8 rounded-xl border border-gray-800">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Smart Call Routing</h3>
                <p className="text-gray-400 mb-4 text-sm">Transfer urgent calls to you, handle routine queries automatically.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Custom rules</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Emergency filtering</li>
                </ul>
              </div>

              <div className="bg-dark-card p-8 rounded-xl border border-gray-800">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                  <Clock size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Availability</h3>
                <p className="text-gray-400 mb-4 text-sm">Never sleep on a lead. Your AI receptionist works weekends and holidays.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Instant response</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>No waiting times</li>
                </ul>
              </div>

              <div className="bg-dark-card p-8 rounded-xl border border-gray-800">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                  <Users size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Interactive Responses</h3>
                <p className="text-gray-400 mb-4 text-sm">Natural conversations that feel like talking to a real human.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Context aware</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Polite & Professional</li>
                </ul>
              </div>

              <div className="bg-dark-card p-8 rounded-xl border border-gray-800">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                  <CheckCircle size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Audio Files & Appointments</h3>
                <p className="text-gray-400 mb-4 text-sm">Recordings of every call and direct booking into your calendar.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Call transcripts</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>Calendar sync</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section id="case-studies" className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-16">Our Case Study</h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-800 h-64 rounded-xl flex items-center justify-center border border-gray-700">
                {/* Placeholder for Video/Image */}
                <span className="text-white font-bold">CASE STUDY VIDEO</span>
              </div>
              <div className="text-left">
                <div className="mb-8">
                  <h3 className="text-white font-bold mb-2">BEFORE USING US</h3>
                  <p className="text-gray-400 text-sm">Lost revenue from missed calls. High staff costs for reception. Inconsistent follow-up.</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-red-500/10 text-red-400 text-xs rounded-full">Chaotic</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">AFTER USING US</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-white text-sm">100% Call Answer Rate</span>
                  </div>
                  <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                    <p className="text-purple-300 italic text-sm">"This tool is a backup for my business!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-dark-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Why top companies choose <span className="text-purple-400">ScaleWhisper</span>
            </h2>
            <div className="max-w-3xl mx-auto mt-16">
              <div className="grid grid-cols-3 gap-4 mb-6 border-b border-gray-800 pb-4">
                <div></div>
                <div className="text-center font-bold text-purple-400 bg-purple-500/10 py-2 rounded">ScaleWhisper</div>
                <div className="text-center font-bold text-gray-500">The Rest</div>
              </div>

              {[
                { feature: 'Instant 24/7 Answer', us: true, them: false },
                { feature: 'Smart Qualification', us: true, them: false },
                { feature: 'Direct Booking', us: true, them: false },
                { feature: 'Custom Knowledge Base', us: true, them: false },
                { feature: 'CRM Integration', us: true, them: false },
                { feature: 'Affordable Fixed Cost', us: true, them: false }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 py-4 border-b border-gray-800 items-center">
                  <div className="text-gray-300 font-medium">{row.feature}</div>
                  <div className="flex justify-center"><CheckCircle className="text-green-500 fill-green-500/20" /></div>
                  <div className="flex justify-center"><X className="text-red-500" /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">About <span className="text-purple-400">ScaleWhisper</span></h2>
            <p className="text-gray-400 mb-12">Bringing optimal results to your team</p>
            <div className="max-w-3xl mx-auto text-left space-y-6 text-gray-400 leading-relaxed">
              <p>ScaleWhisper is a premier AI automation agency dedicated to helping service businesses reclaim lost revenue.</p>
              <p>We saw too many great businesses losing customers simply because they couldn't answer the phone. We built a solution that solves this permanently.</p>
              <p>Our mission is simple: To ensure every customer interaction is handled with precision, care, and speed, no matter the time of day.</p>
              <p>Join the future of customer service. Efficient. Automated. Human-like.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-dark-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Frequently Asked <span className="text-purple-400">Questions</span>
            </h2>
            <p className="text-center text-gray-400 mb-16">Everything you need to know about our service</p>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: 'Is it really 24/7?', a: 'Yes! Your AI receptionist never sleeps, takes breaks, or calls in sick. It’s available every second of the day.' },
                { q: 'Does it sound like a robot?', a: 'No. We use advanced voice synthesis to create natural, human-like conversations that put your callers at ease.' },
                { q: 'Can I customize the script?', a: 'Absolutely. We work with you to tailor the conversation flow, ensuring it aligns perfectly with your brand voice and business needs.' },
                { q: 'How does it book appointments?', a: 'It integrates directly with your calendar (Google, Outlook, etc.) to check availability and book slots in real-time.' },
                { q: 'What happens if the AI doesn\'t know the answer?', a: 'You can set rules for the AI to take a message or forward the call to a specific human number for complex queries.' }
              ].map((faq, index) => (
                <div key={index} className="bg-dark-card border border-gray-800 rounded-lg p-6 cursor-pointer" onClick={() => toggleFaq(index)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">{faq.q}</h3>
                    <ChevronDown
                      className={`text-purple-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </div>
                  {openFaq === index && (
                    <p className="text-gray-400 mt-4 leading-relaxed border-t border-gray-700 pt-4">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Turn Your <span className="text-purple-400">Dreams Into Reality</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Ready to stop missing calls and start booking more jobs?
              Get your custom AI receptionist setup today.
            </p>

            {/* Calendar Embed Image Placeholder */}
            <div className="max-w-4xl mx-auto bg-dark-card rounded-xl p-4 border border-gray-800 shadow-2xl">
              <div className="aspect-video bg-gray-900 rounded flex items-center justify-center">
                <span className="text-gray-500">CALENDAR BOOKING WIDGET PREVIEW</span>
              </div>
            </div>
            <div className="mt-12">
              <button className="btn bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold text-lg transition-colors">
                Book A Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div >
  );
}

export default App;
