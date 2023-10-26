import React from 'react';
import { Item } from '@/types/types';
import Link from 'next/link';

interface ItemComponentProps {
  percentage: Item['percentage'];
  imageUrl: Item['imageUrl'];
  isTescilli: Item['isTescilli'];
}

const ItemComponent: React.FC<ItemComponentProps> = ({
  percentage,
  imageUrl,
  isTescilli,
}) => {
  return (
    <div className="border p-4 w-48 h-96 my-5">
      <p className="mb-4 text-center font-bold">{percentage}%</p>
      <Link href="/LacernoArama/ResimYukleme/Arama/Sonuc">
        {/* Using the imageURL */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Item Image"
            className="mb-4 w-full h-60 object-cover"
          />
        ) : (
          <div className="bg-gray-200 mb-4 w-full h-60"></div>
        )}
      </Link>

      <p className="text-center">{isTescilli ? 'Tescilli' : 'Tescilsiz'}</p>
    </div>
  );
};

export default ItemComponent;
