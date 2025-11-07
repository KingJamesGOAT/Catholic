import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export default function PageSection({ children, className = '' }: PageSectionProps) {
  return (
    <div className={`min-h-screen py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
}
