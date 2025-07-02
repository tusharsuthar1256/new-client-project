
'use client';

import React, { useState } from 'react';
import './scroll.css'

interface TeamMember {
  name: string;
  qualification: string;
  role: string;
  summary?: string;
  expertise?: string[];
  teamRole?: string;
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Mr. Gajanan Telang',
      qualification: "Bachelor of Pharmacy",
      role: 'Laboratory Manager – Quality Manager',
    },
    {
      name: 'Ms. Vaishali Telang',
      qualification: "Diploma in Medical Laboratory Technology, B.Sc. in Biological Sample Profiling & Clinical",
      role: 'DNA Analysis Specialist',
    },
    {
      name: 'Ms. Amau Sange',
      qualification: "B.Sc. in Medical Laboratory Technology",
      role: 'Operational Testing Coordinator & Multidisciplinary Lab Specialist',
    },
    {
      name: 'Dr. A. R. Shinde',
      qualification: "B.A.M.S. (Bachelor of Ayurvedic Medicine and Surgery)",
      role: 'Medical Officer | Clinical Reviewer | Drug Analysis Specialist',
      summary: `Dr. Anand R. Shinde is a qualified Medical Officer with a strong foundation in Ayurvedic medicine and extensive experience in clinical investigations and drug monitoring. He plays a key role in reviewing medical and toxicological reports to ensure accuracy, regulatory compliance, and client safety within the maritime sector.`,
      expertise: [
        'Drug & Alcohol Test Result Review',
        'Clinical Investigation Analysis',
        'Toxicology & Drug Profiling',
        'Seafarer Health Screening',
        'Fitness-for-Duty Assessment',
        'Medical Documentation & Compliance',
        'Crew Health Monitoring & Reporting',
        'Interpretation of Laboratory Data',
        'Post-incident Medical Assessment',
      ],
      teamRole: `As a lead medical reviewer, Dr. Shinde ensures all clinical evaluations related to drug and alcohol testing are precise, confidential, and in accordance with maritime safety laws (IMO, SOLAS, ISPS).`,
    },
    {
      name: 'Dr. K. Vaishnav',
      qualification: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
      role: 'Emergency Physician | Occupational Health Consultant | Drug Testing & Toxicology Specialist',
      summary: `Dr. Karan Vaishnav is a skilled medical practitioner with a strong background in emergency medicine, industrial health, and clinical coordination. His expertise includes drug analysis, alcohol testing, and toxicology screening, with a focus on maintaining safety and compliance within the marine and offshore sectors.`,
      expertise: [
        'Drug & Alcohol Testing Oversight',
        'Clinical Toxicology & Drug Analysis',
        'Occupational & Industrial Health Care',
        'Emergency Response & Medical Coordination',
        'Crew Medical Fitness Certification',
        'Seafarer Health Screening & Compliance',
        'Medical Reporting & Risk Assessment',
      ],
      teamRole: `Dr. Karan Vaishnav plays a key role in reviewing drug and alcohol test reports, conducting crew fitness assessments, and managing post-incident medical evaluations.`,
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to delivering excellence and maintaining the highest standards of quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-teal-600 mt-1">{member.qualification}</p>
                  <p className="text-teal-700 font-medium mt-3">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
    {selectedMember && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/30">
    <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 overflow-hidden max-h-[90vh] scrollbar-4px">
      <button
        className="absolute top-4 right-5 text-3xl font-bold text-gray-400 hover:text-red-600"
        onClick={() => setSelectedMember(null)}
      >
        &times;
      </button>

      <div className="pr-4 overflow-y-auto max-h-[80vh] custom-scrollbar">
        <h2 className="text-3xl font-bold text-gray-800">{selectedMember.name}</h2>
        <p className="text-teal-600 mt-1 text-lg">{selectedMember.qualification}</p>
        <p className="text-teal-800 font-medium mt-2">{selectedMember.role}</p>

        {selectedMember.summary && (
          <>
            <h3 className="text-xl font-semibold mt-6 text-gray-700">Profile Summary:</h3>
            <p className="text-sm text-gray-600 mt-2">{selectedMember.summary}</p>
          </>
        )}

        {selectedMember.expertise && (
          <>
            <h3 className="text-xl font-semibold mt-6 text-gray-700">Core Expertise:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              {selectedMember.expertise.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {selectedMember.teamRole && (
          <>
            <h3 className="text-xl font-semibold mt-6 text-gray-700">Role in the Team:</h3>
            <p className="text-sm text-gray-600 mt-2">{selectedMember.teamRole}</p>
          </>
        )}
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Team;
