
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Electronics', subtitle: 'Tech & Gadgets', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop' },
  { id: '2', name: 'Fashion', subtitle: 'New Arrivals', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop' },
  { id: '3', name: 'Home & Living', subtitle: 'Modern Decor', image: 'https://images.unsplash.com/photo-1616489953149-8f6f6930d072?w=400&h=400&fit=crop' },
];

export const formatPrice = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(amount);
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'SonicPro X1 Wireless ANC',
    description: 'Experience audio like never before with the SonicPro X1. Featuring industry-leading Active Noise Cancellation (ANC), these headphones block out the world so you can focus on what matters.',
    price: 249.00,
    category: 'Electronics',
    subCategory: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&fit=crop',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&fit=crop'
    ],
    stock: 12,
    rating: 4.8,
    ratingCount: 124,
    isNew: true,
    isSale: true,
    colors: ['#0F172A', '#FFFFFF', '#1E40AF'],
    specs: [
      { label: 'Bluetooth Version', value: '5.2' },
      { label: 'Driver Size', value: '40mm Dynamic' },
      { label: 'Weight', value: '250g' },
      { label: 'Charging Port', value: 'USB-C' },
      { label: 'Microphone', value: 'Dual Beamforming' }
    ],
    reviews: [
      { id: 'r1', userName: 'James Smith', rating: 5, comment: 'Absolutely stunning audio quality. The bass is punchy without muddying the mids.', date: '2 days ago' },
      { id: 'r2', userName: 'Emily Lawson', rating: 4, comment: 'Great, but fits a bit tight. Sound quality is top notch.', date: '1 week ago' }
    ]
  },
  {
    id: 'p-2',
    name: 'Ergonomic Desk Chair',
    description: 'A stylish and comfortable ergonomic desk chair for long hours of work.',
    price: 150.00,
    category: 'Home & Living',
    subCategory: 'Furniture',
    image: 'https://images.unsplash.com/photo-1505843490701-5be5d0b19d58?w=600&fit=crop',
    stock: 5, rating: 4.6, ratingCount: 45, reviews: []
  },
  {
    id: 'p-3',
    name: 'Series 7 Smart Watch',
    description: 'The latest smart watch with advanced health tracking.',
    price: 399.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1544117518-30df56b9c4c2?w=600&fit=crop',
    stock: 20, rating: 4.5, ratingCount: 88, reviews: []
  },
  {
    id: 'p-4',
    name: 'Instant Camera',
    description: 'Capture memories instantly with this vintage-style camera.',
    price: 89.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1526170315873-3a9861ea438a?w=600&fit=crop',
    stock: 15, rating: 4.9, ratingCount: 120, reviews: []
  },
  {
    id: 'p-5',
    name: 'Fitness Tracker',
    description: 'Track your steps, heart rate, and sleep quality.',
    price: 129.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&fit=crop',
    stock: 30, rating: 4.7, ratingCount: 210, reviews: []
  }
];
