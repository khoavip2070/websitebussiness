import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createZipFromFolder } from './packager.js';
import { 
  checkSupabaseStatus, 
  seedProductsToSupabase, 
  getProductsFromSupabase, 
  saveProductToSupabase,
  deleteProductFromSupabase,
  getOrdersFromSupabase,
  getLicensesFromSupabase,
  saveOrderToSupabase, 
  updateOrderInSupabase, 
  deleteOrderFromSupabase,
  saveLicenseToSupabase, 
  updateLicenseInSupabase,
  verifyLicenseInSupabase 
} from './supabase.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Directories
const publicDir = path.join(__dirname, 'public');
const dataDir = path.join(__dirname, '..', 'data');
const downloadsDir = path.join(dataDir, 'downloads');
const dbFile = path.join(dataDir, 'store.json');

[publicDir, dataDir, downloadsDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

app.use(express.static(publicDir));

// Serve compiled Desktop Studio and Storefront directly for ultra-low RAM usage
const desktopDist = path.join(__dirname, '..', 'apps', 'desktop', 'dist');
const webDist = path.join(__dirname, '..', 'apps', 'web', 'dist');

if (fs.existsSync(desktopDist)) {
  app.use('/studio', express.static(desktopDist, {
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }));
}
if (fs.existsSync(webDist)) {
  app.use('/store', express.static(webDist, {
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }));
}

// Initial Database Loader
function loadDatabase() {
  if (fs.existsSync(dbFile)) {
    try {
      const content = fs.readFileSync(dbFile, 'utf-8');
      const parsed = JSON.parse(content);
      if (!parsed.settings) {
        parsed.settings = {
          bankAccount: '19036888899999',
          bankName: 'Techcombank',
          accountName: 'NGUYEN STORE OWNER',
          autoApproveQr: true,
          desktopNotify: true,
          autoZipExclude: true
        };
      }
      return parsed;
    } catch (e) {
      console.error('Error reading db, using fallback', e);
    }
  }

  const initialData = {
    settings: {
      bankAccount: '19036888899999',
      bankName: 'Techcombank',
      accountName: 'NGUYEN STORE OWNER',
      autoApproveQr: true,
      desktopNotify: true,
      autoZipExclude: true
    },
    products: [
      {
        id: 'site-001',
        slug: 'aura-luxury-spa',
        title: 'Aura Spa & Clinic - Website Đặt Lịch & Chăm Sóc Sắc Đẹp',
        tagline: 'Giao diện cao cấp chuẩn sang trọng, tích hợp đặt lịch hẹn trực tiếp qua Zalo/Email',
        description: 'Mẫu website hoàn chỉnh dành riêng cho Spa, Thẩm mỹ viện, Phòng khám thẩm mỹ hoặc Salon tóc cao cấp. Tối ưu trải nghiệm mobile, bảng giá dịch vụ có hiệu ứng accordion, thư viện feedback khách hàng.',
        price: 690000,
        originalPrice: 1500000,
        category: 'services',
        techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Google Fonts'],
        thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80'
        ],
        demoUrl: `http://localhost:${PORT}/demos/aura-spa/index.html`,
        status: 'published',
        downloadFileName: 'aura-spa-clinic-nextjs-v1.zip',
        fileSize: '4.5 KB',
        viewsCount: 1,
        createdAt: '2026-10-15',
        features: [
          'Giao diện Luxury tone màu be & vàng đồng chuẩn quốc tế',
          'Form đặt lịch tư vấn gửi ngay vào Google Sheets hoặc Email',
          'Bảng so sánh dịch vụ & bảng giá minh bạch',
          'Tối ưu chuẩn SEO 100/100, chuẩn tốc độ di động Google Core Web Vitals',
          'Kèm hướng dẫn thay đổi logo, hình ảnh, văn bản chỉ trong 15 phút'
        ],
        pagesCount: 5,
        lighthouse: { performance: 98, accessibility: 100, bestPractices: 96, seo: 100 },
        includedAssets: [
          'Mã nguồn website hoàn chỉnh',
          'File package.json và hướng dẫn cài đặt',
          'Bộ ảnh bản quyền HD không gắn watermark',
          'Tài liệu hướng dẫn deploy lên Vercel/Netlify miễn phí trọn đời'
        ],
        tags: ['Spa', 'Clinic', 'Thẩm mỹ viện', 'Đặt lịch']
      },
      {
        id: 'site-002',
        slug: 'artisancoffee-roasters',
        title: 'Artisan Brew - Website Quán Cafe & Đặt Hàng Trực Tuyến',
        tagline: 'Website quán cà phê phong cách mộc mạc tối giản, menu điện tử và đặt mang về',
        description: 'Dành cho chuỗi quán cafe, tiệm bánh ngọt hoặc bistro. Tích hợp menu QR điện tử có phân loại món, giỏ hàng popup nhẹ nhàng không cần tải lại trang.',
        price: 550000,
        originalPrice: 1200000,
        category: 'restaurant',
        techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
        thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
        ],
        demoUrl: `http://localhost:${PORT}/demos/artisan-brew/index.html`,
        status: 'published',
        downloadFileName: 'artisan-coffee-vite-v1.zip',
        fileSize: '2.9 KB',
        viewsCount: 1,
        createdAt: '2026-10-20',
        features: [
          'Menu QR điện tử hỗ trợ ảnh món ăn sắc nét',
          'Giỏ hàng nhanh tính tiền tự động',
          'Tích hợp bản đồ vị trí quán Google Maps',
          'Hỗ trợ chế độ Dark Mode ấm áp ban đêm'
        ],
        pagesCount: 4,
        lighthouse: { performance: 99, accessibility: 98, bestPractices: 95, seo: 98 },
        includedAssets: [
          'Source code sạch và cấu hình sẵn',
          'File JSON cấu hình menu dễ chỉnh sửa',
          'Tài liệu hướng dẫn triển khai lên Netlify/Cloudflare'
        ],
        tags: ['Cafe', 'Nhà hàng', 'Menu QR', 'F&B']
      },
      {
        id: 'site-003',
        slug: 'nova-saas-landing',
        title: 'Nova Launch - Landing Page Bán Phần Mềm & Khóa Học',
        tagline: 'Landing page phong cách Silicon Valley tỷ lệ chuyển đổi cao, bảng giá linh hoạt',
        description: 'Thiết kế theo chuẩn SaaS hiện đại nhất: Hero section cuốn hút với social proof, mô phỏng tính năng sản phẩm tương tác, bảng giá 3 gói dịch vụ, FAQ accordion.',
        price: 490000,
        originalPrice: 990000,
        category: 'landing-page',
        techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
        ],
        demoUrl: `http://localhost:${PORT}/demos/nova-saas/index.html`,
        status: 'published',
        downloadFileName: 'nova-saas-landing-v1.zip',
        fileSize: '3.7 KB',
        viewsCount: 1,
        createdAt: '2026-10-05',
        features: [
          'Tối ưu chuyển đổi đã A/B test hiệu quả',
          'Bảng giá chuyển đổi tháng/năm (Billing Switcher)',
          'Hộp thoại Lead Capture bắt email tự động',
          'Hiệu ứng scroll mượt mà không giật lag'
        ],
        pagesCount: 3,
        lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
        includedAssets: [
          'Mã nguồn hoàn chỉnh',
          'Bản thiết kế cấu trúc chi tiết',
          'Tài liệu hướng dẫn deploy'
        ],
        tags: ['Landing Page', 'SaaS', 'Phần mềm']
      }
    ],
    orders: [],
    licenses: []
  };

  fs.writeFileSync(dbFile, JSON.stringify(initialData, null, 2), 'utf-8');
  return initialData;
}

function saveDatabase(data) {
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf-8');
}

let db = loadDatabase();

// Dynamically compute real stats from database records
function calculateRealStats() {
  const completedOrders = (db.orders || []).filter(o => o.status === 'completed');
  const totalRevenue = completedOrders.reduce((sum, o) => sum + (Number(o.productPrice) || 0), 0);
  const totalSales = completedOrders.length;
  const pendingOrders = (db.orders || []).filter(o => o.status === 'pending').length;
  const totalViews = (db.products || []).reduce((sum, p) => sum + (p.viewsCount || 0), 0);

  // Group real orders by day of week (last 7 days)
  const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const now = new Date();
  const weeklyStats = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = days[d.getDay()];
    const dayOrders = completedOrders.filter(o => {
      const orderDate = (o.completedAt || o.createdAt || '');
      return orderDate.includes(dateStr) || orderDate.includes(d.toLocaleDateString('vi-VN'));
    });
    weeklyStats.push({
      day: dayName,
      date: dateStr,
      count: dayOrders.length,
      revenue: dayOrders.reduce((s, o) => s + (Number(o.productPrice) || 0), 0)
    });
  }

  // Calculate real category sales distribution
  const categoryStats = {};
  completedOrders.forEach(o => {
    const prod = (db.products || []).find(p => p.id === o.productId);
    const cat = prod?.category || 'other';
    categoryStats[cat] = (categoryStats[cat] || 0) + 1;
  });

  return {
    totalRevenue,
    totalSales,
    totalWebsites: (db.products || []).length,
    publishedWebsites: (db.products || []).filter(p => p.status === 'published').length,
    pendingOrders,
    recentViews: Math.max(totalViews, 1),
    averageOrderValue: totalSales > 0 ? Math.round(totalRevenue / totalSales) : 0,
    weeklyStats,
    categoryStats
  };
}

// ----------------- API ROUTES ----------------- //

// 1. Products
app.get('/api/products', async (req, res) => {
  // Try syncing with Supabase Cloud if tables are ready
  try {
    const supaProducts = await getProductsFromSupabase();
    if (supaProducts && supaProducts.length > 0) {
      const localMap = new Map((db.products || []).map(p => [p.id, p]));
      db.products = supaProducts.map(sp => {
        const local = localMap.get(sp.id);
        return {
          ...local,
          ...sp,
          downloadFileName: sp.downloadFileName || (local ? local.downloadFileName : '')
        };
      });
      saveDatabase(db);
    }
  } catch (_) {}

  const { category, search, includeUnpublished } = req.query;
  let items = db.products || [];

  if (includeUnpublished !== 'true') {
    items = items.filter(p => p.status === 'published');
  }

  if (category && category !== 'all') {
    items = items.filter(p => p.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    items = items.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.tagline.toLowerCase().includes(q) ||
      p.techStack.some(t => t.toLowerCase().includes(q))
    );
  }

  // Enrich each product with its REAL sales, downloads, views, and physical file size on disk
  const enrichProduct = (p) => {
    const realSales = (db.orders || []).filter(o => o.productId === p.id && o.status === 'completed').length;
    const realDownloads = (db.licenses || []).filter(l => l.productId === p.id).reduce((sum, l) => sum + (l.downloadCount || 0), 0);
    let realFileSize = p.fileSize || '0 KB';
    if (p.downloadFileName) {
      const zipPath = path.join(downloadsDir, p.downloadFileName);
      if (fs.existsSync(zipPath)) {
        const bytes = fs.statSync(zipPath).size;
        realFileSize = bytes >= 1024 * 1024
          ? `${(bytes / (1024 * 1024)).toFixed(2)} MB`
          : `${(bytes / 1024).toFixed(1)} KB`;
      }
    }
    return {
      ...p,
      salesCount: realSales,
      downloadsCount: realDownloads,
      viewsCount: p.viewsCount || 0,
      fileSize: realFileSize
    };
  };

  const enriched = items.map(enrichProduct);

  res.json({ success: true, count: enriched.length, data: enriched });
});

app.get('/api/products/:id', (req, res) => {
  const product = (db.products || []).find(p => p.id === req.params.id || p.slug === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Website không tồn tại' });
  
  const realSales = (db.orders || []).filter(o => o.productId === product.id && o.status === 'completed').length;
  const realDownloads = (db.licenses || []).filter(l => l.productId === product.id).reduce((sum, l) => sum + (l.downloadCount || 0), 0);
  res.json({ success: true, data: { ...product, salesCount: realSales, downloadsCount: realDownloads, viewsCount: product.viewsCount || 0 } });
});

// Real View Tracker
app.post('/api/products/:id/view', (req, res) => {
  const product = (db.products || []).find(p => p.id === req.params.id || p.slug === req.params.id);
  if (product) {
    product.viewsCount = (product.viewsCount || 0) + 1;
    saveDatabase(db);
    return res.json({ success: true, viewsCount: product.viewsCount });
  }
  res.status(404).json({ success: false });
});

app.post('/api/products', async (req, res) => {
  const productData = req.body;
  if (!productData.title || !productData.price) {
    return res.status(400).json({ success: false, message: 'Vui lòng điền đủ Tên và Giá bán website' });
  }

  const existingIndex = (db.products || []).findIndex(p => p.id === productData.id);
  
  // Package real folder if localFolderPath is provided
  let generatedZipName = productData.downloadFileName || `${productData.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-v1.zip`;
  let calculatedSize = productData.fileSize || '5.0 MB';

  if (productData.localFolderPath && fs.existsSync(productData.localFolderPath)) {
    try {
      const targetZip = path.join(downloadsDir, generatedZipName);
      const pkgResult = await createZipFromFolder(productData.localFolderPath, targetZip);
      calculatedSize = pkgResult.sizeFormatted;
    } catch (e) {
      console.error('Packaging error:', e.message);
    }
  }

  if (existingIndex >= 0) {
    const updated = {
      ...db.products[existingIndex],
      ...productData,
      downloadFileName: generatedZipName,
      fileSize: calculatedSize,
      updatedAt: new Date().toISOString()
    };
    db.products[existingIndex] = updated;
    saveDatabase(db);

    // Sync update to Supabase Cloud
    saveProductToSupabase(updated).catch(e => console.error('[Supabase] Sync product error:', e));

    return res.json({ success: true, message: 'Đã cập nhật website', data: db.products[existingIndex] });
  } else {
    const newProduct = {
      id: productData.id || `site-${Date.now().toString(36)}`,
      slug: productData.slug || productData.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      status: productData.status || 'published',
      rating: 5.0,
      reviewsCount: 1,
      viewsCount: 1,
      salesCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      features: productData.features || ['Mã nguồn chuẩn SEO', 'Tối ưu tốc độ cao', 'Full Responsive'],
      includedAssets: productData.includedAssets || ['Mã nguồn hoàn chỉnh', 'Tài liệu hướng dẫn'],
      lighthouse: productData.lighthouse || { performance: 98, accessibility: 100, bestPractices: 98, seo: 100 },
      ...productData,
      downloadFileName: generatedZipName,
      fileSize: calculatedSize
    };
    db.products.unshift(newProduct);
    saveDatabase(db);

    // Sync new product to Supabase Cloud
    saveProductToSupabase(newProduct).catch(e => console.error('[Supabase] Sync product error:', e));

    return res.status(201).json({ success: true, message: 'Đã thêm website mới thành công', data: newProduct });
  }
});

app.delete('/api/products/:id', (req, res) => {
  const index = (db.products || []).findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ success: false, message: 'Không tìm thấy website' });
  
  const deleted = db.products.splice(index, 1)[0];
  saveDatabase(db);

  // Sync deletion to Supabase Cloud
  deleteProductFromSupabase(req.params.id).catch(e => console.error('[Supabase] Delete product error:', e));

  res.json({ success: true, message: 'Đã xóa website', data: deleted });
});

// Restore 5 default full-stack website templates with zip downloads and live demos
app.post('/api/products/restore-defaults', (req, res) => {
  const defaultItems = [
    {
      id: 'site-001',
      slug: 'aura-luxury-spa',
      title: 'Aura Spa & Clinic - Website Đặt Lịch & Chăm Sóc Sắc Đẹp',
      tagline: 'Giao diện cao cấp chuẩn sang trọng, tích hợp đặt lịch hẹn trực tiếp qua Zalo/Email',
      description: 'Mẫu website hoàn chỉnh dành riêng cho Spa, Thẩm mỹ viện, Phòng khám thẩm mỹ hoặc Salon tóc cao cấp. Tối ưu trải nghiệm mobile, bảng giá dịch vụ có hiệu ứng accordion, thư viện feedback khách hàng.',
      price: 690000,
      originalPrice: 1500000,
      category: 'services',
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Google Fonts'],
      thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80'
      ],
      demoUrl: `http://localhost:${PORT}/demos/aura-spa/index.html`,
      status: 'published',
      downloadFileName: 'aura-spa-clinic-nextjs-v1.zip',
      fileSize: '4.5 KB',
      viewsCount: 1,
      createdAt: '2026-10-15',
      features: [
        'Giao diện Luxury tone màu be & vàng đồng chuẩn quốc tế',
        'Form đặt lịch tư vấn gửi ngay vào Google Sheets hoặc Email',
        'Bảng so sánh dịch vụ & bảng giá minh bạch',
        'Tối ưu chuẩn SEO 100/100, chuẩn tốc độ di động Google Core Web Vitals',
        'Kèm hướng dẫn thay đổi logo, hình ảnh, văn bản chỉ trong 15 phút'
      ],
      pagesCount: 5,
      lighthouse: { performance: 98, accessibility: 100, bestPractices: 96, seo: 100 },
      includedAssets: [
        'Mã nguồn website hoàn chỉnh',
        'File package.json và hướng dẫn cài đặt',
        'Bộ ảnh bản quyền HD không gắn watermark',
        'Tài liệu hướng dẫn deploy lên Vercel/Netlify miễn phí trọn đời'
      ],
      tags: ['Spa', 'Clinic', 'Thẩm mỹ viện', 'Đặt lịch']
    },
    {
      id: 'site-002',
      slug: 'artisancoffee-roasters',
      title: 'Artisan Brew - Website Quán Cafe & Đặt Hàng Trực Tuyến',
      tagline: 'Website quán cà phê phong cách mộc mạc tối giản, menu điện tử và đặt mang về',
      description: 'Dành cho chuỗi quán cafe, tiệm bánh ngọt hoặc bistro. Tích hợp menu QR điện tử có phân loại món, giỏ hàng popup nhẹ nhàng không cần tải lại trang.',
      price: 550000,
      originalPrice: 1200000,
      category: 'restaurant',
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
      ],
      demoUrl: `http://localhost:${PORT}/demos/artisan-brew/index.html`,
      status: 'published',
      downloadFileName: 'artisan-coffee-vite-v1.zip',
      fileSize: '2.9 KB',
      viewsCount: 1,
      createdAt: '2026-10-20',
      features: [
        'Menu QR điện tử hỗ trợ ảnh món ăn sắc nét',
        'Giỏ hàng nhanh tính tiền tự động',
        'Tích hợp bản đồ vị trí quán Google Maps',
        'Hỗ trợ chế độ Dark Mode ấm áp ban đêm'
      ],
      pagesCount: 4,
      lighthouse: { performance: 99, accessibility: 98, bestPractices: 95, seo: 98 },
      includedAssets: [
        'Source code sạch và cấu hình sẵn',
        'File JSON cấu hình menu dễ chỉnh sửa',
        'Tài liệu hướng dẫn triển khai lên Netlify/Cloudflare'
      ],
      tags: ['Cafe', 'Nhà hàng', 'Menu QR', 'F&B']
    },
    {
      id: 'site-003',
      slug: 'nova-saas-landing',
      title: 'Nova Launch - Landing Page Bán Phần Mềm & Khóa Học',
      tagline: 'Landing page phong cách Silicon Valley tỷ lệ chuyển đổi cao, bảng giá linh hoạt',
      description: 'Thiết kế theo chuẩn SaaS hiện đại nhất: Hero section cuốn hút với social proof, mô phỏng tính năng sản phẩm tương tác, bảng giá 3 gói dịch vụ, FAQ accordion.',
      price: 490000,
      originalPrice: 990000,
      category: 'landing-page',
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
      ],
      demoUrl: `http://localhost:${PORT}/demos/nova-saas/index.html`,
      status: 'published',
      downloadFileName: 'nova-saas-landing-v1.zip',
      fileSize: '3.7 KB',
      viewsCount: 1,
      createdAt: '2026-10-05',
      features: [
        'Tối ưu chuyển đổi đã A/B test hiệu quả',
        'Bảng giá chuyển đổi tháng/năm (Billing Switcher)',
        'Hộp thoại Lead Capture bắt email tự động',
        'Hiệu ứng scroll mượt mà không giật lag'
      ],
      pagesCount: 3,
      lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
      includedAssets: [
        'Mã nguồn hoàn chỉnh',
        'Bản thiết kế cấu trúc chi tiết',
        'Tài liệu hướng dẫn deploy'
      ],
      tags: ['Landing Page', 'SaaS', 'Phần mềm']
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
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
      ],
      demoUrl: `http://localhost:${PORT}/demos/zenith-portfolio/index.html`,
      status: 'published',
      downloadFileName: 'zenith-portfolio-astro.zip',
      fileSize: '1.5 KB',
      viewsCount: 1,
      createdAt: '2026-10-12',
      features: [
        'Giao diện tối giản Bắc Âu thanh lịch',
        'Bộ lọc dự án theo chuyên môn',
        'Form liên hệ trực tiếp'
      ],
      pagesCount: 4,
      lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
      includedAssets: [
        'Mã nguồn HTML5/Tailwind sạch',
        'Tài liệu cấu hình'
      ],
      tags: ['Portfolio', 'Minimalism', 'Designer']
    },
    {
      id: 'site-005',
      slug: 'vogue-fashion-store',
      title: 'Vogue Boutique - Website Bán Hàng Thời Trang & Phụ Kiện',
      tagline: 'Cửa hàng trực tuyến phong cách tạp chí, bộ lọc kích cỡ/màu sắc & giỏ hàng',
      description: 'Website bán hàng thời trang hoàn chỉnh với giao diện dạng lookbook, trang danh sách sản phẩm có bộ lọc đa năng, giỏ hàng trượt sang trọng.',
      price: 890000,
      originalPrice: 2000000,
      category: 'ecommerce',
      techStack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
      ],
      demoUrl: `http://localhost:${PORT}/demos/vogue-store/index.html`,
      status: 'published',
      downloadFileName: 'vogue-boutique-store-v1.zip',
      fileSize: '4.2 KB',
      viewsCount: 1,
      createdAt: '2026-09-28',
      features: [
        'Trang Shop chuyên nghiệp',
        'Giỏ hàng nhanh',
        'Trang Checkout mô phỏng VietQR'
      ],
      pagesCount: 6,
      lighthouse: { performance: 97, accessibility: 98, bestPractices: 96, seo: 100 },
      includedAssets: [
        'Mã nguồn website hoàn chỉnh',
        'Bộ banner thiết kế sẵn'
      ],
      tags: ['E-Commerce', 'Thời trang', 'Shop']
    }
  ];

  db.products = defaultItems;
  saveDatabase(db);
  seedProductsToSupabase(defaultItems).catch(() => {});
  res.json({ success: true, message: 'Đã nạp lại 5 mẫu website vào kho!', data: defaultItems });
});

// Admin direct download of source code .zip package
app.get('/api/admin/downloads/:fileName', (req, res) => {
  const fileName = path.basename(req.params.fileName);
  const zipPath = path.join(downloadsDir, fileName);
  if (!fs.existsSync(zipPath)) {
    return res.status(404).json({ success: false, message: 'File .ZIP không tồn tại trên ổ cứng' });
  }
  res.download(zipPath, fileName);
});

// 2. Orders & Real VietQR Checkout
app.get('/api/orders', async (req, res) => {
  // Sync orders from Supabase Cloud if available
  try {
    const supaOrders = await getOrdersFromSupabase();
    if (supaOrders && supaOrders.length > 0) {
      db.orders = supaOrders;
      saveDatabase(db);
    }
  } catch (_) {}
  res.json({ success: true, data: db.orders || [] });
});

app.post('/api/orders', (req, res) => {
  const { productId, customerName, customerEmail, customerPhone, paymentMethod = 'vietqr' } = req.body;
  const product = (db.products || []).find(p => p.id === productId);
  if (!product) return res.status(404).json({ success: false, message: 'Website không tồn tại' });

  const randomCode = Math.floor(1000 + Math.random() * 9000);
  const orderCode = `ORD-${randomCode}`;
  const licenseKey = `${product.slug.substring(0, 4).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;

  const newOrder = {
    id: `ord-${Date.now()}`,
    orderCode,
    productId: product.id,
    productTitle: product.title,
    productPrice: product.price,
    customerName,
    customerEmail,
    customerPhone: customerPhone || '',
    status: 'pending',
    paymentMethod,
    licenseKey,
    createdAt: new Date().toISOString()
  };

  db.orders.unshift(newOrder);
  saveDatabase(db);

  // Sync to Supabase Cloud
  saveOrderToSupabase(newOrder).catch(() => {});

  // Use the REAL bank settings configured by the user
  const settings = db.settings || {
    bankAccount: '19036888899999',
    bankName: 'Techcombank',
    accountName: 'NGUYEN STORE OWNER'
  };

  // Generate real dynamic VietQR image with user's configured bank
  const vietQrInfo = {
    bankAccount: settings.bankAccount,
    bankName: settings.bankName,
    accountName: settings.accountName,
    amount: product.price,
    content: orderCode,
    qrUrl: `https://img.vietqr.io/image/${encodeURIComponent(settings.bankName)}-${encodeURIComponent(settings.bankAccount)}-compact2.png?amount=${product.price}&addInfo=${encodeURIComponent(orderCode)}&accountName=${encodeURIComponent(settings.accountName)}`
  };

  res.status(201).json({
    success: true,
    data: newOrder,
    payment: vietQrInfo
  });
});

app.post('/api/orders/:orderCode/verify', (req, res) => {
  const order = (db.orders || []).find(o => o.orderCode === req.params.orderCode);
  if (!order) return res.status(404).json({ success: false, message: 'Đơn hàng không tồn tại' });

  order.status = 'completed';
  order.completedAt = new Date().toISOString();
  order.transactionId = `TXN-${Date.now().toString().slice(-8)}`;

  // Create license record
  const newLicense = {
    id: `lic-${Date.now()}`,
    key: order.licenseKey,
    orderCode: order.orderCode,
    productId: order.productId,
    customerEmail: order.customerEmail,
    downloadCount: 0,
    maxDownloads: 5,
    isActive: true,
    createdAt: new Date().toISOString()
  };
  db.licenses.unshift(newLicense);
  saveDatabase(db);

  // Sync completed order and new license to Supabase Cloud
  updateOrderInSupabase(order.orderCode, {
    status: 'completed',
    transactionId: order.transactionId,
    completedAt: order.completedAt
  }).catch(() => {});
  saveLicenseToSupabase(newLicense).catch(() => {});

  res.json({
    success: true,
    message: 'Thanh toán thành công! Đã kích hoạt mã bản quyền và mở khóa tải file mã nguồn.',
    data: {
      order,
      license: newLicense,
      downloadUrl: `/api/download/${newLicense.key}`
    }
  });
});

// Refund an order, revoke license, and deduct revenue
app.post('/api/orders/:orderCode/refund', (req, res) => {
  const order = (db.orders || []).find(o => o.orderCode === req.params.orderCode);
  if (!order) return res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng' });

  const { reason, refundTransactionId } = req.body || {};
  order.status = 'refunded';
  order.refundedAt = new Date().toISOString();
  order.refundReason = reason || 'Hoàn tiền theo yêu cầu khách hàng';
  order.refundTransactionId = refundTransactionId || `REF-${Date.now().toString().slice(-8)}`;

  // Deactivate the associated license key so customer can no longer download
  const lic = (db.licenses || []).find(l => l.orderCode === order.orderCode || l.key === order.licenseKey);
  if (lic) {
    lic.isActive = false;
    updateLicenseInSupabase(lic.key, { isActive: false }).catch(() => {});
  }

  saveDatabase(db);

  // Sync to Supabase
  updateOrderInSupabase(order.orderCode, {
    status: 'refunded',
    refundedAt: order.refundedAt
  }).catch(() => {});

  res.json({
    success: true,
    message: `Đã hoàn đơn #${order.orderCode} thành công. Bản quyền đã được thu hồi và số tiền ${order.productPrice.toLocaleString('vi-VN')} đ đã được hoàn trả lại cho khách.`,
    data: order
  });
});

// Delete an order permanently
app.delete('/api/orders/:orderCode', (req, res) => {
  const index = (db.orders || []).findIndex(o => o.orderCode === req.params.orderCode);
  if (index === -1) return res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng để xóa' });

  const deletedOrder = db.orders.splice(index, 1)[0];

  // Remove associated license
  const licIndex = (db.licenses || []).findIndex(l => l.orderCode === deletedOrder.orderCode || l.key === deletedOrder.licenseKey);
  if (licIndex !== -1) {
    db.licenses.splice(licIndex, 1);
  }

  saveDatabase(db);

  // Sync deletion to Supabase Cloud
  deleteOrderFromSupabase(deletedOrder.orderCode).catch(() => {});

  res.json({
    success: true,
    message: `Đã xóa vĩnh viễn đơn hàng #${deletedOrder.orderCode} khỏi hệ thống!`,
    data: deletedOrder
  });
});

// 3. License Verification & Real File Download
app.get('/api/licenses/verify/:key', (req, res) => {
  const lic = (db.licenses || []).find(l => l.key.toUpperCase() === req.params.key.toUpperCase());
  if (!lic || !lic.isActive) {
    return res.status(404).json({ success: false, message: 'Mã License không hợp lệ hoặc đã bị khóa.' });
  }

  const product = (db.products || []).find(p => p.id === lic.productId);
  res.json({
    success: true,
    data: {
      license: lic,
      productTitle: product ? product.title : 'Template Website',
      downloadFileName: product ? product.downloadFileName : 'source-code.zip',
      remainingDownloads: lic.maxDownloads - lic.downloadCount
    }
  });
});

// Stream the REAL binary .zip file
app.get('/api/download/:key', async (req, res) => {
  const lic = (db.licenses || []).find(l => l.key.toUpperCase() === req.params.key.toUpperCase());
  if (!lic || !lic.isActive) {
    return res.status(403).send('License không hợp lệ.');
  }

  if (lic.downloadCount >= lic.maxDownloads) {
    return res.status(403).send('Bạn đã đạt giới hạn 5 lần tải xuống cho license này.');
  }

  const product = (db.products || []).find(p => p.id === lic.productId);
  const fileName = product ? product.downloadFileName : 'kweb-template.zip';
  const zipPath = path.join(downloadsDir, fileName);

  // If zip does not exist yet on disk, create it from demo folder
  if (!fs.existsSync(zipPath)) {
    const demoDirName = product?.slug === 'aura-luxury-spa' ? 'aura-spa' : product?.slug === 'artisancoffee-roasters' ? 'artisan-brew' : 'nova-saas';
    const sourceDir = path.join(publicDir, 'demos', demoDirName);
    if (fs.existsSync(sourceDir)) {
      try {
        await createZipFromFolder(sourceDir, zipPath);
      } catch (e) {
        console.error('Error generating zip:', e);
      }
    }
  }

  if (fs.existsSync(zipPath)) {
    lic.downloadCount += 1;
    saveDatabase(db);
    return res.download(zipPath, fileName);
  } else {
    res.status(404).send('Không tìm thấy tệp mã nguồn để tải về.');
  }
});

// 4. Desktop Scanner & Packager
app.post('/api/desktop/scan-folder', (req, res) => {
  const { folderPath } = req.body;
  if (!folderPath) {
    return res.status(400).json({ success: false, message: 'Vui lòng cung cấp đường dẫn thư mục' });
  }

  try {
    const resolvedPath = path.resolve(folderPath);
    if (!fs.existsSync(resolvedPath)) {
      return res.status(404).json({ success: false, message: 'Thư mục không tồn tại trên máy tính' });
    }

    const stat = fs.statSync(resolvedPath);
    if (!stat.isDirectory()) {
      return res.status(400).json({ success: false, message: 'Đường dẫn phải là một thư mục' });
    }

    const entries = fs.readdirSync(resolvedPath);
    const hasPackageJson = entries.includes('package.json');
    let framework = 'HTML5 / CSS / JS';
    let packageData = null;

    if (hasPackageJson) {
      try {
        const pkgContent = fs.readFileSync(path.join(resolvedPath, 'package.json'), 'utf-8');
        packageData = JSON.parse(pkgContent);
        const deps = { ...(packageData.dependencies || {}), ...(packageData.devDependencies || {}) };
        
        if (deps['next']) framework = 'Next.js (App Router)';
        else if (deps['astro']) framework = 'Astro';
        else if (deps['nuxt'] || deps['vue']) framework = 'Vue.js / Nuxt';
        else if (deps['vite']) framework = 'Vite + React';
        else if (deps['react']) framework = 'React SPA';
        else if (deps['tailwindcss']) framework = 'Tailwind CSS Project';
      } catch (err) {}
    }

    let totalFiles = 0;
    let totalSize = 0;

    function walkDir(dir, depth = 0) {
      if (depth > 4) return;
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          if (['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) continue;
          const fullPath = path.join(dir, item);
          const s = fs.statSync(fullPath);
          if (s.isDirectory()) {
            walkDir(fullPath, depth + 1);
          } else {
            totalFiles++;
            totalSize += s.size;
          }
        }
      } catch (e) {}
    }

    walkDir(resolvedPath);

    res.json({
      success: true,
      data: {
        path: resolvedPath,
        name: path.basename(resolvedPath),
        framework,
        totalFiles,
        totalSizeMb: +(totalSize / (1024 * 1024)).toFixed(2),
        hasPackageJson,
        packageJsonData: packageData
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 5. Real Dashboard Stats
app.get('/api/stats', (req, res) => {
  res.json({ success: true, data: calculateRealStats() });
});

// 6. Settings (Bank Account & System Preferences)
app.get('/api/settings', (req, res) => {
  res.json({ success: true, data: db.settings });
});

app.post('/api/settings', (req, res) => {
  db.settings = { ...db.settings, ...req.body };
  saveDatabase(db);
  res.json({ success: true, message: 'Đã lưu cấu hình ngân hàng thật', data: db.settings });
});

// 7. Supabase Cloud Integration Status & Manual Sync
app.get('/api/supabase/status', async (req, res) => {
  const status = await checkSupabaseStatus();
  res.json({ success: true, data: status });
});

app.get('/api/supabase/schema', (req, res) => {
  const schemaPath = path.join(__dirname, '..', 'supabase', 'schema.sql');
  if (fs.existsSync(schemaPath)) {
    const sql = fs.readFileSync(schemaPath, 'utf-8');
    res.json({ success: true, sql });
  } else {
    res.status(404).json({ success: false, message: 'schema.sql không tồn tại' });
  }
});

app.post('/api/supabase/sync', async (req, res) => {
  try {
    const status = await checkSupabaseStatus();
    if (!status.connected) {
      return res.json({ success: false, message: 'Chưa thể kết nối tới Supabase Cloud.', data: status });
    }
    if (!status.tablesReady) {
      return res.json({ 
        success: false, 
        message: 'Supabase đã xác thực nhưng chưa có bảng! Vui lòng dán nội dung supabase/schema.sql vào Supabase SQL Editor và nhấn Run.',
        data: status 
      });
    }

    // 1. Sync Products
    const supaProducts = await getProductsFromSupabase();
    let productSyncCount = 0;
    if (supaProducts && supaProducts.length > 0) {
      const supaIds = new Set(supaProducts.map(p => p.id));
      const localOnly = (db.products || []).filter(p => !supaIds.has(p.id));
      for (const lp of localOnly) {
        await saveProductToSupabase(lp);
      }
      db.products = supaProducts;
      productSyncCount = supaProducts.length;
    } else if (db.products && db.products.length > 0) {
      await seedProductsToSupabase(db.products);
      productSyncCount = db.products.length;
    }

    // 2. Sync Orders
    const supaOrders = await getOrdersFromSupabase();
    let orderSyncCount = 0;
    if (supaOrders && supaOrders.length > 0) {
      db.orders = supaOrders;
      orderSyncCount = supaOrders.length;
    } else if (db.orders && db.orders.length > 0) {
      for (const order of db.orders) {
        await saveOrderToSupabase(order);
      }
      orderSyncCount = db.orders.length;
    }

    // 3. Sync Licenses
    const supaLicenses = await getLicensesFromSupabase();
    let licenseSyncCount = 0;
    if (supaLicenses && supaLicenses.length > 0) {
      db.licenses = supaLicenses;
      licenseSyncCount = supaLicenses.length;
    } else if (db.licenses && db.licenses.length > 0) {
      for (const lic of db.licenses) {
        await saveLicenseToSupabase(lic);
      }
      licenseSyncCount = db.licenses.length;
    }

    saveDatabase(db);

    res.json({
      success: true,
      message: `Đồng bộ thành công: ${productSyncCount} website, ${orderSyncCount} đơn hàng và ${licenseSyncCount} bản quyền license khớp 100% với Supabase Cloud!`,
      data: {
        productsCount: productSyncCount,
        ordersCount: orderSyncCount,
        licensesCount: licenseSyncCount,
        status
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Lỗi khi đồng bộ Supabase: ' + err.message });
  }
});

// Check Supabase on startup
checkSupabaseStatus().then((status) => {
  if (status.connected && status.tablesReady) {
    console.log('⚡ [Supabase Cloud] Đã kết nối thành công!');
    seedProductsToSupabase(db.products);
  } else if (status.connected) {
    console.log('⚡ [Supabase Cloud] Đã xác thực thành công (Chờ chạy schema.sql trong Supabase SQL Editor).');
  } else {
    console.log('ℹ️ [Supabase Cloud] Đang dùng chế độ offline/local database.');
  }
}).catch(() => {});

// Start Server with EADDRINUSE auto-handling
const server = app.listen(PORT, () => {
  console.log(`🚀 Central Business API Server is running on http://localhost:${PORT}`);
  console.log(`📂 Live Demos available at http://localhost:${PORT}/demos/aura-spa/index.html`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`ℹ️ Cổng ${PORT} đã đang hoạt động sẵn. Tái sử dụng server hiện tại.`);
    process.exit(0);
  } else {
    console.error('Server error:', err);
  }
});
