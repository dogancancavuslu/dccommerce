
import React from 'react';
import { Server, ShoppingCart, Globe, Database, ShieldCheck, Activity } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Enterprise SaaS Solutions',
      icon: <Server className="w-12 h-12 text-[#2E7DD2]" />,
      details: [
        'Custom cloud-native architecture',
        'Scalable multi-tenant infrastructures',
        'Real-time data synchronization across regions',
        'Advanced API management and integration'
      ]
    },
    {
      title: 'Global E-commerce Systems',
      icon: <ShoppingCart className="w-12 h-12 text-[#2E7DD2]" />,
      details: [
        'Multi-currency and multi-language support',
        'Automated international tax and compliance logic',
        'High-volume transaction processing',
        'Unified inventory management for global stock'
      ]
    },
    {
      title: 'Trade Intelligence Platforms',
      icon: <Globe className="w-12 h-12 text-[#2E7DD2]" />,
      details: [
        'International trade route optimization',
        'Customs and regulatory data automation',
        'Predictive supply chain analytics',
        'Global market penetration intelligence'
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 fade-in bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-8">Our Service Portfolio</h1>
          <p className="text-xl text-[#5B6C7D] leading-relaxed">
            DC Commerce provides the technical backbone for modern international enterprises. Our solutions are designed for security, scalability, and technical excellence.
          </p>
        </div>

        <div className="space-y-16 mb-24">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#E8ECEF] p-12 rounded-[4px] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-[#1A2B4A] mb-4">{service.title}</h2>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-lg font-bold text-[#1A2B4A] mb-6 border-b border-[#E8ECEF] pb-2">Core Capabilities</h3>
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

        <div className="bg-[#E8ECEF] p-16 rounded-[4px] border border-[#1A2B4A]/5">
          <h2 className="text-2xl font-bold text-[#1A2B4A] mb-12 text-center">Technical Infrastructure Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[#1A2B4A]">
            <div className="text-center p-6">
              <Database className="w-10 h-10 mb-4 mx-auto" />
              <h4 className="font-bold mb-2">Data Sovereignty</h4>
              <p className="text-sm text-[#5B6C7D]">Compliant with local data residency requirements globally.</p>
            </div>
            <div className="text-center p-6">
              <ShieldCheck className="w-10 h-10 mb-4 mx-auto" />
              <h4 className="font-bold mb-2">Zero Trust Security</h4>
              <p className="text-sm text-[#5B6C7D]">Implementing the highest standards of access control.</p>
            </div>
            <div className="text-center p-6">
              <Activity className="w-10 h-10 mb-4 mx-auto" />
              <h4 className="font-bold mb-2">99.99% Availability</h4>
              <p className="text-sm text-[#5B6C7D]">Engineered for mission-critical uptime requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
