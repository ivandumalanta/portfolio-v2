'use client';

import { HiOutlineMail } from 'react-icons/hi';
import { BsGrid3X3Gap, BsPlus, BsPencil, BsTwitterX, BsDribbble } from 'react-icons/bs';

export default function SidebarNav() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {/* Main Navigation Group */}
      <nav className="bg-[#343639] rounded-full p-2 flex flex-col gap-3">
        {/* Grid/Dashboard Icon */}
        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
          <BsGrid3X3Gap className="w-5 h-5 text-black" />
        </button>

        {/* Add/Plus Icon */}
        <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
          <BsPlus className="w-6 h-6" />
        </button>

        {/* Edit/Pen Icon */}
        <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
          <BsPencil className="w-5 h-5" />
        </button>

        {/* Mail Icon */}
        <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
          <HiOutlineMail className="w-5 h-5" />
        </button>
      </nav>

      {/* Social Navigation Group */}
      <nav className="bg-[#343639] rounded-full p-2 flex flex-col gap-3">
        {/* Twitter/X Icon */}
        <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
          <BsTwitterX className="w-5 h-5" />
        </button>

        {/* Dribbble Icon */}
        <button className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
          <BsDribbble className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
}