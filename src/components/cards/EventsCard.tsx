'use client';
import React from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import BaseCard from './BaseCard';

interface Event {
  title: string;
  url: string;
}

interface EventsCardProps {
  events: Event[];
}

const EventsCard = ({ events }: EventsCardProps) => {
  return (
    <BaseCard title="Events & Billboard" icon={Calendar}>
      <div className="space-y-3">
        {events.map((event, index) => (
          <Link
            key={index}
            href={event.url}
            className="block text-gray-600 hover:text-[#007554] transition-colors duration-200"
          >
            {event.title}
          </Link>
        ))}
      </div>
    </BaseCard>
  );
};

export default EventsCard;