import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Users, Truck, PhoneCall } from 'lucide-react';

export default function LandingPage({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            India's Largest B2B Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with thousands of reliable sellers and buyers across India
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onLogin}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Login to Buy/Sell
            </button>
            <button
              onClick={() => navigate('/browse')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <ShoppingBag className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vast Product Range</h3>
              <p className="text-gray-600">Access millions of products across categories</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Sellers</h3>
              <p className="text-gray-600">Connect with trusted business partners</p>
            </div>
            <div className="text-center p-6">
              <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pan India Delivery</h3>
              <p className="text-gray-600">Efficient logistics and delivery network</p>
            </div>
            <div className="text-center p-6">
              <PhoneCall className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
              <p className="text-gray-600">Connect directly with sellers via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Preview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {['Industrial Supplies', 'Electronics & Electrical', 'Textiles & Garments', 'Food & Agriculture'].map((category) => (
            <button
              key={category}
              onClick={() => navigate(`/browse?category=${encodeURIComponent(category)}`)}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold text-blue-900">{category}</h3>
              <p className="text-sm text-gray-600 mt-2">Explore Products →</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}