// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React from 'react';

const OrderConfirmationPage = ({ onNav }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in duration-700">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-5xl mb-8 font-bold">✓</div>
      <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-4 text-center">Thanks for your order, Alex!</h1>
      <p className="text-gray-500 font-medium text-xl text-center max-w-xl mb-12 leading-relaxed">We've received your order <span className="text-gray-900 font-bold">#ORD-9321</span> and will begin processing it right away.</p>
      <div className="flex gap-4">
        <button onClick={() => onNav('dashboard')} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-100 hover:bg-blue-700 transition-all">Track Order</button>
        <button onClick={() => onNav('home')} className="bg-gray-100 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-200 transition-all">Continue Shopping</button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;