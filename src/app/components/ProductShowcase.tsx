'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  environmentalImpact: {
    co2Reduced: string;
    waterSaved: string;
    treesSaved: string;
  };
};

const categories = ['All', 'Furniture', 'Accessories', 'Art', 'Homeware'];

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products from localStorage
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Products
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-500">CO2 Reduced</p>
                        <p className="font-semibold text-green-600">
                          {product.environmentalImpact.co2Reduced}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Water Saved</p>
                        <p className="font-semibold text-green-600">
                          {product.environmentalImpact.waterSaved}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Trees Saved</p>
                        <p className="font-semibold text-green-600">
                          {product.environmentalImpact.treesSaved}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 