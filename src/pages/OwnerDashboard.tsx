import React from 'react';
import { Home, Users, Settings, PlusCircle, Building, Bell } from 'lucide-react';

const OwnerDashboard = () => {
  // Placeholder data
  const properties = [
    {
      id: 1,
      name: "Sunshine PG",
      address: "123 MG Road",
      occupancy: "85%",
      revenue: "₹1,25,000",
      pendingRequests: 3,
    },
    {
      id: 2,
      name: "Green Valley PG",
      address: "456 Brigade Road",
      occupancy: "92%",
      revenue: "₹1,45,000",
      pendingRequests: 1,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Owner Dashboard</h1>
        <button className="flex items-center bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
          <PlusCircle className="h-5 w-5 mr-2" />
          Add New Property
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Properties</p>
              <h3 className="text-2xl font-bold">2</h3>
            </div>
            <Building className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Tenants</p>
              <h3 className="text-2xl font-bold">45</h3>
            </div>
            <Users className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">₹2,70,000</h3>
            </div>
            <Home className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Pending Requests</p>
              <h3 className="text-2xl font-bold">4</h3>
            </div>
            <Bell className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Properties List */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Your Properties</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Occupancy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monthly Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pending Requests
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {properties.map((property) => (
                  <tr key={property.id}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{property.name}</div>
                        <div className="text-gray-500">{property.address}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-green-600 font-medium">{property.occupancy}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{property.revenue}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {property.pendingRequests} requests
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-purple-600 hover:text-purple-900">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Settings</h2>
          <Settings className="h-5 w-5 text-gray-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Notifications</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" checked />
                <span className="ml-2">New booking requests</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600" checked />
                <span className="ml-2">Payment notifications</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Account Settings</h3>
            <div className="space-y-2">
              <button className="text-purple-600 hover:text-purple-900">Update Profile</button>
              <button className="block text-purple-600 hover:text-purple-900">Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;