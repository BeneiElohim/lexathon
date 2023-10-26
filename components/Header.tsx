import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <Link href="/">
          <img className="w-32 h-auto mr-2" src="/logo.png" alt="Logo" />
        </Link>
        <div>
          <p className="text-lg font-semibold text-gray-900">StyLegally</p>
          <p className="text-sm font-medium text-gray-600">Özgün ve Yasal</p>
        </div>
      </div>
      <div className="flex">
        <Link href="/LacernoArama">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Tescil Taraması
          </button>
        </Link>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2">
          Button 2
        </button>
      </div>
      <div className="flex items-center">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-600 rounded shadow">
          Çıkış Yap
        </button>
        <div className="h-8 w-8 bg-gray-400 rounded-full ml-4"></div>
      </div>
    </header>
  );
};

export default Header;
