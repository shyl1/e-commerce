import React, { useEffect, useState } from 'react'
import banner from '../assets/images/sidebar-banner.gif.svg'
import { avalablity, Brands, ProductCategory } from '@/constants'

export default function Sidebar() {
  //  STATES
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedAvailability, setSelectedAvailability] = useState([])
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')

  //  READ FROM localStorage ON MOUNT
  useEffect(() => {
    try {
      const storedCategories = JSON.parse(localStorage.getItem("selectedCategories")) || []
      const storedBrands = JSON.parse(localStorage.getItem("selectedBrands")) || []
      const storedAvailability = JSON.parse(localStorage.getItem("selectedAvailability")) || []
      const storedPriceFrom = localStorage.getItem("priceFrom") || ''
      const storedPriceTo = localStorage.getItem("priceTo") || ''

      setSelectedCategories(Array.isArray(storedCategories) ? storedCategories : [])
      setSelectedBrands(Array.isArray(storedBrands) ? storedBrands : [])
      setSelectedAvailability(Array.isArray(storedAvailability) ? storedAvailability : [])
      setPriceFrom(storedPriceFrom)
      setPriceTo(storedPriceTo)
    } catch (error) {
      console.error("Error reading from localStorage:", error)
    }
  }, [])

  //  SAVE TO localStorage ON ANY CHANGE
  useEffect(() => {
    localStorage.setItem("selectedCategories", JSON.stringify(selectedCategories))
    localStorage.setItem("selectedBrands", JSON.stringify(selectedBrands))
    localStorage.setItem("selectedAvailability", JSON.stringify(selectedAvailability))
    localStorage.setItem("priceFrom", priceFrom)
    localStorage.setItem("priceTo", priceTo)
  }, [selectedCategories, selectedBrands, selectedAvailability, priceFrom, priceTo])

  //  CHECKBOX TOGGLE HANDLER
  const handleCheckboxChange = (value, selectedList, setSelectedList) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter(item => item !== value))
    } else {
      setSelectedList([...selectedList, value])
    }
  }

  return (
    <div className="col-span-1 bg-gray-100 p-4 rounded-lg shadow-md mb-6">

      {/* === PRODUCT CATEGORY === */}
      <h2 className="text-lg font-bold mb-4">PRODUCT CATEGORY</h2>
      <ul className="space-y-2">
        {ProductCategory.map((category, i) => {
          const id = `category-${i}`;
          return (
            <li key={i} className="flex items-center">
              <input
                type="checkbox"
                id={id}
                className="mr-2 h-5 w-5 text-blue-600"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  handleCheckboxChange(category, selectedCategories, setSelectedCategories)
                }
              />
              <label htmlFor={id}>{category}</label>
            </li>
          );
        })}
      </ul>

      {/* === BRANDS === */}
      <h2 className="text-lg font-bold mb-4 mt-10">BRANDS</h2>
      <ul className="space-y-2">
        {Brands.map(({ name, quantity }, i) => {
          const id = `brand-${i}`;
          return (
            <li key={i} className="flex items-center">
              <input
                type="checkbox"
                id={id}
                className="mr-2 h-5 w-5 text-blue-600"
                checked={selectedBrands.includes(name)}
                onChange={() =>
                  handleCheckboxChange(name, selectedBrands, setSelectedBrands)
                }
              />
              <label htmlFor={id} className="flex justify-between items-end w-full">
                <span>{name}</span>
                <span>{(`${quantity}`)}</span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* === PRICE === */}
      <h2 className='text-lg font-bold mb-4 mt-10'>PRICE</h2>
      <div className="flex justify-between items-center mb-4">
        <div className='flex flex-col mr-2'>
          <label htmlFor="from">From</label>
          <input
            type="number"
            id='from'
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-24"
          />
        </div>
        <div className='flex flex-col mr-2'>
          <label htmlFor="to">To</label>
          <input
            type="number"
            id='to'
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-24"
          />
        </div>
      </div>

      {/* === AVAILABILITY === */}
      <h2 className='text-lg font-bold mb-4 mt-10'>AVAILABILITY</h2>
      <ul className="space-y-2">
        {avalablity.map(({ name, quantity }, i) => {
          const id =  `availability-${i}`;
          return (
            <li key={i} className="flex items-center">
              <input
                type="checkbox"
                id={id}
                className="mr-2 h-5 w-5 text-blue-600"
                checked={selectedAvailability.includes(name)}
                onChange={() =>
                  handleCheckboxChange(name, selectedAvailability, setSelectedAvailability)
                }
              />
              <label htmlFor={id} className="flex justify-between items-end w-full">
                <span>{name}</span>
                <span>{(`${quantity}`)}</span>
              </label>
            </li>
          );
        })}
      </ul>

      {/* === BANNER === */}
      <div className="mt-10">
        <img src={banner} alt="banner" />
      </div>

      {/* === SELECTED FILTERS PREVIEW === */}
      <div className="mt-4 bg-white p-4 rounded shadow">
        <h3 className="font-bold text-md mb-2 text-blue-700">You Selected:</h3>
        <div className="text-sm space-y-1">
          {selectedCategories.length > 0 && (
            <p><span className="font-semibold">Categories:</span> {selectedCategories.join(', ')}</p>
          )}
          {selectedBrands.length > 0 && (
            <p><span className="font-semibold">Brands:</span> {selectedBrands.join(', ')}</p>
          )}
          {selectedAvailability.length > 0 && (
            <p><span className="font-semibold">Availability:</span> {selectedAvailability.join(', ')}</p>
          )}
          {(priceFrom || priceTo) && (
            <p><span className="font-semibold">Price:</span> {priceFrom || '0'} - {priceTo || '∞'}</p>
          )}
          {(selectedCategories.length === 0 &&
            selectedBrands.length === 0 &&
            selectedAvailability.length === 0 &&
            !priceFrom && !priceTo) && (
              <p>No filters selected</p>
          )}
        </div>
      </div>
    </div>
  );
}