import React from 'react';
import { MapPin, Users, Shield, Star, CheckCircle, Home } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NestMatch</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We're on a mission to revolutionize the PG accommodation experience for
            students and young professionals across India.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              NestMatch was born out of a personal frustration. Our founders, while studying in different
              cities, faced numerous challenges in finding suitable PG accommodations and compatible roommates.
              The traditional methods were time-consuming, often unreliable, and lacked proper verification.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2023, we set out to create a platform that simplifies the PG hunting process and
              ensures that students and young professionals find not just a place to stay, but a place that
              feels like home with roommates they can connect with.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, NestMatch serves thousands of users across major Indian cities, helping them discover
              verified PGs and compatible roommates through our innovative matching algorithm.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Mission</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Safe Housing</h3>
                <p className="text-gray-600">
                  Ensure every student and young professional has access to safe, affordable, and comfortable accommodation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Building</h3>
                <p className="text-gray-600">
                  Foster meaningful connections through our roommate compatibility matching system.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trust & Transparency</h3>
                <p className="text-gray-600">
                  Maintain the highest standards of verification and transparency in all our listings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How NestMatch Works</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center text-purple-700">
                  <Users className="h-6 w-6 mr-2" />
                  For PG Seekers
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Create your profile with preferences</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Search for PGs in your desired location</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">View verified listings with detailed amenities</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Get matched with compatible roommates</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Book visits and secure your accommodation</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center text-purple-700">
                  <Home className="h-6 w-6 mr-2" />
                  For PG Owners
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Register and verify your ownership</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">List your property with detailed information</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Upload high-quality images of your PG</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Receive and manage booking requests</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-gray-700">Get insights on your listing performance</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Team Member Cards would go here */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Rahul Sharma</h3>
                <p className="text-purple-700">Co-Founder & CEO</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Priya Patel</h3>
                <p className="text-purple-700">Co-Founder & CTO</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Amit Verma</h3>
                <p className="text-purple-700">Head of Operations</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Neha Singh</h3>
                <p className="text-purple-700">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-purple-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help you with any questions you may have about NestMatch.
          </p>
          <button className="bg-white text-purple-700 hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;