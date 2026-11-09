import React, { useState } from 'react';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  ExternalLink, 
  ShoppingBag,
  RotateCw
} from 'lucide-react';
import { WebsiteProduct } from '@sitevault/shared';

interface LivePreviewModalProps {
  product: WebsiteProduct | null;
  onClose: () => void;
  onBuy: (product: WebsiteProduct) => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  product,
  onClose,
  onBuy
}) => {
  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [iframeKey, setIframeKey] = useState(0);

  if (!product) return null;

  const formatVnd = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const getFrameWidth = () => {
    switch (device) {
      case 'mobile':
        return 'w-[375px] h-[720px] rounded-[36px] border-[10px] border-slate-900 shadow-2xl';
      case 'tablet':
        return 'w-[768px] h-[85vh] rounded-[24px] border-[10px] border-slate-900 shadow-2xl';
      case 'desktop':
      default:
        return 'w-full h-full border-none rounded-none shadow-none';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-md">
      {/* Top Controls Bar */}
      <div className="h-16 px-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4 select-none shrink-0">
        {/* Left: Product Info */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0">
            DEMO
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-white truncate">{product.title}</h3>
            <p className="text-[11px] text-slate-400 truncate">{product.tagline}</p>
          </div>
        </div>

        {/* Center: Device Switcher */}
        <div className="hidden sm:flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'desktop'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'tablet'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet</span>
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              device === 'mobile'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setIframeKey((prev) => prev + 1)}
            title="Tải lại demo"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <a
            href={product.demoUrl}
            target="_blank"
            rel="noreferrer"
            title="Mở toàn màn hình trong tab mới"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Mở tab mới</span>
          </a>

          <button
            type="button"
            onClick={() => onBuy(product)}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/30 cursor-pointer active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Mua bản quyền {formatVnd(product.price)}</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 overflow-auto bg-slate-900/50 p-2 sm:p-6 flex items-center justify-center">
        <div
          className={`transition-all duration-300 overflow-hidden bg-white ${getFrameWidth()}`}
        >
          <iframe
            key={iframeKey}
            src={product.demoUrl}
            title={product.title}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};
