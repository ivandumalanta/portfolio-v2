'use client';

import { BsArrowUpRight } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] mt-20">
      <div className="max-w-4xl mx-auto  py-16">
        {/* CTA Section */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Lets collaborate!
          </h2>
          <button className="px-6 py-3 bg-[#2a2a2a] rounded-full flex items-center gap-2 hover:bg-[#3a3a3a] transition-colors group">
            <span className="text-white font-medium">Contact</span>
            <BsArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Footer Info */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>©2023 </span>
          <span>•</span>
          <a 
            href="https://twitter.com/johnnykyorov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            @johnnykyorov
          </a>
          <span>•</span>
        </div>
      </div>
    </footer>
  );
}