// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React from 'react';
import { CartItem } from '../types';
import { formatPrice } from '../constants';

const CheckoutPage = ({ cart, onNav }) => {
  const subtotal = cart.reduce((acc, i) => acc + (i.product.price * i.quantity), 0);
  const taxes = 35.84;
  const total = subtotal + taxes;

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <header className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNav('home')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">LuxeMarket</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zM7 7a3 3 0 116 0v2H7V7z"/></svg>
            Secure Checkout
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
           <div className="flex-[7] space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
                 <h2 className="text-2xl font-black text-gray-900 tracking-tight">Shipping Address</h2>
                 <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" className="bg-gray-50 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-100" />
                    <input type="text" placeholder="Last Name" className="bg-gray-50 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-100" />
                 </div>
                 <input type="text" placeholder="Street Address" className="w-full bg-gray-50 rounded-xl p-4 outline-none focus:ring-1 focus:ring-blue-100" />
                 <div className="flex justify-end pt-4">
                   <button onClick={() => onNav('confirmation')} className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Continue to Delivery →</button>
                 </div>
              </div>
           </div>
           <div className="flex-[4]">
              <div className="bg-white p-10 rounded-[40px] border border-gray-50 shadow-sm sticky top-24">
                 <h2 className="text-2xl font-black text-gray-900 mb-8">Summary</h2>
                 <div className="space-y-4 mb-8">
                   <div className="flex justify-between font-medium text-gray-500"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                   <div className="flex justify-between font-medium text-gray-500"><span>Estimated Tax</span><span>{formatPrice(taxes)}</span></div>
                 </div>
                 <div className="pt-8 border-t border-gray-100 flex justify-between items-baseline">
                   <span className="text-lg font-black text-gray-900">Total</span>
                   <span className="text-3xl font-black text-blue-600">{formatPrice(total)}</span>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;