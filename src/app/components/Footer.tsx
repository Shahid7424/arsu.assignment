import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-2 ">
                <Image
                  src="/images/footerimg.png"
                  alt="ATSU Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow</h3>
              <div className="flex space-x-3">
                <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                  <Facebook size={18} />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                  <Twitter size={18} />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                  <Linkedin size={18} />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                  <Instagram size={18} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Product Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p>785 Main Street, 2nd Block</p>
                <p>melbourne, australia</p>
              </div>
              <div>
                <a href="mailto:support@gmail.com" className="hover:text-white transition-colors">
                  support@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+000123456568" className="hover:text-white transition-colors">
                  +000 (123) 456 68
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Get Every Single Update to</h4>
              <h4 className="text-lg font-medium mb-6">Join Our Newsletter</h4>
            </div>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
                <div className="absolute left-0 top-3 ">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="text-gray-400">
                    <path d="M1 1L9 7L17 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 1H17V12C17 12.5523 16.5523 13 16 13H2C1.44772 13 1 12.5523 1 12V1Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="text-white hover:text-gray-300 transition-colors font-medium flex items-center"
              >
                Sing Up
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="ml-2">
                  <path d="M14 1L19 6L14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Copy© 2023 Atsu. All Rights reserved
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Setting & Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Faqs
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;