'use client';

import SidebarNav from '@/components/layout/sidebar-nav';
import SocialButton from '@/components/ui/social-button';
import ProjectCard from '@/components/ui/project-card';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTwitterX, BsDribbble, BsSearch } from 'react-icons/bs';
import Footer from '@/components/layout/footer';
import StackCarousel from '@/components/layout/stack-carousel';
import TechStack from '@/components/layout/tech-stack';
import ExperienceCard  from '@/components/ui/experience-card';
import CertificateCards from '@/components/ui/certificate-card';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#212224] text-white">
      {/* Sidebar Navigation */}
      <SidebarNav />

      <main className="max-w-4xl mx-auto px-50 py-16">
        {/* Hero Section */}
        <div className="mt-5 mb-16">
          {/* Availability Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-white font-medium">Open for project.</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Ivan Christian<br />
            <span className="text-gray-500">a FullStack Developer.</span>
          </h1>

          {/* Social Buttons */}
          <div className="flex gap-4 mb-12">
            <SocialButton
              icon={<HiOutlineMail className="w-4 h-4" />}
              label="Email"
              href="mailto:your@email.com"
            />
            
            <SocialButton
              icon={<BsTwitterX className="w-4 h-4" />}
              label="Twitter"
              href="https://twitter.com/yourusername"
            />
            
            <SocialButton
              icon={<BsDribbble className="w-4 h-4" />}
              label="Dribbble"
              href="https://dribbble.com/yourusername"
            />
          </div>

          {/* Bio */}
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            My name is Johnny Kyorov and I am a UI Designer from Bulgaria with a passion for creating exceptional SaaS, Design Systems & NoCode Development.
          </p>
        </div>
        <StackCarousel />
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Experience</h2>
            
          </div>
         <ExperienceCard />
         <CertificateCards />
        </div>
        {/* My Feed Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">My Feed</h2>
            <button className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#3a3a3a] transition-colors">
              <BsSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            <ProjectCard
              title="Money Transfer App"
              type="Project"
              description="Description"
              gradientFrom="from-red-400"
              gradientTo="to-red-500"
            />

            <ProjectCard
              title="Headspace App"
               type="Project"
              description="Description"
              gradientFrom="from-orange-400"
              gradientTo="to-orange-500"
            />
             <ProjectCard
              title="How to Become a Developer"
              type="Blog"
              description="Description"
              gradientFrom="from-red-400"
              gradientTo="to-red-500"
            />

            <ProjectCard
              title="How LLMs works"
               type="Blog"
              description="Description"
              gradientFrom="from-orange-400"
              gradientTo="to-orange-500"
            />
            
          </div>
        </div>
             {/* Footer */}
      <Footer />
      </main>
 
    </div>
  );
}