
import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to handle submission would go here
  };

  return (
    <div className="pt-32 pb-24 fade-in">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-8">Get in Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-xl text-[#5B6C7D] mb-12 leading-relaxed">
              Contact our team of technology consultants to discuss your enterprise requirements. We offer technical evaluations for international SaaS and commerce operations.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#E8ECEF] rounded-[4px] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#1A2B4A]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A2B4A] mb-1">Corporate Headquarters</h4>
                  <p className="text-[#5B6C7D]">8/A, Greenwood Grove, Dc Commerce Office, Marcham, Abingdon, England, OX13 6F</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#E8ECEF] rounded-[4px] flex items-center justify-center shrink-0">
                  <Phone className="text-[#1A2B4A]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A2B4A] mb-1">Direct Line</h4>
                  <p className="text-[#5B6C7D]">+44 7347 246242</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#E8ECEF] rounded-[4px] flex items-center justify-center shrink-0">
                  <Clock className="text-[#1A2B4A]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A2B4A] mb-1">Business Hours</h4>
                  <p className="text-[#5B6C7D]">Monday — Friday: 09:00 - 18:00 GMT</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#E8ECEF] rounded-[4px] flex items-center justify-center shrink-0">
                  <Mail className="text-[#1A2B4A]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#1A2B4A] mb-1">General Inquiries</h4>
                  <p className="text-[#5B6C7D]">contact@nexusglobal.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E8ECEF] p-10 rounded-[4px] shadow-sm">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-[#10B981] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4">Message Received</h3>
                <p className="text-[#5B6C7D]">Thank you for your inquiry. A senior technical consultant will review your request and contact you within 24 business hours.</p>
                <Button className="mt-8" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-[#E8ECEF] rounded-[4px] focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A]"
                      placeholder="e.g. John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Work Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-[#E8ECEF] rounded-[4px] focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A]"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Company Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-[#E8ECEF] rounded-[4px] focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A]"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 border border-[#E8ECEF] rounded-[4px] focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A] bg-white">
                    <option>International SaaS Deployment</option>
                    <option>E-commerce Infrastructure</option>
                    <option>Trade Compliance Consulting</option>
                    <option>Technical Partnership</option>
                    <option>Other Professional Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A2B4A] mb-2">Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#E8ECEF] rounded-[4px] focus:outline-none focus:border-[#2E7DD2] text-[#1A2B4A]"
                    placeholder="Provide a brief summary of your requirements..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">Submit Inquiry</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
