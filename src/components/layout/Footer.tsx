import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-7 w-7 text-purple-500" />
              <span className="ml-2 text-xl font-bold">NestMatch</span>
            </div>
            <p className="text-gray-300 mb-4">
              Finding your perfect PG accommodation and compatible roommates has never been easier.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/city/all" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Explore Cities</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Login/Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For PG Owners</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">List Your PG</Link></li>
              <li><Link to="/owner/dashboard" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Owner Dashboard</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Owner Guidelines</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-300">support@nestmatch.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NestMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;