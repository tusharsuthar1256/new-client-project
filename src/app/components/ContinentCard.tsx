'use client';

import React, { useState } from 'react';

interface Country {
  name: string;
  ports: string[];
}

interface ContinentProps {
  name: string;
  icon: string;
  countries: Country[];
}

const ContinentCard: React.FC<ContinentProps> = ({ name, icon, countries }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white shadow-md rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg"
      >
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span>{icon}</span>
          {name}
        </h2>
        {isOpen && (
          <div className="mt-4 text-gray-700">
            {countries.map((country, idx) => (
              <div key={idx} className="mb-3">
                <h4 className="font-semibold">{country.name}</h4>
                <ul className="list-disc list-inside ml-4 text-sm">
                  {country.ports.map((port, i) => (
                    <li key={i}>{port}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinentCard;
