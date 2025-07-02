'use client'

import React from 'react';
import { Anchor } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-[100vh] bg-gradient-to-br  from-blue-900 via-blue-800 to-teal-700 overflow-hidden flex justify-center items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <div className="flex items-center gap-3 mb-6">
                      {/* <img src="/logo.png" alt="Logo" className="w-30 h-14" /> */}

          <h1 className="text-4xl md:text-6xl font-bold">
            Diagnohealth Pathlab
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed">
          Comprehensive Drug & Alcohol Testing Services for the Maritime Industry
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;