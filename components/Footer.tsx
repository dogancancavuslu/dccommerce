
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Linkedin, Twitter, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E8ECEF] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-[#1A2B4A]">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo />
            </div>
            <p className="text-[#5B6C7D] leading-relaxed mb-6">
              Leading the digital transformation of international commerce through enterprise-grade technology and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-[#E8ECEF] hover:bg-[#E8ECEF] transition-colors rounded-[4px] text-[#1A2B4A]">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 border border-[#E8ECEF] hover:bg-[#E8ECEF] transition-colors rounded-[4px] text-[#1A2B4A]">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[#5B6C7D] hover:text-[#2E7DD2] transition-all">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-[#5B6C7D]">
              <li><Link to="/services" className="hover:text-[#2E7DD2]">SaaS Platform</Link></li>
              <li><Link to="/services" className="hover:text-[#2E7DD2]">Digital Commerce</Link></li>
              <li><Link to="/services" className="hover:text-[#2E7DD2]">Trade Intelligence</Link></li>
              <li><Link to="/services" className="hover:text-[#2E7DD2]">Managed Solutions</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-[#5B6C7D]">
              <p>8/A, Greenwood Grove, Dc Commerce Office, Marcham, Abingdon, England, OX13 6F</p>
              <p className="flex items-center gap-2"><Phone size={14} /> +44 7347 246242</p>
              <p>Hours: Mon - Fri, 09:00 - 18:00 GMT</p>
              <p>Email: contact@dccommerce.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E8ECEF] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#5B6C7D]">
          <p>© {new Date().getFullYear()} DC Commerce Technologies Ltd. Registered in England & Wales: 12345678.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-[#1A2B4A]">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#1A2B4A]">Terms of Service</Link>
            <Link to="#" className="hover:text-[#1A2B4A]">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
