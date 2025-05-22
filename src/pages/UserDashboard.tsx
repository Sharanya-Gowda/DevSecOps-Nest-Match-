import React from 'react';
import { Home, CreditCard, Bell, Calendar, Settings } from 'lucide-react';

const UserDashboard = () => {
  // Placeholder data
  const currentBooking = {
    pgName: "Sunshine PG",
    roomType: "Double Sharing",
    rentAmount: "₹12,000",
    nextPaymentDate: "2024-04-01",
    address: "123 MG Road, Bangalore"
  };

  const recentPayments = [
    { id: 1, date: "2024-03-01", amount: "₹12,000", status: "Paid" },
    { id: 2, date: "2024-02-01", amount: "₹12,000", status: "Paid" },
    { id: 3, date: "2024-01-01", amount: "₹12,000", status: "Paid" }
  ];

  const notifications = [
    { id: 1, message: "Rent due in 5 days", type: "warning" },
    { id: 2, message: "New amenity added: Gym access", type: "info" },
    { id: 3, message: "Maintenance scheduled for tomorrow", type: "info" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
        <button className="flex items-center text-purple-700 hover:text-purple-900">
          <Settings className="h-5 w-5 mr-2" />
          Settings
        </button>
      </div>

      {/* Current Booking */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Current Accommodation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900">{currentBooking.pgName}</h3>
            <p className="text-gray-600">{currentBooking.address}</p>
            <p className="mt-2">
              <span className="font-medium">Room Type:</span> {currentBooking.roomType}
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-2xl font-bold text-purple-700">{currentBooking.rentAmount}</p>
            <p className="text-gray-600">per month</p>
            <p className="mt-2">
              <span className="font-medium">Next Payment:</span> {currentBooking.nextPaymentDate}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Payments */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Payments</h2>
              <CreditCard className="h-5 w-5 text-gray-500" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                        {payment.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                        {payment.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <Bell className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg ${
                    notification.type === 'warning'
                      ? 'bg-yellow-50 text-yellow-700'
                      : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {notification.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors">
          <Calendar className="h-5 w-5 mr-2" />
          Schedule Maintenance
        </button>
        <button className="flex items-center justify-center p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors">
          <Home className="h-5 w-5 mr-2" />
          View PG Details
        </button>
        <button className="flex items-center justify-center p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors">
          <CreditCard className="h-5 w-5 mr-2" />
          Pay Rent
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;