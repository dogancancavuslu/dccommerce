
import React from 'react';
import { Rocket, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 fade-in bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-8">About Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2">
            <p className="text-xl text-[#5B6C7D] leading-relaxed mb-8">
              DC Commerce was founded in 2025 with a clear goal: to bring practical solutions in software, e-commerce, and international trade.
            </p>
            <p className="text-lg text-[#5B6C7D] leading-relaxed mb-8">
              Based in the UK and Turkey, we develop SaaS products including Tralyz (a finance analytics platform) and Gifty (coming soon). We also run e-commerce operations across multiple countries with our own warehousing and logistics infrastructure.
            </p>
            <p className="text-lg text-[#5B6C7D] leading-relaxed mb-8">
              Beyond our own products and operations, we provide consulting services for businesses looking to expand into international markets, helping them navigate cross-border trade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-[#f8fafc] rounded-lg">
                <Rocket className="w-10 h-10 text-[#2E7DD2] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1A2B4A] mb-2">Our Mission</h3>
                <p className="text-[#5B6C7D] text-sm">
                  Empower businesses with technology and trade solutions that drive real growth.
                </p>
              </div>
              <div className="text-center p-6 bg-[#f8fafc] rounded-lg">
                <Heart className="w-10 h-10 text-[#2E7DD2] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1A2B4A] mb-2">Our Values</h3>
                <p className="text-[#5B6C7D] text-sm">
                  Honesty, quality, and genuine partnership with every client we serve.
                </p>
              </div>
              <div className="text-center p-6 bg-[#f8fafc] rounded-lg">
                <Users className="w-10 h-10 text-[#2E7DD2] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1A2B4A] mb-2">Our Approach</h3>
                <p className="text-[#5B6C7D] text-sm">
                  Direct communication, fast execution, and solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#f8fafc] p-10 text-[#1A2B4A] rounded-lg border border-[#E8ECEF] shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-[#2E7DD2]">2025</div>
                  <div className="text-sm text-[#5B6C7D]">Year Founded</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2E7DD2]">UK & TR</div>
                  <div className="text-sm text-[#5B6C7D]">Dual Headquarters</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2E7DD2]">3</div>
                  <div className="text-sm text-[#5B6C7D]">Core Service Areas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2E7DD2]">∞</div>
                  <div className="text-sm text-[#5B6C7D]">Passion for Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1A2B4A] mb-12">What Drives Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f8fafc] border border-[#E8ECEF] p-8 rounded-lg">
            <h4 className="text-xl font-bold text-[#1A2B4A] mb-4">🚀 Execution Focus</h4>
            <p className="text-[#5B6C7D] leading-relaxed">
              We move fast and focus on results. Every project is an opportunity to deliver practical value.
            </p>
          </div>
          <div className="bg-[#f8fafc] border border-[#E8ECEF] p-8 rounded-lg">
            <h4 className="text-xl font-bold text-[#1A2B4A] mb-4">🤝 Client-First</h4>
            <p className="text-[#5B6C7D] leading-relaxed">
              Your success is our success. We build relationships, not just products. When you grow, we grow.
            </p>
          </div>
          <div className="bg-[#f8fafc] border border-[#E8ECEF] p-8 rounded-lg">
            <h4 className="text-xl font-bold text-[#1A2B4A] mb-4">🌍 Global Thinking</h4>
            <p className="text-[#5B6C7D] leading-relaxed">
              From day one, we've thought globally. Whether it's software or trade, we help you reach new markets.
            </p>
          </div>
          <div className="bg-[#f8fafc] border border-[#E8ECEF] p-8 rounded-lg">
            <h4 className="text-xl font-bold text-[#1A2B4A] mb-4">⚡ Modern Tech</h4>
            <p className="text-[#5B6C7D] leading-relaxed">
              We use the latest technologies and best practices. No legacy baggage, just clean, scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
