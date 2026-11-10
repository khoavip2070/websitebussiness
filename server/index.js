import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
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
import { 
  getPayOSConfig, 
  getPayOSClient, 
  createPaymentLink, 
  getPaymentStatus, 
  verifyWebhook 
} from './payos.js';

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
  app.get('/', (req, res) => {
    res.redirect('/store/');
  });
}

// Native Desktop Window Controls
app.post('/api/desktop/window/minimize', (req, res) => {
  const exePath = path.join(__dirname, 'kweb_window.exe');
  if (fs.existsSync(exePath)) {
    exec(`"${exePath}" min`, (err) => {
      if (err) console.warn('kweb_window.exe error:', err.message);
      res.json({ success: true, message: 'Window minimized' });
    });
  } else {
    const scriptPath = path.join(__dirname, 'minimize.ps1');
    exec(`powershell -ExecutionPolicy Bypass -File "${scriptPath}"`, (err) => {
      if (err) console.warn('Minimize script error:', err.message);
      res.json({ success: true, message: 'Window minimized' });
    });
  }
});

app.post('/api/desktop/window/maximize', (req, res) => {
  const exePath = path.join(__dirname, 'kweb_window.exe');
  if (fs.existsSync(exePath)) {
    exec(`"${exePath}" max`, (err) => {
      if (err) console.warn('kweb_window.exe error:', err.message);
      res.json({ success: true, message: 'Window maximized' });
    });
  } else {
    res.json({ success: true, message: 'Window maximize triggered' });
  }
});

app.post('/api/desktop/window/close', (req, res) => {
  const exePath = path.join(__dirname, 'kweb_window.exe');
  if (fs.existsSync(exePath)) {
    exec(`"${exePath}" close`, () => {});
  }
  const scriptPath = path.join(__dirname, 'close.ps1');
  exec(`powershell -ExecutionPolicy Bypass -File "${scriptPath}"`, (err) => {
    if (err) {
      console.warn('Close script error:', err.message);
    }
    res.json({ success: true, message: 'Window closed' });
  });
});

app.post('/api/desktop/open-url', (req, res) => {
  const { url } = req.body;
  const target = url || 'http://localhost:4000/store';
  exec(`start "" "${target}"`, (err) => {
    if (err) console.warn('Open URL error:', err.message);
    res.json({ success: true, url: target });
  });
});

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
      bankAccount: '9933487119',
      bankName: 'Techcombank',
      accountName: 'TRAN DANG KHOA',
      autoApproveQr: true,
      desktopNotify: true,
      autoZipExclude: true
    },
    products: [],
    orders: [],
    licenses: []
  };

  fs.writeFileSync(dbFile, JSON.stringify(initialData, null, 2), 'utf-8');
  return initialData;
}

function normalizeDatabase(data) {
  if (!data) return data;
  if (!Array.isArray(data.products)) data.products = [];
  if (!Array.isArray(data.orders)) data.orders = [];
  if (!Array.isArray(data.licenses)) data.licenses = [];
  
  data.orders.forEach(order => {
    if (!order.orderType) order.orderType = 'available';
    if (!order.customRequirements) order.customRequirements = '';
    if (!order.paymentStatus) {
      if (order.status === 'completed') order.paymentStatus = 'paid';
      else if (order.status === 'refunded') order.paymentStatus = 'refunded';
      else order.paymentStatus = 'unpaid';
    }
    if (order.status === 'refunded') {
      order.status = 'cancelled';
      order.paymentStatus = 'refunded';
    }
    if (!order.downloadUrl && order.licenseKey) {
      order.downloadUrl = `/api/download/${order.licenseKey}`;
    }
    if (!order.handoverUrl) order.handoverUrl = '';
    if (!order.handoverNotes) order.handoverNotes = '';
    if (!order.deliveredAt && order.status === 'completed') {
      order.deliveredAt = order.completedAt || order.createdAt;
    }
    if (!Array.isArray(order.statusHistory) || order.statusHistory.length === 0) {
      order.statusHistory = [
        {
          status: order.status,
          paymentStatus: order.paymentStatus || 'unpaid',
          note: 'Khởi tạo đơn hàng',
          timestamp: order.createdAt || new Date().toISOString(),
          updatedBy: 'system'
        }
      ];
    }
  });

  return data;
}

function saveDatabase(data) {
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf-8');
}

let db = normalizeDatabase(loadDatabase());

// Dynamically compute real stats from database records
function calculateRealStats() {
  const paidOrders = (db.orders || []).filter(o => o.paymentStatus === 'paid' || o.status === 'completed');
  const totalRevenue = paidOrders.reduce((sum, o) => sum + (Number(o.productPrice) || 0), 0);
  const totalSales = paidOrders.length;
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
    const dayOrders = paidOrders.filter(o => {
      const orderDate = (o.paidAt || o.completedAt || o.createdAt || '');
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
  paidOrders.forEach(o => {
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
  const existingIndex = (db.products || []).findIndex(p => p.id === productData.id);
  const existingProd = existingIndex >= 0 ? db.products[existingIndex] : null;

  if (!existingProd && (!productData.title || !productData.price)) {
    return res.status(400).json({ success: false, message: 'Vui lòng điền đủ Tên và Giá bán website' });
  }

  // Package real folder if localFolderPath is provided
  const title = productData.title || existingProd?.title || 'website';
  let generatedZipName = productData.downloadFileName || `${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-v1.zip`;
  let calculatedSize = productData.fileSize || existingProd?.fileSize || '5.0 MB';

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

app.patch('/api/products/:id', async (req, res) => {
  const existingIndex = (db.products || []).findIndex(p => p.id === req.params.id);
  if (existingIndex === -1) return res.status(404).json({ success: false, message: 'Không tìm thấy website' });
  const updated = {
    ...db.products[existingIndex],
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  db.products[existingIndex] = updated;
  saveDatabase(db);
  saveProductToSupabase(updated).catch(e => console.error('[Supabase] Sync product error:', e));
  res.json({ success: true, message: 'Đã cập nhật website', data: updated });
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

// Restore standard default website templates
app.post('/api/products/restore-defaults', async (req, res) => {
  const defaultTemplates = [
    {
      id: "site-aura-spa",
      slug: "aura-spa---website-template",
      title: "Aura Spa & Clinic - Website Dịch Vụ & Đặt Lịch",
      tagline: "Giao diện spa làm đẹp sang trọng, chuẩn SEO và tích hợp form đặt lịch",
      description: "Mẫu website chuyên nghiệp dành cho thẩm mỹ viện, spa và trung tâm làm đẹp. Tối ưu tốc độ tải trang 100/100, chuẩn thiết bị di động, tích hợp bảng giá dịch vụ và form đặt lịch hẹn online.",
      price: 690000,
      originalPrice: 1380000,
      category: "services",
      techStack: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive"],
      thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      gallery: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"],
      demoUrl: "/demos/aura-spa/index.html",
      downloadFileName: "aura-spa-v1.zip",
      fileSize: "4.5 KB",
      rating: 5,
      reviewsCount: 12,
      viewsCount: 45,
      salesCount: 8,
      status: "published",
      createdAt: "2026-11-08T00:00:00.000Z",
      features: [
        "Đầy đủ mã nguồn sạch chuẩn W3C",
        "Form đặt lịch hẹn trực tuyến kèm thông báo",
        "Tối ưu hóa Lighthouse 98+",
        "Tương thích 100% thiết bị di động"
      ],
      pagesCount: 4,
      lighthouse: { performance: 98, accessibility: 100, bestPractices: 100, seo: 100 },
      includedAssets: ["Mã nguồn HTML/CSS/JS", "Tài liệu hướng dẫn deploy", "Hình ảnh bản quyền Unsplash"],
      tags: ["Spa", "Làm đẹp", "Dịch vụ", "Đặt lịch"]
    },
    {
      id: "site-profile-01",
      slug: "forge-gundam-3d-profile",
      title: "Forge 3D - Portfolio Cá Nhân 3D WebGL & Mecha Gundam",
      tagline: "Giao diện portfolio tương tác bàn máy tính & robot Gundam 3D, tích hợp Web Audio Synthesizer và Three.js",
      description: "Mẫu website portfolio phong cách phòng thí nghiệm cơ khí tương tác 3D WebGL cực độc đáo. Hỗ trợ xoay camera 360 độ, hiệu ứng âm thanh synthesizer phản hồi từng click chuột, bảng thông số kỹ thuật Telemetry và hồ sơ dự án chuyên nghiệp dành cho lập trình viên, kỹ sư công nghệ.",
      price: 490000,
      originalPrice: 990000,
      category: "portfolio",
      techStack: ["React 18", "Three.js", "Vite", "TypeScript", "WebGL", "Web Audio API"],
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      gallery: ["https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"],
      demoUrl: "/demos/forge-profile/index.html",
      downloadFileName: "forge-gundam-3d-profile-v1.zip",
      fileSize: "18.2 MB",
      rating: 5,
      reviewsCount: 15,
      viewsCount: 120,
      salesCount: 14,
      status: "published",
      createdAt: "2026-11-08T00:00:00.000Z",
      features: [
        "Giao diện 3D WebGL với mô hình Mecha Gundam & Workstation tương tác 360 độ",
        "Âm thanh Web Audio API procedural synthesizer phản hồi từng click chuột",
        "Bảng thông số Telemetry và Profile lập trình viên phong cách Terminal",
        "Tối ưu 60 FPS mượt mà trên trình duyệt hiện đại",
        "Mã nguồn sạch, kèm hướng dẫn deploy lên Cloudflare / Vercel"
      ],
      pagesCount: 5,
      lighthouse: { performance: 96, accessibility: 100, bestPractices: 98, seo: 100 },
      includedAssets: ["Toàn bộ mã nguồn React + Three.js", "Gói models 3D procedural và bộ synthesizer âm thanh"],
      tags: ["Portfolio", "3D WebGL", "Three.js", "React"]
    },
    {
      id: "site-nova-saas",
      slug: "nova-saas-platform",
      title: "Nova SaaS - Giao Diện Bảng Điều Khiển AI & Cloud SaaS",
      tagline: "Landing page chuyển đổi cao dành cho ứng dụng AI, phần mềm SaaS và Startup công nghệ",
      description: "Bộ giao diện hiện đại phong cách Futuristic Glassmorphism dành cho các sản phẩm SaaS, Cloud và trí tuệ nhân tạo AI. Tích hợp bảng giá linh hoạt, so sánh tính năng và đánh giá khách hàng.",
      price: 890000,
      originalPrice: 1790000,
      category: "saas",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"],
      demoUrl: "/demos/nova-saas/index.html",
      downloadFileName: "nova-saas-v1.zip",
      fileSize: "3.7 KB",
      rating: 5,
      reviewsCount: 8,
      viewsCount: 80,
      salesCount: 6,
      status: "published",
      createdAt: "2026-11-08T00:00:00.000Z",
      features: [
        "Hiệu ứng Glassmorphism & Gradient cao cấp",
        "Bảng so sánh gói giá Annual / Monthly động",
        "Tối ưu tỷ lệ chuyển đổi Lead Generation",
        "Sẵn sàng kết nối Stripe hoặc VietQR"
      ],
      pagesCount: 6,
      lighthouse: { performance: 99, accessibility: 100, bestPractices: 100, seo: 100 },
      includedAssets: ["Toàn bộ mã nguồn", "Bộ icon & vector SVG", "Tài liệu tùy biến màu thương hiệu"],
      tags: ["SaaS", "AI", "Startup", "Landing Page"]
    },
    {
      id: "site-artisan-brew",
      slug: "artisan-brew-roastery",
      title: "Artisan Cafe & Roastery - Web Đặt Bàn & Menu QR",
      tagline: "Website quán cafe đặc sản, nhà hàng cao cấp với thực đơn tương tác và gọi món",
      description: "Mẫu website thiết kế ấm áp, đậm chất mộc cho quán cafe, tiệm bánh và nhà hàng cao cấp. Tích hợp menu điện tử phân loại đồ uống, giới thiệu câu chuyện hạt cafe và đặt bàn giữ chỗ.",
      price: 550000,
      originalPrice: 1100000,
      category: "restaurant",
      techStack: ["HTML5", "CSS3 Modern", "Vanilla JS", "Micro-animations"],
      thumbnail: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      gallery: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"],
      demoUrl: "/demos/artisan-brew/index.html",
      downloadFileName: "artisan-brew-v1.zip",
      fileSize: "2.9 KB",
      rating: 5,
      reviewsCount: 9,
      viewsCount: 62,
      salesCount: 5,
      status: "published",
      createdAt: "2026-11-08T00:00:00.000Z",
      features: [
        "Thực đơn Menu QR điện tử trực quan",
        "Form đặt bàn giữ chỗ với xác nhận tự động",
        "Tối ưu hình ảnh món ăn sắc nét tải cực nhanh",
        "Tích hợp bản đồ Google Maps và hotline gọi ngay"
      ],
      pagesCount: 3,
      lighthouse: { performance: 97, accessibility: 98, bestPractices: 100, seo: 100 },
      includedAssets: ["Mã nguồn hoàn chỉnh", "Bộ hình ảnh Cafe chất lượng cao", "File hướng dẫn thay menu"],
      tags: ["Cafe", "Nhà hàng", "F&B", "Menu QR"]
    },
    {
      id: "site-vogue-store",
      slug: "vogue-boutique-store",
      title: "Vogue Boutique - Website Bán Hàng Thời Trang Cao Cấp",
      tagline: "Cửa hàng thời trang online chuẩn e-commerce tối giản, thanh lịch",
      description: "Website mua sắm thời trang phong cách Editorial phương Tây. Lưới sản phẩm tinh tế, bộ lọc danh mục mượt mà, giỏ hàng popup và tối ưu trải nghiệm mua sắm trên smartphone.",
      price: 790000,
      originalPrice: 1590000,
      category: "ecommerce",
      techStack: ["HTML5", "Tailwind CSS", "JavaScript", "Shopping Cart"],
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      gallery: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"],
      demoUrl: "/demos/vogue-store/index.html",
      downloadFileName: "vogue-boutique-v1.zip",
      fileSize: "1.6 KB",
      rating: 5,
      reviewsCount: 11,
      viewsCount: 95,
      salesCount: 9,
      status: "published",
      createdAt: "2026-11-08T00:00:00.000Z",
      features: [
        "Thiết kế Editorial thời thượng đẳng cấp",
        "Giỏ hàng mua sắm trượt cạnh (Slide-over Cart)",
        "Bộ sưu tập Lookbook hình ảnh sắc nét",
        "Tích hợp checkout chuyển khoản tiện lợi"
      ],
      pagesCount: 5,
      lighthouse: { performance: 98, accessibility: 100, bestPractices: 98, seo: 100 },
      includedAssets: ["Mã nguồn cửa hàng", "Font chữ Editorial thời trang", "Hướng dẫn cấu hình giỏ hàng"],
      tags: ["Thời trang", "E-commerce", "Shop online", "Boutique"]
    },
    {
      id: "site-zenith-portfolio",
      slug: "zenith-design-studio",
      title: "Zenith Studio - Hồ Sơ Thiết Kế Sáng Tạo & Nhiếp Ảnh",
      tagline: "Portfolio tương tác phong cách Minimal Dark Mode cho Designer & Creator",
      description: "Mẫu portfolio dành cho các giám đốc nghệ thuật, UI/UX designer, nhiếp ảnh gia và agency sáng tạo. Lưới trưng bày tác phẩm dạng Masonry, hiệu ứng hover mượt mà và form liên hệ hợp tác.",
      price: 450000,
      originalPrice: 900000,
      category: "portfolio",
      techStack: ["HTML5", "CSS Grid", "Micro-interactions", "Dark Mode"],
      thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      gallery: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"],
      demoUrl: "/demos/zenith-portfolio/index.html",
      downloadFileName: "zenith-portfolio-v1.zip",
      fileSize: "1.8 KB",
      rating: 5,
      reviewsCount: 6,
      viewsCount: 74,
      salesCount: 7,
      status: "published",
      createdAt: "2026-11-08T00:00:00.000Z",
      features: [
        "Lưới trưng bày dự án Masonry Grid độc đáo",
        "Chế độ nền tối Dark Mode bảo vệ mắt",
        "Case study chi tiết cho từng tác phẩm",
        "Tải nhanh như chớp dưới 0.5 giây"
      ],
      pagesCount: 4,
      lighthouse: { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
      includedAssets: ["Mã nguồn portfolio", "Hiệu ứng CSS hiện đại", "Tài liệu thêm dự án mới"],
      tags: ["Portfolio", "Designer", "Dark Mode", "Creative"]
    }
  ];

  db.products = defaultTemplates;
  saveDatabase(db);

  for (const t of defaultTemplates) {
    saveProductToSupabase(t).catch(() => {});
  }

  res.json({ success: true, message: `Đã khôi phục ${defaultTemplates.length} mẫu website mặc định`, data: db.products });
});

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
      const localMap = new Map((db.orders || []).map(o => [o.orderCode, o]));
      supaOrders.forEach(so => {
        const local = localMap.get(so.orderCode);
        if (local) {
          if (local.notifiedPaid) so.notifiedPaid = true;
          if (local.notifiedAt) so.notifiedAt = local.notifiedAt;
          if (local.numericOrderCode) so.numericOrderCode = local.numericOrderCode;
          if (local.statusHistory) so.statusHistory = local.statusHistory;
          if (local.handoverUrl && !so.handoverUrl) so.handoverUrl = local.handoverUrl;
          if (local.downloadUrl && !so.downloadUrl) so.downloadUrl = local.downloadUrl;
          if (local.handoverNotes && !so.handoverNotes) so.handoverNotes = local.handoverNotes;
          if (local.orderType && !so.orderType) so.orderType = local.orderType;
          if (local.customRequirements && !so.customRequirements) so.customRequirements = local.customRequirements;
          if (local.paymentStatus && !so.paymentStatus) so.paymentStatus = local.paymentStatus;
        }
      });
      const supaCodes = new Set(supaOrders.map(o => o.orderCode));
      const notInSupa = (db.orders || []).filter(o => !supaCodes.has(o.orderCode));
      db.orders = [...notInSupa, ...supaOrders];
      saveDatabase(db);
    }
  } catch (_) {}

  const { status, paymentStatus, search } = req.query;
  let items = db.orders || [];

  if (status && status !== 'all') {
    items = items.filter(o => o.status === status);
  }
  if (paymentStatus && paymentStatus !== 'all') {
    items = items.filter(o => o.paymentStatus === paymentStatus);
  }
  if (search) {
    const s = search.toLowerCase();
    items = items.filter(o => 
      o.orderCode.toLowerCase().includes(s) ||
      o.customerName.toLowerCase().includes(s) ||
      o.customerEmail.toLowerCase().includes(s) ||
      (o.licenseKey && o.licenseKey.toLowerCase().includes(s))
    );
  }

  res.json({ success: true, count: items.length, data: items });
});

// Single Order Detail
app.get('/api/orders/:orderCode', (req, res) => {
  const order = (db.orders || []).find(o => o.orderCode === req.params.orderCode || String(o.numericOrderCode) === req.params.orderCode);
  if (!order) return res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng' });
  const lic = (db.licenses || []).find(l => l.orderCode === order.orderCode || l.key === order.licenseKey);
  res.json({ success: true, data: { ...order, license: lic || null } });
});

function completeOrder(order, transactionId = null, updatedBy = 'admin', handoverDetails = {}) {
  order.status = 'completed';
  order.paymentStatus = 'paid';
  order.completedAt = new Date().toISOString();
  order.paidAt = order.paidAt || order.completedAt;
  order.deliveredAt = order.deliveredAt || order.completedAt;
  order.transactionId = transactionId || order.transactionId || `TXN-${Date.now().toString().slice(-8)}`;

  if (handoverDetails.handoverUrl !== undefined) order.handoverUrl = handoverDetails.handoverUrl;
  if (handoverDetails.downloadUrl !== undefined) order.downloadUrl = handoverDetails.downloadUrl;
  if (handoverDetails.handoverNotes !== undefined) order.handoverNotes = handoverDetails.handoverNotes;

  // Find or create license record
  let license = (db.licenses || []).find(l => l.orderCode === order.orderCode || l.key === order.licenseKey);
  if (!license) {
    license = {
      id: `lic-${Date.now()}`,
      key: order.licenseKey,
      orderCode: order.orderCode,
      productId: order.productId,
      customerEmail: order.customerEmail,
      downloadCount: 0,
      maxDownloads: 10,
      isActive: true,
      handoverUrl: order.handoverUrl || '',
      handoverNotes: order.handoverNotes || '',
      createdAt: new Date().toISOString()
    };
    db.licenses.unshift(license);
  } else {
    license.isActive = true;
    if (order.handoverUrl) license.handoverUrl = order.handoverUrl;
    if (order.handoverNotes) license.handoverNotes = order.handoverNotes;
  }

  // Record history
  order.statusHistory = order.statusHistory || [];
  order.statusHistory.push({
    status: 'completed',
    paymentStatus: 'paid',
    note: handoverDetails.note || `Đơn hàng hoàn tất và bàn giao (${transactionId ? 'Giao dịch: ' + transactionId : 'Duyệt bởi ' + updatedBy})`,
    timestamp: new Date().toISOString(),
    updatedBy
  });

  saveDatabase(db);

  // Sync to Supabase Cloud
  updateOrderInSupabase(order.orderCode, {
    status: 'completed',
    transactionId: order.transactionId,
    completedAt: order.completedAt
  }).catch(() => {});
  saveLicenseToSupabase(license).catch(() => {});

  return license;
}

function updateOrderStatus(orderCode, updates, updatedBy = 'admin') {
  const order = (db.orders || []).find(o => o.orderCode === orderCode);
  if (!order) return null;

  if (updates.status && ['pending', 'processing', 'completed', 'cancelled', 'refunded'].includes(updates.status)) {
    if (updates.status === 'refunded') {
      order.status = 'cancelled';
      order.paymentStatus = 'refunded';
    } else {
      order.status = updates.status;
    }
  }

  if (updates.paymentStatus && ['unpaid', 'paid', 'refunded'].includes(updates.paymentStatus)) {
    order.paymentStatus = updates.paymentStatus;
    if (updates.paymentStatus === 'paid' && !order.paidAt) {
      order.paidAt = new Date().toISOString();
    }
    if (updates.paymentStatus === 'refunded' && !order.refundedAt) {
      order.refundedAt = new Date().toISOString();
    }
  }

  if (updates.transactionId) order.transactionId = updates.transactionId;
  if (updates.handoverUrl !== undefined) order.handoverUrl = updates.handoverUrl;
  if (updates.downloadUrl !== undefined) order.downloadUrl = updates.downloadUrl;
  if (updates.handoverNotes !== undefined) order.handoverNotes = updates.handoverNotes;

  let lic = (db.licenses || []).find(l => l.orderCode === order.orderCode || l.key === order.licenseKey);
  if (order.paymentStatus === 'paid' || order.status === 'completed') {
    if (!lic) {
      lic = {
        id: `lic-${Date.now()}`,
        key: order.licenseKey,
        orderCode: order.orderCode,
        productId: order.productId,
        customerEmail: order.customerEmail,
        downloadCount: 0,
        maxDownloads: 10,
        isActive: true,
        handoverUrl: order.handoverUrl || '',
        handoverNotes: order.handoverNotes || '',
        createdAt: new Date().toISOString()
      };
      db.licenses.unshift(lic);
    } else {
      lic.isActive = true;
      if (order.handoverUrl) lic.handoverUrl = order.handoverUrl;
      if (order.handoverNotes) lic.handoverNotes = order.handoverNotes;
    }
    if (order.status === 'completed' && !order.deliveredAt) {
      order.deliveredAt = new Date().toISOString();
      order.completedAt = order.completedAt || order.deliveredAt;
    }
  } else if (order.paymentStatus === 'refunded' || order.status === 'cancelled') {
    if (lic) lic.isActive = false;
  }

  order.statusHistory = order.statusHistory || [];
  order.statusHistory.push({
    status: order.status,
    paymentStatus: order.paymentStatus,
    note: updates.note || `Cập nhật: ${order.status} • Thanh toán: ${order.paymentStatus}`,
    timestamp: new Date().toISOString(),
    updatedBy
  });

  saveDatabase(db);

  updateOrderInSupabase(order.orderCode, {
    status: order.status,
    transactionId: order.transactionId,
    completedAt: order.completedAt
  }).catch(() => {});

  if (lic) {
    updateLicenseInSupabase(lic.key, { isActive: lic.isActive }).catch(() => {});
  }

  return order;
}

function buildPaymentData(order, product, payosData = null) {
  const settings = db.settings || {
    bankAccount: '9933487119',
    bankName: 'Techcombank',
    accountName: 'TRAN DANG KHOA'
  };

  if (payosData) {
    return {
      isPayOS: true,
      bankAccount: payosData.accountNumber || settings.bankAccount,
      bankName: payosData.bin || settings.bankName,
      accountName: payosData.accountName || settings.accountName,
      amount: payosData.amount || order.productPrice,
      content: payosData.description || order.orderCode,
      qrUrl: payosData.qrCode || `https://img.vietqr.io/image/${encodeURIComponent(settings.bankName)}-${encodeURIComponent(settings.bankAccount)}-compact2.png?amount=${order.productPrice}&addInfo=${encodeURIComponent(order.orderCode)}&accountName=${encodeURIComponent(settings.accountName)}`,
      checkoutUrl: payosData.checkoutUrl
    };
  }

  return {
    isPayOS: false,
    bankAccount: settings.bankAccount,
    bankName: settings.bankName,
    accountName: settings.accountName,
    amount: order.productPrice,
    content: order.orderCode,
    qrUrl: `https://img.vietqr.io/image/${encodeURIComponent(settings.bankName)}-${encodeURIComponent(settings.bankAccount)}-compact2.png?amount=${order.productPrice}&addInfo=${encodeURIComponent(order.orderCode)}&accountName=${encodeURIComponent(settings.accountName)}`
  };
}

app.post('/api/orders', async (req, res) => {
  const { 
    productId, 
    customerName, 
    customerEmail, 
    customerPhone, 
    paymentMethod = 'vietqr',
    orderType = 'available',
    customRequirements = ''
  } = req.body;

  if (!customerName || !customerName.trim() || !customerEmail || !customerEmail.trim()) {
    return res.status(400).json({ success: false, message: 'Vui lòng cung cấp đầy đủ họ tên và email nhận bản quyền.' });
  }

  const product = (db.products || []).find(p => p.id === productId);
  if (!product) return res.status(404).json({ success: false, message: 'Website không tồn tại hoặc đã ngừng kinh doanh' });

  // 15-second idempotency check to prevent duplicate order creation on double clicks
  const cleanEmail = customerEmail.trim().toLowerCase();
  const recentOrder = (db.orders || []).find(o => 
    o.productId === productId &&
    o.customerEmail.toLowerCase() === cleanEmail &&
    o.status === 'pending' &&
    (Date.now() - new Date(o.createdAt).getTime()) < 15000
  );

  if (recentOrder) {
    const payment = buildPaymentData(recentOrder, product);
    return res.status(200).json({
      success: true,
      message: 'Đơn hàng của bạn đang được xử lý',
      data: recentOrder,
      payment
    });
  }

  const numericOrderCode = Math.floor(100000 + Math.random() * 900000);
  const orderCode = `ORD-${numericOrderCode}`;
  const licenseKey = `${(product.slug || 'KWEB').substring(0, 4).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-2026`;

  const newOrder = {
    id: `ord-${Date.now()}`,
    orderCode,
    numericOrderCode,
    productId: product.id,
    productTitle: product.title,
    productPrice: Number(product.price), // Snapshot price at purchase time - immutable
    orderType: orderType === 'custom' ? 'custom' : 'available',
    customRequirements: customRequirements ? customRequirements.trim() : '',
    customerName: customerName.trim(),
    customerEmail: cleanEmail,
    customerPhone: customerPhone ? customerPhone.trim() : '',
    status: 'pending',
    paymentStatus: 'unpaid',
    paymentMethod,
    licenseKey,
    handoverUrl: '',
    downloadUrl: product.downloadFileName ? `/api/admin/downloads/${product.downloadFileName}` : '',
    handoverNotes: '',
    createdAt: new Date().toISOString(),
    statusHistory: [
      {
        status: 'pending',
        paymentStatus: 'unpaid',
        note: `Khách hàng tạo đơn ${orderType === 'custom' ? 'website tùy chỉnh' : 'website có sẵn'}`,
        timestamp: new Date().toISOString(),
        updatedBy: 'customer'
      }
    ]
  };

  db.orders.unshift(newOrder);
  saveDatabase(db);

  if (process.platform === 'win32') {
    exec('powershell -NoProfile -Command "[System.Media.SystemSounds]::Asterisk.Play()"', () => {});
  }

  saveOrderToSupabase(newOrder).catch(() => {});

  let payosData = null;
  const payosConfig = getPayOSConfig();
  if (payosConfig.isConfigured) {
    try {
      payosData = await createPaymentLink({
        orderCode: numericOrderCode,
        amount: product.price,
        description: `KWeb ${numericOrderCode}`,
        buyerName: customerName,
        buyerEmail: customerEmail,
        buyerPhone: customerPhone
      });
      newOrder.payosPaymentLinkId = payosData.paymentLinkId;
      saveDatabase(db);
    } catch (e) {
      console.error('PayOS createPaymentLink failed, fallback to direct VietQR:', e.message);
    }
  }

  const payment = buildPaymentData(newOrder, product, payosData);

  res.status(201).json({
    success: true,
    data: newOrder,
    payment
  });
});

// Update order status, payment status, handover, notes (from EXE or Admin)
app.patch('/api/orders/:orderCode', (req, res) => {
  if (req.body.status && !['pending', 'processing', 'completed', 'cancelled', 'refunded'].includes(req.body.status)) {
    return res.status(400).json({ success: false, message: 'Trạng thái đơn hàng không hợp lệ' });
  }
  const updated = updateOrderStatus(req.params.orderCode, req.body, req.body.updatedBy || 'admin');
  if (!updated) return res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng' });
  res.json({ success: true, message: 'Đã cập nhật đơn hàng thành công!', data: updated });
});

app.put('/api/orders/:orderCode', (req, res) => {
  if (req.body.status && !['pending', 'processing', 'completed', 'cancelled', 'refunded'].includes(req.body.status)) {
    return res.status(400).json({ success: false, message: 'Trạng thái đơn hàng không hợp lệ' });
  }
  const updated = updateOrderStatus(req.params.orderCode, req.body, req.body.updatedBy || 'admin');
  if (!updated) return res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng' });
  res.json({ success: true, message: 'Đã cập nhật đơn hàng thành công!', data: updated });
});

// Dedicated handover endpoint
app.post('/api/orders/:orderCode/handover', (req, res) => {
  const { handoverUrl, downloadUrl, handoverNotes, note } = req.body;
  const updated = updateOrderStatus(req.params.orderCode, {
    status: 'completed',
    handoverUrl,
    downloadUrl,
    handoverNotes,
    note: note || 'Bàn giao website hoàn thiện cho khách hàng'
  }, req.body.updatedBy || 'admin');

  if (!updated) return res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng' });
  res.json({ success: true, message: 'Đã bàn giao website cho khách hàng thành công!', data: updated });
});

// Real-time polling endpoint to check order and payment status
app.get('/api/orders/:orderCode/status', async (req, res) => {
  const order = (db.orders || []).find(o => o.orderCode === req.params.orderCode || String(o.numericOrderCode) === req.params.orderCode);
  if (!order) return res.status(404).json({ success: false, message: 'Đơn hàng không tồn tại' });

  // If already paid or completed
  if (order.paymentStatus === 'paid' || order.status === 'completed') {
    const lic = (db.licenses || []).find(l => l.orderCode === order.orderCode) || { key: order.licenseKey };
    return res.json({
      success: true,
      isPaid: true,
      status: order.status,
      paymentStatus: order.paymentStatus || 'paid',
      data: {
        order,
        license: lic,
        downloadUrl: order.downloadUrl || `/api/download/${lic.key}`,
        handoverUrl: order.handoverUrl || '',
        handoverNotes: order.handoverNotes || ''
      }
    });
  }

  // If pending, check with PayOS in real time
  if (order.numericOrderCode && getPayOSConfig().isConfigured) {
    try {
      const payosStatus = await getPaymentStatus(order.numericOrderCode);
      if (payosStatus && payosStatus.isPaid) {
        const lic = completeOrder(order, payosStatus.data?.id || `PAYOS-${Date.now()}`);
        return res.json({
          success: true,
          isPaid: true,
          status: 'completed',
          paymentStatus: 'paid',
          data: {
            order,
            license: lic,
            downloadUrl: order.downloadUrl || `/api/download/${lic.key}`,
            handoverUrl: order.handoverUrl || '',
            handoverNotes: order.handoverNotes || ''
          }
        });
      }
    } catch (e) {
      console.error('PayOS polling check error:', e.message);
    }
  }

  res.json({
    success: true,
    isPaid: false,
    status: order.status || 'pending',
    paymentStatus: order.paymentStatus || 'unpaid',
    notifiedPaid: Boolean(order.notifiedPaid),
    message: order.notifiedPaid ? 'Đã báo chuyển tiền, đang chờ Admin duyệt' : 'Chờ khách chuyển khoản',
    data: {
      order,
      handoverUrl: order.handoverUrl || '',
      downloadUrl: order.downloadUrl || '',
      handoverNotes: order.handoverNotes || ''
    }
  });
});

// Customer Tracking Endpoint
app.post('/api/orders/track', (req, res) => {
  const identifier = req.body.identifier || req.body.orderCode;
  const email = req.body.email || req.body.customerEmail;
  if (!identifier) {
    return res.status(400).json({ success: false, message: 'Vui lòng cung cấp mã đơn hàng hoặc mã license' });
  }

  const clean = identifier.trim().toUpperCase();
  const cleanEmail = email ? email.trim().toLowerCase() : null;

  const order = (db.orders || []).find(o => 
    o.orderCode.toUpperCase() === clean || 
    (o.licenseKey && o.licenseKey.toUpperCase() === clean) ||
    String(o.numericOrderCode) === clean
  );

  if (!order) {
    return res.status(404).json({ success: false, message: 'Không tìm thấy thông tin đơn hàng hoặc mã license trên hệ thống.' });
  }

  if (cleanEmail && order.customerEmail.toLowerCase() !== cleanEmail) {
    return res.status(403).json({ success: false, message: 'Email không khớp với thông tin đơn hàng.' });
  }

  const lic = (db.licenses || []).find(l => l.orderCode === order.orderCode || l.key === order.licenseKey);
  const isPaid = order.paymentStatus === 'paid' || order.status === 'completed';

  res.json({
    success: true,
    data: {
      orderCode: order.orderCode,
      productTitle: order.productTitle,
      productPrice: order.productPrice,
      orderType: order.orderType || 'available',
      customRequirements: order.customRequirements || '',
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      status: order.status,
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      createdAt: order.createdAt,
      deliveredAt: order.deliveredAt,
      isPaid,
      licenseKey: isPaid ? order.licenseKey : null,
      handoverUrl: order.handoverUrl || '',
      downloadUrl: isPaid ? (order.downloadUrl || `/api/download/${order.licenseKey}`) : null,
      handoverNotes: order.handoverNotes || '',
      remainingDownloads: lic ? Math.max(0, (lic.maxDownloads || 10) - (lic.downloadCount || 0)) : 10,
      statusHistory: order.statusHistory || []
    }
  });
});

// PayOS Webhook receiver
app.post('/api/payos/webhook', async (req, res) => {
  try {
    const verified = verifyWebhook(req.body);
    if (verified && verified.orderCode) {
      const numericCode = verified.orderCode;
      const order = (db.orders || []).find(o => o.numericOrderCode === numericCode);
      if (order && order.status !== 'completed') {
        completeOrder(order, verified.reference || verified.transactionId, 'payos_webhook');
        console.log(`[PayOS Webhook] Order ${order.orderCode} paid successfully via bank!`);
      }
    }
    res.json({ success: true, message: 'Webhook received' });
  } catch (err) {
    console.error('[PayOS Webhook Error]:', err.message);
    res.status(400).json({ success: false, message: err.message });
  }
});

// Customer notifies that they transferred money
app.post('/api/orders/:orderCode/notify-paid', (req, res) => {
  const order = (db.orders || []).find(o => o.orderCode === req.params.orderCode);
  if (!order) return res.status(404).json({ success: false, message: 'Đơn hàng không tồn tại' });

  order.notifiedPaid = true;
  order.notifiedAt = new Date().toISOString();
  order.statusHistory = order.statusHistory || [];
  order.statusHistory.push({
    status: order.status,
    paymentStatus: order.paymentStatus,
    note: 'Khách hàng đã bấm nút báo chuyển khoản thành công',
    timestamp: new Date().toISOString(),
    updatedBy: 'customer'
  });
  saveDatabase(db);

  if (process.platform === 'win32') {
    exec('powershell -NoProfile -Command "[System.Media.SystemSounds]::Exclamation.Play()"', () => {});
  }

  updateOrderInSupabase(order.orderCode, {
    notified_paid: true,
    notified_at: order.notifiedAt
  }).catch(() => {});

  res.json({
    success: true,
    message: 'Đã gửi thông báo chuyển khoản tới Admin. Vui lòng đợi trong giây lát để Admin kiểm tra và duyệt đơn!',
    data: order
  });
});

// Admin approves an order manually (from Desktop app or Admin Portal)
app.post('/api/orders/:orderCode/approve', (req, res) => {
  const order = (db.orders || []).find(o => o.orderCode === req.params.orderCode);
  if (!order) return res.status(404).json({ success: false, message: 'Đơn hàng không tồn tại' });

  const newLicense = completeOrder(order, req.body.transactionId || 'MANUAL-ADMIN', req.body.updatedBy || 'admin');

  res.json({
    success: true,
    message: `Đã duyệt đơn ${order.orderCode} và cấp License Key thành công!`,
    data: {
      order,
      license: newLicense,
      downloadUrl: order.downloadUrl || `/api/download/${newLicense.key}`
    }
  });
});

// Admin updates shop bank settings
app.post('/api/admin/settings/bank', (req, res) => {
  const { bankName, bankAccount, accountName } = req.body;
  if (!bankName || !bankAccount || !accountName) {
    return res.status(400).json({ success: false, message: 'Thiếu thông tin ngân hàng' });
  }

  db.settings = db.settings || {};
  db.settings.bankName = bankName.trim();
  db.settings.bankAccount = bankAccount.trim();
  db.settings.accountName = accountName.trim().toUpperCase();
  saveDatabase(db);

  res.json({
    success: true,
    message: 'Đã cập nhật thông tin tài khoản ngân hàng thành công!',
    data: db.settings
  });
});

// Get current settings
app.get('/api/admin/settings', (req, res) => {
  res.json({
    success: true,
    data: db.settings || {
      bankAccount: '9933487119',
      bankName: 'Techcombank',
      accountName: 'TRAN DANG KHOA'
    }
  });
});

app.post('/api/orders/:orderCode/verify', async (req, res) => {
  const order = (db.orders || []).find(o => o.orderCode === req.params.orderCode);
  if (!order) return res.status(404).json({ success: false, message: 'Đơn hàng không tồn tại' });

  if (order.numericOrderCode && getPayOSConfig().isConfigured) {
    try {
      const payosStatus = await getPaymentStatus(order.numericOrderCode);
      if (!payosStatus || !payosStatus.isPaid) {
        return res.status(400).json({
          success: false,
          isPaid: false,
          message: 'Hệ thống ngân hàng chưa ghi nhận tiền vào tài khoản. Vui lòng quét mã QR chuyển đúng số tiền và nội dung, sau đó thử lại sau ít giây!'
        });
      }
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'Không thể kết nối đến cổng thanh toán PayOS để xác thực: ' + err.message
      });
    }
  }

  const newLicense = completeOrder(order, null, 'verify_endpoint');

  res.json({
    success: true,
    isPaid: true,
    message: 'Thanh toán thành công! Đã kích hoạt mã bản quyền và mở khóa tải file mã nguồn.',
    data: {
      order,
      license: newLicense,
      downloadUrl: order.downloadUrl || `/api/download/${newLicense.key}`
    }
  });
});

// Refund an order, revoke license, and deduct revenue
app.post('/api/orders/:orderCode/refund', (req, res) => {
  const order = (db.orders || []).find(o => o.orderCode === req.params.orderCode);
  if (!order) return res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng' });

  const { reason, refundTransactionId } = req.body || {};
  order.status = 'cancelled';
  order.paymentStatus = 'refunded';
  order.refundedAt = new Date().toISOString();
  order.refundReason = reason || 'Hoàn tiền theo yêu cầu khách hàng';
  order.refundTransactionId = refundTransactionId || `REF-${Date.now().toString().slice(-8)}`;

  const lic = (db.licenses || []).find(l => l.orderCode === order.orderCode || l.key === order.licenseKey);
  if (lic) {
    lic.isActive = false;
    updateLicenseInSupabase(lic.key, { isActive: false }).catch(() => {});
  }

  order.statusHistory = order.statusHistory || [];
  order.statusHistory.push({
    status: 'cancelled',
    paymentStatus: 'refunded',
    note: `Hoàn tiền và hủy đơn: ${order.refundReason} (Mã GD hoàn: ${order.refundTransactionId})`,
    timestamp: new Date().toISOString(),
    updatedBy: 'admin'
  });

  saveDatabase(db);

  updateOrderInSupabase(order.orderCode, {
    status: 'cancelled',
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

  const licIndex = (db.licenses || []).findIndex(l => l.orderCode === deletedOrder.orderCode || l.key === deletedOrder.licenseKey);
  if (licIndex !== -1) {
    db.licenses.splice(licIndex, 1);
  }

  saveDatabase(db);

  deleteOrderFromSupabase(deletedOrder.orderCode).catch(() => {});

  res.json({
    success: true,
    message: `Đã xóa vĩnh viễn đơn hàng #${deletedOrder.orderCode} khỏi hệ thống!`,
    data: deletedOrder
  });
});

// Customer Directory
app.get('/api/customers', (req, res) => {
  const customerMap = new Map();
  (db.orders || []).forEach(o => {
    if (!o.customerEmail) return;
    const emailKey = o.customerEmail.toLowerCase().trim();
    if (!customerMap.has(emailKey)) {
      customerMap.set(emailKey, {
        email: emailKey,
        name: o.customerName || 'Khách hàng',
        phone: o.customerPhone || '',
        totalOrders: 0,
        totalSpent: 0,
        orders: [],
        lastOrderDate: o.createdAt || ''
      });
    }
    const cust = customerMap.get(emailKey);
    cust.totalOrders += 1;
    if (o.paymentStatus === 'paid' || o.status === 'completed') {
      cust.totalSpent += Number(o.productPrice) || 0;
    }
    cust.orders.push(o);
    if (!cust.phone && o.customerPhone) cust.phone = o.customerPhone;
    if (new Date(o.createdAt) > new Date(cust.lastOrderDate)) {
      cust.lastOrderDate = o.createdAt;
      cust.name = o.customerName || cust.name;
    }
  });

  const customers = Array.from(customerMap.values()).sort((a, b) => b.totalSpent - a.totalSpent);
  res.json({ success: true, count: customers.length, data: customers });
});

// 3. License Verification & Real File Download (Dual lookup by key or orderCode)
app.get('/api/licenses/verify/:key', (req, res) => {
  const cleanKey = req.params.key.trim().toUpperCase();
  
  const lic = (db.licenses || []).find(l => l.key.toUpperCase() === cleanKey || l.orderCode.toUpperCase() === cleanKey);
  const order = (db.orders || []).find(o => o.licenseKey.toUpperCase() === cleanKey || o.orderCode.toUpperCase() === cleanKey);

  if (!lic && !order) {
    return res.status(404).json({ success: false, message: 'Mã License hoặc đơn hàng không tồn tại hoặc đã hết hạn.' });
  }

  const resolvedOrder = order || (db.orders || []).find(o => o.orderCode === lic?.orderCode);
  const resolvedLic = lic || (db.licenses || []).find(l => l.orderCode === order?.orderCode) || {
    key: order.licenseKey,
    isActive: order.status === 'completed' || order.paymentStatus === 'paid',
    downloadCount: 0,
    maxDownloads: 10
  };

  const product = (db.products || []).find(p => p.id === (resolvedOrder?.productId || resolvedLic?.productId));
  const isPaid = resolvedOrder ? (resolvedOrder.paymentStatus === 'paid' || resolvedOrder.status === 'completed') : resolvedLic.isActive;

  res.json({
    success: true,
    data: {
      license: {
        key: resolvedLic.key,
        isActive: resolvedLic.isActive !== false,
        customerEmail: resolvedOrder?.customerEmail || resolvedLic.customerEmail,
        downloadCount: resolvedLic.downloadCount || 0,
        maxDownloads: resolvedLic.maxDownloads || 10,
        createdAt: resolvedLic.createdAt
      },
      order: resolvedOrder ? {
        orderCode: resolvedOrder.orderCode,
        status: resolvedOrder.status,
        paymentStatus: resolvedOrder.paymentStatus,
        orderType: resolvedOrder.orderType,
        customRequirements: resolvedOrder.customRequirements,
        productTitle: resolvedOrder.productTitle,
        productPrice: resolvedOrder.productPrice,
        handoverUrl: resolvedOrder.handoverUrl,
        downloadUrl: resolvedOrder.downloadUrl,
        handoverNotes: resolvedOrder.handoverNotes,
        deliveredAt: resolvedOrder.deliveredAt
      } : null,
      productTitle: resolvedOrder?.productTitle || product?.title || 'Mẫu Website KWeb',
      handoverUrl: resolvedOrder?.handoverUrl || resolvedLic?.handoverUrl || '',
      handoverNotes: resolvedOrder?.handoverNotes || resolvedLic?.handoverNotes || '',
      downloadFileName: product?.downloadFileName || 'source-code.zip',
      remainingDownloads: Math.max(0, (resolvedLic.maxDownloads || 10) - (resolvedLic.downloadCount || 0)),
      downloadUrl: isPaid ? (resolvedOrder?.downloadUrl || `/api/download/${resolvedLic.key}`) : null
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

// Continuous Automatic Background Sync with Supabase Cloud (Every 5 seconds)
setInterval(async () => {
  try {
    const status = await checkSupabaseStatus();
    if (status.connected && status.tablesReady) {
      // 1. Sync any new orders placed from website via Supabase
      const supaOrders = await getOrdersFromSupabase();
      if (supaOrders && supaOrders.length > 0) {
        let changed = false;
        const localMap = new Map((db.orders || []).map(o => [o.orderCode, o]));
        for (const so of supaOrders) {
          if (!localMap.has(so.orderCode)) {
            db.orders.unshift(so);
            changed = true;
          }
        }
        if (changed) saveDatabase(db);
      }

      // 2. Sync products if local has products not yet on Supabase
      if (db.products && db.products.length > 0) {
        const supaProducts = await getProductsFromSupabase();
        if (supaProducts) {
          const supaIds = new Set(supaProducts.map(p => p.id));
          for (const lp of db.products) {
            if (!supaIds.has(lp.id)) {
              await saveProductToSupabase(lp);
            }
          }
        }
      }
    }
  } catch (_) {}
}, 5000);

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
