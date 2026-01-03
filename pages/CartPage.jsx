// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React from 'react';
import { formatPrice } from '../constants';

const CartPage = ({ cart, onUpdateQuantity, onRemove, onNav }) => {
  // Use mock data for visual accuracy if the passed cart is empty for demonstration, 
  // but logically use the cart prop.
  const displayItems = cart.length > 0 ? cart : [];
  const subtotal = displayItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const discount = 20.00;
  const total = subtotal - discount;

  const recommendations = [
    { id: 'r1', name: 'Series 7 Smart Watch', price: 399.00, image: 'https://images.unsplash.com/photo-1544117518-30df56b9c4c2?w=400&fit=crop' },
    { id: 'r2', name: 'Instant Camera', price: 89.00, image: 'https://images.unsplash.com/photo-1526170315873-3a9861ea438a?w=400&fit=crop' },
    { id: 'r3', name: 'Fitness Tracker', price: 129.00, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter'] text-[#0F172A]">
      {/* Header / Navbar Placeholder matching the image style */}
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div onClick={() => onNav('home')} className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-xl font-bold tracking-tight">LuxeCart</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
              <button onClick={() => onNav('home')} className="hover:text-black">Home</button>
              <button onClick={() => onNav('products')} className="hover:text-black">Shop</button>
              <button className="hover:text-black">New Arrivals</button>
              <button className="hover:text-black">Sale</button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <input type="text" placeholder="Search products..." className="bg-[#F3F4F6] border-none rounded-full px-10 py-2 text-sm w-64 outline-none focus:ring-1 focus:ring-gray-200" />
              <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2"/></svg>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-black"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
              <button className="relative text-gray-500 hover:text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="1.5"/></svg>
                <span className="absolute -top-1 -right-1 bg-[#2563EB] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
              </button>
              <button className="text-gray-500 hover:text-black"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="1.5"/></svg></button>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Stepper */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold ring-4 ring-blue-50">1</div>
            <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest">Cart</span>
          </div>
          <div className="w-16 h-[2px] bg-gray-100 mb-6"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center text-xs font-bold border border-gray-100">2</div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Details</span>
          </div>
          <div className="w-16 h-[2px] bg-gray-100 mb-6"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center text-xs font-bold border border-gray-100">3</div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Payment</span>
          </div>
        </div>

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[11px] font-medium text-gray-400 mb-4">
          <button onClick={() => onNav('home')} className="hover:text-black">Home</button>
          <span>/</span>
          <button onClick={() => onNav('products')} className="hover:text-black">Shop</button>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Cart</span>
        </nav>

        <h1 className="text-3xl font-black tracking-tight mb-10">Shopping Cart <span className="text-gray-400 font-medium text-xl ml-2">({displayItems.length} Items)</span></h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items List */}
          <div className="flex-1 space-y-4 w-full">
            {displayItems.length > 0 ? displayItems.map((item) => (
              <div key={item.product.id} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 shadow-sm">
                <div className="w-32 h-32 bg-[#FBBF2410] rounded-xl flex items-center justify-center shrink-0">
                  <img src={item.product.image} className="w-24 h-24 object-contain mix-blend-multiply" alt={item.product.name} />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg leading-tight mb-1">{item.product.name}</h3>
                      <p className="text-xs font-medium text-gray-400">Color: {item.product.colors?.[0] || 'Midnight Black'}</p>
                      <p className="text-xs font-medium text-gray-400">Size: One Size</p>
                      <div className="mt-3">
                        <span className="bg-[#10B98110] text-[#10B981] text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider">In Stock</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-xl text-[#0F172A]">{formatPrice(item.product.price)}</p>
                      {item.product.isSale && (
                        <p className="text-xs text-gray-300 line-through font-bold mt-1">{formatPrice(item.product.price * 1.25)}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                      <button onClick={() => onUpdateQuantity(item.product.id, -1)} className="w-6 h-6 flex items-center justify-center font-bold text-gray-400 hover:text-black">-</button>
                      <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.product.id, 1)} className="w-6 h-6 flex items-center justify-center font-bold text-gray-400 hover:text-black">+</button>
                    </div>
                    <div className="flex items-center gap-6">
                      <button onClick={() => onRemove(item.product.id)} className="flex items-center gap-2 text-[11px] font-bold text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Remove
                      </button>
                      <button className="flex items-center gap-2 text-[11px] font-bold text-gray-400 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                <p className="text-gray-400 font-medium">Your cart is empty.</p>
                <button onClick={() => onNav('products')} className="mt-4 text-[#2563EB] font-bold hover:underline">Start shopping</button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[380px] space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-8">
              <h2 className="text-xl font-black">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-[#0F172A] font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    <span>Discount</span>
                  </div>
                  <span className="text-[#10B981] font-bold">-{formatPrice(discount)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Shipping</span>
                  <span className="text-[#10B981] font-bold">Free</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                  <span>Tax</span>
                  <span className="text-[#0F172A] font-bold">$0.00</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Promo Code</p>
                <div className="flex gap-2">
                  <input type="text" placeholder="Enter code" className="flex-1 bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5 text-sm font-medium outline-none focus:ring-1 focus:ring-blue-100" />
                  <button className="bg-gray-50 px-6 py-2.5 rounded-lg text-sm font-bold text-[#0F172A] hover:bg-gray-100 transition-colors">Apply</button>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-black uppercase tracking-widest">Total</span>
                  <div className="text-right">
                    <p className="text-3xl font-black text-[#0F172A] leading-none mb-1">{formatPrice(total)}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">USD, taxes included</p>
                  </div>
                </div>
                <button onClick={() => onNav('checkout')} className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-[0.98]">
                  Secure Checkout
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Guaranteed Safe & Secure Checkout</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 opacity-30 grayscale pt-4">
                <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-black uppercase">Visa</div>
                <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-black uppercase">Mc</div>
                <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-black uppercase">Amex</div>
                <div className="w-10 h-6 bg-gray-100 rounded-sm flex items-center justify-center text-[8px] font-black uppercase">Pp</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center text-center gap-2 shadow-sm">
                <div className="text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-[11px] font-black uppercase tracking-tight">Free Shipping</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">On orders over $100</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center text-center gap-2 shadow-sm">
                <div className="text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-[11px] font-black uppercase tracking-tight">30 Days Return</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">If goods have problems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <h2 className="text-2xl font-black mb-12">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((item) => (
              <div key={item.id} className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-transparent hover:border-gray-50 hover:shadow-2xl transition-all p-4">
                <div className="aspect-square bg-[#F8FAFC] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-8">
                  <img src={item.image} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all border border-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2"/></svg>
                  </button>
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-[#0F172A] text-base group-hover:text-[#2563EB] transition-colors">{item.name}</h4>
                  <p className="text-lg font-black text-gray-400">{formatPrice(item.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simplified Footer */}
      <footer className="border-t border-gray-100 py-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">© 2024 LuxeCart Inc. All rights reserved.</p>
          <div className="flex gap-10 text-[11px] font-black text-gray-400 uppercase tracking-widest">
            <button className="hover:text-black">Privacy Policy</button>
            <button className="hover:text-black">Terms of Service</button>
            <button className="hover:text-black">Shipping Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
