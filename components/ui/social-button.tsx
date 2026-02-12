'use client';

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function SocialButton({ icon, label, href, onClick }: SocialButtonProps) {
  const baseClasses = "px-6 py-3 bg-[#2a2a2a] rounded-full flex items-center gap-2 hover:bg-[#3a3a3a] transition-colors";

  const content = (
    <>
      {icon}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}