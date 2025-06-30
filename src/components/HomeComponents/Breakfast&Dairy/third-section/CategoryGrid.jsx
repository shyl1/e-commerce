import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { title: 'Beverages', count: 11, image: '/src/assets/images/task4/Beverages.png' },
  { title: 'Biscuits & Snacks', count: 6, image: '/src/assets/images/task4/Biscuits &Snacks.png' },
  { title: 'Breads & Bakery', count: 6, image: '/src/assets/images/task4/Breads &Bakery.png' },
  { title: 'Breakfast & Dairy', count: 8, image: '/src/assets/images/task4/Breakfast &Dairy.png' },
  { title: 'Frozen Foods', count: 7, image: '/src/assets/images/task4/Frozen Foods.png' },
  { title: 'Fruits & Vegetables', count: 11, image: '/src/assets/images/task4/Fruits &Vegetables.png' },
  { title: 'Grocery & Staples', count: 7, image: '/src/assets/images/task4/Grocery &Staples.png' },
  { title: 'Household Needs', count: 1, image: '/src/assets/images/task4/HouseholdNeeds.png' },
  { title: 'Meats & Seafood', count: 5, image: '/src/assets/images/task4/Meats &Seafood.png' },
];

export default function CategoryGrid() {
    return (
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className={`${idx === 0 ? "row-span-2" : ""} h-full`}
        >
          <CategoryCard
            image={cat.image}
            title={cat.title}
            count={cat.count}
            isFirst={idx === 0}
            />
        </div>
      ))}
    </div>
    );
  }