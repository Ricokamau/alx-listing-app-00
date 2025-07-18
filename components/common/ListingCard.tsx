import React from 'react';
import { ListingProps } from '@/interfaces';

const ListingCard = ({ title, location, price, image, tag }: ListingProps) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="inline-block text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded mb-2">
          {tag}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-blue-600 font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ListingCard;
