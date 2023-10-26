import React from 'react';
import ItemComponent from './ItemComponent';
import { Item } from '@/types/types';

interface ResultsPageProps {
  items: Item[];
}

const ResultsPage: React.FC<ResultsPageProps> = ({ items }) => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-xl font-medium mb-6 text-center">
        Tasarım Hakkı İhlali Oluşturabilecek Tasarımlar
      </h1>

      <div className="flex flex-wrap justify-between">
        {items.map((item) => (
          <ItemComponent
            key={item.id}
            percentage={item.percentage}
            imageUrl={item.imageUrl}
            falsePositive={item.falsePositive}
            isTescilli={item.isTescilli}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
