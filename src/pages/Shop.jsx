import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/categorySlice/categorySlices';
import { addToCart, updateQuantity } from '../store/cart/cartSlice';
import headerImg from '../assets/images/category-image.png';
import Sidebar from './Sidebar';
import Card from '@/components/Card/Card';

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const cartItems = useSelector((state) => state.cart.items);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

 const handleIncrease = (product) => {
  const existing = cartItems.find((item) => item.id === product.id);

  if (existing) {
    dispatch(updateQuantity({ id: product.id, quantity: existing.quantity + 1 }));
  } else {
    dispatch(addToCart(product)); 
  }
};

const handleDecrease = (product) => {
  const existing = cartItems.find((item) => item.id === product.id);

  if (existing && existing.quantity > 1) {
    dispatch(updateQuantity({ id: product.id, quantity: existing.quantity - 1 }));
  } else if (existing && existing.quantity === 1) {
    dispatch(updateQuantity({ id: product.id, quantity: 0 })); 
  }
};


  const filteredProducts = products.filter(
    (product) =>
      (product.title?.toLowerCase().includes(searchTerm) || searchTerm === '') &&
      product.discountPercentage > 0 
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
            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white bg-black/30">
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
            <p className="text-red-500 text-center">Error: {error || 'Something went wrong'}</p>
          )}

          {status === 'succeeded' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const cartProduct = cartItems.find((item) => item.id === product.id);
                return (
                  <Card
                    key={product.id}
                    product={product}
                    quantity={cartProduct?.quantity || 0}
                    onIncrease={() => handleIncrease(product)}
                    onDecrease={() => handleDecrease(product)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
