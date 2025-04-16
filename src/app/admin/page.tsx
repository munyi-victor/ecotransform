'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
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

const defaultProducts: Product[] = [
  {
    id: '1',
    name: "Recycled Wood Table",
    description: "Handcrafted from reclaimed wood, this table combines rustic charm with modern design.",
    category: "Furniture",
    image: "/images/wood_table.jpg",
    environmentalImpact: {
      co2Reduced: "25kg",
      waterSaved: "1000L",
      treesSaved: "2"
    }
  },
  {
    id: '2',
    name: "Upcycled Chair",
    description: "A unique chair made from recycled materials, perfect for adding character to any space.",
    category: "Furniture",
    image: "/images/upcycled_chair.jpg",
    environmentalImpact: {
      co2Reduced: "15kg",
      waterSaved: "600L",
      treesSaved: "1"
    }
  },
  {
    id: '3',
    name: "Bottle Cap Mosaic",
    description: "Vibrant wall art created from recycled bottle caps, showcasing creativity in sustainability.",
    category: "Art",
    image: "/images/cap_mosaic.jpg",
    environmentalImpact: {
      co2Reduced: "5kg",
      waterSaved: "200L",
      treesSaved: "0.5"
    }
  },
  {
    id: '4',
    name: "Recycled Glass Vase",
    description: "Elegant vase crafted from recycled glass, perfect for displaying fresh or dried flowers.",
    category: "Homeware",
    image: "/images/glass_vase.jpg",
    environmentalImpact: {
      co2Reduced: "8kg",
      waterSaved: "300L",
      treesSaved: "0.3"
    }
  },
  {
    id: '5',
    name: "Eco-Friendly Tote",
    description: "Stylish tote bag made from recycled plastic materials, durable and sustainable.",
    category: "Accessories",
    image: "/images/plastic_tote.jpg",
    environmentalImpact: {
      co2Reduced: "3kg",
      waterSaved: "150L",
      treesSaved: "0.2"
    }
  },
  {
    id: '6',
    name: "Tire Planters",
    description: "Innovative planters made from upcycled tires, perfect for indoor or outdoor plants.",
    category: "Homeware",
    image: "/images/tire_planters.jpg",
    environmentalImpact: {
      co2Reduced: "10kg",
      waterSaved: "400L",
      treesSaved: "0.8"
    }
  }
];

const AdminPage = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'Furniture',
    description: '',
    image: '',
    environmentalImpact: {
      co2Reduced: '',
      waterSaved: '',
      treesSaved: '',
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    console.log('Initial stored products:', storedProducts);
    if (!storedProducts) {
      console.log('Setting default products');
      localStorage.setItem('products', JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    } else {
      const parsedProducts = JSON.parse(storedProducts);
      console.log('Loaded existing products:', parsedProducts);
      setProducts(parsedProducts);
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreview(base64String);
        if (editingProduct) {
          setEditingProduct({ ...editingProduct, image: base64String });
        } else {
          setNewProduct({ ...newProduct, image: base64String });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setImagePreview(product.image);
    setNewProduct({
      name: product.name,
      category: product.category,
      description: product.description,
      image: product.image,
      environmentalImpact: { ...product.environmentalImpact },
    });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setImagePreview(null);
    setNewProduct({
      name: '',
      category: 'Furniture',
      description: '',
      image: '',
      environmentalImpact: {
        co2Reduced: '',
        waterSaved: '',
        treesSaved: '',
      },
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.image) {
      alert('Please select an image for the product');
      return;
    }
    
    if (editingProduct) {
      // Update existing product
      const updatedProducts = products.map(product => 
        product.id === editingProduct.id 
          ? { ...newProduct, id: editingProduct.id } as Product
          : product
      );
      console.log('Updating products:', updatedProducts);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setEditingProduct(null);
    } else {
      // Add new product
      const productToAdd = {
        ...newProduct,
        id: Date.now().toString(),
      } as Product;
      
      const updatedProducts = [...products, productToAdd];
      console.log('Adding new product:', productToAdd);
      console.log('Updated products list:', updatedProducts);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
    
    // Reset form
    setNewProduct({
      name: '',
      category: 'Furniture',
      description: '',
      image: '',
      environmentalImpact: {
        co2Reduced: '',
        waterSaved: '',
        treesSaved: '',
      },
    });
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    // Navigate to products section
    router.push('/#products');
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter(product => product.id !== id);
    console.log('Deleting product:', id);
    console.log('Updated products after deletion:', updatedProducts);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 font-sans">Product Management</h1>
            
            {/* Add/Edit Product Form */}
            <form onSubmit={handleAddProduct} className="mb-12 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 font-sans">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-sans text-gray-900"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Category
                  </label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-sans text-gray-900"
                    required
                  >
                    <option value="Furniture">Furniture</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Art">Art</option>
                    <option value="Homeware">Homeware</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Description
                  </label>
                  <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-sans text-gray-900"
                    rows={3}
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Product Image
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="block w-full text-sm text-gray-500 font-sans
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-green-50 file:text-green-700
                        hover:file:bg-green-100"
                      required={!editingProduct}
                    />
                  </div>
                  {imagePreview && (
                    <div className="mt-2 relative h-32 w-32">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    CO2 Reduced
                  </label>
                  <input
                    type="text"
                    value={newProduct.environmentalImpact?.co2Reduced}
                    onChange={(e) => setNewProduct({
                      ...newProduct,
                      environmentalImpact: {
                        co2Reduced: e.target.value,
                        waterSaved: newProduct.environmentalImpact?.waterSaved || '',
                        treesSaved: newProduct.environmentalImpact?.treesSaved || ''
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-sans text-gray-900"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Water Saved
                  </label>
                  <input
                    type="text"
                    value={newProduct.environmentalImpact?.waterSaved}
                    onChange={(e) => setNewProduct({
                      ...newProduct,
                      environmentalImpact: {
                        co2Reduced: newProduct.environmentalImpact?.co2Reduced || '',
                        waterSaved: e.target.value,
                        treesSaved: newProduct.environmentalImpact?.treesSaved || ''
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-sans text-gray-900"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Trees Saved
                  </label>
                  <input
                    type="text"
                    value={newProduct.environmentalImpact?.treesSaved}
                    onChange={(e) => setNewProduct({
                      ...newProduct,
                      environmentalImpact: {
                        co2Reduced: newProduct.environmentalImpact?.co2Reduced || '',
                        waterSaved: newProduct.environmentalImpact?.waterSaved || '',
                        treesSaved: e.target.value
                      }
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 font-sans text-gray-900"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                {editingProduct && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors font-sans"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-sans"
                >
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
              </div>
            </form>
            
            {/* Products List */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 font-sans">Current Products</h2>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border border-gray-200 rounded-md p-4 flex justify-between items-center"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative h-16 w-16">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 font-sans">{product.name}</h3>
                        <p className="text-sm text-gray-500 font-sans">{product.category}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="text-blue-600 hover:text-blue-800 transition-colors font-sans"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-800 transition-colors font-sans"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 