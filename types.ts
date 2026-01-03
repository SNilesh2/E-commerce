export enum OrderStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled'
}

export enum UserRole {
  CUSTOMER = 'customer',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subCategory?: string;
  image: string;
  images?: string[]; // Multiple images for thumbnails
  stock: number;
  rating: number;
  ratingCount?: number;
  reviews: Review[];
  isSale?: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  colors?: string[];
  specs?: ProductSpec[];
  featureHighlights?: FeatureHighlight[];
  shippingInfo?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  userImage?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  address: string;
}

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}