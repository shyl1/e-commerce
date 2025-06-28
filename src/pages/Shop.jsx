import React, { useState } from 'react';
import headerImg from '../assets/images/category-image.png'; 
import { FaStar, FaRegStar } from 'react-icons/fa';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import Sidebar from './Sidebar';

const products = [
  { id: 1, name: "Product 1", price: 10.00, originalPrice: 15.00, inStock: true, rating: 4, onSale: true },
  { id: 2, name: "Product 2", price: 15.00, originalPrice: 15.00, inStock: true, rating: 3, onSale: false },
  { id: 3, name: "Product 3", price: 8.00, originalPrice: 12.00, inStock: false, rating: 5, onSale: true },
  { id: 4, name: "Product 4", price: 12.00, originalPrice: 12.00, inStock: true, rating: 4, onSale: false },
  { id: 5, name: "Product 5", price: 20.00, originalPrice: 25.00, inStock: true, rating: 2, onSale: true },
  { id: 6, name: "Product 6", price: 5.00, originalPrice: 5.00, inStock: false, rating: 3, onSale: false },
  { id: 7, name: "Product 7", price: 18.00, originalPrice: 20.00, inStock: true, rating: 4, onSale: true },
  { id: 8, name: "Product 8", price: 9.00, originalPrice: 9.00, inStock: true, rating: 5, onSale: false },
  { id: 9, name: "Product 9", price: 14.00, originalPrice: 18.00, inStock: false, rating: 3, onSale: true },
  { id: 10, name: "Product 10", price: 7.00, originalPrice: 7.00, inStock: true, rating: 4, onSale: false },
  { id: 11, name: "Product 11", price: 11.00, originalPrice: 15.00, inStock: true, rating: 2, onSale: true },
  { id: 12, name: "Product 12", price: 16.00, originalPrice: 16.00, inStock: false, rating: 5, onSale: false },
];

function Card({ name, price, originalPrice, inStock, rating, onSale }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Image Placeholder</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-green-400 block">{inStock ? 'In Stock' : 'Out of Stock'}</span>
        <div className='flex'>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-yellow-500">
              {i < rating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
        </div>
        <div className="mt-2">
          {onSale && (
            <span className="line-through text-gray-500 mr-2">${originalPrice.toFixed(2)}</span>
          )}
          <span className="text-red-600">${price.toFixed(2)}</span>
          {onSale && <span className="text-green-500 ml-2 bg-green-100 px-2 rounded">Sale</span>}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="w-full flex justify-between rounded-full overflow-hidden">
            <button className="bg-gray-200 w-[15%] py-2 flex justify-center items-center">
              <CiCircleMinus size={24} />
            </button>
            <div className="bg-white w-[70%] py-2 flex justify-center items-center font-bold text-black">
              0
            </div>
            <button className="bg-amber-400 w-[15%] py-2 flex justify-center items-center">
              <CiCirclePlus size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    (product.name.toLowerCase().includes(searchTerm) || searchTerm === '') && product.onSale
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar />
        <div className="col-span-3">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg mb-8">
            <img src={headerImg} alt="Delicious Meal" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
              <h2 className="text-xl md:text-2xl font-medium">Organic Meals Prepared</h2>
              <h1 className="text-3xl md:text-5xl font-bold">
                Delivered to <span className="text-green-400">your Home</span>
              </h1>
              <p className="text-sm md:text-base mt-2">
                Fully prepared & delivered nationwide.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={index} name={product.name} price={product.price} originalPrice={product.originalPrice} inStock={product.inStock} rating={product.rating} onSale={product.onSale} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}