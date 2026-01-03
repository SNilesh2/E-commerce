
import React from 'react';
import { Order, OrderStatus } from '../types';
import { formatPrice } from '../constants';

interface TrackingModalProps {
  order: Order | null;
  onClose: () => void;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const steps = [
    { label: 'Order Placed', status: OrderStatus.PAID, icon: '📋' },
    { label: 'Processed', status: 'PROCESSED', icon: '⚙️' },
    { label: 'Shipped', status: OrderStatus.SHIPPED, icon: '🚚' },
    { label: 'Out for Delivery', status: 'OUT_FOR_DELIVERY', icon: '🛵' },
    { label: 'Delivered', status: OrderStatus.DELIVERED, icon: '🏠' },
  ];

  // Logic to determine current progress index based on order status
  let currentStepIndex = 0;
  if (order.status === OrderStatus.PAID) currentStepIndex = 0;
  else if (order.status === OrderStatus.SHIPPED) currentStepIndex = 2;
  else if (order.status === OrderStatus.DELIVERED) currentStepIndex = 4;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Track Your Package</h3>
            <p className="text-indigo-100 text-sm opacity-90">Order #{order.id}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-col gap-8">
            {/* Delivery Estimation */}
            <div className="bg-indigo-50 p-4 rounded-2xl flex items-center gap-4">
              <div className="text-3xl">📦</div>
              <div>
                <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Estimated Delivery</p>
                <p className="text-lg font-bold text-gray-900">Friday, 24th Oct • By 8:00 PM</p>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100"></div>
              <div className="space-y-8 relative">
                {steps.map((step, idx) => {
                  const isCompleted = idx <= currentStepIndex;
                  const isCurrent = idx === currentStepIndex;
                  
                  return (
                    <div key={idx} className="flex items-start gap-6 group">
                      <div className={`z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-sm transition-all duration-500 ${
                        isCompleted ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400'
                      } ${isCurrent ? 'ring-4 ring-indigo-100 scale-110' : ''}`}>
                        {isCompleted ? '✓' : idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{step.icon}</span>
                          <h4 className={`font-bold transition-colors ${isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                            {step.label}
                          </h4>
                        </div>
                        {isCurrent && (
                          <div className="mt-1">
                            <p className="text-sm text-indigo-600 font-medium">Arrived at sorting facility, New Delhi</p>
                            <p className="text-xs text-gray-400 mt-1">Oct 21, 2024 • 10:30 AM</p>
                          </div>
                        )}
                        {!isCurrent && isCompleted && (
                          <p className="text-xs text-gray-400 mt-0.5">Completed</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="border-t pt-6 mt-2">
              <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Shipping Details</h5>
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
                <p className="font-semibold text-gray-900 mb-1">OmniLogistics Priority</p>
                <p className="mb-1">Tracking ID: <span className="text-indigo-600 font-mono">OLX-8822334411</span></p>
                <p className="line-clamp-1">{order.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;
