import React, { useState, useEffect, useMemo } from 'react';
import { 
  Navbar, 
  Hero,
  CategoryNav, 
  ProductCard, 
  LivePreviewModal, 
  ProductDetailModal, 
  CheckoutModal, 
  LicenseLookupModal, 
  Footer,
  Reveal3D,
  BentoShowcase
} from './components';
import { WebsiteProduct, CategoryId, INITIAL_PRODUCTS } from '@sitevault/shared';
import { SlidersHorizontal, ArrowUpDown, SearchX } from 'lucide-react';

export const App: React.FC = () => {
  const [products, setProducts] = useState<WebsiteProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'newest'>('popular');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  // Modals state
  const [previewProduct, setPreviewProduct] = useState<WebsiteProduct | null>(null);
  const [detailProduct, setDetailProduct] = useState<WebsiteProduct | null>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<WebsiteProduct | null>(null);
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  // Fetch products from backend API or Supabase Cloud (100% Real-time sync)
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
          if (!matchTitle && !matchTagline && !matchTech && !matchCategory) return false;
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

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  // Spotlight product (Interactive HeroInspo Selection)
  const [selectedSpotlightId, setSelectedSpotlightId] = useState<string | null>(null);

  const spotlightProduct = useMemo(() => {
    if (selectedSpotlightId) {
      const found = products.find((p) => p.id === selectedSpotlightId);
      if (found) return found;
    }
    return products.find((p) => p.slug === 'nova-saas-landing') || products[0];
  }, [products, selectedSpotlightId]);

  // Extract all tech stack options
  const allTechOptions = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [products]);

  // Record real view on user interaction
  const recordView = (productId: string) => {
    fetch(`/api/products/${productId}/view`, { method: 'POST' }).catch(() => {});
  };

  const handleBuy = (product: WebsiteProduct) => {
    setPreviewProduct(null);
    setDetailProduct(null);
    setCheckoutProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070A11] text-slate-100">
      {/* 1. Header */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        productCount={products.length}
        totalSales={products.reduce((s, p) => s + (p.salesCount || 0), 0)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          const el = document.getElementById('catalog-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <div id="catalog-section" className="scroll-mt-24">
          {/* 4. Category Filter Bar */}
          <CategoryNav
            selectedCategory={selectedCategory}
            onSelectCategory={(id) => {
              setSelectedCategory(id);
              setSelectedTech('all');
            }}
            categoryCounts={categoryCounts}
          />

          {/* Controls Bar: Results Count, Tech Filter, Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-8 bg-slate-900/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">
                {filteredProducts.length} mẫu website làm sẵn
              </span>
              {searchQuery && (
                <span className="text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full font-medium border border-sky-500/20">
                  Từ khóa: "{searchQuery}"
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Tech filter */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="font-semibold text-slate-400">Công nghệ:</span>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="bg-slate-800/80 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl border border-white/10 outline-none font-semibold cursor-pointer text-xs"
                >
                  <option value="all">Tất cả công nghệ</option>
                  {allTechOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="font-semibold text-slate-400">Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-800/80 hover:bg-slate-800 text-white px-3 py-1.5 rounded-xl border border-white/10 outline-none font-semibold cursor-pointer text-xs"
                >
                  <option value="popular">Bán chạy nhất</option>
                  <option value="newest">Mới cập nhật</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
              {filteredProducts.map((product, i) => (
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
          ) : (
            <div className="py-20 text-center bg-slate-900/40 rounded-3xl border border-dashed border-white/15 max-w-lg mx-auto">
              <SearchX className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-white">
                {products.length === 0 ? 'Kho website đang được cập nhật' : 'Không tìm thấy website phù hợp'}
              </h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">
                {products.length === 0
                  ? 'Hiện tại các mẫu website đang được làm mới hoặc đã gỡ. Vui lòng quay lại sau!'
                  : 'Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc danh mục.'}
              </p>
              {products.length > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setSelectedTech('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                >
                  Xem lại tất cả mẫu
                </button>
              )}
            </div>
          )}
        </div>

        {/* 5. Bento Showcase (Cirform style) */}
        <BentoShowcase />
      </main>

      {/* 7. Modals */}
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

      <CheckoutModal
        product={checkoutProduct}
        onClose={() => setCheckoutProduct(null)}
        onOrderSuccess={() => {
          fetchProducts();
        }}
      />

      <LicenseLookupModal
        isOpen={isLicenseModalOpen}
        onClose={() => setIsLicenseModalOpen(false)}
      />

      {/* 8. Footer */}
      <Footer onOpenLicenseModal={() => setIsLicenseModalOpen(true)} />
    </div>
  );
};

export default App;
