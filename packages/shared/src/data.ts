import { CategoryInfo, DashboardStats, Order, WebsiteProduct } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'all',
    name: 'All Templates',
    nameVi: 'Tất cả mẫu',
    icon: 'Layers',
    description: 'Kho giao diện website hoàn thiện sẵn sàng bàn giao'
  },
  {
    id: 'landing-page',
    name: 'Landing Pages',
    nameVi: 'Landing Page Chuyển đổi',
    icon: 'Flame',
    description: 'Tối ưu tỷ lệ chuyển đổi đơn hàng và thu thập leads'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    nameVi: 'Web Bán Hàng & Shop',
    icon: 'ShoppingBag',
    description: 'Tích hợp giỏ hàng, thanh toán online, quản lý sản phẩm'
  },
  {
    id: 'corporate',
    name: 'Corporate & Agency',
    nameVi: 'Doanh Nghiệp & Agency',
    icon: 'Building2',
    description: 'Nâng tầm nhận diện thương hiệu chuyên nghiệp'
  },
  {
    id: 'services',
    name: 'Services & Spa',
    nameVi: 'Spa, Thẩm Mỹ & Dịch Vụ',
    icon: 'Sparkles',
    description: 'Đặt lịch hẹn online, bảng giá dịch vụ trực quan'
  },
  {
    id: 'restaurant',
    name: 'Cafe & Restaurant',
    nameVi: 'Nhà Hàng & Cafe',
    icon: 'Coffee',
    description: 'Thực đơn điện tử QR, đặt bàn, hình ảnh bắt mắt'
  },
  {
    id: 'portfolio',
    name: 'Portfolio & CV',
    nameVi: 'Hồ Sơ & Portfolio',
    icon: 'Briefcase',
    description: 'Dành cho Freelancer, Designer, Developer giới thiệu dự án'
  },
  {
    id: 'saas',
    name: 'Micro-SaaS & AI Tool',
    nameVi: 'SaaS & Ứng Dụng AI',
    icon: 'Cpu',
    description: 'Giao diện ứng dụng web, bảng điều khiển hiện đại'
  }
];

export const INITIAL_PRODUCTS: WebsiteProduct[] = [];

export const INITIAL_ORDERS: Order[] = [];

export const INITIAL_STATS: DashboardStats = {
  totalRevenue: 0,
  totalSales: 0,
  totalWebsites: 0,
  publishedWebsites: 0,
  pendingOrders: 0,
  recentViews: 0,
  averageOrderValue: 0,
  weeklyStats: [],
  categoryStats: {}
};
