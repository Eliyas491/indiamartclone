import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import LoginModal from './components/LoginModal';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { products, categories } from './data';
import { User, Product } from './types';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    setUser({
      id: '1',
      name: 'Eliyas',
      email: email,
      isLoggedIn: true
    });
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const ProductBrowse = () => (
    <>
      <Header 
        isLoggedIn={!!user}
        onLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
        userName={user?.name}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search products, categories, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-3 text-gray-400" size={24} />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`text-left w-full py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600 ${
                      !selectedCategory ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left w-full py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600 ${
                        selectedCategory === category ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl text-gray-600">No products found matching your criteria</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage onLogin={() => setIsLoginModalOpen(true)} />
            } 
          />
          <Route 
            path="/browse" 
            element={<ProductBrowse />} 
          />
          <Route 
            path="/dashboard" 
            element={user ? <Dashboard /> : <Navigate to="/" replace />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      </div>
    </Router>
  );
}

export default App;