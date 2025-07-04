import React from 'react';
import PromoCard from './PromoCard';
import { promos } from '@/constants';



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