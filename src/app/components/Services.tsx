'use client'

import React from 'react';
import { TestTube, Droplets, Package, Ship } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: TestTube,
      title: 'Marine Drug & Alcohol Testing',
      price: 'USD 38/test/person',
      description: 'Compliant with OCIMF, USCG, US DOT, SAMHSA, NIDA',
      features: ['Comprehensive screening', '24/7 availability', 'Certified collectors', 'Fast results']
    },
    {
      icon: Droplets,
      title: 'Chemical Exposure Testing',
      price: 'USD 60/sample/chemical',
      description: 'Testing Benzene, Toluene, and other hazardous chemicals',
      features: ['Benzene testing', 'Toluene analysis', 'VOC screening', 'Regulatory compliance']
    },
    {
      icon: Package,
      title: 'Emergency Sampling Kits',
      price: 'USD 200/kit (12 kits)',
      description: 'Includes COC forms, barcodes, instruction manuals',
      features: ['Complete kit contents', 'Proper documentation', 'Easy-to-follow guides', 'Bulk pricing']
    },
    {
      icon: Ship,
      title: 'Water Testing',
      price: 'USD 150/test',
      description: 'Ensures compliance with maritime water standards',
      features: ['Potability testing', 'Contamination analysis', 'Regulatory standards', 'Quality assurance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive testing solutions designed specifically for the maritime industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-2xl font-bold text-teal-600 mb-2">{service.price}</div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;