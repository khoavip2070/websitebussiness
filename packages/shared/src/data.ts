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
    id: 'site-001',
    slug: 'aura-luxury-spa',
    title: 'Aura Spa & Clinic - Website Đặt Lịch & Chăm Sóc Sắc Đẹp',
    tagline: 'Giao diện cao cấp chuẩn sang trọng, tích hợp đặt lịch hẹn trực tiếp qua Zalo/Email',
    description: 'Mẫu website hoàn chỉnh dành riêng cho Spa, Thẩm mỹ viện, Phòng khám thẩm mỹ hoặc Salon tóc cao cấp. Tối ưu trải nghiệm mobile, bảng giá dịch vụ có hiệu ứng accordion, thư viện feedback khách hàng trước/sau.',
    price: 690000,
    originalPrice: 1500000,
    category: 'services',
    techStack: ['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Lucide Icons'],
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80'
    ],
    demoUrl: 'https://example.com/demo/aura-spa',
    status: 'published',
    downloadFileName: 'aura-spa-clinic-nextjs-v1.zip',
    fileSize: '18.4 MB',
    rating: 4.9,
    reviewsCount: 32,
    salesCount: 45,
    createdAt: '2026-10-15',
    features: [
      'Giao diện Luxury tone màu be & vàng đồng chuẩn quốc tế',
      'Form đặt lịch tư vấn gửi ngay vào Google Sheets hoặc Email',
      'Bảng so sánh dịch vụ & bảng giá minh bạch',
      'Tối ưu chuẩn SEO 100/100, chuẩn tốc độ di động Google Core Web Vitals',
      'Kèm hướng dẫn thay đổi logo, hình ảnh, văn bản chỉ trong 15 phút'
    ],
    pagesCount: 5,
    lighthouse: {
      performance: 98,
      accessibility: 100,
      bestPractices: 96,
      seo: 100
    },
    includedAssets: [
      'Mã nguồn hoàn chỉnh (Next.js 14 App Router)',
      'File thiết kế Figma chi tiết',
      'Bộ ảnh bản quyền HD không gắn watermark',
      'Video hướng dẫn tự deploy lên Vercel miễn phí trọn đời'
    ],
    tags: ['Spa', 'Clinic', 'Thẩm mỹ viện', 'Đặt lịch', 'Next.js']
  },
  {
    id: 'site-002',
    slug: 'artisancoffee-roasters',
    title: 'Artisan Brew - Website Quán Cafe & Đặt Hàng Trực Tuyến',
    tagline: 'Website quán cà phê phong cách mộc mạc tối giản, menu điện tử và đặt mang về',
    description: 'Dành cho chuỗi quán cafe, tiệm bánh ngọt hoặc bistro. Tích hợp menu QR điện tử có phân loại món, giỏ hàng popup nhẹ nhàng không cần tải lại trang, kết nối gửi đơn qua Zalo hoặc Hotline.',
    price: 550000,
    originalPrice: 1200000,
    category: 'restaurant',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80'
    ],
    demoUrl: 'https://example.com/demo/artisan-brew',
    status: 'published',
    downloadFileName: 'artisan-coffee-vite-v1.zip',
    fileSize: '12.6 MB',
    rating: 4.8,
    reviewsCount: 24,
    salesCount: 38,
    createdAt: '2026-10-20',
    features: [
      'Menu QR điện tử hỗ trợ ảnh món ăn sắc nét',
      'Giỏ hàng nhanh tính tiền tự động',
      'Tích hợp bản đồ vị trí quán Google Maps',
      'Hỗ trợ chế độ Dark Mode ấm áp ban đêm'
    ],
    pagesCount: 4,
    lighthouse: {
      performance: 99,
      accessibility: 98,
      bestPractices: 95,
      seo: 98
    },
    includedAssets: [
      'Source code React + Vite siêu tốc',
      'File JSON cấu hình menu dễ chỉnh sửa',
      'Tài liệu hướng dẫn triển khai lên Netlify/Cloudflare'
    ],
    tags: ['Cafe', 'Nhà hàng', 'Menu QR', 'F&B', 'React']
  },
  {
    id: 'site-003',
    slug: 'nova-saas-landing',
    title: 'Nova Launch - Landing Page Bán Phần Mềm & Khóa Học',
    tagline: 'Landing page phong cách Silicon Valley tỷ lệ chuyển đổi cao, bảng giá linh hoạt',
    description: 'Thiết kế theo chuẩn SaaS hiện đại nhất thế giới: Hero section cuốn hút với social proof, mô phỏng tính năng sản phẩm tương tác, bảng giá 3 gói dịch vụ, FAQ accordion và cam kết hoàn tiền.',
    price: 490000,
    originalPrice: 990000,
    category: 'landing-page',
    techStack: ['Next.js 14', 'Tailwind CSS', 'Radix UI', 'TypeScript'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
    ],
    demoUrl: 'https://example.com/demo/nova-saas',
    status: 'published',
    downloadFileName: 'nova-saas-landing-v1.zip',
    fileSize: '15.1 MB',
    rating: 5.0,
    reviewsCount: 47,
    salesCount: 89,
    createdAt: '2026-10-05',
    features: [
      'Tối ưu chuyển đổi đã A/B test hiệu quả',
      'Bảng giá chuyển đổi tháng/năm (Billing Switcher)',
      'Hộp thoại Lead Capture bắt email tự động',
      'Hiệu ứng scroll mượt mà không giật lag'
    ],
    pagesCount: 3,
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    },
    includedAssets: [
      'Full source code Next.js 14',
      'Bản thiết kế Figma bản quyền thương mại',
      'Script tích hợp Email Marketing (Mailchimp/Resend)'
    ],
    tags: ['Landing Page', 'SaaS', 'Phần mềm', 'Chuyển đổi cao']
  },
  {
    id: 'site-004',
    slug: 'zenith-minimal-portfolio',
    title: 'Zenith Studio - Portfolio Cá Nhân & Agency Sáng Tạo',
    tagline: 'Showcase dự án phong cách tối giản Bắc Âu, bộ lọc dự án mượt mà',
    description: 'Website hồ sơ năng lực dành cho UI/UX Designer, Nhiếp ảnh gia, Lập trình viên hoặc Creative Agency. Tập trung vào hình ảnh chất lượng cao và chữ thanh lịch.',
    price: 390000,
    originalPrice: 790000,
    category: 'portfolio',
    techStack: ['Astro', 'Tailwind CSS', 'TypeScript'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
    ],
    demoUrl: 'https://example.com/demo/zenith-portfolio',
    status: 'published',
    downloadFileName: 'zenith-portfolio-astro.zip',
    fileSize: '8.2 MB',
    rating: 4.9,
    reviewsCount: 19,
    salesCount: 52,
    createdAt: '2026-10-12',
    features: [
      'Xây dựng trên Astro: 0kb JavaScript khi tải ban đầu',
      'Bộ lọc dự án theo chuyên môn (Branding, Web, Mobile)',
      'Form liên hệ chống Spam tích hợp'
    ],
    pagesCount: 4,
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    },
    includedAssets: [
      'Mã nguồn Astro sạch 100%',
      'Tệp cấu hình Markdown cho bài viết / dự án'
    ],
    tags: ['Portfolio', 'Minimalism', 'Astro', 'Designer']
  },
  {
    id: 'site-005',
    slug: 'vogue-fashion-store',
    title: 'Vogue Boutique - Website Bán Hàng Thời Trang & Phụ Kiện',
    tagline: 'Cửa hàng trực tuyến phong cách tạp chí, bộ lọc kích cỡ/màu sắc & giỏ hàng',
    description: 'Website bán hàng thời trang hoàn chỉnh với giao diện dạng lookbook, trang danh sách sản phẩm có bộ lọc đa năng, trang chi tiết sản phẩm chọn size/màu và giỏ hàng trượt sang trọng.',
    price: 890000,
    originalPrice: 2000000,
    category: 'ecommerce',
    techStack: ['Next.js 14', 'Tailwind CSS', 'Zustand', 'TypeScript'],
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80'
    ],
    demoUrl: 'https://example.com/demo/vogue-store',
    status: 'published',
    downloadFileName: 'vogue-boutique-store-v1.zip',
    fileSize: '24.8 MB',
    rating: 4.9,
    reviewsCount: 28,
    salesCount: 61,
    createdAt: '2026-09-28',
    features: [
      'Trang Shop chuyên nghiệp lọc theo Size, Màu sắc, Mức giá',
      'Giỏ hàng Drawer lưu trạng thái trên trình duyệt khách',
      'Trang Checkout mô phỏng thanh toán VietQR / Thẻ tín dụng',
      'Trình quản lý sản phẩm mẫu qua file JSON hoặc Supabase'
    ],
    pagesCount: 6,
    lighthouse: {
      performance: 97,
      accessibility: 98,
      bestPractices: 96,
      seo: 100
    },
    includedAssets: [
      'Mã nguồn Next.js 14 E-commerce',
      'Bộ banner thiết kế sẵn kích thước chuẩn',
      'Database schema (PostgreSQL / Supabase)'
    ],
    tags: ['E-Commerce', 'Thời trang', 'Shop', 'Next.js']
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-8921',
    orderCode: 'ORD-9821',
    productId: 'site-001',
    productTitle: 'Aura Spa & Clinic - Website Đặt Lịch & Chăm Sóc Sắc Đẹp',
    productPrice: 690000,
    customerName: 'Nguyễn Văn Minh',
    customerEmail: 'minh.nguyen@gmail.com',
    customerPhone: '0912345678',
    status: 'completed',
    paymentMethod: 'vietqr',
    transactionId: 'VQR-20261105-8831',
    licenseKey: 'AURA-89X2-LK99-VN26',
    createdAt: '2026-11-05 14:32',
    completedAt: '2026-11-05 14:33'
  },
  {
    id: 'ord-8922',
    orderCode: 'ORD-9822',
    productId: 'site-003',
    productTitle: 'Nova Launch - Landing Page Bán Phần Mềm & Khóa Học',
    productPrice: 490000,
    customerName: 'Trần Thị Thu Hà',
    customerEmail: 'thuha.tech@outlook.com',
    customerPhone: '0988776655',
    status: 'completed',
    paymentMethod: 'vietqr',
    transactionId: 'VQR-20261106-1102',
    licenseKey: 'NOVA-77J4-MP21-X990',
    createdAt: '2026-11-06 09:15',
    completedAt: '2026-11-06 09:16'
  },
  {
    id: 'ord-8923',
    orderCode: 'ORD-9823',
    productId: 'site-005',
    productTitle: 'Vogue Boutique - Website Bán Hàng Thời Trang & Phụ Kiện',
    productPrice: 890000,
    customerName: 'Lê Hoàng Nam',
    customerEmail: 'nam.lehoang@agency.vn',
    customerPhone: '0903123889',
    status: 'pending',
    paymentMethod: 'vietqr',
    licenseKey: 'VOGUE-P092-ZZ14-PEND',
    createdAt: '2026-11-07 19:40'
  }
];

export const INITIAL_STATS: DashboardStats = {
  totalRevenue: 28450000,
  totalSales: 243,
  totalWebsites: 5,
  publishedWebsites: 5,
  pendingOrders: 1,
  recentViews: 4120
};
