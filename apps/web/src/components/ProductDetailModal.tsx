import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Eye, 
  ShoppingBag, 
  FileCode, 
  Gauge, 
  Layers, 
  ShieldCheck, 
  Star,
  Zap
} from 'lucide-react';
import { WebsiteProduct } from '@sitevault/shared';

interface ProductDetailModalProps {
  product: WebsiteProduct | null;
  onClose: () => void;
  onPreview: (product: WebsiteProduct) => void;
  onBuy: (product: WebsiteProduct) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onPreview,
  onBuy
}) => {
  const [activeTab, setActiveTab] = useState<'features' | 'lighthouse' | 'included'>('features');

  if (!product) return null;

  const formatVnd = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto select-none">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-100">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase font-mono">
              {product.category}
            </span>
            <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold ml-2">
              <Eye className="w-3.5 h-3.5" />
              <span>{product.viewsCount ?? 0} lượt xem</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Top Banner */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-white/10 shadow-sm relative group">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button
                onClick={() => onPreview(product)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center gap-2 text-white font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="w-4 h-4 text-sky-400" />
                <span>Xem Live Demo Tương Tác</span>
              </button>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-2">
                {product.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs mb-4">
                <div>
                  <span className="text-slate-400">Công nghệ:</span>
                  <div className="font-semibold text-slate-200 mt-0.5">{product.techStack.join(', ')}</div>
                </div>
                <div>
                  <span className="text-slate-400">Dung lượng:</span>
                  <div className="font-semibold text-slate-200 mt-0.5">{product.fileSize} (File zip)</div>
                </div>
                <div>
                  <span className="text-slate-400">Số trang:</span>
                  <div className="font-semibold text-slate-200 mt-0.5">{product.pagesCount} pages</div>
                </div>
                <div>
                  <span className="text-slate-400">Đã bán:</span>
                  <div className="font-semibold text-emerald-400 mt-0.5">{product.salesCount ?? 0} lượt mua</div>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20">
                <div>
                  <div className="text-[11px] text-blue-400 font-semibold uppercase tracking-wider">Giá trọn gói bản quyền</div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-extrabold text-white">{formatVnd(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-400 line-through">{formatVnd(product.originalPrice)}</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onPreview(product)}
                    className="px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>Demo</span>
                  </button>
                  <button
                    onClick={() => onBuy(product)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>Mua Ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Details Tabs */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex gap-4 border-b border-white/10 pb-2 mb-4 text-xs font-bold">
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-2 transition-colors border-b-2 -mb-2.5 ${
                  activeTab === 'features' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Tính Năng Nổi Bật ({product.features.length})
              </button>
              <button
                onClick={() => setActiveTab('lighthouse')}
                className={`pb-2 transition-colors border-b-2 -mb-2.5 ${
                  activeTab === 'lighthouse' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Điểm Tốc Độ & SEO Google
              </button>
              <button
                onClick={() => setActiveTab('included')}
                className={`pb-2 transition-colors border-b-2 -mb-2.5 ${
                  activeTab === 'included' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Những Gì Bạn Nhận Được ({product.includedAssets.length})
              </button>
            </div>

            {/* Tab 1: Features */}
            {activeTab === 'features' && (
              <div className="grid sm:grid-cols-2 gap-3">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Lighthouse */}
            {activeTab === 'lighthouse' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-3xl font-black text-emerald-400">{product.lighthouse.performance}</div>
                  <div className="text-xs font-bold text-white mt-1">Hiệu Suất (Speed)</div>
                  <div className="text-[10px] text-emerald-300 mt-0.5">Tải dưới 0.6 giây</div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-3xl font-black text-emerald-400">{product.lighthouse.accessibility}</div>
                  <div className="text-xs font-bold text-white mt-1">Khả Năng Tiếp Cận</div>
                  <div className="text-[10px] text-emerald-300 mt-0.5">Chuẩn mọi thiết bị</div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-3xl font-black text-emerald-400">{product.lighthouse.bestPractices}</div>
                  <div className="text-xs font-bold text-white mt-1">Chuẩn Lập Trình</div>
                  <div className="text-[10px] text-emerald-300 mt-0.5">Code sạch, bảo mật</div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-3xl font-black text-emerald-400">{product.lighthouse.seo}</div>
                  <div className="text-xs font-bold text-white mt-1">Tối Ưu SEO</div>
                  <div className="text-[10px] text-emerald-300 mt-0.5">Dễ lên top Google</div>
                </div>
              </div>
            )}

            {/* Tab 3: Included Assets */}
            {activeTab === 'included' && (
              <div className="space-y-2.5">
                {product.includedAssets.map((asset, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                    <FileCode className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-200 font-semibold">{asset}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950/60 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Bảo hành kỹ thuật trọn đời • Hỗ trợ deploy 24/7</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-300 hover:bg-white/10 font-semibold transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
