import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogIn, Home, MapPin, Info, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Home className="h-8 w-8 text-purple-700" />
            <span className="ml-2 text-xl font-bold text-purple-700">NestMatch</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for PGs near you..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-700 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-700 font-medium">
              About
            </Link>
            <Link to="/city/all" className="text-gray-700 hover:text-purple-700 font-medium">
              Explore
            </Link>
            {isAuthenticated ? (
              <Link
                to={user?.role === 'owner' ? '/owner/dashboard' : '/user/dashboard'}
                className="flex items-center text-gray-700 hover:text-purple-700 font-medium"
              >
                <User className="h-5 w-5 mr-1" />
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Search for PGs near you..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-purple-700 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-purple-700 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/city/all"
              className="block py-2 text-gray-700 hover:text-purple-700 font-medium"
              onClick={toggleMenu}
            >
              Explore
            </Link>
            {isAuthenticated ? (
              <Link
                to={user?.role === 'owner' ? '/owner/dashboard' : '/user/dashboard'}
                className="block py-2 text-gray-700 hover:text-purple-700 font-medium"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="block bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
                onClick={toggleMenu}
              >
                Login
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;