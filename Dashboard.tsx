import React from 'react';
import { ShoppingBag, DollarSign, Package, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  
  const stats = {
    ordersPlaced: 12,
    totalSpent: "₹45,000",
    activeOrders: 3,
    completedOrders: 9
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, Eliyas!</h1>
          <p className="text-gray-600 mt-2">Here's an overview of your account</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Orders</p>
                <h3 className="text-xl font-bold text-gray-900">{stats.ordersPlaced}</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Spent</p>
                <h3 className="text-xl font-bold text-gray-900">{stats.totalSpent}</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Package className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Orders</p>
                <h3 className="text-xl font-bold text-gray-900">{stats.activeOrders}</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Completed Orders</p>
                <h3 className="text-xl font-bold text-gray-900">{stats.completedOrders}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Browse Products Section */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Browse Products</h2>
              <button
                onClick={() => navigate('/browse')}
                className="flex items-center text-blue-600 hover:text-blue-700"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer"
                   onClick={() => navigate('/browse?category=Industrial%20Supplies')}>
                <ShoppingBag className="h-8 w-8 text-blue-600 mb-2" />
                <h3 className="font-semibold">Industrial Supplies</h3>
                <p className="text-sm text-gray-600">Browse industrial equipment and tools</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer"
                   onClick={() => navigate('/browse?category=Electronics%20%26%20Electrical')}>
                <Package className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="font-semibold">Electronics & Electrical</h3>
                <p className="text-sm text-gray-600">Explore electronic components and devices</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer"
                   onClick={() => navigate('/browse?category=Food%20%26%20Agriculture')}>
                <Package className="h-8 w-8 text-yellow-600 mb-2" />
                <h3 className="font-semibold">Food & Agriculture</h3>
                <p className="text-sm text-gray-600">Discover agricultural products</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-3 text-gray-600">Order ID</th>
                    <th className="pb-3 text-gray-600">Product</th>
                    <th className="pb-3 text-gray-600">Amount</th>
                    <th className="pb-3 text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">#ORD-001</td>
                    <td className="py-3">Industrial Bearings</td>
                    <td className="py-3">₹12,000</td>
                    <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded">Delivered</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">#ORD-002</td>
                    <td className="py-3">LED Panel Lights</td>
                    <td className="py-3">₹8,000</td>
                    <td className="py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">In Transit</span></td>
                  </tr>
                  <tr>
                    <td className="py-3">#ORD-003</td>
                    <td className="py-3">Solar Panels 500W</td>
                    <td className="py-3">₹25,000</td>
                    <td className="py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Processing</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}