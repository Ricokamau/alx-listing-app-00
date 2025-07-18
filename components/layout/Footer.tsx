import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-10">
      <div className="container mx-auto text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ALX Listings. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
