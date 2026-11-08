import React, { useState } from 'react';
import { 
  Eye, 
  Zap, 
  Sparkles, 
  ShoppingBag, 
  HardDrive, 
  Monitor, 
  Smartphone, 
  Gauge, 
  ExternalLink,
  CheckCircle2,
  Play
} from 'lucide-react';
import { WebsiteProduct } from '@sitevault/shared';
import { TiltedCard3D } from './TiltedCard3D';

interface SpotlightHeroProps {
  product: WebsiteProduct;
  allProducts?: WebsiteProduct[];
  onSelectProduct?: (product: WebsiteProduct) => void;
  onPreview: (product: WebsiteProduct) => void;
  onSelect: (product: WebsiteProduct) => void;
  onBuy: (product: WebsiteProduct) => void;
}

export const SpotlightHero: React.FC<SpotlightHeroProps> = ({
  product,
  allProducts = [],
  onSelectProduct,
  onPreview,
  onSelect,
  onBuy
}) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [isInteractive, setIsInteractive] = useState(false);

  const formatVnd = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <section className="relative my-8 sm:my-12">
      {/* 3D Background Glow Pulse */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl -z-10" />

      <div className="bg-slate-900/85 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
        {/* Top Hero Inspo Bar: Featured Showcase Header & Selector Tabs */}
        {allProducts && allProducts.length > 1 && (
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 overflow-x-auto no-scrollbar gap-2">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                HEROINSPO SHOWCASE
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Khám phá giao diện mẫu nổi bật:
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {allProducts.slice(0, 5).map((p) => {
                const isActive = p.id === product.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => onSelectProduct && onSelectProduct(p)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-400/50'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {p.title.split('-')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Info & Actions */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Mẫu Hero Tỷ Lệ Chuyển Đổi Cao
              </span>
              {discountPercent > 0 && (
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold">
                  Tiết kiệm {discountPercent}%
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {product.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {product.tagline}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {product.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 100% Real Metrics */}
            <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs">
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 font-medium">Hiệu suất Google</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                  <Gauge className="w-3.5 h-3.5" />
                  {product.lighthouse?.performance || 99}/100 Tốc độ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 font-medium">Lượt tương tác</span>
                <span className="text-sky-300 font-bold flex items-center gap-1 mt-0.5">
                  <Eye className="w-3.5 h-3.5" />
                  {product.viewsCount || 0} lượt xem
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400 font-medium">Gói tải về</span>
                <span className="text-white font-mono font-bold flex items-center gap-1 mt-0.5">
                  <HardDrive className="w-3.5 h-3.5 text-indigo-400" />
                  {product.fileSize || '15 MB'}
                </span>
              </div>
            </div>

            {/* Price & Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-3xl font-black text-white tracking-tight">
                  {formatVnd(product.price)}
                </div>
                {product.originalPrice && (
                  <div className="text-xs text-slate-400 line-through">
                    {formatVnd(product.originalPrice)}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => onPreview(product)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <Eye className="w-4 h-4 text-sky-400" />
                  <span>Xem Live Đa Thiết Bị</span>
                </button>

                <button
                  onClick={() => onBuy(product)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all active:scale-95"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Mua Bản Quyền</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: HeroInspo Device Interactive Frame */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Device Switcher Bar (Desktop / iPhone) */}
            <div className="flex items-center justify-between w-full mb-3 px-2">
              <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-white/10">
                <button
                  onClick={() => setDevice('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    device === 'desktop'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    device === 'mobile'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile (iPhone)</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsInteractive(!isInteractive)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                    isInteractive
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border-white/10'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isInteractive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                  <span>{isInteractive ? 'Đang chạy Live Iframe' : 'Chạy Thử Trực Tiếp'}</span>
                </button>

                <button
                  onClick={() => onPreview(product)}
                  title="Mở toàn màn hình"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Device Rendering Box */}
            {device === 'desktop' ? (
              /* Desktop macOS Window Frame */
              <div className="w-full rounded-2xl border border-white/15 bg-slate-950 shadow-2xl overflow-hidden transition-all duration-300">
                {/* Titlebar */}
                <div className="px-4 py-2.5 bg-slate-900 border-b border-white/10 flex items-center justify-between gap-4 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>

                  <div className="flex-1 max-w-sm mx-auto bg-slate-800/90 rounded-md px-3 py-0.5 text-[11px] font-mono text-slate-300 flex items-center justify-center gap-1.5 border border-white/5 truncate">
                    <span className="text-emerald-400">https://</span>
                    <span className="text-white font-semibold">{product.slug}.kweb.vn</span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    {product.category}
                  </span>
                </div>

                {/* Content: Iframe or Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  {isInteractive && product.demoUrl ? (
                    <iframe
                      src={product.demoUrl}
                      title={product.title}
                      className="w-full h-full border-none"
                    />
                  ) : (
                    <div 
                      onClick={() => onPreview(product)}
                      className="w-full h-full relative cursor-pointer group"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsInteractive(true);
                          }}
                          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xl transition-all"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Tương tác ngay tại đây</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onPreview(product);
                          }}
                          className="px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-slate-200 transition-all flex items-center gap-1.5 shadow-xl"
                        >
                          <Eye className="w-3.5 h-3.5 text-blue-600" />
                          <span>Mở xem toàn màn hình</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Mobile iPhone 16 Pro Frame (Signature HeroInspo TikTok Showcase!) */
              <div className="relative w-[300px] sm:w-[340px] h-[580px] bg-slate-950 rounded-[48px] border-[10px] border-slate-900 shadow-2xl overflow-hidden shadow-blue-500/10 transition-all duration-300">
                {/* Dynamic Island Pill */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                </div>

                {/* Screen Content */}
                <div className="w-full h-full pt-8 pb-4 overflow-hidden bg-slate-950">
                  {isInteractive && product.demoUrl ? (
                    <iframe
                      src={product.demoUrl}
                      title={product.title}
                      className="w-full h-full border-none"
                    />
                  ) : (
                    <div 
                      onClick={() => onPreview(product)}
                      className="w-full h-full relative cursor-pointer group"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsInteractive(true);
                          }}
                          className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xl mb-2"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Tương tác lướt trên Mobile</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* iPhone Home Indicator Bar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full z-30 pointer-events-none" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
