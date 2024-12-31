import React from 'react';
import Link from 'next/link';
import { Newspaper } from 'lucide-react';
import BaseCard from './BaseCard';

interface Article {
  headline: string;
  url: string;
}

interface NewsUpdatesCardProps {
  articles: Article[];
}

const NewsUpdatesCard = ({ articles }: NewsUpdatesCardProps) => {
  return (
    <BaseCard title="News and Updates" icon={Newspaper}>
      <div className="space-y-3">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.url}
            className="block text-gray-600 hover:text-[#007554] transition-colors duration-200"
          >
            {article.headline}
          </Link>
        ))}
      </div>
    </BaseCard>
  );
};

export default NewsUpdatesCard;