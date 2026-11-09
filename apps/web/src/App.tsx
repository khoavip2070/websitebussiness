import React, { useState, useEffect, useMemo } from 'react';
import { 
  Navbar, 
  PageId,
  Hero,
  ProductSearchBar,
  ProductCard, 
  LivePreviewModal, 
  ProductDetailModal, 
  CheckoutModal, 
  LicenseLookupModal, 
  LicensePageView,
  AdminPortalModal,
  Footer,
  Reveal3D,
  BentoShowcase
} from './components';
import { WebsiteProduct, CategoryId, INITIAL_PRODUCTS } from '@sitevault/shared';
import { 
  SearchX, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  ShoppingBag,
  Layers,
  Home,
  KeyRound,
  ShieldCheck
} from 'lucide-react';

const ITEMS_PER_PAGE = 6;

const getPageFromHash = (): PageId => {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.toLowerCase().replace('#', '');
  if (hash === 'store' || hash === 'kho-website') return 'store';
  if (hash === 'license' || hash === 'tra-cuu-license') return 'license';
  return 'home';
};

export const App: React.FC = () => {
  // Page Routing State
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  // Products & Filter State (Default to INITIAL_PRODUCTS so no flicker / empty state)
  const [products, setProducts] = useState<WebsiteProduct[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'newest'>('popular');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [storePage, setStorePage] = useState(1);

  // Modals state
  const [previewProduct, setPreviewProduct] = useState<WebsiteProduct | null>(null);
  const [detailProduct, setDetailProduct] = useState<WebsiteProduct | null>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<WebsiteProduct | null>(null);
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Sync hash routing & detect #admin portal
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'admin' || hash === 'quan-tri') {
        setIsAdminModalOpen(true);
      } else {
        setCurrentPage(getPageFromHash());
      }
    };
    if (window.location.hash.toLowerCase().includes('admin')) {
      setIsAdminModalOpen(true);
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    if (page === 'home') {
      history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fetch products from backend API or Supabase Cloud
  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const data = await res.json();
          if (data.success && Array.isArray(data.data)) {
            setProducts(data.data);
            return;
          }
        }
      }
    } catch (_) {}

    // Fallback: Query Supabase Cloud directly (for Vercel deployment)
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://vbbweuyosfwhgrcyszvg.supabase.co';
      const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_eUP6EEeNc-rJUnevaU_zPA__XMg12uP';
      const sb = createClient(supabaseUrl, supabaseKey);
      const { data, error } = await sb.from('products').select('*').eq('status', 'published');
      if (!error && Array.isArray(data)) {
        const mapped: WebsiteProduct[] = data.map((sp: any) => ({
          id: sp.id,
          slug: sp.slug,
          title: sp.title,
          tagline: sp.tagline || '',
          description: sp.description || '',
          price: Number(sp.price),
          originalPrice: Number(sp.original_price || sp.price * 2),
          category: sp.category,
          techStack: Array.isArray(sp.tech_stack) ? sp.tech_stack : [],
          thumbnail: sp.thumbnail || '',
          gallery: Array.isArray(sp.gallery) ? sp.gallery : [sp.thumbnail],
          demoUrl: sp.demo_url || '',
          status: sp.status,
          downloadFileName: sp.download_file_name || '',
          fileSize: sp.file_size || '0 KB',
          rating: Number(sp.rating || 5.0),
          reviewsCount: Number(sp.reviews_count || 0),
          salesCount: Number(sp.sales_count || 0),
          features: Array.isArray(sp.features) ? sp.features : [],
          pagesCount: Number(sp.pages_count || 1),
          createdAt: sp.created_at || new Date().toISOString(),
          lighthouse: sp.lighthouse || { performance: 99, accessibility: 100, bestPractices: 100, seo: 100 },
          includedAssets: Array.isArray(sp.included_assets) ? sp.included_assets : [],
          tags: Array.isArray(sp.tags) ? sp.tags : []
        }));
        setProducts(mapped);
      }
    } catch (_) {}
  };

  useEffect(() => {
    fetchProducts();

    // Tự động đồng bộ liên tục ngầm với phần mềm Desktop mỗi 2 giây
    const interval = setInterval(() => {
      fetchProducts();
    }, 2000);

    const onFocus = () => fetchProducts();
    window.addEventListener('focus', onFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  // Filter & Sort
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
        if (selectedTech !== 'all' && !p.techStack.some((t) => t.toLowerCase().includes(selectedTech.toLowerCase()))) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchTagline = p.tagline.toLowerCase().includes(q);
          const matchTech = p.techStack.some((t) => t.toLowerCase().includes(q));
          const matchCategory = p.category.toLowerCase().includes(q);
          const matchId = (p.id || "").toLowerCase().includes(q);
          const matchSlug = (p.slug || "").toLowerCase().includes(q);
          if (!matchTitle && !matchTagline && !matchId && !matchSlug && !matchTech && !matchCategory) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        return (b.salesCount || 0) - (a.salesCount || 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy, selectedTech]);

  // Reset pagination to page 1 on filter changes
  useEffect(() => {
    setStorePage(1);
  }, [selectedCategory, searchQuery, sortBy, selectedTech]);

  // Paginated products for the Store page
  const totalStorePages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginatedProducts = useMemo(() => {
    const start = (storePage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, storePage]);

  // Featured products for the Home page preview (up to 3)
  const featuredProducts = useMemo(() => {
    return products.slice(0, 3);
  }, [products]);

  // Record view on user interaction
  const recordView = (productId: string) => {
    fetch(`/api/products/${productId}/view`, { method: 'POST' }).catch(() => {});
  };

  const handleBuy = (product: WebsiteProduct) => {
    setPreviewProduct(null);
    setDetailProduct(null);
    setCheckoutProduct(product);
  };

  const handlePageChange = (newPage: number) => {
    setStorePage(newPage);
    const catalogEl = document.getElementById('store-heading');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070A11] text-slate-100 selection:bg-sky-500/30 selection:text-white pb-20 sm:pb-0">
      {/* 1. Header Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        productCount={products.length}
      />

      {/* 2. Main Multi-Page Content */}
      <main className="flex-1 w-full">
        {/* ================= PAGE 1: TRANG CHỦ (HOME) ================= */}
        {currentPage === 'home' && (
          <div className="space-y-16 sm:space-y-24">
            {/* Hero Section */}
            <Hero
              productCount={products.length}
              totalSales={products.reduce((s, p) => s + (p.salesCount || 0), 0)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onExploreStore={() => navigateTo('store')}
              onOpenLicense={() => navigateTo('license')}
            />

            {/* Featured Showcase Section */}
            {featuredProducts.length > 0 && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>MẪU WEBSITE TIÊU BIỂU</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Sản phẩm được tuyển chọn & bán chạy
                    </h2>
                  </div>

                  <button
                    onClick={() => navigateTo('store')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition group cursor-pointer"
                  >
                    <span>Xem toàn bộ {products.length} mẫu website</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredProducts.map((product, i) => (
                    <Reveal3D key={product.id} delay={i * 100}>
                      <ProductCard
                        product={product}
                        onPreview={(p) => {
                          recordView(p.id);
                          setPreviewProduct(p);
                        }}
                        onSelect={(p) => {
                          recordView(p.id);
                          setDetailProduct(p);
                        }}
                        onBuy={handleBuy}
                      />
                    </Reveal3D>
                  ))}
                </div>
              </section>
            )}

            {/* Bento 3D Showcase */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <BentoShowcase />
            </div>
          </div>
        )}

        {/* ================= PAGE 2: KHO WEBSITE (STORE) ================= */}
        {currentPage === 'store' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
            {/* Store Header Banner */}
            <div id="store-heading" className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-sky-300 text-xs font-semibold backdrop-blur-md">
                <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
                <span>KHO SẢN PHẨM SẴN CÓ ({products.length} MẪU)</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Kho Website Mẫu Cao Cấp
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Mỗi website đều được tối ưu hóa toàn diện, kiểm tra bảo mật, tích hợp thanh toán VietQR tự động và tài liệu deploy 1-click.
              </p>
            </div>

            {/* Search and Sort Toolbar */}
            <ProductSearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              resultCount={filteredProducts.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedProducts.map((product, i) => (
                    <Reveal3D key={product.id} delay={(i % 3) * 90}>
                      <ProductCard
                        product={product}
                        onPreview={(p) => {
                          recordView(p.id);
                          setPreviewProduct(p);
                        }}
                        onSelect={(p) => {
                          recordView(p.id);
                          setDetailProduct(p);
                        }}
                        onBuy={handleBuy}
                      />
                    </Reveal3D>
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
                  <div className="text-xs text-slate-400 font-medium">
                    Hiển thị <span className="text-white font-bold">{(storePage - 1) * ITEMS_PER_PAGE + 1}</span> -{' '}
                    <span className="text-white font-bold">{Math.min(storePage * ITEMS_PER_PAGE, filteredProducts.length)}</span> trên tổng số{' '}
                    <span className="text-sky-400 font-bold">{filteredProducts.length}</span> mẫu website
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(storePage - 1)}
                      disabled={storePage <= 1}
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Trước</span>
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalStorePages }, (_, idx) => idx + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition flex items-center justify-center cursor-pointer ${
                          storePage === pageNum
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400'
                            : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(storePage + 1)}
                      disabled={storePage >= totalStorePages}
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>Sau</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-20 text-center bg-slate-900/40 rounded-3xl border border-dashed border-white/15 max-w-lg mx-auto p-8">
                <SearchX className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">
                  {products.length === 0 ? 'Kho website đang được cập nhật' : 'Không tìm thấy website phù hợp'}
                </h3>
                <p className="text-xs text-slate-400 mt-1 mb-5">
                  {products.length === 0
                    ? 'Hiện tại các mẫu website đang được làm mới hoặc đã gỡ. Vui lòng quay lại sau!'
                    : 'Thử tìm kiếm với tên sản phẩm, mã website hoặc xóa bộ lọc danh mục.'}
                </p>
                {products.length > 0 && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                      setSelectedTech('all');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
                  >
                    Xem lại tất cả mẫu
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* ================= PAGE 3: TRA CỨU LICENSE (LICENSE) ================= */}
        {currentPage === 'license' && (
          <LicensePageView onNavigate={navigateTo} />
        )}
      </main>

      {/* 3. Global Modals (Interactive Overlay) */}
      <LivePreviewModal
        product={previewProduct}
        onClose={() => setPreviewProduct(null)}
        onBuy={handleBuy}
      />

      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onPreview={(p) => {
          recordView(p.id);
          setPreviewProduct(p);
        }}
        onBuy={handleBuy}
      />

      {checkoutProduct && (
        <CheckoutModal
          key={checkoutProduct.id}
          product={checkoutProduct}
          onClose={() => setCheckoutProduct(null)}
          onOrderSuccess={() => {
            fetchProducts();
          }}
        />
      )}

      <LicenseLookupModal
        isOpen={isLicenseModalOpen}
        onClose={() => setIsLicenseModalOpen(false)}
      />

      <AdminPortalModal
        isOpen={isAdminModalOpen}
        onClose={() => {
          setIsAdminModalOpen(false);
          if (window.location.hash.includes('admin')) {
            window.location.hash = '';
          }
        }}
        onOrderUpdated={fetchProducts}
      />

      {/* 4. Global Luxury Footer */}
      <Footer
        onNavigate={navigateTo}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenLicenseModal={() => navigateTo('license')}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      {/* 5. Mobile Floating Bottom Navigation Dock (Thumb-friendly UX on iOS & Android) */}
      <nav className="sm:hidden fixed bottom-3 inset-x-3 z-40 bg-[#0A0E1A]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-around select-none">
        <button
          onClick={() => navigateTo('home')}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all cursor-pointer ${
            currentPage === 'home'
              ? 'bg-white text-slate-950 font-bold shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-semibold">Trang Chủ</span>
        </button>

        <button
          onClick={() => navigateTo('store')}
          className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all cursor-pointer ${
            currentPage === 'store'
              ? 'bg-white text-slate-950 font-bold shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-semibold">Kho Website</span>
          {products.length > 0 && (
            <span className={`absolute top-0.5 right-2 px-1 rounded-full text-[9px] font-bold ${
              currentPage === 'store' ? 'bg-slate-900 text-white' : 'bg-sky-500 text-slate-950'
            }`}>
              {products.length}
            </span>
          )}
        </button>

        <button
          onClick={() => navigateTo('license')}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all cursor-pointer ${
            currentPage === 'license'
              ? 'bg-white text-slate-950 font-bold shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <KeyRound className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-semibold">Tra Cứu</span>
        </button>

        <button
          onClick={() => setIsAdminModalOpen(true)}
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-slate-400 hover:text-white transition-all cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] mt-0.5 font-semibold">Admin</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
