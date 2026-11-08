import React from 'react';
import { Eye, ShoppingBag } from 'lucide-react';
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
  const formatVnd = (amount: number) =>
    new Intl.NumberFormat('vi-VN').format(amount) + ' đ';

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <TiltedCard3D maxTilt={7} glare={true} className="h-full">
    <div className="group flex h-full flex-col rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-400/50 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div
        className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
        onClick={() => onSelect(product)}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white text-slate-950 text-[11px] font-bold">
            -{discount}%
          </span>
        )}
        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPreview(product);
            }}
            className="px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-bold flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" /> Xem thử
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[11px] uppercase tracking-wider text-sky-300/80 font-semibold mb-1.5">
          {product.category}
        </div>
        <h3
          onClick={() => onSelect(product)}
          className="text-base font-semibold text-white line-clamp-1 cursor-pointer hover:text-sky-300 transition-colors"
        >
          {product.title}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
          {product.tagline}
        </p>

        <div className="mt-auto pt-5 flex items-end justify-between gap-3">
          <div>
            <div className="text-lg font-semibold text-white">{formatVnd(product.price)}</div>
            {product.originalPrice ? (
              <div className="text-[11px] text-slate-500 line-through">
                {formatVnd(product.originalPrice)}
              </div>
            ) : null}
          </div>
          <button
            onClick={() => (onBuy ? onBuy(product) : onSelect(product))}
            className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-colors flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Mua ngay
          </button>
        </div>
      </div>
    </div>
    </TiltedCard3D>
  );
};
