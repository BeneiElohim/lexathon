import React, { useState } from 'react';
import Link from 'next/link';

const ImageUploadSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRectangleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="bg-gray-50 p-8 max-w-xl mx-auto rounded-lg">
      <h1 className="text-xl font-medium mb-6 text-center">
        TASARIM GÖRSELİ YÜKLE
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 h-48 cursor-pointer"
              onClick={handleRectangleClick}></div>
          ))}
      </div>

      <div className="text-center">
        <Link href="./ResimYukleme/Sonuc">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-5 border border-gray-300 rounded-lg">
            Taramayı Başlat
          </button>
        </Link>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p>Çalışma altında :) Lütfen tarama tuşuna basın</p>
            <button
              className="mt-4 bg-gray-200 px-4 py-2 rounded"
              onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadSection;
