import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGateoryProducts } from '../store/categorySlice/categorySlices';
import headerImg from '../assets/images/category-image.png';
import Sidebar from './Sidebar';
import Card from '@/components/ShopCategoryCard/Card';

export default function Shop() {
  const dispatch = useDispatch();

  const {items , loading , error , } = useSelector((state) => state.categoryProducts);

  const { items: cartItems } = useSelector((state) => state.cart);


  const [searchTerm, setSearchTerm] = useState('');

  // تحميل المنتجات
  useEffect(() => {
    dispatch(fetchGateoryProducts());
  }, [dispatch]);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };


  const filteredProducts = items.filter(
    (product) =>
      (product.title?.toLowerCase().includes(searchTerm) || searchTerm === '') &&
      product.discountPercentage > 0
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar />

        <div className="col-span-3">
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Header image */}
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

          {/* Product Grid */}
          {loading === 'loading' && (
            <p className="text-gray-500 text-center">Loading products...</p>
          )}

          {loading === 'failed' && (
            <p className="text-red-500 text-center">Error: {error || 'Something went wrong'}</p>
          )}

          {loading === 'succeeded' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const cartProduct = cartItems.find((item) => item.id === product.id);
                const productsCount = cartProduct?.quantity || 0;
                return (
                  <Card
                    key={product.id}
                    product={product}
                    productsCount={productsCount}
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

