
import React from 'react';
import { Code, ShoppingCart, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Software Development',
      icon: <Code className="w-12 h-12 text-[#2E7DD2]" />,
      description: 'We develop SaaS products and custom software solutions. Our finance analytics platform Tralyz is actively in use, with Gifty coming soon.',
      details: [
        'Custom web applications',
        'Mobile app development',
        'API development & integrations',
        'UI/UX design',
        'Cloud solutions',
        'Ongoing maintenance & support'
      ]
    },
    {
      title: 'E-commerce Solutions',
      icon: <ShoppingCart className="w-12 h-12 text-[#2E7DD2]" />,
      description: 'We run e-commerce operations globally with warehousing solutions in multiple countries. We also help businesses set up and scale their online presence.',
      details: [
        'E-commerce platform setup',
        'Custom online stores',
        'Payment gateway integration',
        'Inventory management',
        'Multi-channel selling',
        'Performance optimization'
      ]
    },
    {
      title: 'Import & Export',
      icon: <Package className="w-12 h-12 text-[#2E7DD2]" />,
      description: 'We provide consulting for international trade, helping businesses navigate cross-border operations and expand into new markets.',
      details: [
        'Supplier sourcing',
        'International logistics',
        'Trade documentation',
        'Market research',
        'Customs guidance',
        'Business matchmaking'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 fade-in bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-8">Our Services</h1>
          <p className="text-xl text-[#5B6C7D] leading-relaxed">
            We focus on three areas where we can make the biggest impact for your business. Simple, focused, effective.
          </p>
        </div>

        <div className="space-y-16 mb-24">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#E8ECEF] p-12 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-[#1A2B4A] mb-4">{service.title}</h2>
                  <p className="text-[#5B6C7D] leading-relaxed">{service.description}</p>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-lg font-bold text-[#1A2B4A] mb-6 border-b border-[#E8ECEF] pb-2">What We Offer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-[#2E7DD2] shrink-0" />
                        <span className="text-[#5B6C7D] font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1A2B4A] p-16 rounded-lg text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We'd love to hear about it. Whether you have a clear vision or just an idea, let's talk about how we can help bring it to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1A2B4A] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
