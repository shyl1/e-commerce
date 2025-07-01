import React from 'react';
import PromoCard from './PromoCard';

const promos = [
  {
    title: "Natural Eggs",
    subtitle: "Eat one every day",
    image: "/src/assets/images/task4/egg.png", 
  },
  {
    title: "Taste the Best",
    subtitle: "Shine the morning",
    image: "/src/assets/images/task4/bread.png", 
  },
  {
    title: "Ditch the Junk",
    subtitle: "Breakfast made better",
    image: "/src/assets/images/task4/coffe.png", 
  },
];

export default function PromoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-6 py-8">
      {promos.map((item, idx) => (
        <div key={idx} className="flex justify-center items-center">
          <PromoCard  {...item} />
        </div>
      ))}
    </div>
  );
}