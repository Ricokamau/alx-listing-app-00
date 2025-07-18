import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ALX Listings
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
