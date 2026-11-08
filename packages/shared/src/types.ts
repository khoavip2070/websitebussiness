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

export interface Order {
  id: string;
  orderCode: string;
  productId: string;
  productTitle: string;
  productPrice: number;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  status: 'pending' | 'completed' | 'refunded';
  paymentMethod: 'vietqr' | 'momo' | 'bank_transfer' | 'card';
  transactionId?: string;
  licenseKey: string;
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
  createdAt: string;
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
