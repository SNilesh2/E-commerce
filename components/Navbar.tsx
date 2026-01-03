
import React, { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onNav: (page: string) => void;
  onSearch: (query: string) => void;
  minimal?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, wishlistCount, onOpenCart, onNav, onSearch, minimal = false }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <nav className="bg-white sticky top-0 z-[100] w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <div 
            onClick={() => { onNav('home'); window.scrollTo(0, 0); }}
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-[#0F172A] tracking-tight">LuxeStore</span>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search for products, brands and more..."
                className="block w-full bg-[#F3F4F6] border-none rounded-lg py-2.5 pl-11 pr-4 text-sm font-medium text-gray-600 outline-none focus:ring-1 focus:ring-gray-200 transition-all"
              />
            </form>
          </div>

          {/* Nav Items & Icons */}
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => onNav('home')} className="text-sm font-semibold text-gray-700 hover:text-black transition-all">Shop</button>
              <button onClick={() => onNav('new arrivals')} className="text-sm font-semibold text-gray-700 hover:text-black transition-all">New Arrivals</button>
              <button onClick={() => onNav('sale')} className="text-sm font-semibold text-gray-700 hover:text-black transition-all">Sale</button>
            </div>
            
            <div className="flex items-center gap-5">
              <button className="text-gray-700 hover:text-black transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="text-gray-700 hover:text-black transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={onOpenCart}
                className="relative text-gray-700 hover:text-black transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#2563EB] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
