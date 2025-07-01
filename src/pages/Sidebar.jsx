import React, { useState, useEffect } from 'react';
import banner from '../assets/images/sidebar-banner.gif.svg';

export default function Sidebar() {
  // Retrieve initial state from localStorage or set default values
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem('selected');
    return saved ? JSON.parse(saved) : { categories: [], brands: [], availability: [] };
  });
  const [priceRange, setPriceRange] = useState(() => {
    const saved = localStorage.getItem('priceRange');
    return saved ? JSON.parse(saved) : { from: '', to: '' };
  });
  const [data, setData] = useState({ categories: [], brands: [], availability: [] });

  // Handle change for all selections
  const handleChange = (type, value) => {
    setSelected(prev => {
      const newSelected = {
        ...prev,
        [type]: prev[type].includes(value)
          ? prev[type].filter(item => item !== value)
          : [...prev[type], value]
      };
      localStorage.setItem('selected', JSON.stringify(newSelected)); // Save to localStorage
      return newSelected;
    });
  };

  // Update price range
  const handlePriceChange = (e) => {
    const { id, value } = e.target;
    const newPriceRange = { ...priceRange, [id]: value };
    setPriceRange(newPriceRange);
    localStorage.setItem('priceRange', JSON.stringify(newPriceRange)); // Save to localStorage
  };

  // Fetch data from dummy API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setData({
          categories: data.slice(0, 5).map(item => `Category ${item.id}`),
          brands: data.slice(5, 10).map(item => ({ name: `Brand ${item.id}`, quantity: Math.floor(Math.random() * 100) })),
          availability: data.slice(10, 15).map(item => ({ name: `Availability ${item.id}`, quantity: Math.floor(Math.random() * 100) }))
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Display selections
  const selectedItems = {
    Categories: selected.categories,
    Brands: selected.brands,
    Availability: selected.availability,
    Price: priceRange.from || priceRange.to ? `${priceRange.from} - ${priceRange.to}` : 'Not specified'
  };

  return (
    <div className="col-span-1 bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      {/* Product Category */}
      <h2 className="text-lg font-bold mb-4">PRODUCT CATEGORY</h2>
      <ul className="space-y-2">
        {data.categories.map((category, i) => (
          <li key={i} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={selected.categories.includes(category)}
              onChange={() => handleChange('categories', category)}
            />
            {category}
          </li>
        ))}
      </ul>

      {/* Brands */}
      <h2 className="text-lg font-bold mb-4 mt-10">BRANDS</h2>
      <ul className="space-y-2">
        {data.brands.map(({ name, quantity }, i) => (
          <li key={i} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={selected.brands.includes(name)}
              onChange={() => handleChange('brands', name)}
            />
            <div className="flex justify-between items-end w-full">
              <span>{name}</span>
              <span>{`(${quantity})`}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Price */}
      <h2 className="text-lg font-bold mb-4 mt-10">PRICE</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col mr-2">
          <label htmlFor="from">From</label>
          <input
            type="number"
            id="from"
            className="border border-gray-300 rounded px-2 py-1 w-1/2 mr-2"
            value={priceRange.from}
            onChange={handlePriceChange}
          />
        </div>
        <div className="flex flex-col mr-2">
          <label htmlFor="to">To</label>
          <input
            type="number"
            id="to"
            className="border border-gray-300 rounded px-2 py-1 w-1/2 mr-2"
            value={priceRange.to}
            onChange={handlePriceChange}
          />
        </div>
      </div>

      {/* Availability */}
      <h2 className="text-lg font-bold mb-4 mt-10">AVALABLITY</h2>
      <span className="border border-b-2 border-dashed text-blue-500 text-4xl flex flex-col"></span>
      <ul className="space-y-2">
        {data.availability.map(({ name, quantity }, i) => (
          <li key={i} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={selected.availability.includes(name)}
              onChange={() => handleChange('availability', name)}
            />
            <div className="flex justify-between items-end w-full">
              <span>{name}</span>
              <span>{`(${quantity})`}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <img src={banner} alt="banner" />
      </div>

      {/* Display selections in UI */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-md font-semibold">Selected Items:</h3>
        <p>Categories: {selectedItems.Categories.join(', ') || 'None'}</p>
        <p>Brands: {selectedItems.Brands.join(', ') || 'None'}</p>
        <p>Availability: {selectedItems.Availability.join(', ') || 'None'}</p>
        <p>Price: {selectedItems.Price}</p>
      </div>
    </div>
  );
}