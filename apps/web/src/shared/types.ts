export type CategoryId = 
  | 'all'
  | 'landing-page'
  | 'ecommerce'
  | 'corporate'
  | 'services'
  | 'portfolio'
  | 'saas'
  | 'restaurant';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  nameVi: string;
  icon: string;
  description: string;
}

export interface LighthouseScore {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface WebsiteProduct {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  price: number; // in VND
  originalPrice?: number;
  category: CategoryId;
  techStack: string[];
  thumbnail: string;
  gallery: string[];
  demoUrl: string;
  status: 'published' | 'draft' | 'archived';
  downloadFileName: string;
  fileSize: string;
  rating: number;
  reviewsCount: number;
  salesCount: number;
  viewsCount?: number;
  downloadsCount?: number;
  createdAt: string;
  features: string[];
  pagesCount: number;
  lighthouse: LighthouseScore;
  includedAssets: string[];
  tags: string[];
  localFolderPath?: string;
}

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled' | 'refunded';
export type PaymentStatus = 'unpaid' | 'paid' | 'refunded';
export type OrderType = 'available' | 'custom';

export interface OrderStatusHistoryItem {
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  note?: string;
  timestamp: string;
  updatedBy?: string;
}

export interface Order {
  id: string;
  orderCode: string;
  numericOrderCode?: number;
  productId: string;
  productTitle: string;
  productPrice: number;
  orderType?: OrderType;
  customRequirements?: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  status: OrderStatus;
  paymentStatus?: PaymentStatus;
  paymentMethod: 'vietqr' | 'momo' | 'bank_transfer' | 'card';
  transactionId?: string;
  paidAt?: string;
  licenseKey: string;
  handoverUrl?: string;
  downloadUrl?: string;
  handoverNotes?: string;
  deliveredAt?: string;
  notifiedPaid?: boolean;
  notifiedAt?: string;
  statusHistory?: OrderStatusHistoryItem[];
  createdAt: string;
  completedAt?: string;
  refundedAt?: string;
  refundReason?: string;
  refundTransactionId?: string;
}

export interface License {
  id: string;
  key: string;
  orderCode: string;
  productId: string;
  customerEmail: string;
  downloadCount: number;
  maxDownloads: number;
  isActive: boolean;
  handoverUrl?: string;
  handoverNotes?: string;
  createdAt: string;
}

export interface CustomerSummary {
  email: string;
  name: string;
  phone?: string;
  totalOrders: number;
  totalSpent: number;
  orders: Order[];
  lastOrderDate: string;
}

export interface LocalFolderScanResult {
  path: string;
  name: string;
  framework: string;
  totalFiles: number;
  totalSizeMb: number;
  hasPackageJson: boolean;
  packageJsonData?: {
    name?: string;
    version?: string;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  };
}

export interface DashboardStats {
  totalRevenue: number;
  totalSales: number;
  totalWebsites: number;
  publishedWebsites: number;
  pendingOrders: number;
  recentViews: number;
  averageOrderValue?: number;
  weeklyStats?: { day: string; date: string; count: number; revenue: number }[];
  categoryStats?: Record<string, number>;
}
