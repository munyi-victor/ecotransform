'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

const categories = ['All', 'Furniture', 'Accessories', 'Art', 'Homeware'] as const;

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    console.log('Stored products:', storedProducts);
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      console.log('Parsed products:', parsedProducts);
      setProducts(parsedProducts);
    }
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  console.log('Filtered products:', filteredProducts);
  console.log('Selected category:', selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>CO2: {product.environmentalImpact.co2Reduced}</span>
                    <span>Water: {product.environmentalImpact.waterSaved}</span>
                    <span>Trees: {product.environmentalImpact.treesSaved}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage; 