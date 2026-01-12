
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { STATS, DIFFERENTIATORS, SERVICE_HIGHLIGHTS } from '../constants';
import { ChevronRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
            alt="Startup Team Working"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#2E7DD2]/10 text-[#2E7DD2] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} /> Fresh Ideas, Bold Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A2B4A] leading-tight mb-6">
              Your Partner in Software, Trade & E-commerce
            </h1>
            <p className="text-xl text-[#5B6C7D] mb-10 leading-relaxed max-w-2xl">
              We're a young startup helping businesses grow through custom software development, international trade, and e-commerce solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={() => navigate('/contact')}>
                Let's Talk
              </Button>
              <Button variant="secondary" onClick={() => navigate('/services')}>
                What We Do
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A2B4A] mb-6">We're Just Getting Started</h2>
              <p className="text-lg text-[#5B6C7D] leading-relaxed mb-8">
                DC Commerce is a fresh startup based in the UK, driven by passion and expertise. We specialize in software development, import-export operations, and e-commerce solutions. Dedicated team brings agility and innovation to every project.
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
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=1000"
                alt="Startup Team"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#2E7DD2] text-white p-6 rounded-lg hidden md:block">
                <p className="text-sm font-semibold mb-1">🇬🇧 UK Based</p>
                <p className="text-lg font-bold">Global Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#E8ECEF]">
        <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1A2B4A] mb-4">What We Do</h2>
          <p className="text-[#5B6C7D] max-w-2xl mx-auto">Three core areas where we help businesses grow and succeed.</p>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_HIGHLIGHTS.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-b-4 border-transparent hover:border-[#2E7DD2] group">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1A2B4A] mb-4">{service.title}</h3>
              <p className="text-[#5B6C7D] leading-relaxed mb-8">{service.description}</p>
              <Link to="/services" className="text-[#2E7DD2] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ChevronRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white border-t border-[#E8ECEF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-[#1A2B4A] mb-4">Why Work With Us?</h2>
              <p className="text-[#5B6C7D] text-lg">We're small, but that's our superpower. Direct communication, fast execution, and genuine care for your success.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENTIATORS.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 p-6 bg-[#f8fafc] rounded-lg border border-[#E8ECEF]">
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#1A2B4A]">{item.title}</h4>
                <p className="text-[#5B6C7D] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1A2B4A] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Whether you need custom software, want to expand your e-commerce presence, or explore international trade opportunities — we're here to help.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button onClick={() => navigate('/contact')}>
              Get in Touch
            </Button>
            <p className="text-sm text-white/60">No commitment. Let's just have a conversation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
