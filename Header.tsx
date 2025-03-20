import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  userName?: string;
}

export default function Header({ isLoggedIn, onLogin, onLogout, userName }: HeaderProps) {
  return (
    <header className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">IndiaMart Clone</Link>
          
          <div className="flex-1 mx-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products and suppliers..."
                className="w-full px-4 py-2 rounded text-gray-800"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/browse" className="flex items-center">
              <ShoppingBag className="mr-1" />
              Products
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center">
                  <User className="mr-1" />
                  {userName || 'Dashboard'}
                </Link>
                <button onClick={onLogout} className="hover:text-gray-200">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={onLogin} className="flex items-center">
                <User className="mr-1" />
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}