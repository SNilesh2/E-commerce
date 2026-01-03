// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = ({ onNav, products }) => {
  return (
    <div className="animate-in fade-in duration-1000 font-['Inter'] text-[#0F172A]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-block">
            <span className="bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest">
              New Season
            </span>
          </div>
          <h1 className="text-7xl md:text-8xl font-black tracking-tight leading-[0.9]">
            Summer<br />Collection<br />
            <span className="text-[#2563EB]">2024</span>
          </h1>
          <p className="text-[#64748B] font-medium text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Upgrade your style with our latest premium arrivals. Quality materials meet modern design in our most anticipated drop yet.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <button 
              onClick={() => onNav('products')}
              className="bg-[#2563EB] text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95"
            >
              Shop Collection →
            </button>
            <button className="bg-white border border-[#E2E8F0] text-[#0F172A] px-10 py-4 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all active:scale-95">
              View Lookbook
            </button>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative bg-gradient-to-br from-[#E2E8F0] via-[#F8FAFC] to-[#CBD5E1]">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80" 
              alt="Summer Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/5 to-transparent"></div>
          </div>
          {/* Decorative floating element */}
          <div className="absolute -bottom-10 -left-10 hidden lg:block w-40 h-40 bg-white rounded-[32px] shadow-2xl p-4 animate-bounce-slow">
            <div className="w-full h-full bg-[#F1F5F9] rounded-[24px] flex items-center justify-center text-[#2563EB] font-black text-3xl tracking-tighter">
              50%
            </div>
          </div>
        </div>
      </section>

      {/* Feature Icons Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Free Shipping', desc: 'On all orders over $50', icon: '🚚' },
            { title: 'Secure Payment', desc: '100% secure checkout', icon: '🛡️' },
            { title: 'Easy Returns', desc: '30 day return policy', icon: '📦' },
            { title: '24/7 Support', desc: 'Dedicated support team', icon: '🎧' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-[#F1F5F9] text-2xl flex items-center justify-center mb-2">
                {item.icon}
              </div>
              <h3 className="text-sm font-black text-[#0F172A]">{item.title}</h3>
              <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-black tracking-tight">Shop by Category</h2>
          <button 
            onClick={() => onNav('products')}
            className="text-[#2563EB] text-xs font-black uppercase tracking-widest hover:underline"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {[
            { name: 'Men', sub: 'New Styles', img: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=300' },
            { name: 'Women', sub: 'Trending', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300' },
            { name: 'Tech', sub: 'Latest Gadgets', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300' },
            { name: 'Accessories', sub: 'Essentials', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300' },
            { name: 'Home', sub: 'Decor & Living', img: 'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?w=300' },
            { name: 'Beauty', sub: 'Care & Glow', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=300' },
          ].map((cat, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col items-center gap-6 text-center">
              <div className="w-full aspect-square rounded-full overflow-hidden bg-[#F8FAFC] border-2 border-transparent group-hover:border-[#2563EB] transition-all p-1 shadow-sm">
                <img src={cat.img} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" alt={cat.name} />
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-sm text-[#0F172A]">{cat.name}</h4>
                <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">{cat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-black tracking-tight">New Arrivals</h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-all">←</button>
            <button className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-all">→</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map(p => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onAddToCart={() => {}} 
              onClick={() => onNav(`p-${p.id}`)} 
              onWishlist={() => {}} 
            />
          ))}
        </div>
      </section>

      {/* Mid-Season Sale Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#2563EB] rounded-[48px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden relative">
          <div className="space-y-8 z-10 text-white flex-1 text-center md:text-left">
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              Limited Offer
            </span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Mid-Season Sale<br />Up to 50% Off
            </h2>
            <p className="text-white/70 font-medium text-lg max-w-sm mx-auto md:mx-0 leading-relaxed">
              Don't miss out on our biggest sale of the year. Grab your favorites before they are gone.
            </p>
            <button className="bg-white text-[#2563EB] px-12 py-5 rounded-[20px] font-black text-sm hover:bg-gray-50 transition-all shadow-2xl active:scale-95">
              Shop The Sale
            </button>
          </div>
          <div className="flex-1 w-full flex justify-center items-center z-10">
            <div className="w-full aspect-square max-w-md bg-white/10 rounded-[60px] p-10 backdrop-blur-md border border-white/20 rotate-6 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop" 
                 className="w-full h-full object-contain mix-blend-screen brightness-110" 
                 alt="Sale Promo" 
               />
            </div>
          </div>
          {/* Abstract light effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="bg-[#F8FAFC] rounded-[60px] p-16 md:p-24 text-center space-y-10 border border-[#F1F5F9]">
          <h2 className="text-5xl font-black tracking-tighter text-[#0F172A]">Join the club</h2>
          <p className="text-[#64748B] font-medium text-xl leading-relaxed max-w-2xl mx-auto">
            Subscribe to our newsletter and get 10% off your first purchase plus exclusive access to new drops.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 pt-6 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white border-none rounded-2xl px-8 py-5 outline-none focus:ring-2 focus:ring-[#2563EB] transition-all font-medium text-[#0F172A] shadow-sm" 
              required 
            />
            <button className="bg-[#0F172A] text-white px-12 py-5 rounded-2xl font-black text-sm hover:bg-black transition-all shadow-xl active:scale-95">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
