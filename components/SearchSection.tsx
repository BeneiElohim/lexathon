'use client';
import React from 'react';
import Link from 'next/link';
const SearchSection = () => {
  return (
    <div className="bg-gray-50 p-8 max-w-md mx-auto rounded-lg">
      <h1 className="text-xl font-medium mb-4 text-center">
        TASARIMIN LOCARNO SINIFI
      </h1>

      <div className="mb-6">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
        />
      </div>

      <div className="text-center flex justify-between ">
        <Link href="./LacernoArama/ResimYukleme">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-5 border border-gray-300 rounded-lg">
            Adım 2
          </button>
        </Link>
        <Link href="https://www.turkpatent.gov.tr/tasarim-locarno-siniflandirmasi">
          Locarno sınıfını bilmiyor musunuz?
        </Link>
      </div>
    </div>
  );
};

export default SearchSection;
