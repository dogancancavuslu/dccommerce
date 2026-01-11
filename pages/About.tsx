
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 fade-in bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4A] mb-8">About DC Commerce</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2">
            <p className="text-xl text-[#5B6C7D] leading-relaxed mb-8">
              Founded in Marcham, England, DC Commerce has evolved from a boutique consultancy into a leading international force in the SaaS and digital commerce sectors.
            </p>
            <p className="text-lg text-[#5B6C7D] leading-relaxed mb-8">
              Our mission is to empower enterprise organisations with robust, scalable technology that simplifies the complexities of global trade and digital operations. We believe that technology should be a catalyst for expansion, not a barrier.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4">Our Vision</h3>
                <p className="text-[#5B6C7D] leading-relaxed">
                  To be the primary technological foundation for the world's most innovative international enterprises, bridging the gap between local ambition and global scale.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1A2B4A] mb-4">Our Values</h3>
                <ul className="space-y-4 text-[#5B6C7D]">
                  <li className="flex gap-2 font-medium"><span className="text-[#2E7DD2]">●</span> Integrity and Technical Precision</li>
                  <li className="flex gap-2 font-medium"><span className="text-[#2E7DD2]">●</span> Long-term Partnership Mentality</li>
                  <li className="flex gap-2 font-medium"><span className="text-[#2E7DD2]">●</span> Security-First Architecture</li>
                  <li className="flex gap-2 font-medium"><span className="text-[#2E7DD2]">●</span> Continuous Innovation</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#f8fafc] p-10 text-[#1A2B4A] rounded-[4px] border border-[#E8ECEF] shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Company Statistics</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-[#2E7DD2]">12+</div>
                  <div className="text-sm text-[#5B6C7D]">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2E7DD2]">45</div>
                  <div className="text-sm text-[#5B6C7D]">Countries Operating In</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2E7DD2]">GBP 2bn+</div>
                  <div className="text-sm text-[#5B6C7D]">Annual Volume Processed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1A2B4A] mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Alistair Vance', role: 'Chief Executive Officer', bio: 'Former infrastructure lead at global banking conglomerates.' },
            { name: 'Sarah Kensington', role: 'Chief Technology Officer', bio: 'Expert in distributed systems and international cloud architecture.' },
            { name: 'Robert Stirling', role: 'Director of Global Trade', bio: '20+ years navigating international trade regulations and commerce.' }
          ].map((member, i) => (
            <div key={i} className="bg-[#f8fafc] border border-[#E8ECEF] p-8 rounded-[4px] hover:border-[#2E7DD2] transition-colors">
              <div className="w-24 h-24 bg-[#1A2B4A]/5 rounded-full mb-6 flex items-center justify-center border border-[#1A2B4A]/10">
                <span className="text-2xl font-bold text-[#1A2B4A]">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h4 className="text-xl font-bold text-[#1A2B4A] mb-2">{member.name}</h4>
              <div className="text-[#2E7DD2] font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</div>
              <p className="text-[#5B6C7D] text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
