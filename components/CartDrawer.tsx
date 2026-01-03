
import React from 'react';
import { CartItem } from '../types';
import { formatPrice } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          <div className="px-6 py-4 border-b flex items-center justify-between bg-indigo-600 text-white">
            <h2 className="text-xl font-bold">Your Bag</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-lg font-medium">Your cart is empty</p>
                <button onClick={onClose} className="mt-4 text-indigo-600 font-semibold hover:underline">Continue shopping</button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.product.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between font-semibold text-gray-900">
                        <h4 className="line-clamp-1">{item.product.name}</h4>
                        <p>{formatPrice(item.product.price * item.quantity)}</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{formatPrice(item.product.price)} each</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border rounded-lg">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 px-3 hover:bg-gray-100 transition-colors"
                          >-</button>
                          <span className="px-2 font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 px-3 hover:bg-gray-100 transition-colors"
                          >+</button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.product.id)}
                          className="text-red-500 hover:text-red-600 text-sm font-medium"
                        >Remove</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="px-6 py-6 border-t bg-gray-50">
            <div className="flex justify-between text-lg font-bold text-gray-900 mb-4">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <button 
              disabled={items.length === 0}
              onClick={onCheckout}
              className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                items.length === 0 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]'
              }`}
            >
              Checkout Now
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">Shipping and taxes calculated at checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
