import React from 'react';
import { useParams } from 'react-router-dom';

const CityListingsPage = () => {
  const { cityName } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        PG Accommodations in {cityName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for PG listings */}
        <p className="text-gray-600">Loading PG accommodations...</p>
      </div>
    </div>
  );
};

export default CityListingsPage;