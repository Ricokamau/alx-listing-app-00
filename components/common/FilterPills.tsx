import React from 'react';

interface FilterPillsProps {
  filters: string[];
  activeFilter: string;
  onFilterClick: (filter: string) => void;
}

const FilterPills: React.FC<FilterPillsProps> = ({
  filters,
  activeFilter,
  onFilterClick,
}) => {
  return (
    <div className="flex flex-wrap gap-2 py-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterClick(filter)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
            activeFilter === filter
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterPills;
