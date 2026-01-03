
import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, OrderStatus } from './types';
import { MOCK_PRODUCTS, CATEGORIES, formatPrice } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { generateProductDescription, analyzeReviewSentiment } from './services/gemini';

const useHashRouter = () => {
  const [route, setRoute] = useState(window.location.hash.replace('#', '') || 'home');
  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const navigate = (to: string) => {
    window.location.hash = to;
  };
  return { route, navigate };
};

// --- USER DASHBOARD (Luxurio Style) ---
const UserDashboard = ({ onNav }: { onNav: (p: string) => void }) => {
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
              {['Dashboard', 'My Orders', 'Wishlist', 'Address Book', 'Payment Methods', 'My Reviews'].map(name => (
                <button key={name} onClick={() => setActiveTab(name)} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === name ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-gray-400 hover:bg-gray-50'}`}>
                  {name}
                </button>
              ))}
            </div>
            <button onClick={() => onNav('login')} className="w-full flex items-center gap-3 px-4 py-3 mt-10 rounded-xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all">🚪 Log Out</button>
          </div>
        </aside>
        <main className="flex-1 space-y-8">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">User Dashboard Placeholder</h2>
        </main>
      </div>
    </div>
  );
};

// --- ADMIN DASHBOARD (AdminHub Style) ---
const AdminDashboard = ({ onNav }: { onNav: (p: string) => void }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-['Inter']">
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col p-8 fixed h-full z-50">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" strokeWidth="2"/></svg>
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tighter">AdminHub</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm"><img src="https://i.pravatar.cc/150?u=admin" alt="Admin" /></div>
          <div><h4 className="font-bold text-gray-900 text-sm">Alex Morgan</h4><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Super Admin</p></div>
        </div>
        <nav className="flex-1 space-y-2">
          {['Dashboard', 'Products', 'Orders', 'Users', 'CMS', 'Coupons', 'Inventory'].map(name => (
            <button key={name} className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all font-bold text-sm text-gray-400 hover:bg-gray-50">{name}</button>
          ))}
        </nav>
        <button onClick={() => onNav('home')} className="w-full flex items-center justify-center gap-3 px-5 py-3.5 bg-gray-50 rounded-2xl font-black text-sm text-gray-900 hover:bg-gray-100 transition-all">🚪 Logout</button>
      </aside>
      <main className="flex-1 ml-72 p-12">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Admin Dashboard Placeholder</h1>
      </main>
    </div>
  );
};

// --- AUTH PAGES ---
const LoginPage = ({ onNav }: { onNav: (p: string) => void }) => {
  return <div className="min-h-screen flex items-center justify-center bg-gray-50"><button onClick={() => onNav('home')} className="bg-blue-600 text-white p-4 rounded">Back Home (Login Placeholder)</button></div>;
};
const RegisterPage = ({ onNav }: { onNav: (p: string) => void }) => {
  return <div className="min-h-screen flex items-center justify-center bg-gray-50"><button onClick={() => onNav('home')} className="bg-blue-600 text-white p-4 rounded">Back Home (Register Placeholder)</button></div>;
};

// --- CHECKOUT & CONFIRMATION ---
const CheckoutPage = ({ cart, onNav }: { cart: CartItem[], onNav: (p: string) => void }) => {
  return <div className="min-h-screen p-20"><h1 className="text-3xl font-bold">Checkout Placeholder</h1><button onClick={() => onNav('confirmation')} className="mt-8 bg-blue-600 text-white p-4 rounded">Place Order</button></div>;
};
const OrderConfirmationPage = ({ onNav }: { onNav: (p: string) => void }) => {
  return <div className="min-h-screen flex flex-col items-center justify-center"><h1 className="text-4xl font-black">Order Placed!</h1><button onClick={() => onNav('home')} className="mt-8 bg-blue-600 text-white p-4 rounded">Continue Shopping</button></div>;
};

// --- CART PAGE ---
// Fix: Added missing CartPage component to resolve "Cannot find name 'CartPage'" error
const CartPage = ({ cart, onUpdateQuantity, onRemove, onNav }: { cart: CartItem[], onUpdateQuantity: (id: string, d: number) => void, onRemove: (id: string) => void, onNav: (p: string) => void }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-['Inter']">
      <h1 className="text-4xl font-black mb-12 tracking-tight">Your Shopping Bag</h1>
      {cart.length === 0 ? (
        <div className="text-center py-24 bg-[#F8FAFC] rounded-[40px]">
          <p className="text-[#64748B] mb-8 font-medium">Your cart is feeling a bit light.</p>
          <button onClick={() => onNav('home')} className="bg-[#2563EB] text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-100 transition-transform active:scale-95">Start Exploring</button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {cart.map(item => (
              <div key={item.product.id} className="flex flex-col sm:flex-row gap-8 p-8 bg-white border border-[#F1F5F9] rounded-[32px] items-center hover:shadow-xl hover:shadow-gray-100 transition-all">
                <div className="w-32 h-32 bg-[#F8FAFC] rounded-2xl flex items-center justify-center p-4">
                  <img src={item.product.image} className="w-full h-full object-contain mix-blend-multiply" alt={item.product.name} />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-xl text-[#0F172A]">{item.product.name}</h3>
                  <p className="text-[#94A3B8] text-xs font-black uppercase tracking-widest mt-1">{item.product.category}</p>
                  <p className="text-[#2563EB] font-black text-lg mt-2">{formatPrice(item.product.price)}</p>
                </div>
                <div className="flex items-center gap-6 bg-[#F8FAFC] px-6 py-3 rounded-2xl">
                  <button onClick={() => onUpdateQuantity(item.product.id, -1)} className="w-8 h-8 flex items-center justify-center font-black text-[#94A3B8] hover:text-[#0F172A] transition-colors">-</button>
                  <span className="font-black text-[#0F172A] w-4 text-center">{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.product.id, 1)} className="w-8 h-8 flex items-center justify-center font-black text-[#94A3B8] hover:text-[#0F172A] transition-colors">+</button>
                </div>
                <button onClick={() => onRemove(item.product.id)} className="text-[#EF4444] hover:bg-red-50 w-12 h-12 rounded-2xl flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ))}
          </div>
          <div className="bg-[#F8FAFC] p-10 rounded-[40px] h-fit space-y-8 sticky top-32 border border-[#F1F5F9]">
            <h3 className="font-black text-2xl tracking-tight text-[#0F172A]">Summary</h3>
            <div className="space-y-4 border-b border-[#E2E8F0] pb-8">
              <div className="flex justify-between text-[#64748B] font-bold"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between text-[#64748B] font-bold"><span>Shipping</span><span className="text-[#10B981]">FREE</span></div>
            </div>
            <div className="flex justify-between font-black text-3xl pt-2 text-[#0F172A]"><span>Total</span><span>{formatPrice(subtotal)}</span></div>
            <button onClick={() => onNav('checkout')} className="w-full bg-[#0F172A] text-white py-6 rounded-[24px] font-black text-sm tracking-widest uppercase shadow-2xl shadow-gray-200 hover:bg-black transition-all active:scale-[0.98]">Proceed to Checkout →</button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- PRODUCT DETAILS PAGE ---
// Fix: Added missing ProductDetailsPage component to resolve "Cannot find name 'ProductDetailsPage'" error
const ProductDetailsPage = ({ productId, onAddToCart, onNav }: { productId: string, onAddToCart: (p: Product) => void, onNav: (p: string) => void }) => {
  const product = MOCK_PRODUCTS.find(p => p.id === productId) || MOCK_PRODUCTS[0];
  const [aiDescription, setAiDescription] = useState<string>('');
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    const fetchAiDesc = async () => {
      setLoadingAi(true);
      const desc = await generateProductDescription(product.name, product.category);
      setAiDescription(desc);
      setLoadingAi(false);
    };
    fetchAiDesc();
  }, [product.id, product.name, product.category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-700 font-['Inter']">
      <div className="grid lg:grid-cols-2 gap-24">
        <div className="bg-[#F8FAFC] rounded-[64px] p-24 flex items-center justify-center relative overflow-hidden group">
          <img src={product.image} alt={product.name} className="w-full max-w-lg object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute top-10 left-10 flex gap-4">
             {product.isNew && <span className="bg-white px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-sm">New</span>}
          </div>
        </div>
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-[#2563EB] font-black text-xs uppercase tracking-[0.3em]">{product.category}</p>
            <h1 className="text-7xl font-black text-[#0F172A] tracking-tighter leading-[0.9]">{product.name}</h1>
            <div className="flex items-center gap-6">
              <div className="flex text-[#FBBF24] text-sm tracking-widest">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                ))}
              </div>
              <span className="text-[#94A3B8] font-black text-[10px] uppercase tracking-widest">{(product.ratingCount || 0)} Reviews</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-black text-[10px] uppercase tracking-[0.2em] text-[#94A3B8]">AI Product Insights</h3>
            <div className="bg-[#EEF2FF] p-10 rounded-[40px] border border-[#E0E7FF] relative min-h-[140px] flex items-center">
              {loadingAi ? (
                <div className="animate-pulse space-y-3 w-full">
                  <div className="h-3 bg-[#E0E7FF] rounded-full w-3/4"></div>
                  <div className="h-3 bg-[#E0E7FF] rounded-full w-1/2"></div>
                </div>
              ) : (
                <p className="text-[#1E40AF] font-bold leading-relaxed text-lg italic pr-12">"{aiDescription}"</p>
              )}
              <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-100 border border-blue-50">✨</div>
            </div>
          </div>

          <div className="flex items-baseline gap-6">
             <span className="text-6xl font-black text-[#0F172A] tracking-tighter">{formatPrice(product.price)}</span>
             {product.isSale && <span className="text-[#CBD5E1] text-2xl line-through font-bold">{formatPrice(product.price * 1.25)}</span>}
          </div>

          <p className="text-[#64748B] font-medium leading-relaxed text-xl max-w-xl">{product.description}</p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-10">
            <button 
              onClick={() => onAddToCart(product)} 
              className="flex-1 bg-[#2563EB] text-white py-8 rounded-[32px] font-black text-sm tracking-widest uppercase shadow-2xl shadow-blue-200 hover:bg-[#1D4ED8] transition-all hover:-translate-y-1 active:translate-y-0"
            >
              Add to Bag →
            </button>
            <button className="w-24 h-24 rounded-[32px] border-2 border-[#F1F5F9] flex items-center justify-center hover:bg-[#F8FAFC] transition-all group active:scale-90">
              <svg className="w-8 h-8 text-[#94A3B8] group-hover:text-[#EF4444] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- LUXESTORE HOME PAGE (Updated to match Image 1) ---
const LuxeStoreHome = ({ onNav, products }: { onNav: (p: string) => void, products: Product[] }) => (
  <div className="animate-in fade-in duration-700 font-['Inter']">
    {/* Hero Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <span className="inline-block bg-[#E0E7FF] text-[#2563EB] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">NEW SEASON</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#0F172A] leading-[1]">Summer<br />Collection<br /><span className="text-[#2563EB]">2024</span></h1>
        <p className="text-[#64748B] font-medium text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">Upgrade your style with our latest premium arrivals. Quality materials meet modern design in our most anticipated drop yet.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start font-bold">
          <button onClick={() => onNav('products')} className="bg-[#2563EB] text-white px-8 py-4 rounded-xl text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">Shop Collection →</button>
          <button className="bg-white border border-[#E2E8F0] text-[#0F172A] px-8 py-4 rounded-xl text-sm hover:bg-gray-50 transition-all">View Lookbook</button>
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0]">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80" alt="Model" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/5 to-transparent"></div>
        </div>
        {/* Floating element decorator like in image */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center p-4">
           <div className="w-full h-full bg-[#F1F5F9] rounded-2xl flex items-center justify-center text-blue-600 font-black text-2xl tracking-tighter">50%</div>
        </div>
      </div>
    </section>

    {/* Feature Icons */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-y border-gray-100">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Free Shipping', subtitle: 'On all orders over $50', icon: '🚚' },
          { title: 'Secure Payment', subtitle: '100% secure checkout', icon: '🛡️' },
          { title: 'Easy Returns', subtitle: '30 day return policy', icon: '📦' },
          { title: '24/7 Support', subtitle: 'Dedicated support team', icon: '🎧' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-2 group cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-2 transition-transform group-hover:scale-110">{item.icon}</div>
            <h3 className="text-sm font-bold text-[#0F172A]">{item.title}</h3>
            <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Shop by Category */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-3xl font-black tracking-tight text-[#0F172A]">Shop by Category</h2>
        <button onClick={() => onNav('products')} className="text-[#2563EB] text-xs font-bold hover:underline tracking-widest uppercase">View All →</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {[
          { name: 'Men', sub: 'New Styles', img: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?w=200&h=200&fit=crop' },
          { name: 'Women', sub: 'Trending', img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=200&h=200&fit=crop' },
          { name: 'Tech', sub: 'Latest Gadgets', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
          { name: 'Accessories', sub: 'Essentials', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
          { name: 'Home', sub: 'Decor & Living', img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&h=200&fit=crop' },
          { name: 'Beauty', sub: 'Care & Glow', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?w=200&h=200&fit=crop' },
        ].map(cat => (
          <div key={cat.name} className="group cursor-pointer flex flex-col items-center gap-6 text-center">
            <div className="w-full aspect-square rounded-full overflow-hidden bg-[#F8FAFC] border-2 border-transparent group-hover:border-[#2563EB] transition-all p-1 shadow-sm">
              <img src={cat.img} className="w-full h-full object-cover rounded-full" alt={cat.name} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0F172A] group-hover:text-[#2563EB] transition-colors">{cat.name}</h4>
              <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">{cat.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* New Arrivals Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[#F8FAFC] rounded-[60px] my-10">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-black tracking-tight text-[#0F172A]">New Arrivals</h2>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all shadow-sm">←</button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all shadow-sm">→</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map(p => (
          <ProductCard key={p.id} product={p} onAddToCart={() => {}} onClick={() => onNav(`p-${p.id}`)} onWishlist={() => {}} />
        ))}
      </div>
    </section>

    {/* Mid-Season Sale Banner */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-[#2563EB] rounded-[40px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl shadow-blue-200">
        <div className="space-y-8 z-10 text-white flex-1 text-center md:text-left">
          <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">LIMITED OFFER</span>
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9]">Mid-Season Sale<br />Up to 50% Off</h2>
          <p className="text-white/70 font-medium text-lg max-w-sm mx-auto md:mx-0 leading-relaxed">Don't miss out on our biggest sale of the year. Grab your favorites before they are gone.</p>
          <button className="bg-white text-[#2563EB] px-10 py-5 rounded-2xl font-black text-sm hover:bg-gray-50 transition-all shadow-xl">Shop The Sale</button>
        </div>
        <div className="flex-1 w-full flex justify-center items-center z-10">
          <div className="w-80 h-80 bg-white/10 rounded-[60px] p-10 backdrop-blur-md border border-white/20 rotate-6 hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&fit=crop" className="w-full h-full object-contain mix-blend-screen" alt="Shoe" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </section>

    {/* Join the club */}
    <section className="bg-white py-32">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-10">
        <h2 className="text-5xl font-black tracking-tighter text-[#0F172A]">Join the club</h2>
        <p className="text-[#64748B] font-medium text-xl leading-relaxed">Subscribe to our newsletter and get 10% off your first purchase plus exclusive access to new drops.</p>
        <form className="flex flex-col sm:flex-row gap-4 pt-6" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" className="flex-1 bg-[#F1F5F9] border-none rounded-2xl px-8 py-5 outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium" required />
          <button className="bg-[#0F172A] text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-black transition-all shadow-lg">Subscribe</button>
        </form>
      </div>
    </section>
  </div>
);

// --- LUMINA PRODUCT LISTING PAGE (Updated to match Image 2) ---
const LuminaProductListing = ({ onNav, products }: { onNav: (p: string) => void, products: Product[] }) => {
  const [priceRange, setPriceRange] = useState(250);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 animate-in fade-in duration-700 font-['Inter']">
      <nav className="flex items-center gap-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-10">
        <button onClick={() => onNav('home')} className="hover:text-[#0F172A] transition-all">Home</button>
        <span className="text-gray-300">/</span>
        <button onClick={() => onNav('fashion')} className="hover:text-[#0F172A] transition-all">Men</button>
        <span className="text-gray-300">/</span>
        <span className="text-[#0F172A]">Running Shoes</span>
      </nav>

      <div className="mb-16">
        <h1 className="text-5xl font-black text-[#0F172A] mb-6 tracking-tighter">Performance Running Shoes</h1>
        <p className="text-[#64748B] max-w-2xl text-lg font-medium leading-relaxed">Lightweight, responsive, and ready for your next PR. Explore our latest collection designed for every runner.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        {/* Sidebar Filter */}
        <aside className="lg:w-72 shrink-0 space-y-12">
          <div className="space-y-6">
            <div className="flex justify-between items-center group cursor-pointer">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0F172A]">Category</h3>
              <span className="text-gray-400 font-bold">^</span>
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

          <div className="space-y-8 pt-8 border-t border-gray-100">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0F172A]">Price Range</h3>
            <div className="px-1">
              <input type="range" min="50" max="500" value={priceRange} onChange={(e) => setPriceRange(parseInt(e.target.value))} className="w-full h-1.5 bg-[#F1F5F9] rounded-lg appearance-none cursor-pointer accent-[#2563EB]" />
              <div className="flex items-center gap-4 mt-8">
                <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-xs font-bold">$</span>
                  <input type="text" value="50" className="w-full bg-white border border-[#E2E8F0] rounded-xl py-3.5 pl-8 text-xs font-black text-[#0F172A] outline-none" readOnly />
                </div>
                <span className="text-[#CBD5E1] font-bold">—</span>
                <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-xs font-bold">$</span>
                  <input type="text" value={priceRange} className="w-full bg-white border border-[#E2E8F0] rounded-xl py-3.5 pl-8 text-xs font-black text-[#0F172A] outline-none" readOnly />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-gray-100">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0F172A]">Color</h3>
            <div className="flex flex-wrap gap-4">
              {['bg-black', 'bg-white border border-[#E2E8F0]', 'bg-[#2563EB]', 'bg-[#EF4444]', 'bg-[#10B981]', 'bg-[#FBBF24]'].map((color, i) => (
                <button key={i} className={`w-8 h-8 rounded-full ${color} transition-all hover:scale-125 hover:shadow-lg active:scale-95`} />
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-gray-100">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#0F172A]">Rating</h3>
            <div className="space-y-4">
              {[4, 3].map((r) => (
                <label key={r} className="flex items-center gap-4 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 border-2 border-[#E2E8F0] rounded-lg checked:bg-[#2563EB] checked:border-transparent transition-all" />
                  <div className="flex items-center gap-3">
                    <div className="flex text-[#FBBF24] text-xs gap-0.5">
                      {[...Array(5)].map((_, i) => <span key={i}>{i < r ? '★' : '☆'}</span>)}
                    </div>
                    <span className="text-xs font-black text-[#64748B] group-hover:text-[#0F172A] transition-all">& Up</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-blue-50 text-[#2563EB] px-4 py-2 rounded-full text-xs font-black flex items-center gap-3 border border-blue-100 shadow-sm">
                Road Running 
                <button className="hover:text-blue-800 transition-colors">✕</button>
              </div>
              <button className="text-xs font-black text-[#94A3B8] hover:text-[#0F172A] transition-all ml-4 tracking-widest uppercase">Clear All</button>
            </div>
            <div className="flex items-center gap-10">
              <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">Showing 127 results</span>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <select className="bg-white border border-[#E2E8F0] rounded-xl px-6 py-3 text-xs font-black text-[#0F172A] outline-none cursor-pointer appearance-none pr-10 shadow-sm">
                    <option>Sort by: Featured</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none">⌄</span>
                </div>
                <div className="flex border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
                  <button className="p-3 bg-[#F8FAFC] text-[#2563EB] border-r border-[#E2E8F0]"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg></button>
                  <button className="p-3 text-[#94A3B8] hover:bg-gray-50 transition-all"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/></svg></button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {/* Displaying products to match image content */}
            {[
              { id: '1', name: 'Velocity Nitro 2', category: "Men's Running", price: 140, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&fit=crop', isNew: true, rating: 5 },
              { id: '2', name: 'Air Zoom Pegasus', category: "Road Running", price: 96, oldPrice: 120, img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&fit=crop', isSale: true, rating: 4 },
              { id: '3', name: 'Ultraboost Light', category: "Neutral Running", price: 190, img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&fit=crop', rating: 5 },
              { id: '4', name: 'Cloudstratus 3', category: "Max Cushioning", price: 180, img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&fit=crop', rating: 4.8 },
              { id: '5', name: 'Endorphin Speed 3', category: "Speed Running", price: 170, img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&fit=crop', rating: 5 },
              { id: '6', name: 'Wave Rider 27', category: "Daily Trainer", price: 145, img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&fit=crop', isLimited: true, rating: 4.5 },
            ].map(p => (
              <ProductCard 
                key={p.id} 
                product={{...MOCK_PRODUCTS[0], id: p.id, name: p.name, category: p.category, price: p.price, image: p.img, isNew: p.isNew, isSale: p.isSale, isLimited: p.isLimited as boolean, rating: p.rating}} 
                onAddToCart={() => {}} 
                onClick={() => onNav(`p-${p.id}`)} 
                onWishlist={() => {}} 
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-3">
             <button className="w-10 h-10 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-all shadow-sm">←</button>
             <button className="w-10 h-10 rounded-xl bg-[#2563EB] text-white font-black shadow-lg shadow-blue-100">1</button>
             <button className="w-10 h-10 rounded-xl border border-gray-100 font-black text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">2</button>
             <button className="w-10 h-10 rounded-xl border border-gray-100 font-black text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">3</button>
             <span className="text-[#94A3B8] font-black mx-2">...</span>
             <button className="w-10 h-10 rounded-xl border border-gray-100 font-black text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">12</button>
             <button className="w-10 h-10 rounded-xl border border-gray-100 flex items-center justify-center text-[#0F172A] hover:bg-gray-50 transition-all shadow-sm">→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const { route, navigate } = useHashRouter();
  const [cart, setCart] = useState<CartItem[]>([
    { product: MOCK_PRODUCTS[0], quantity: 1 },
    { product: MOCK_PRODUCTS[1], quantity: 1 }
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const cartCount = cart.reduce((acc, i) => acc + i.quantity, 0);

  const handleNav = (page: string) => {
    setSearchQuery('');
    navigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) return prev.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { product, quantity: 1 }];
    });
    navigate('cart');
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => i.product.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i).filter(i => i.quantity > 0));
  };

  const removeProduct = (id: string) => {
    setCart(prev => prev.filter(i => i.product.id !== id));
  };

  // Visibility logic
  const isAuthPage = route === 'login' || route === 'register';
  const isDashboard = route === 'dashboard' || route === 'admin';
  const showNavbar = !isAuthPage && !isDashboard && route !== 'checkout' && route !== 'confirmation';
  const showFooter = !isAuthPage && !isDashboard && route !== 'checkout' && route !== 'confirmation';

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-['Inter'] flex flex-col">
      {showNavbar && (
        <Navbar 
          cartCount={cartCount} 
          wishlistCount={0}
          onOpenCart={() => navigate('cart')}
          onSearch={(q) => { setSearchQuery(q); if (q) navigate('products'); }}
          onNav={handleNav}
        />
      )}

      <main className="flex-grow w-full">
        {route === 'home' && <LuxeStoreHome onNav={handleNav} products={MOCK_PRODUCTS} />}
        {(route === 'products' || route === 'electronics' || route === 'fashion' || route === 'home-living' || route === 'sale') && <LuminaProductListing onNav={handleNav} products={MOCK_PRODUCTS} />}
        {route === 'cart' && <CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeProduct} onNav={handleNav} />}
        {route.startsWith('p-') && <ProductDetailsPage productId={route.replace('p-', '')} onAddToCart={addToCart} onNav={handleNav} />}
        {route === 'checkout' && <CheckoutPage cart={cart} onNav={handleNav} />}
        {route === 'confirmation' && <OrderConfirmationPage onNav={handleNav} />}
        {route === 'login' && <LoginPage onNav={handleNav} />}
        {route === 'register' && <RegisterPage onNav={handleNav} />}
        {route === 'dashboard' && <UserDashboard onNav={handleNav} />}
        {route === 'admin' && <AdminDashboard onNav={handleNav} />}
      </main>

      {showFooter && (
        <footer className="bg-white border-t border-[#E2E8F0] pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
              <div className="space-y-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-2xl font-black text-[#0F172A] tracking-tighter">LuxeStore</span>
                </div>
                <p className="text-sm text-[#64748B] font-medium leading-relaxed max-w-xs">Your daily destination for premium fashion, tech, and lifestyle products. Quality guaranteed.</p>
                <div className="flex gap-6 opacity-40">
                  <span className="cursor-pointer hover:opacity-100 transition-opacity">🌐</span>
                  <span className="cursor-pointer hover:opacity-100 transition-opacity">📸</span>
                </div>
              </div>
              <div>
                <h4 className="font-black text-[#0F172A] mb-10 uppercase text-[10px] tracking-[0.2em]">Shop</h4>
                <ul className="space-y-5 text-sm font-bold text-[#64748B]">
                  <li><button className="hover:text-[#2563EB] transition-colors">New Arrivals</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">Best Sellers</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">Sale</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">Collections</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-[#0F172A] mb-10 uppercase text-[10px] tracking-[0.2em]">Help</h4>
                <ul className="space-y-5 text-sm font-bold text-[#64748B]">
                  <li><button className="hover:text-[#2563EB] transition-colors">Shipping & Returns</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">FAQ</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">Track Order</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">Contact Us</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-[#0F172A] mb-10 uppercase text-[10px] tracking-[0.2em]">Company</h4>
                <ul className="space-y-5 text-sm font-bold text-[#64748B]">
                  <li><button className="hover:text-[#2563EB] transition-colors">About Us</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">Careers</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">Terms</button></li>
                  <li><button className="hover:text-[#2563EB] transition-colors">Privacy</button></li>
                </ul>
              </div>
            </div>
            <div className="pt-10 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.1em]">© 2024 LuxeStore. All rights reserved.</p>
              <div className="flex gap-8 items-center grayscale opacity-40">
                 <div className="w-8 h-5 bg-[#94A3B8] rounded-sm"></div>
                 <div className="w-8 h-5 bg-[#94A3B8] rounded-sm"></div>
                 <div className="w-8 h-5 bg-[#94A3B8] rounded-sm"></div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
