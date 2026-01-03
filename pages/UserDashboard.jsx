// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React, { useState } from 'react';
import { Product } from '../types';
import { formatPrice } from '../constants';

const UserDashboard = ({ onNav }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col font-['Inter']">
      <nav className="bg-white border-b border-gray-100 px-8 h-20 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <div onClick={() => onNav('home')} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Luxurio</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <button className="hover:text-gray-900">Men</button>
            <button className="hover:text-gray-900">Women</button>
            <button className="hover:text-gray-900">Kids</button>
            <button className="hover:text-gray-900">Home</button>
            <button className="text-red-500">Sale</button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input type="text" placeholder="Search products..." className="bg-gray-100 rounded-xl px-10 py-2.5 text-sm w-72 outline-none focus:ring-1 focus:ring-blue-100" />
            <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-900"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="1.5"/></svg></button>
            <button className="text-gray-400 hover:text-gray-900 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeWidth="1.5"/></svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
              <img src="https://i.pravatar.cc/150?u=alex" alt="Alex" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-10 flex gap-10 w-full">
        {/* Sidebar */}
        <aside className="w-64 flex flex-col gap-6 flex-shrink-0">
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 text-center flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-100 p-1">
              <img src="https://i.pravatar.cc/150?u=alex" alt="Alex" className="w-full h-full rounded-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Alex Johnson</h3>
              <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Gold Member</p>
            </div>
            <div className="w-full space-y-2 pt-4">
              {[
                { name: 'Dashboard', icon: '📊' },
                { name: 'My Orders', icon: '📦' },
                { name: 'Wishlist', icon: '❤️', badge: 5 },
                { name: 'Address Book', icon: '📍' },
                { name: 'Payment Methods', icon: '💳' },
                { name: 'My Reviews', icon: '📝' },
              ].map(item => (
                <button 
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === item.name ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-gray-400 hover:bg-gray-50'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{item.icon}</span>
                    {item.name}
                  </div>
                  {item.badge && <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === item.name ? 'bg-white/20' : 'bg-gray-100'}`}>{item.badge}</span>}
                </button>
              ))}
            </div>
            <button onClick={() => onNav('login')} className="w-full flex items-center gap-3 px-4 py-3 mt-10 rounded-xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all">
              <span>🚪</span> Log Out
            </button>
          </div>

          <div className="bg-[#1E293B] rounded-[32px] p-8 text-white relative overflow-hidden">
             <div className="relative z-10 space-y-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Member Exclusive</p>
                <h4 className="text-xl font-black leading-tight">Get 20% Off Your Next Order</h4>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-[10px] font-bold text-gray-400">Use code</span>
                  <span className="bg-white/10 px-2 py-1 rounded text-xs font-mono font-bold">GOLD20</span>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3"></div>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400">Expires in 2 days</p>
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                <span>Home</span>
                <span>/</span>
                <span>My Account</span>
                <span>/</span>
                <span className="text-gray-900">Dashboard</span>
              </nav>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Welcome back, Alex!</h2>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last login: Today, 9:41 AM</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            {[
              { label: 'Active Orders', value: 2, icon: '🚚', color: 'bg-blue-50 text-blue-600' },
              { label: 'Wishlist Items', value: 5, icon: '💖', color: 'bg-pink-50 text-pink-600' },
              { label: 'Reviews Written', value: 12, icon: '⭐', color: 'bg-amber-50 text-amber-600' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between group cursor-pointer hover:border-blue-100 transition-all">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${stat.color}`}>{stat.icon}</div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="text-gray-300 group-hover:text-blue-600 transition-colors">→</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
                <button className="text-blue-600 text-xs font-bold hover:underline">View All Orders</button>
              </div>
              <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-50 space-y-6">
                <div className="flex gap-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-2xl p-2 flex gap-1">
                    <div className="flex-1 bg-white rounded-lg"></div>
                    <div className="flex-1 bg-white rounded-lg"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-gray-900">Order #45920-A</h4>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Out for Delivery</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium mt-1">Estimated Arrival: <span className="text-gray-900 font-bold">Today by 8:00 PM</span></p>
                    <div className="mt-4 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-4/5"></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-xs shadow-lg shadow-blue-100">Track Order</button>
                  <button className="flex-1 bg-white border border-gray-100 text-gray-900 py-3 rounded-xl font-bold text-xs hover:bg-gray-100">Details</button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Edit Profile', icon: '👤' },
                  { label: 'Add Address', icon: '📍' },
                  { label: 'Write Review', icon: '📝' },
                  { label: 'Support', icon: '🎧' },
                ].map((act, i) => (
                  <button key={i} className="flex flex-col items-center gap-3 p-6 bg-gray-50/50 rounded-2xl border border-gray-50 hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all group">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">{act.icon}</div>
                    <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{act.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900">Default Shipping</h3>
                  <button className="text-blue-600 hover:text-blue-800"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2"/></svg></button>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">📍</div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900">Alex Johnson</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">1234 Design Street, Apt 56<br />San Francisco, CA 94103<br />United States</p>
                      <p className="text-sm text-gray-900 font-bold mt-2">📞 +1 (555) 123-4567</p>
                    </div>
                    <div className="bg-green-50 text-green-600 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                       <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                       Verified address for secure delivery.
                    </div>
                  </div>
                </div>
             </div>
          </div>

          <div className="pt-10 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Recommended For You</h3>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-all">←</button>
                <button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-all">→</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {[
                { name: 'Instax Mini 11', price: 69.00, category: 'Cameras', img: 'https://images.unsplash.com/photo-1526170315873-3a9861ea438a?w=400&fit=crop' },
                { name: 'Sony WH-1000XM4', price: 348.00, category: 'Audio', img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&fit=crop' },
                { name: 'Apple Watch SE', price: 249.00, category: 'Wearables', sale: '$279', img: 'https://images.unsplash.com/photo-1544117518-30df56b9c4c2?w=400&fit=crop' },
                { name: 'Heritage Backpack', price: 110.00, category: 'Accessories', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&fit=crop' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-3xl border border-gray-50 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                  <div className="aspect-square bg-gray-50 rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center p-6">
                    <img src={item.img} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                    {item.sale && <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest">SALE</span>}
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm">❤️</button>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.category}</p>
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-gray-900">{formatPrice(item.price)}</span>
                        {item.sale && <span className="text-[10px] text-gray-300 line-through font-bold">{item.sale}</span>}
                      </div>
                      <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">🛒</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-gray-100 py-10 px-8 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white">
        <div className="flex gap-10">
          <button className="hover:text-gray-900">Returns Policy</button>
          <button className="hover:text-gray-900">Customer Support</button>
          <button className="hover:text-gray-900">Privacy</button>
        </div>
        <p>© 2024 Luxurio Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserDashboard;