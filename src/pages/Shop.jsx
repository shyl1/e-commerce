import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, updateQuantity } from '../store/categorySlice/categorySlices';
import headerImg from '../assets/images/category-image.png';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Sidebar from './Sidebar';

function Card({ product, quantity, onIncrease, onDecrease }) {
  const {
    title = 'No Title',
    price = 0,
    inStock = true,
    rating = 0,
  } = product;

  const originalPrice = price + 5;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-green-400 block">{inStock ? 'In Stock' : 'Out of Stock'}</span>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-yellow-500">
              {i < rating ? <FaStar /> : <FaRegStar />}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <span className="text-gray-500 line-through text-sm mr-2">
            ${(originalPrice * quantity).toFixed(2)}
          </span>
          <span className="text-red-600 text-lg font-bold">
            ${(price * quantity).toFixed(2)}
          </span>
          <span className="ml-2 text-green-600 text-sm bg-green-100 px-2 py-0.5 rounded">
            You Save ${((originalPrice - price) * quantity).toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="w-full flex justify-between rounded-full overflow-hidden">
            <button
              className="bg-gray-200 w-[15%] py-2 flex justify-center items-center"
              onClick={onDecrease}
            >
              <CiCircleMinus size={24} />
            </button>
            <div className="bg-white w-[70%] py-2 flex justify-center items-center font-bold text-black">
              {quantity}
            </div>
            <button
              className="bg-amber-400 w-[15%] py-2 flex justify-center items-center"
              onClick={onIncrease}
            >
              <CiCirclePlus size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const dispatch = useDispatch();
  const { items: products, cart, status, error } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      // Assuming cart is an object in your Redux state, merge it with saved data
      const parsedCart = JSON.parse(savedCart);
      Object.keys(parsedCart).forEach(id => {
        dispatch(updateQuantity({ id, quantity: parsedCart[id] }));
      });
    }
    dispatch(fetchProducts());
  }, [dispatch]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter(
    (product) =>
      (product.title?.toLowerCase().includes(searchTerm) || searchTerm === '') &&
      product.onSale
  );

  const handleIncrease = (id) => {
    const currentQuantity = cart[id] || 0;
    dispatch(updateQuantity({ id, quantity: currentQuantity + 1 }));
  };

  const handleDecrease = (id) => {
    const currentQuantity = cart[id] || 0;
    if (currentQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

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

          {status === 'loading' && (
            <p className="text-gray-500 text-center">Loading products...</p>
          )}

          {status === 'failed' && (
            <p className="text-red-500 text-center">Error: {error || "Something went wrong"}</p>
          )}

          {status === 'succeeded' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  quantity={cart[product.id] || 0}
                  onIncrease={() => handleIncrease(product.id)}
                  onDecrease={() => handleDecrease(product.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}