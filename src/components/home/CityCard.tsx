import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface CityProps {
  city: {
    id: number;
    name: string;
    image: string;
    pgCount: number;
  };
}

const CityCard: React.FC<CityProps> = ({ city }) => {
  return (
    <Link to={`/city/${city.name.toLowerCase()}`} className="group">
      <div className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="relative h-48">
          <img
            src={city.image}
            alt={`${city.name} city`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">{city.name}</h3>
            <div className="flex items-center mt-1">
              <Home className="h-4 w-4 mr-1" />
              <span className="text-sm">{city.pgCount} PGs available</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CityCard;