
import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 fade-in">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-8">Let's Talk</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-xl text-[#5B6C7D] mb-12 leading-relaxed">
              Got a project idea? Want to explore a partnership? Or just curious about what we do? We'd love to hear from you. No pressure, no hard sell — just a friendly conversation.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#2E7DD2]/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-[#2E7DD2]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A2B4A] mb-1">Location</h4>
                  <p className="text-[#5B6C7D]">Marcham, Abingdon, England, UK</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#2E7DD2]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-[#2E7DD2]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A2B4A] mb-1">Phone</h4>
                  <p className="text-[#5B6C7D]">+44 7347 246242</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#2E7DD2]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-[#2E7DD2]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A2B4A] mb-1">Email</h4>
                  <p className="text-[#5B6C7D]">hello@dccommerce.co.uk</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#2E7DD2]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="text-[#2E7DD2]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A2B4A] mb-1">Response Time</h4>
                  <p className="text-[#5B6C7D]">We usually reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#f8fafc] rounded-lg border border-[#E8ECEF]">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="text-[#2E7DD2]" size={20} />
                <h4 className="font-bold text-[#1A2B4A]">Prefer a Quick Chat?</h4>
              </div>
              <p className="text-[#5B6C7D] text-sm">
                Sometimes a quick call is all you need. Feel free to ring us during business hours (Mon-Fri, 9am-6pm GMT) for an informal chat about your ideas.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#E8ECEF] p-10 rounded-lg shadow-sm">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-[#10B981] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4">Message Sent!</h3>
                <p className="text-[#5B6C7D]">Thanks for reaching out! We'll get back to you as soon as possible.</p>
                <Button className="mt-8" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[#E8ECEF] rounded-lg focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-[#E8ECEF] rounded-lg focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">What's This About?</label>
                  <select className="w-full px-4 py-3 border border-[#E8ECEF] rounded-lg focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A] bg-white">
                    <option>Software Development</option>
                    <option>E-commerce Project</option>
                    <option>Import / Export</option>
                    <option>Partnership Opportunity</option>
                    <option>Just Saying Hello</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#E8ECEF] rounded-lg focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A]"
                    placeholder="Tell us about your project or idea..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
                <p className="text-center text-sm text-[#5B6C7D]">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
