import React from 'react';
import { Eye, Zap, ShieldCheck, Sparkles, ShoppingBag, HardDrive } from 'lucide-react';
import { WebsiteProduct } from '@sitevault/shared';
import { TiltedCard3D } from './TiltedCard3D';

interface SpotlightHeroProps {
  product: WebsiteProduct;
  onPreview: (product: WebsiteProduct) => void;
  onSelect: (product: WebsiteProduct) => void;
  onBuy: (product: WebsiteProduct) => void;
}

export const SpotlightHero: React.FC<SpotlightHeroProps> = ({
  product,
  onPreview,
  onSelect,
  onBuy
}) => {
  const formatVnd = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <section className="relative my-8 sm:my-12">
      {/* 3D Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl -z-10" />

      <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Info & Actions */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Mẫu Nổi Bật
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
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-semibold">
                <Eye className="w-4 h-4 text-sky-400" />
                <span><strong className="text-white">{product.viewsCount ?? 0}</strong> lượt xem</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShoppingBag className="w-4 h-4" />
                <span><strong>{product.salesCount ?? 0}</strong> đã bán</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 font-mono">
                <HardDrive className="w-4 h-4 text-indigo-400" />
                <span>{product.fileSize}</span>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <div className="text-2xl font-black text-white">
                  {formatVnd(product.price)}
                </div>
                {product.originalPrice && (
                  <div className="text-xs text-slate-400 line-through">
                    {formatVnd(product.originalPrice)}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onPreview(product)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <Eye className="w-4 h-4 text-sky-400" />
                  <span>Xem Live Demo</span>
                </button>

                <button
                  onClick={() => onBuy(product)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Mua Bản Quyền</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Hero Browser Mockup Frame */}
          <div className="lg:col-span-7">
            <TiltedCard3D maxTilt={10} glare={true}>
              <div className="rounded-2xl border border-white/15 bg-slate-950/90 shadow-2xl overflow-hidden group">
                {/* macOS Window Titlebar (3D Layer 20px) */}
                <div 
                  style={{ transform: 'translateZ(20px)' }}
                  className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm shadow-rose-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm shadow-emerald-500/50"></span>
                  </div>

                  <div className="flex-1 max-w-xs mx-auto bg-slate-800/80 rounded-lg px-3 py-1 text-[11px] font-mono text-slate-300 flex items-center justify-center gap-1.5 border border-white/5 truncate">
                    <span className="text-emerald-400">●</span>
                    <span>{product.downloadFileName} ({product.fileSize})</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <button
                      onClick={() => onPreview(product)}
                      title="Mở toàn màn hình"
                      className="p-1 hover:text-white transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-sky-400" />
                    </button>
                  </div>
                </div>

                {/* Preview Image with interactive hover (3D Layer 14px) */}
                <div
                  style={{ transform: 'translateZ(14px)' }}
                  onClick={() => onPreview(product)}
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating Action Overlay on Hover (3D Layer 35px) */}
                  <div 
                    style={{ transform: 'translateZ(35px)' }}
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPreview(product);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-slate-200 transition-all flex items-center gap-2 shadow-2xl"
                    >
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span>Mở Live Preview tương tác</span>
                    </button>
                  </div>
                </div>
              </div>
            </TiltedCard3D>
          </div>
        </div>
      </div>
    </section>
  );
};
