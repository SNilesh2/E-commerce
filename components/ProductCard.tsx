
import React from 'react';
import { Product } from '../types';
import { formatPrice } from '../constants';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onClick: (p: Product) => void;
  onWishlist: (id: string) => void;
  isWishlisted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick, onWishlist, isWishlisted }) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden transition-all flex flex-col border border-transparent hover:border-gray-50 hover:shadow-2xl hover:shadow-gray-200/50"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-square bg-[#F8FAFC] flex items-center justify-center p-8 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Badges */}
        <div className="absolute top-5 left-5 flex flex-col gap-2">
          {product.isNew && (
            <div className="bg-[#0F172A] text-white px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg shadow-black/10">
              NEW
            </div>
          )}
          {product.isSale && (
            <div className="bg-[#EF4444] text-white px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg shadow-red-100">
              SALE -20%
            </div>
          )}
          {product.isLimited && (
            <div className="bg-[#2563EB] text-white px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-100">
              LIMITED
            </div>
          )}
        </div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onWishlist(product.id); }}
          className="absolute top-5 right-5 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-all shadow-sm opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100"
        >
          <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      
      <div className="p-6 flex flex-col flex-1 space-y-2">
        <div className="space-y-1">
          <h3 className="font-black text-[#0F172A] text-base tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors">
            {product.name}
          </h3>
          <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">
            {product.category}
          </p>
        </div>
        
        <div className="flex items-center gap-1 text-[10px] text-[#FBBF24]">
          {[...Array(5)].map((_, i) => (
            <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
          ))}
          <span className="text-[#94A3B8] font-black ml-1">({(Math.random() * 1000).toFixed(0)})</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex items-baseline gap-3">
            <span className="font-black text-[#0F172A] text-lg">{formatPrice(product.price)}</span>
            {product.isSale && (
              <span className="text-[#CBD5E1] text-xs line-through font-bold">{formatPrice(product.price * 1.25)}</span>
            )}
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="w-10 h-10 rounded-xl bg-[#F8FAFC] text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all shadow-sm active:scale-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
