// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React from 'react';
import { formatPrice } from '../constants';

const AdminDashboard = ({ onNav }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-['Inter']">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col p-8 fixed h-full z-50">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" strokeWidth="2"/><path d="M9 12h6" strokeWidth="2"/><path d="M9 16h6" strokeWidth="2"/></svg>
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tighter">AdminHub</span>
        </div>

        <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Alex Morgan</h4>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Super Admin</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { name: 'Dashboard', icon: '📊', active: true },
            { name: 'Products', icon: '📦' },
            { name: 'Orders', icon: '🛒', badge: 4 },
            { name: 'Users', icon: '👥' },
            { name: 'CMS', icon: '🖥️' },
            { name: 'Coupons', icon: '🏷️' },
            { name: 'Inventory', icon: '🏠' },
          ].map(item => (
            <button 
              key={item.name}
              className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all font-bold text-sm ${item.active ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-400 hover:bg-gray-50'}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-lg opacity-80">{item.icon}</span>
                {item.name}
              </div>
              {item.badge && <span className="bg-blue-600 text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="pt-10 border-t border-gray-100 space-y-2">
          <button className="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl font-bold text-sm text-gray-400 hover:bg-gray-50 transition-all">
            <span>⚙️</span> Settings
          </button>
          <button onClick={() => onNav('home')} className="w-full flex items-center justify-center gap-3 px-5 py-3.5 bg-gray-50 rounded-2xl font-black text-sm text-gray-900 hover:bg-gray-100 transition-all">
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 ml-72 p-12 space-y-10">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Dashboard Overview</h1>
            <p className="text-gray-400 font-medium">Welcome back, here is your store's daily activity summary.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white border border-gray-100 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-3 shadow-sm hover:bg-gray-50 transition-all">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2"/></svg>
               Export Report
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-3 shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2.5"/></svg>
               Add Product
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-8">
          {[
            { label: 'Total Revenue', value: '$45,231.89', change: '+12.5%', icon: '💰', trend: 'up' },
            { label: 'New Orders', value: '1,342', change: '+5.2%', icon: '📦', trend: 'up' },
            { label: 'Active Users', value: '12,503', change: '+2.1%', icon: '👥', trend: 'up' },
            { label: 'Pending Shipments', value: '45', change: '-0.5%', icon: '🚚', trend: 'down' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-xl">{stat.icon}</div>
                <div className={`px-2 py-1 rounded-lg text-[10px] font-bold ${stat.trend === 'up' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Compared to last month</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Sales Performance</h3>
                <p className="text-xs text-gray-400 font-medium mt-1">Revenue over the last 30 days</p>
              </div>
              <div className="bg-gray-50 p-1 rounded-xl flex gap-1">
                <button className="bg-white px-4 py-2 rounded-lg text-xs font-bold text-gray-900 shadow-sm">Daily</button>
                <button className="px-4 py-2 rounded-lg text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors">Weekly</button>
              </div>
            </div>
            <div className="h-64 relative flex items-end justify-between gap-4 px-2">
               <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                 <path d="M 0 180 Q 100 200 200 120 T 400 150 T 600 50 T 800 100" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                 <path d="M 0 180 Q 100 200 200 120 T 400 150 T 600 50 T 800 100 V 260 H 0 Z" fill="url(#grad1)" />
                 <defs>
                   <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                     <stop offset="0%" style={{stopColor:'#2563EB', stopOpacity:0.1}} />
                     <stop offset="100%" style={{stopColor:'#2563EB', stopOpacity:0}} />
                   </linearGradient>
                 </defs>
               </svg>
               {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                 <span key={day} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest relative z-10">{day}</span>
               ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-10">
            <h3 className="text-xl font-bold text-gray-900">Traffic Sources</h3>
            <div className="space-y-8">
              {[
                { label: 'Direct Search', value: '24.5k', perc: '45%', icon: '🔍', color: 'bg-blue-50 text-blue-600' },
                { label: 'Social Media', value: '12.8k', perc: '32%', icon: '📱', color: 'bg-pink-50 text-pink-600' },
                { label: 'Email Marketing', value: '8.2k', perc: '18%', icon: '✉️', color: 'bg-amber-50 text-amber-600' },
                { label: 'Referrals', value: '2.1k', perc: '5%', icon: '🔗', color: 'bg-purple-50 text-purple-600' },
              ].map((source, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${source.color}`}>{source.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-gray-900 text-sm">{source.label}</h4>
                      <span className="text-xs font-black text-gray-900">{source.value}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-gray-50 rounded-full overflow-hidden">
                        <div className={`h-full ${source.color.split(' ')[1].replace('text', 'bg')}`} style={{ width: source.perc }}></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 w-8">{source.perc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-10 border-b border-gray-50 flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-10 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest"><input type="checkbox" className="rounded" /></th>
                  <th className="px-10 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
                  <th className="px-10 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                  <th className="px-10 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                  <th className="px-10 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-10 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { id: '#ORD-00921', customer: 'Ethan Hunt', email: 'ethan.h@example.com', date: 'Oct 24, 2023', status: 'Completed', total: '$320.00', color: 'bg-green-100 text-green-600' },
                  { id: '#ORD-00922', customer: 'Sarah Connor', email: 'sarah.c@example.com', date: 'Oct 24, 2023', status: 'Processing', total: '$1,250.50', color: 'bg-blue-100 text-blue-600' },
                  { id: '#ORD-00923', customer: 'John Doe', email: 'johndoe@example.com', date: 'Oct 23, 2023', status: 'Cancelled', total: '$54.00', color: 'bg-red-100 text-red-600' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-10 py-6"><input type="checkbox" className="rounded" /></td>
                    <td className="px-10 py-6 font-bold text-gray-900 text-sm">{row.id}</td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center font-bold text-xs">{row.customer[0]}</div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{row.customer}</p>
                          <p className="text-[10px] text-gray-400 font-medium">{row.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-sm font-medium text-gray-500">{row.date}</td>
                    <td className="px-10 py-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${row.color}`}>{row.status}</span>
                    </td>
                    <td className="px-10 py-6 text-right font-black text-gray-900 text-sm">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;