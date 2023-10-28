'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <p className="mb-4 text-center">
          Çalışma altında :) Lütfen tescil tarama kısmından devam edin.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto block">
          Close
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-r-1 border-l-1 border-quinary">
      <div className="flex items-center">
        <Link href="/">
          <img className="w-32 h-auto mr-2" src="/logo.png" alt="Logo" />
        </Link>
        <div></div>
      </div>
      <div className="flex">
        <Link href="/LacernoArama">
          <button className="bg-secondary hover:bg-tertiary text-gray-800 hover:text-quaternary font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Tasarım Taraması
          </button>
        </Link>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-secondary hover:bg-tertiary text-gray-800 hover:text-quaternary font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-2">
          Tasarımını Yükle
        </button>
      </div>
      <div className="flex items-center">
        <button className="bg-quinary hover:bg-white text-white hover:text-black font-semibold py-2 px-4 border  rounded shadow-md">
          Bülten Alarmı
        </button>
        <div className="h-8 w-8 bg-gray-400 rounded-full ml-4"></div>
      </div>
      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </header>
  );
};

export default Header;
