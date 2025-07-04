'use client'

import React from 'react';
import { CheckCircle, DollarSign, Globe, Shield } from 'lucide-react';



const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: DollarSign,
      title: 'Fixed Pricing – No Hidden Costs',
      description: 'Transparent, competitive pricing with no surprise fees or additional charges'
    },
    {
      icon: Globe,
      title: 'Worldwide Network of Certified Collectors',
      description: 'Access to trained professionals at major ports across the globe'
    },
    {
      icon: Shield,
      title: 'Compliance with OCIMF, USCG, US DOT, SAMHSA, NIDA',
      description: 'Meeting all international maritime and regulatory standards'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Diagnohealth Pathlab?</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="flex items-center justify-center mb-4">
                <reason.icon className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of maritime companies who trust us with their testing needs. 
                Contact us today for a personalized quote and consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300">
                  Get Free Quote
                </button>
                <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Professional consultation"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
