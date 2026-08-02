import React from 'react';

const newArrivals = [
  {
    id: 101,
    name: 'Monochrome Leather Trench',
    category: 'Outerwear',
    price: '$1,450',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80',
  },
  {
    id: 102,
    name: 'Asymmetric Linen Dress',
    category: 'Womenswear',
    price: '$680',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  },
  {
    id: 103,
    name: 'Double-Breasted Blazer',
    category: 'Tailored',
    price: '$950',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen pb-24 w-full">
      <div className="bg-neutral-900 text-white py-20 px-8 text-center border-b border-white/10">
        <p className="text-[9px] uppercase tracking-[0.4em] text-white/50 mb-3 font-semibold">
          Seasonal Releases
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">
          New Arrivals
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {newArrivals.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-1">
                {item.category}
              </p>
              <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1">
                {item.name}
              </h3>
              <p className="text-xs text-neutral-600 font-medium">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
