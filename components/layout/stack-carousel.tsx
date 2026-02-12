'use client';

import { useEffect, useRef } from 'react';

interface StackItem {
  name: string;
  icon: string;
  bgColor: string;
}

const stackItems: StackItem[] = [
  {
    name: 'Next.js',
    icon: '🌀',
    bgColor: 'bg-gradient-to-br from-emerald-400 to-emerald-600'
  },
  {
    name: 'React',
    icon: '⚛️',
    bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600'
  },
  {
    name: 'Figma',
    icon: '🎨',
    bgColor: 'bg-gradient-to-br from-red-400 to-red-600'
  },
  {
    name: 'TypeScript',
    icon: '📘',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700'
  },
  {
    name: 'Tailwind',
    icon: '💨',
    bgColor: 'bg-gradient-to-br from-cyan-400 to-cyan-600'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700'
  }
];

export default function StackCarousel() {
  return (
    <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Stack I use</h3>
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
      

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Scrolling Animation Container */}
        <div className="flex gap-4 animate-scroll">
          {/* First Set */}
          {stackItems.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 group"
            >
              <div className={`w-13 h-13 rounded-2xl ${item.bgColor} flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform cursor-pointer`}>
                {item.icon}
              </div>
              <p className="text-xs text-gray-500 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.name}
              </p>
            </div>
          ))}
          {/* Duplicate Set for Seamless Loop */}
          {stackItems.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 group"
            >
              <div className={`w-13 h-13 rounded-2xl ${item.bgColor} flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform cursor-pointer`}>
                {item.icon}
              </div>
              <p className="text-xs text-gray-500 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#212224] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#212224] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}