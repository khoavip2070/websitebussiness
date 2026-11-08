import React from 'react';
import { Eye, Zap, Gauge, ArrowRight, HardDrive, ShoppingBag } from 'lucide-react';
import { WebsiteProduct } from '@sitevault/shared';
import { TiltedCard3D } from './TiltedCard3D';

interface ProductCardProps {
  product: WebsiteProduct;
  onPreview: (product: WebsiteProduct) => void;
  onSelect: (product: WebsiteProduct) => void;
  onBuy?: (product: WebsiteProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
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
    <TiltedCard3D maxTilt={9} glare={true} className="h-full">
      <div className="group bg-slate-900/80 hover:bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-sky-500/50 hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col overflow-hidden h-full">
        {/* 1. macOS Browser Window Frame (Floating on 3D Plane) */}
        <div 
          style={{ transform: 'translateZ(20px)' }}
          className="px-3.5 py-2.5 bg-slate-950/90 border-b border-white/5 flex items-center justify-between gap-2 select-none"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 inline-block shadow-sm shadow-rose-500/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 inline-block shadow-sm shadow-amber-500/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 inline-block shadow-sm shadow-emerald-500/50"></span>
          </div>

          <div className="flex-1 max-w-[190px] mx-auto bg-slate-800/80 rounded-md px-2 py-0.5 text-[10px] font-mono text-slate-300 flex items-center justify-center gap-1 truncate border border-white/5">
            <span className="text-emerald-400 text-[9px]">●</span>
            <span className="truncate">{product.downloadFileName}</span>
          </div>

          <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider font-mono">
            {product.category}
          </span>
        </div>

        {/* 2. Interactive Thumbnail Container (3D Layer 15px) */}
        <div
          style={{ transform: 'translateZ(14px)' }}
          className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
          onClick={() => onSelect(product)}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />

          {/* Badges on Top */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
            {discountPercent > 0 && (
              <span className="px-2 py-0.5 rounded-md bg-rose-600/90 backdrop-blur-md text-[10px] font-bold text-white shadow-sm shadow-rose-600/40">
                -{discountPercent}%
              </span>
            )}
          </div>

          {/* Physical File Size badge */}
          <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/90 border border-white/10 backdrop-blur-md text-emerald-400 text-[10px] font-mono font-bold shadow-sm z-10">
            <HardDrive className="w-3 h-3 text-emerald-400" />
            <span>{product.fileSize}</span>
          </div>

          {/* Floating Quick Action Overlay on Hover (High 3D Plane 35px) */}
          <div 
            style={{ transform: 'translateZ(35px)' }}
            className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5 backdrop-blur-[3px] z-20"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPreview(product);
              }}
              className="px-3.5 py-2 rounded-xl bg-white text-slate-950 text-xs font-bold hover:bg-slate-200 transition-colors flex items-center gap-1.5 shadow-xl shadow-black/40"
            >
              <Eye className="w-3.5 h-3.5 text-blue-600" />
              <span>Xem Live Demo</span>
            </button>

            {onBuy && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBuy(product);
                }}
                className="px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-xl shadow-blue-500/40"
              >
                <Zap className="w-3.5 h-3.5 fill-white" />
                <span>Mua Ngay</span>
              </button>
            )}
          </div>
        </div>

        {/* 3. Content Details (3D Layer 18px) */}
        <div 
          style={{ transform: 'translateZ(18px)' }}
          className="p-4 sm:p-5 flex-1 flex flex-col justify-between"
        >
          <div>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
              {product.techStack.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
              {product.techStack.length > 3 && (
                <span className="text-[10px] text-slate-500 font-mono">
                  +{product.techStack.length - 3}
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              onClick={() => onSelect(product)}
              className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors line-clamp-1 cursor-pointer mb-1.5"
            >
              {product.title}
            </h3>

            {/* Tagline */}
            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
              {product.tagline}
            </p>
          </div>

          <div>
            {/* 100% REAL Views & Sales Count */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3.5 pb-3 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-slate-300 font-medium text-[11px]">
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span><strong className="text-white">{product.viewsCount ?? 0}</strong> lượt xem</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span><strong className="text-emerald-400">{product.salesCount ?? 0}</strong> đã bán</span>
              </div>
            </div>

            {/* Price & Action Row (3D Layer 26px) */}
            <div 
              style={{ transform: 'translateZ(26px)' }}
              className="flex items-center justify-between gap-3"
            >
              <div>
                <div className="text-base sm:text-lg font-black text-white">
                  {formatVnd(product.price)}
                </div>
                {product.originalPrice && (
                  <div className="text-[11px] text-slate-500 line-through">
                    {formatVnd(product.originalPrice)}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onPreview(product)}
                  title="Xem thử giao diện"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelect(product)}
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center gap-1"
                >
                  <span>Chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TiltedCard3D>
  );
};
