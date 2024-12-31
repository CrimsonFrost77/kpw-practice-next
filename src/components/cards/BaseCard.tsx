import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BaseCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

const BaseCard = ({ title, icon: Icon, children, className = '' }: BaseCardProps) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center justify-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-[#007554]" />
        <h2 className="text-xl font-semibold text-[#007554] ">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default BaseCard;