'use client';

import { useState } from 'react';

interface TechCategory {
  title: string;
  items: string[];
}

const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    items: ['Next.js', 'React.js', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Prettier', 'SCSS']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Laravel', 'PHP', 'Express.js', 'MySQL', 'OAuth', 'JWT', 'REST']
  },
  {
    title: 'CMS and No-Code',
    items: ['Shopify', 'WordPress', 'October CMS', 'n8n']
  },
  {
    title: 'DevOps',
    items: ['IaaS', 'Docker']
  },
  {
    title: 'Dev Tools',
    items: ['Git', 'GitHub', 'Discord', 'Teams', 'JIRA', 'VS Code', 'MySQL Workbench', 'Postman', 'Insomnia']
  }
];

export default function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-16">
      {/* Collapsed View - Shows only category titles and top items */}
      {!isExpanded && (
        <div className="space-y-8">
          {techStack.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.slice(0, 8).map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-4 py-2 bg-transparent border border-white text-white text-sm font-medium rounded-lg hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expanded View - Shows all items */}
      {isExpanded && (
        <div className="space-y-8">
          {techStack.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-4 py-2 bg-transparent border border-white text-white text-sm font-medium rounded-lg hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* More Details Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-3 bg-transparent border border-white text-white text-sm font-medium rounded-lg hover:bg-white hover:text-black transition-colors"
        >
          {isExpanded ? 'Show Less' : 'More Details'}
        </button>
      </div>
    </div>
  );
}