import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import BaseCard from './BaseCard';

interface Helpline {
  name: string;
  image: string;
}

interface HelplinesCardProps {
  helplines: Helpline[];
}

const HelplinesCard = ({ helplines }: HelplinesCardProps) => {
  return (
    <BaseCard title="Helplines" icon={Phone}>
      <div className="grid grid-cols-2 gap-4">
        {helplines.map((helpline, index) => (
          <div key={index} className="relative h-24">
            <Image
              src={helpline.image}
              alt={helpline.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default HelplinesCard;