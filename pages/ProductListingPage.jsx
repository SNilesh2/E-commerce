// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductListingPage = ({ onNav, products }) => {
  const [priceRange, setPriceRange] = useState(250);

  const displayProducts = [
    { id: '1', name: 'Velocity Nitro 2', category: "Men's Running", price: 140, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop', isNew: true, rating: 5, ratingCount: 128 },
    { id: '2', name: 'Air Zoom Pegasus', category: "Road Running", price: 96, oldPrice: 120, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop', isSale: true, rating: 4, ratingCount: 845 },
    { id: '3', name: 'Ultraboost Light', category: "Neutral Running", price: 190, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&auto=format&fit=crop', rating: 5, ratingCount: 2100 },
    { id: '4', name: 'Cloudstratus 3', category: "Max Cushioning", price: 180, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop', rating: 4.8, ratingCount: 56 },
    { id: '5', name: 'Endorphin Speed 3', category: "Speed Running", price: 170, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop', rating: 5, ratingCount: 342 },
    { id: '6', name: 'Wave Rider 27', category: "Daily Trainer", price: 145, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop', isLimited: true, rating: 4.5, ratingCount: 19 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 animate-in fade-in duration-700 font-['Inter'] text-[#0F172A]">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.15em] mb-10">
        <button onClick={() => onNav('home')} className="hover:text-[#0F172A] transition-colors">Home</button>
        <span className="text-[#E2E8F0]">/</span>
        <button className="hover:text-[#0F172A] transition-colors">Men</button>
        <span className="text-[#E2E8F0]">/</span>
        <span className="text-[#0F172A]">Running Shoes</span>
      </nav>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-black text-[#0F172A] mb-6 tracking-tighter">Performance Running Shoes</h1>
        <p className="text-[#64748B] max-w-2xl text-lg font-medium leading-relaxed">
          Lightweight, responsive, and ready for your next PR. Explore our latest collection designed for every runner.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Filters */}
        <aside className="lg:w-72 shrink-0 space-y-12">
          {/* Category Filter */}
          <div className="space-y-6">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A]">Category</h3>
              <svg className="w-3 h-3 text-[#94A3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" /></svg>
            </div>
            <div className="space-y-4">
              {['Road Running (42)', 'Trail Running (18)', 'Track & Field (12)', 'Walking (8)'].map((cat, i) => (
                <label key={i} className="flex items-center gap-4 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-[#E2E8F0] rounded-lg checked:bg-[#2563EB] checked:border-transparent transition-all" defaultChecked={i === 0} />
                    <svg className="absolute w-3 h-3 text-white left-1 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className={`text-sm font-bold ${i === 0 ? 'text-[#0F172A]' : 'text-[#64748B]'} group-hover:text-[#0F172A] transition-all`}>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-8 pt-10 border-t border-[#F1F5F9]">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A]">Price Range</h3>
            <div className="px-1">
              <div className="relative w-full h-1.5 bg-[#F1F5F9] rounded-lg mb-8">
                <div className="absolute left-[10%] right-[30%] h-full bg-[#2563EB] rounded-lg"></div>
                <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#2563EB] rounded-full shadow-md cursor-pointer"></div>
                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#2563EB] rounded-full shadow-md cursor-pointer"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-xs font-bold">$</span>
                  <input type="text" value="50" className="w-full bg-white border border-[#E2E8F0] rounded-xl py-3 pl-8 text-xs font-black text-[#0F172A] outline-none" readOnly />
                </div>
                <span className="text-[#CBD5E1] font-bold">—</span>
                <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-xs font-bold">$</span>
                  <input type="text" value={priceRange} className="w-full bg-white border border-[#E2E8F0] rounded-xl py-3 pl-8 text-xs font-black text-[#0F172A] outline-none" readOnly />
                </div>
              </div>
            </div>
          </div>

          {/* Color Filter */}
          <div className="space-y-6 pt-10 border-t border-[#F1F5F9]">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A]">Color</h3>
            <div className="flex flex-wrap gap-4">
              {['bg-black', 'bg-white border border-[#E2E8F0]', 'bg-[#2563EB]', 'bg-[#EF4444]', 'bg-[#10B981]', 'bg-[#FBBF24]'].map((color, i) => (
                <button key={i} className={`w-9 h-9 rounded-full ${color} transition-all hover:scale-110 hover:shadow-lg active:scale-95`} />
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="space-y-6 pt-10 border-t border-[#F1F5F9]">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A]">Rating</h3>
            <div className="space-y-4">
              {[4, 3].map((r) => (
                <label key={r} className="flex items-center gap-4 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 border-2 border-[#E2E8F0] rounded-lg checked:bg-[#2563EB] checked:border-transparent transition-all" />
                  <div className="flex items-center gap-3">
                    <div className="flex text-[#FBBF24] text-sm gap-0.5">
                      {[...Array(5)].map((_, i) => <span key={i}>{i < r ? '★' : '☆'}</span>)}
                    </div>
                    <span className="text-xs font-black text-[#64748B] group-hover:text-[#0F172A] transition-all">& Up</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Active Filters & Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-[#EFF6FF] text-[#2563EB] px-4 py-2 rounded-xl text-xs font-black flex items-center gap-3 border border-[#DBEAFE] shadow-sm">
                Road Running 
                <button className="hover:text-blue-800 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <button className="text-xs font-black text-[#94A3B8] hover:text-[#0F172A] transition-all ml-4 tracking-widest uppercase">Clear All</button>
            </div>
            
            <div className="flex items-center gap-10">
              <span className="text-[11px] font-black text-[#94A3B8] uppercase tracking-widest">Showing 127 results</span>
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <select className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-3.5 text-xs font-black text-[#0F172A] outline-none cursor-pointer appearance-none pr-12 shadow-sm focus:ring-2 focus:ring-blue-50">
                    <option>Sort by: Featured</option>
                    <option>Newest Arrivals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </div>
                <div className="flex border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
                  <button className="p-3.5 bg-[#F8FAFC] text-[#2563EB] border-r border-[#E2E8F0]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                  </button>
                  <button className="p-3.5 text-[#94A3B8] hover:bg-gray-50 transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {displayProducts.map((p) => (
              <ProductCard 
                key={p.id} 
                product={{
                  ...p,
                  reviews: [], // Placeholder to match type
                  stock: 10,
                  description: ''
                }} 
                onAddToCart={() => {}} 
                onClick={() => onNav(`p-${p.id}`)} 
                onWishlist={() => {}} 
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex justify-center items-center gap-2">
            <button className="w-11 h-11 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-all shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-11 h-11 rounded-xl bg-[#2563EB] text-white font-black text-sm shadow-xl shadow-blue-100 transition-transform active:scale-90">1</button>
            <button className="w-11 h-11 rounded-xl border border-[#E2E8F0] font-black text-sm text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">2</button>
            <button className="w-11 h-11 rounded-xl border border-[#E2E8F0] font-black text-sm text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">3</button>
            <span className="text-[#CBD5E1] font-black px-4">...</span>
            <button className="w-11 h-11 rounded-xl border border-[#E2E8F0] font-black text-sm text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">12</button>
            <button className="w-11 h-11 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
