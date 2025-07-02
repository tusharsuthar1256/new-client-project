'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';



const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

const handleNavClick = (href: string) => {
  const isHome = window.location.pathname === '/';

  if (!isHome) {
    // Navigate to homepage with hash
    router.push('/' + href);
  } else {
    // Always scroll manually with smooth behavior
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Manually update the URL hash too, to keep it visible in address bar
      history.pushState(null, '', href);
    } else {
      // If element is not found, fallback to hash change
      window.location.hash = href;
    }
  }

  setIsOpen(false);
};



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    // { name: 'Why Choose Us', href: '#why-choose' },
    // { name: 'Our Team', href: '#team' },
    { name: 'Our Clients', href: '#clients' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 pb-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href='/'>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <image src="/logo.png" alt="Logo" className="w-18 h-8" />

            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              Diagnohealth
            </span>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-teal-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Link href='/joinnow'>
             <button className="font-medium transition-colors py-1.5 px-3.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white  rounded-lg hover:from-blue-700 hover:to-teal-700  duration-300 transform hover:scale-101">
                Join Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-sm rounded-lg">
            <div className="py-4 px-2 space-y-2">
              {navItems.map((item) => (
                <Link href='/'>
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-300"
                >
                  {item.name}
                </button>
                </Link>
              ))}
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
