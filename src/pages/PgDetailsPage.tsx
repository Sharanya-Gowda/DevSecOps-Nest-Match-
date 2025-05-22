import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Users, Home, Coffee, Dumbbell, Wind } from 'lucide-react';

const PgDetailsPage = () => {
  const { pgId } = useParams();

  // Placeholder PG data
  const pgData = {
    name: "Sunshine PG Accommodation",
    address: "123 MG Road, Near Metro Station",
    rating: 4.5,
    price: "₹12,000",
    amenities: ["AC", "Gym", "WiFi", "Food", "Laundry", "Security"],
    roomTypes: ["Single", "Double", "Triple"],
    images: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg"
    ],
    description: "Modern PG accommodation with all amenities and comfortable living spaces."
  };

  const amenityIcons = {
    AC: Wind,
    Gym: Dumbbell,
    Food: Coffee,
    WiFi: Home,
    Laundry: Home,
    Security: Users
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images Section */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src={pgData.images[0]}
              alt={pgData.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pgData.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${pgData.name} view ${index + 2}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{pgData.name}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{pgData.address}</span>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-purple-700">{pgData.price}</p>
                <p className="text-gray-600">per month</p>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 font-semibold">{pgData.rating}</span>
                </div>
                <p className="text-gray-600">50+ reviews</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pgData.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  {amenityIcons[amenity] && React.createElement(amenityIcons[amenity], { className: "h-5 w-5 text-purple-600" })}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Room Types</h2>
            <div className="grid grid-cols-3 gap-4">
              {pgData.roomTypes.map((type) => (
                <div
                  key={type}
                  className="border rounded-lg p-3 text-center bg-purple-50"
                >
                  <Users className="h-5 w-5 mx-auto mb-2 text-purple-600" />
                  <span className="font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700">{pgData.description}</p>
          </div>

          <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PgDetailsPage;