import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="text-2xl font-bold hover:underline cursor-pointer">
          GCP Study App
        </Link>
      </div>
    </header>
  );
};

export default Header;
