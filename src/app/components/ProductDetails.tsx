'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  impact: {
    co2: number;
    water: number;
    trees: number;
  };
  details: {
    materials: string[];
    dimensions: string;
    care: string;
    story: string;
  };
};

const ProductDetails = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center text-green-600 hover:text-green-700 font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Products
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative h-96">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
              <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Environmental Impact</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium">CO₂ Saved</p>
                    <p className="text-lg font-bold text-green-600">{product.impact.co2}kg</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium">Water Saved</p>
                    <p className="text-lg font-bold text-green-600">{product.impact.water}L</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-medium">Trees Saved</p>
                    <p className="text-lg font-bold text-green-600">{product.impact.trees}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Product Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700">Materials</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {product.details.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Dimensions</h3>
                    <p className="text-gray-600">{product.details.dimensions}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Care Instructions</h3>
                    <p className="text-gray-600">{product.details.care}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 text-gray-800">Our Story</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{product.details.story}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 