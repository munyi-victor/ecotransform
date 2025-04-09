'use client'	

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-green-600' : 'text-white'
              }`}>
                ♻️ EcoTransform
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className={`hover:text-green-400 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
              }`}
            >
              Products
            </a>
            <a
              href="#process"
              className={`hover:text-green-400 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
              }`}
            >
              Process
            </a>
            <a
              href="#impact"
              className={`hover:text-green-400 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white'
              }`}
            >
              Impact
            </a>
            <Link 
              href="/shop"
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-4 rounded-lg overflow-hidden">
            <div className="px-4 py-3 space-y-3">
              <a
                href="#products"
                className="block text-gray-700 hover:text-green-600 transition-colors"
                onClick={handleMobileMenuClick}
              >
                Products
              </a>
              <a
                href="#process"
                className="block text-gray-700 hover:text-green-600 transition-colors"
                onClick={handleMobileMenuClick}
              >
                Process
              </a>
              <a
                href="#impact"
                className="block text-gray-700 hover:text-green-600 transition-colors"
                onClick={handleMobileMenuClick}
              >
                Impact
              </a>
              <Link 
                href="/shop"
                className="block w-full bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-center"
                onClick={handleMobileMenuClick}
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 