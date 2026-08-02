import React from 'react';

const products = [
  {
    id: 1,
    name: 'Structured Wool Coat',
    category: 'Outerwear',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
  },
  {
    id: 2,
    name: 'Tailored Silk Blouse',
    category: 'Womenswear',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
  },
  {
    id: 3,
    name: 'Minimalist Cashmere Knit',
    category: 'Essentials',
    price: '$620',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
  },
  {
    id: 4,
    name: 'Pleated Trousers',
    category: 'Menswear',
    price: '$380',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600&q=80',
  },
];

export default function CollectionsPage() {
  return (
    <div className="bg-white min-h-screen pb-24 w-full">
      {/* Header Banner */}
      <div className="bg-neutral-950 text-white py-20 px-8 text-center border-b border-white/10">
        <p className="text-[9px] uppercase tracking-[0.4em] text-white/50 mb-3 font-semibold">
          Curated Catalog
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide">
          All Collections
        </h1>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-8 pt-16">
        <div className="flex items-center justify-between pb-8 border-b border-neutral-200 mb-12 text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
          <span>Showing {products.length} Products</span>
          <div className="flex gap-6">
            <button className="hover:text-black transition-colors">Sort By ▾</button>
            <button className="hover:text-black transition-colors">Filter ▾</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
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
