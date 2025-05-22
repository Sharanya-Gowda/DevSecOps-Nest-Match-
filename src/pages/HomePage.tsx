import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Users, Shield } from 'lucide-react';
import CityCard from '../components/home/CityCard';

const cities = [
  { id: 1, name: 'Mumbai', image: 'https://images.pexels.com/photos/2315812/pexels-photo-2315812.jpeg', pgCount: 1243 },
  { id: 2, name: 'Delhi', image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg', pgCount: 978 },
  { id: 3, name: 'Bangalore', image: 'https://images.pexels.com/photos/4258897/pexels-photo-4258897.jpeg', pgCount: 1567 },
  { id: 4, name: 'Chennai', image: 'https://images.pexels.com/photos/11249815/pexels-photo-11249815.jpeg', pgCount: 856 },
  { id: 5, name: 'Hyderabad', image: 'https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg', pgCount: 721 },
  { id: 6, name: 'Pune', image: 'https://images.pexels.com/photos/4134319/pexels-photo-4134319.jpeg', pgCount: 654 },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Find Your Perfect PG &amp; Ideal Roommates
          </h1>
          <p className="text-lg md:text-xl text-center mb-10 max-w-2xl">
            NestMatch helps you discover the best PG accommodations across India and matches you with compatible roommates.
          </p>

          <div className="w-full max-w-2xl bg-white rounded-lg p-2 shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="relative flex-grow mb-2 md:mb-0 md:mr-2">
                <input
                  type="text"
                  placeholder="Enter location or college name"
                  className="w-full px-4 py-3 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                />
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-md transition-colors duration-300">
                Search PGs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* City Selection Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore by City</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose NestMatch?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We're revolutionizing how students and young professionals find their ideal PG accommodations and roommates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Locations</h3>
              <p className="text-gray-600">
                All our listed PGs are verified for location accuracy, amenities, and safety measures.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Roommate Matching</h3>
              <p className="text-gray-600">
                Our compatibility algorithm helps you find roommates based on lifestyle, preferences, and interests.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Booking</h3>
              <p className="text-gray-600">
                Book your PG with confidence through our secure platform with verified owner profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Own a PG? List it with us!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Reach thousands of potential tenants and manage your listings with our easy-to-use platform.
          </p>
          <Link
            to="/login"
            className="inline-block bg-white text-purple-700 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors duration-300"
          >
            List Your PG
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;