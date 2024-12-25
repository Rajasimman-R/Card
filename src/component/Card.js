import React from 'react';

const Card = ({ image, firstName, lastName, phoneNumber, gender }) => {
  return (
    <div className="max-w-md mx-auto border border-gray-300 p-6 flex items-center justify-between bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      {/* Image Section */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
        <img src={image} alt="user picture" className="w-full h-full object-cover" />
      </div>

      {/* Info Section */}
      <div className="ml-6 flex flex-col justify-center">
        <p className="text-xl font-semibold text-gray-800">
          <span className="mr-2 text-blue-600">{firstName}</span>
          <span className="text-blue-600">{lastName}</span>
        </p>
        <p className="text-gray-500">{gender}</p>
        <p className="text-gray-700">{phoneNumber}</p>
      </div>
    </div>
  );
};

export default Card;
