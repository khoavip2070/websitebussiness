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

export const INITIAL_PRODUCTS: WebsiteProduct[] = [
  {
    id: 'site-profile-01',
    slug: 'forge-gundam-3d-profile',
    title: 'Forge 3D - Portfolio Cá Nhân 3D WebGL & Mecha Gundam',
    tagline: 'Giao diện portfolio tương tác bàn máy tính & robot Gundam 3D, tích hợp Web Audio Synthesizer và Three.js',
    description: 'Mẫu website portfolio phong cách phòng thí nghiệm cơ khí tương tác 3D WebGL cực độc đáo. Hỗ trợ xoay camera 360 độ, hiệu ứng âm thanh synthesizer phản hồi từng click chuột, bảng thông số kỹ thuật Telemetry và hồ sơ dự án chuyên nghiệp dành cho lập trình viên, kỹ sư công nghệ.',
    price: 490000,
    originalPrice: 990000,
    category: 'portfolio',
    techStack: [
      'React 18',
      'Three.js',
      'Vite',
      'TypeScript',
      'WebGL',
      'Web Audio API'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    ],
    demoUrl: '/demos/forge-profile/index.html',
    status: 'published',
    downloadFileName: 'forge-gundam-3d-profile-v1.zip',
    fileSize: '9.2 MB',
    rating: 5.0,
    reviewsCount: 1,
    viewsCount: 1,
    salesCount: 0,
    createdAt: '2026-11-08',
    features: [
      'Giao diện 3D WebGL với mô hình Mecha Gundam & Workstation tương tác 360 độ',
      'Âm thanh Web Audio API procedural synthesizer phản hồi từng click chuột',
      'Bảng thông số Telemetry và Profile lập trình viên phong cách Terminal',
      'Tối ưu 60 FPS mượt mà trên trình duyệt hiện đại',
      'Mã nguồn sạch, kèm hướng dẫn deploy lên Cloudflare / Vercel'
    ],
    pagesCount: 5,
    lighthouse: {
      performance: 96,
      accessibility: 100,
      bestPractices: 98,
      seo: 100
    },
    includedAssets: [
      'Toàn bộ mã nguồn React 18 + Vite + Three.js',
      'Gói models 3D procedural và bộ synthesizer âm thanh',
      'File cấu hình Cloudflare Pages / Vercel',
      'Tài liệu hướng dẫn tùy chỉnh thông tin chỉ trong 10 phút'
    ],
    tags: [
      'Portfolio',
      '3D WebGL',
      'Three.js',
      'React',
      'Gundam',
      'Lập trình viên'
    ]
  }
];

export const INITIAL_ORDERS: Order[] = [];

export const INITIAL_STATS: DashboardStats = {
  totalRevenue: 0,
  totalSales: 0,
  totalWebsites: 1,
  publishedWebsites: 1,
  pendingOrders: 0,
  recentViews: 1,
  averageOrderValue: 0,
  weeklyStats: [],
  categoryStats: {
    portfolio: 1
  }
};
