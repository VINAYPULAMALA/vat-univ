import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white border-t-8 border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          
          {/* University Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Orange
              </span>
              <div className="flex flex-col ml-2 mt-1 border-l-2 border-orange-500/30 pl-2">
                <span className="text-xs font-medium tracking-widest text-orange-400">UNIVERSITY</span>
                <span className="text-[10px] text-orange-300/80">AUSTRALIA</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Committed to excellence in education, research, and community engagement since 1995.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:-rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Explore More
            </h3>
            <ul className="space-y-3">
              {['Home', 'Courses', 'Admissions', 'Events', 'News', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-orange-400 group transition-all duration-300"
                  >
                    <span className="w-2 h-[1px] bg-orange-500 opacity-0 group-hover:opacity-100 mr-2 transition-all"></span>
                    {item}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Programs
            </h3>
            <ul className="space-y-3">
              {[
                'English Courses Hub',
                'Business & Management Hub',
                'Building & Construction Hub',
                'Community Services Hub',
                'Short Courses'
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-orange-400 group transition-all duration-300"
                  >
                    <span className="w-2 h-[1px] bg-orange-500 opacity-0 group-hover:opacity-100 mr-2 transition-all"></span>
                    {item}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: '123 University Avenue, Sydney NSW 2000, Australia' },
                { icon: Phone, text: '(02) 6365 7500' },
                { icon: Mail, text: 'info@vat.vic.edu.au' }
              ].map((item, index) => {
                const Icon = item.icon as React.ElementType;
                return (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 hover:translate-y-1 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-orange-500/10 rounded-lg mr-3">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-sm text-gray-300 flex-1">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl transform -skew-y-2 blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative space-y-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Get latest course updates, event news, and special offers straight to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 text-sm placeholder-gray-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center"
                  >
                    Subscribe Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 py-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} VAT University. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-orange-400 transition-colors duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-px before:bg-orange-400 hover:before:w-full before:transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
