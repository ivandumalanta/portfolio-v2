'use client';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  isHighlighted?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    year: 'Sept 2025 - Present',
    title: 'Full Stack Developer',
    company: 'Upward Management Insurance Services',
    isHighlighted: true
  },
  {
    year: 'Aug 2024 - July 2025',
    title: 'Backend Developer',
    company: 'Makerspace Innovhub'
  },
  {
    year: '2020 - 2024',
    title: 'BS Information Technology',
    company: 'San Carlos College'
  },
  {
    year: '2019',
    title: 'Hello World! 👋',
    company: 'Wrote my first line of code'
  }
];

export default function Timeline() {
  return (
    <div className="mb-16">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-700"></div>

        {/* Timeline Items */}
        <div className="relative space-y-6">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 group relative"
            >
              {/* Checkbox */}
              <div className="flex-shrink-0 pt-0.5 relative z-10">
                <div className={`w-4 h-4 rounded-sm ${
                  item.isHighlighted 
                    ? 'bg-white' 
                    : 'border border-gray-600 bg-[#1a1a1a]'
                }`}>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0 flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-tight">
                    {item.company}
                  </p>
                </div>

                {/* Year */}
                <div className="flex-shrink-0 pt-0.5">
                  <span className="text-xs font-normal text-white">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}