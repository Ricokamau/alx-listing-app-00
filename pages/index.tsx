import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/common/Hero';
import FilterPills from '@/components/common/FilterPills';
import ListingGrid from '@/components/common/ListingGrid';
import { PROPERTY_LISTING_SAMPLE } from '@/constants';
import { ListingProps } from '@/interfaces';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredListings: ListingProps[] =
    activeFilter === 'All'
      ? PROPERTY_LISTING_SAMPLE
      : PROPERTY_LISTING_SAMPLE.filter(
          (listing) => listing.tag === activeFilter
        );

  const tags = ['All', 'Luxury', 'Budget', 'Modern', 'Traditional'];

  return (
    <Layout>
      <Hero />
      <div className="my-8">
        <FilterPills
          filters={tags}
          active={activeFilter}
          onChange={(filter) => setActiveFilter(filter)}
        />
      </div>
      <ListingGrid listings={filteredListings} />
    </Layout>
  );
};

export default Home;
