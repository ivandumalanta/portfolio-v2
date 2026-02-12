'use client';

import Image from 'next/image';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  logo?: string;
  badgeColor: string;
}

const certificates: Certificate[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    badgeColor: 'bg-orange-500'
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: '2023',
    badgeColor: 'bg-blue-500'
  }
];

export default function CertificateCards() {
  return (
    <div className="mb-16">
      {/* Header with View All */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Certifications</h3>
        <a 
          href="#" 
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span>View All</span>
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
      
      {/* Cards Container with Fade */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 bg-[#2a2a2a] border border-[#3a3a3a] rounded-2xl p-6 hover:border-[#4a4a4a] transition-colors"
            >
              {/* Badge */}
              <div className={`w-12 h-12 ${cert.badgeColor} rounded-xl mb-4 flex items-center justify-center`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>

              {/* Content */}
              <h4 className="text-sm font-bold text-white mb-2">{cert.title}</h4>
              <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-xs text-gray-500">Issued {cert.date}</p>
            </div>
          ))}
        </div>

        {/* Right Fade Effect */}
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}