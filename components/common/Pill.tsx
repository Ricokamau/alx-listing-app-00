import React from 'react';
import { PillProps } from '@/interfaces';

const Pill = ({ label, active = false, onClick }: PillProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium border ${
        active
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-700 border-gray-300'
      } hover:shadow`}
    >
      {label}
    </button>
  );
};

export default Pill;
