'use client';

import { useEffect, useState } from 'react';
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

interface ProductDetailsProps {
  id: string;
}

const ProductDetails = ({ id }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Load products from localStorage
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const products = JSON.parse(storedProducts);
      const foundProduct = products.find((p: Product) => p.id === id);
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <Link
              href="/#products"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              Return to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">CO2 Reduced</h3>
                  <p className="text-xl font-semibold text-green-600">
                    {product.environmentalImpact.co2Reduced}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Water Saved</h3>
                  <p className="text-xl font-semibold text-green-600">
                    {product.environmentalImpact.waterSaved}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Trees Saved</h3>
                  <p className="text-xl font-semibold text-green-600">
                    {product.environmentalImpact.treesSaved}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/#products"
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 