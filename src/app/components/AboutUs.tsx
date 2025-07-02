'use client'
import React from 'react';
import { Award, Globe, Shield } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Diagnohealth Pathlab</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-6">
                Diagnohealth Pathlab is an India-based company with ISO 9001:2015 and ISO QMS-certified testing laboratories. 
                We specialize in providing comprehensive Drug & Alcohol Testing Services for the maritime industry, with coverage across major ports globally.
              </p>
              <p className="mb-6">
                We offer cost-effective, fixed-price packages, delivering reliable services that ensure compliance with international regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-teal-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">ISO Certified</h3>
                <p className="text-sm text-gray-600">9001:2015 & QMS</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Global Coverage</h3>
                <p className="text-sm text-gray-600">Major Ports Worldwide</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Compliant</h3>
                <p className="text-sm text-gray-600">International Standards</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Laboratory testing"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;