// components/common/ListingGrid.tsx

import React from 'react';
import PostCard from '@/components/common/PostCard';
import { ListingProps } from '@/interfaces';

interface ListingGridProps {
  listings: ListingProps[];
}

const ListingGrid: React.FC<ListingGridProps> = ({ listings }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <PostCard key={listing.id} post={listing} />
      ))}
    </div>
  );
};

export default ListingGrid;
