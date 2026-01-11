
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { STATS, DIFFERENTIATORS, SERVICE_HIGHLIGHTS } from '../constants';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
            alt="Abstract Tech Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A2B4A] leading-tight mb-6">
              Enterprise Technology Solutions for Global Scale and Innovation
            </h1>
            <p className="text-xl text-[#5B6C7D] mb-10 leading-relaxed max-w-2xl">
              We deliver enterprise-grade SaaS platforms and e-commerce solutions that drive international growth and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={() => navigate('/services')}>
                Discover Our Solutions
              </Button>
              <Button variant="secondary" onClick={() => navigate('/about')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A2B4A] mb-6">A Legacy of Technological Leadership</h2>
              <p className="text-lg text-[#5B6C7D] leading-relaxed mb-8">
                DC Commerce operates at the intersection of innovation and stability. With over a decade of experience, we have supported hundreds of enterprise clients in navigating the complexities of international SaaS deployment and large-scale digital commerce.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {STATS.map((stat, index) => (
                  <div key={index} className="border-l-4 border-[#2E7DD2] pl-4">
                    <div className="text-3xl font-bold text-[#1A2B4A] mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-[#5B6C7D] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="DC Commerce Office" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#E8ECEF] border border-[#1A2B4A]/10 text-[#1A2B4A] p-8 rounded-lg hidden md:block">
                <p className="text-sm font-semibold mb-1">UK Headquartered</p>
                <p className="text-xl font-bold">International Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#E8ECEF]">
        <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A2B4A] mb-4">Core Competencies</h2>
          <p className="text-[#5B6C7D] max-w-2xl mx-auto">Providing the infrastructure and intelligence required for global market dominance.</p>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_HIGHLIGHTS.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-[4px] shadow-sm hover:shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-[#2E7DD2] group">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-4">{service.title}</h3>
              <p className="text-[#5B6C7D] leading-relaxed mb-8">{service.description}</p>
              <Link to="/services" className="text-[#2E7DD2] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn Details <ChevronRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="text-sm font-bold text-[#5B6C7D] uppercase tracking-[0.2em] mb-12">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-black italic tracking-tighter">FINTECH</div>
            <div className="text-2xl font-black tracking-widest">LOGISTIX</div>
            <div className="text-2xl font-bold uppercase">EuroTrade</div>
            <div className="text-2xl font-serif font-bold">GlobalSaaS</div>
            <div className="text-2xl font-mono">CLOUDCORE</div>
            <div className="text-2xl font-black">RETAIL.PRO</div>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-8 border-t border-[#E8ECEF] pt-12">
            {['ISO 27001 Certified', 'GDPR Compliant', 'PCI DSS Level 1', 'Cyber Essentials Plus'].map((badge, i) => (
              <span key={i} className="px-4 py-2 bg-[#E8ECEF] text-[#1A2B4A] text-xs font-bold rounded-full">{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white border-t border-[#E8ECEF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-[#1A2B4A] mb-4">Strategic Competitive Advantages</h2>
              <p className="text-[#5B6C7D] text-lg">Our foundation is built on technical precision and an unwavering commitment to client success.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENTIATORS.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 p-6 bg-[#f8fafc] rounded-[4px] border border-[#E8ECEF]">
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-[4px] shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#1A2B4A]">{item.title}</h4>
                <p className="text-[#5B6C7D] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light CTA Section */}
      <section className="py-24 bg-[#f8fafc] text-[#1A2B4A] border-t border-[#E8ECEF]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with a Leader in Global Technology</h2>
          <p className="text-xl text-[#5B6C7D] mb-10 max-w-2xl mx-auto">
            Discuss your international SaaS or e-commerce requirements with our specialist consultants today.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button onClick={() => navigate('/contact')}>
              Get in Touch
            </Button>
            <p className="text-sm text-[#5B6C7D]">Initial technical consultation response within 24 business hours.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
