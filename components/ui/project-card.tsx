'use client';

import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  type: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function ProjectCard({
  title,
  type,
  description = "Description",
  imageSrc,
  imageAlt = "Project preview",
  gradientFrom = "from-red-400",
  gradientTo = "to-red-500"
}: ProjectCardProps) {
  return (
    <div className="bg-[#343639] rounded-lg overflow-hidden border border-[#3a3a3a] group hover:transform hover:scale-[1.02] transition-transform cursor-pointer">
      {/* Card Header */}
      <div className="p-1 pb-4">
        <span className="text-xs px-3 py-1.5 bg-[#343639] border border-[#3a3a3a] rounded-lg text-white font-medium inline-block">
          {type}
        </span>
        <h3 className="text-sm font-semibold mt-4 mb-1 text-white">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>

      {/* Card Image */}
      <div className="px-1 pb-1">
        <div className={`relative h-30 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} overflow-hidden`}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-black/20 rounded-xl flex items-center justify-center">
                <span className="text-white/40 text-sm">Project Preview</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}