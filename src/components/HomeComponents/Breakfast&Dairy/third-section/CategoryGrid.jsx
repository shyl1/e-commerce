import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '@/constants';

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