'use client'

import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-8 h-8 text-teal-400" />
              <span className="text-xl font-bold">Diagnohealth Pathlab</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of comprehensive Drug & Alcohol Testing Services for the maritime industry worldwide.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Our Services</a></li>
              <li><a href="#why-choose" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Why Choose Us</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Our Team</a></li>
              <li><a href="#clients" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Our Clients</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Drug & Alcohol Testing</span></li>
              <li><span className="text-gray-300">Chemical Exposure Testing</span></li>
              <li><span className="text-gray-300">Emergency Sampling Kits</span></li>
              <li><span className="text-gray-300">Water Testing</span></li>
              <li><span className="text-gray-300">Compliance Consulting</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-gray-300 text-sm">operationsdiagnohealth@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-gray-300 text-sm">+91 82912 92085</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Maritime Plaza<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Diagnohealth Pathlab. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Terms & Conditions</a>
              <a href="#sitemap" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;