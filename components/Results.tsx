import React from 'react';

const Results = () => {
  return (
    <div className="bg-primary p-8 max-w-4xl mx-auto rounded-lg mt-8">
      <h1 className="text-xl font-medium mb-6 text-center">
        XYZ Markası Tescilli/Tescilsiz
      </h1>

      <div className="flex">
        {/* Image Section */}
        <div className="mr-8">
          <div className="bg-gray-200 w-72 h-72 mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-gray-200 w-32 h-32"></div>
              ))}
          </div>
        </div>

        {/* Details Section */}
        <div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Tescil No:</label>
            <input
              type="text"
              className="border rounded w-full py-2 px-3"
              value="218317294"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Tescil tarihi:</label>
            <input
              type="text"
              className="border rounded w-full py-2 px-3"
              placeholder="Tarih Giriniz"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Piyasaya sürülme tarihi:
            </label>
            <input
              type="text"
              className="border rounded w-full py-2 px-3"
              placeholder="Tarih Giriniz"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
