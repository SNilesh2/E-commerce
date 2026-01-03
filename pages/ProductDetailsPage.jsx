// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React, { useState } from 'react';
import { formatPrice } from '../constants';

const ProductDetailsPage = ({ productId, onAddToCart, onNav }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const [selectedColor, setSelectedColor] = useState('Midnight Black');

  const product = {
    name: 'SonicPro X1 Wireless ANC',
    price: 249.00,
    originalPrice: 299.00,
    rating: 4.8,
    reviewCount: 124,
    colors: [
      { name: 'Midnight Black', hex: '#0F172A' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Deep Blue', hex: '#1E40AF' }
    ],
    specs: [
      { label: 'Bluetooth Version', value: '5.2' },
      { label: 'Driver Size', value: '40mm Dynamic' },
      { label: 'Weight', value: '250g' },
      { label: 'Charging Port', value: 'USB-C' },
      { label: 'Microphone', value: 'Dual Beamforming' }
    ],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&fit=crop',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&fit=crop'
    ]
  };

  return (
    <div className="bg-white min-h-screen font-['Inter'] text-[#0F172A]">
      {/* Breadcrumbs Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex text-[11px] font-medium text-gray-400 gap-2 items-center">
          <button onClick={() => onNav('home')} className="hover:text-blue-600 transition-colors">Home</button>
          <span className="text-gray-300">›</span>
          <button className="hover:text-blue-600 transition-colors">Audio</button>
          <span className="text-gray-300">›</span>
          <button className="hover:text-blue-600 transition-colors">Headphones</button>
          <span className="text-gray-300">›</span>
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start">
          
          {/* Product Gallery */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square bg-[#F8FAFC] rounded-[32px] overflow-hidden group border border-gray-100 flex items-center justify-center p-12">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
              <span className="absolute top-6 left-6 bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded uppercase tracking-widest">
                -20% OFF
              </span>
              <button className="absolute top-6 right-6 p-2.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-all border border-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer transition-all bg-[#F8FAFC] flex items-center justify-center p-4 ${idx === 0 ? 'border-blue-600 shadow-sm' : 'border-transparent hover:border-blue-100'}`}
                >
                  <img src={img} className="w-full h-full object-contain mix-blend-multiply" alt={`Thumbnail ${idx}`} />
                  {idx === 3 && (
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Actions & Info */}
          <div className="mt-10 lg:mt-0 space-y-10 pl-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest">New Release</span>
                <span className="text-emerald-500 text-[10px] font-bold flex items-center gap-2 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> In Stock
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-[1.1]">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <span className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">4.8 (124 Reviews)</span>
              </div>
              <div className="flex items-baseline gap-5 pt-3">
                <span className="text-5xl font-black text-[#0F172A]">{formatPrice(product.price)}</span>
                <span className="text-2xl text-gray-300 line-through font-medium">{formatPrice(product.originalPrice)}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-[11px] font-black uppercase tracking-widest text-[#0F172A]">Color: <span className="text-gray-500">{selectedColor}</span></p>
              <div className="flex gap-4">
                {product.colors.map((c) => (
                  <button 
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all p-0.5 ${selectedColor === c.name ? 'border-blue-600 ring-4 ring-blue-50' : 'border-transparent'}`}
                  >
                    <span className="block w-full h-full rounded-full border border-gray-100 shadow-inner" style={{ backgroundColor: c.hex }}></span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-[11px] font-black uppercase tracking-widest text-[#0F172A]">Quantity</p>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl w-fit px-3 py-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-gray-400 hover:text-blue-600 font-bold text-xl w-10">－</button>
                <span className="px-6 font-black text-gray-900 w-12 text-center text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-gray-400 hover:text-blue-600 font-bold text-xl w-10">＋</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={() => onAddToCart({ ...product, id: productId })}
                className="flex-[1.2] bg-blue-600 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-[0.98]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Add to Cart
              </button>
              <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-5 rounded-xl font-bold hover:bg-blue-50 transition-all active:scale-[0.98]">
                Buy Now
              </button>
            </div>

            {/* Service Badges */}
            <div className="grid grid-cols-3 gap-3 pt-10 border-t border-gray-100">
              {[
                { label: 'Free Shipping', icon: '🚚' },
                { label: '2 Year Warranty', icon: '🛡️' },
                { label: '30 Day Returns', icon: '📦' }
              ].map((badge) => (
                <div key={badge.label} className="bg-gray-50/50 p-5 rounded-2xl flex flex-col items-center gap-2.5 text-center border border-transparent hover:border-gray-100 transition-all">
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-[9px] font-black uppercase text-[#0F172A] tracking-widest leading-none">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="mt-24 border-b border-gray-100">
          <div className="flex gap-14">
            {['Description', 'Specifications', 'Shipping & Returns'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-[13px] font-bold tracking-tight transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {tab}
                {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>}
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="py-16 flex flex-col lg:flex-row gap-20">
          <div className="flex-1 space-y-12">
            <h2 className="text-4xl font-black tracking-tight text-[#0F172A]">Immersive Sound. Zero Distractions.</h2>
            <div className="space-y-6 text-gray-500 leading-relaxed font-medium text-lg">
              <p>
                Experience audio like never before with the SonicPro X1. Featuring industry-leading Active Noise Cancellation (ANC), these headphones block out the world so you can focus on what matters—your music. With custom 40mm drivers, you get deep bass, crisp highs, and a perfectly balanced midrange.
              </p>
              <p>
                Designed for all-day comfort, the plush memory foam ear cushions and lightweight headband ensure you can listen for hours without fatigue. Plus, with up to 30 hours of battery life on a single charge, the music doesn't stop until you do.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-lg text-[#0F172A]">Active Noise Cancel</h4>
                  <p className="text-sm text-gray-500 font-medium">Adapts to your environment to silence noise.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-lg text-[#0F172A]">30-Hour Battery</h4>
                  <p className="text-sm text-gray-500 font-medium">Fast charging gives 5 hours in just 10 mins.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Sidebox */}
          <div className="lg:w-[420px]">
            <div className="bg-[#F8FAFC] p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
              <h3 className="font-black text-2xl text-[#0F172A] tracking-tight">Technical Specs</h3>
              <div className="space-y-5">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-2 border-b border-gray-200/50 last:border-0 pb-4 last:pb-0">
                    <span className="text-sm font-bold text-gray-400">{spec.label}</span>
                    <span className="text-sm font-black text-[#0F172A]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-24 pt-24 border-t border-gray-100">
          <h2 className="text-4xl font-black tracking-tight text-[#0F172A] mb-16">Customer Reviews</h2>
          <div className="grid lg:grid-cols-3 gap-24">
            
            {/* Aggregate Stats */}
            <div className="space-y-10">
              <div className="flex items-baseline gap-6">
                <span className="text-7xl font-black text-[#0F172A]">4.8</span>
                <div className="space-y-1.5">
                  <div className="flex text-yellow-400 text-lg">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Based on 124 reviews</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { stars: 5, perc: 85 },
                  { stars: 4, perc: 10 },
                  { stars: 3, perc: 3 },
                  { stars: 2, perc: 1 },
                  { stars: 1, perc: 1 }
                ].map((item) => (
                  <div key={item.stars} className="flex items-center gap-5">
                    <span className="text-[11px] font-black text-gray-500 w-12">{item.stars} star</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${item.perc}%` }}></div>
                    </div>
                    <span className="text-[11px] font-black text-gray-400 w-10 text-right">{item.perc}%</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-white border-2 border-gray-100 py-5 rounded-2xl font-black text-sm tracking-tight hover:bg-gray-50 transition-all shadow-sm active:scale-[0.98]">
                Write a Review
              </button>
            </div>

            {/* Individual Reviews List */}
            <div className="lg:col-span-2 space-y-16">
              {[
                { 
                  user: 'James Smith', 
                  initials: 'JS', 
                  date: '2 days ago', 
                  rating: 5, 
                  title: 'Absolutely stunning audio quality',
                  content: "I've tried many headphones in this price range, but the SonicPro X1 blows them out of the water. The bass is punchy without muddying the mids. The ANC works perfectly on my commute. Highly recommended!" 
                },
                { 
                  user: 'Emily Lawson', 
                  initials: 'EL', 
                  date: '1 week ago', 
                  rating: 4, 
                  title: 'Great, but fits a bit tight',
                  content: "Sound quality is top notch. My only minor gripe is that they feel a bit tight on the head after 3-4 hours of continuous use. Might just need some breaking in.",
                  hasImage: true
                }
              ].map((review, i) => (
                <div key={i} className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-sm shadow-sm ${i === 0 ? 'bg-indigo-500' : 'bg-[#10B981]'}`}>
                        {review.initials}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-black text-[#0F172A] text-lg leading-none">{review.user}</h4>
                        <div className="flex text-yellow-400 text-xs">
                          {[...Array(5)].map((_, j) => <span key={j}>{j < review.rating ? '★' : '☆'}</span>)}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{review.date}</span>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-black text-xl text-[#0F172A] tracking-tight">{review.title}</h5>
                    <p className="text-gray-500 font-medium leading-relaxed text-lg">{review.content}</p>
                  </div>
                  {review.hasImage && (
                    <div className="w-28 h-28 bg-[#F8FAFC] rounded-[24px] overflow-hidden border border-gray-100 shadow-sm p-2 cursor-pointer hover:opacity-90 transition-opacity">
                       <img src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&fit=crop" className="w-full h-full object-cover rounded-xl" alt="Review media" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Recommendations Section */}
        <div className="mt-40 pt-24 border-t border-gray-100">
           <div className="flex justify-between items-center mb-16">
             <h2 className="text-4xl font-black tracking-tight text-[#0F172A]">You might also like</h2>
             <button className="text-blue-600 text-[11px] font-black uppercase tracking-[0.3em] hover:underline flex items-center gap-1.5 transition-all">
               View all <span className="text-lg leading-none">→</span>
             </button>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { id: 'p2', name: 'SonicBuds Pro', category: 'True Wireless', price: 129.00, img: 'https://images.unsplash.com/photo-1572536147743-6900b94a5e42?w=400&fit=crop', rating: 4.5 },
               { id: 'p3', name: 'HomeBass 360', category: 'Smart Speaker', price: 199.00, img: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&fit=crop', rating: 4.9 },
               { id: 'p4', name: 'Alloy Stand', category: 'Accessories', price: 39.00, img: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&fit=crop', rating: 4.2, isNew: true },
               { id: 'p5', name: 'FastCharge C-Cable', category: 'Cables', price: 19.00, img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&fit=crop', rating: 4.7 }
             ].map((item) => (
               <div key={item.id} className="group bg-white p-5 rounded-[48px] border border-transparent hover:border-gray-50 hover:shadow-2xl transition-all cursor-pointer">
                 <div className="aspect-square bg-[#F8FAFC] rounded-[40px] overflow-hidden mb-8 relative flex items-center justify-center p-10">
                   <img src={item.img} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                   {item.isNew && (
                     <span className="absolute top-6 left-6 bg-blue-600 text-white text-[9px] font-black px-2.5 py-1 rounded uppercase tracking-widest shadow-lg shadow-blue-100">
                       New
                     </span>
                   )}
                   <button className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0F172A] shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 border border-gray-50 hover:bg-blue-600 hover:text-white">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </button>
                 </div>
                 <div className="space-y-2 px-3">
                   <h4 className="font-black text-base text-[#0F172A] leading-tight group-hover:text-blue-600 transition-colors">{item.name}</h4>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{item.category}</p>
                   <div className="flex justify-between items-center pt-4">
                     <span className="font-black text-lg text-[#0F172A]">{formatPrice(item.price)}</span>
                     <div className="flex items-center gap-1.5">
                       <span className="text-yellow-400 text-xs leading-none">★</span>
                       <span className="text-[11px] font-black text-gray-400 leading-none">{item.rating}</span>
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </main>

      {/* Embedded Brand Footer Section */}
      <footer className="mt-20 bg-white border-t border-gray-100 pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-xl shadow-blue-100">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-2xl font-black text-[#0F172A] tracking-tighter">ElevateShop</span>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[280px]">
                Elevating your shopping experience with premium curated tech and lifestyle products. Quality guaranteed.
              </p>
              <div className="flex gap-7 opacity-25">
                <span className="cursor-pointer hover:opacity-100 transition-opacity text-xl">🌐</span>
                <span className="cursor-pointer hover:opacity-100 transition-opacity text-xl">📸</span>
              </div>
            </div>
            <div>
              <h4 className="font-black text-[11px] text-gray-400 uppercase tracking-[0.3em] mb-10">Shop</h4>
              <ul className="space-y-5 text-[15px] font-bold text-gray-600">
                <li><button className="hover:text-blue-600 transition-colors">New Arrivals</button></li>
                <li><button className="hover:text-blue-600 transition-colors">Electronics</button></li>
                <li><button className="hover:text-blue-600 transition-colors">Accessories</button></li>
                <li><button className="hover:text-blue-600 transition-colors">Sale</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[11px] text-gray-400 uppercase tracking-[0.3em] mb-10">Support</h4>
              <ul className="space-y-5 text-[15px] font-bold text-gray-600">
                <li><button className="hover:text-blue-600 transition-colors">Contact Us</button></li>
                <li><button className="hover:text-blue-600 transition-colors">FAQs</button></li>
                <li><button className="hover:text-blue-600 transition-colors">Shipping</button></li>
                <li><button className="hover:text-blue-600 transition-colors">Returns</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[11px] text-gray-400 uppercase tracking-[0.3em] mb-10">Stay in the loop</h4>
              <p className="text-[13px] text-gray-500 font-medium mb-8">Subscribe for exclusive offers and news.</p>
              <form className="flex gap-2.5" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 text-[13px] font-medium focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                <button className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-black text-[13px] hover:bg-black transition-all shadow-xl shadow-blue-50">Join</button>
              </form>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <p>© 2023 ElevateShop Inc. All rights reserved.</p>
            <div className="flex gap-12">
              <button className="hover:text-gray-900 transition-colors">Privacy Policy</button>
              <button className="hover:text-gray-900 transition-colors">Terms of Service</button>
              <div className="flex gap-4 ml-6 grayscale opacity-40">
                <div className="w-8 h-5 bg-gray-300 rounded-[3px]"></div>
                <div className="w-8 h-5 bg-gray-300 rounded-[3px]"></div>
                <div className="w-8 h-5 bg-gray-300 rounded-[3px]"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailsPage;
