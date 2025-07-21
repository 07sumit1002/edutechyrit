import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-900">YR IT Solutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link>
            <Link to="/courses" className={`transition-colors font-medium ${isActive('/courses') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Courses</Link>
            <Link to="/programs" className={`transition-colors font-medium ${isActive('/programs') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Programs</Link>
            <Link to="/about" className={`transition-colors font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>About</Link>
            <Link to="/contact" className={`transition-colors font-medium ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link>
          </nav>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/courses" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Courses</Link>
              <Link to="/programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Programs</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="pt-2">
                <Link to="/login" className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link to="/signup" className="block w-full mt-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;