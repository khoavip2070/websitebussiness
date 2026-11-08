import React from 'react';
import { KeyRound, ArrowUpRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  onSelectCategory?: (category: any) => void;
  onOpenLicenseModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onSelectCategory,
  onOpenLicenseModal 
}) => {
  const handleGoStore = () => {
    if (onNavigate) {
      onNavigate('store');
    } else {
      const el = document.getElementById('catalog-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoLicense = () => {
    if (onNavigate) {
      onNavigate('license');
    } else if (onOpenLicenseModal) {
      onOpenLicenseModal();
    }
  };

  const handleCategoryClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    if (onNavigate) {
      onNavigate('store');
    }
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#05070D] text-slate-400 text-xs select-none overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[250px] bg-gradient-to-t from-blue-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Top CTA Banner */}
        <div className="relative rounded-[28px] bg-gradient-to-r from-blue-900/30 via-slate-900/60 to-purple-900/30 border border-white/15 p-8 sm:p-12 mb-16 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="max-w-xl text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sky-300 text-[11px] font-semibold mb-3">
              <Sparkles className="w-3 h-3 text-sky-400" />
              <span>SẴN SÀNG ĐỂ BẮT ĐẦU?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Sở hữu website chất lượng cao cho doanh nghiệp của bạn
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
              Bàn giao mã nguồn sạch, cài đặt dễ dàng và nhận bản quyền trọn đời chỉ sau 30 giây thanh toán VietQR.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 shrink-0">
            <button
              onClick={handleGoStore}
              className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition shadow-xl flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Xem Kho Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleGoLicense}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs transition backdrop-blur-md flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5 text-sky-400" />
              <span>Tra cứu License</span>
            </button>
          </div>
        </div>

        {/* Middle: Brand and Quick Tags */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-3 text-center md:text-left">
            <div 
              onClick={() => onNavigate && onNavigate('home')}
              className="flex items-center justify-center md:justify-start gap-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                K
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                K<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Web</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20 font-mono">
                HERO VAULT
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              Nền tảng phân phối website mẫu làm sẵn chuẩn thiết kế quốc tế. Mã nguồn tối ưu, thanh toán tự động VietQR, bản quyền thương mại trọn đời.
            </p>
          </div>

          {/* Quick Category Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 max-w-lg">
            {[
              { label: 'Micro-SaaS & AI', cat: 'micro-saas' },
              { label: 'E-Commerce Shop', cat: 'ecommerce' },
              { label: 'Spa & Thẩm Mỹ', cat: 'spa-clinic' },
              { label: 'Cafe & F&B', cat: 'coffee-fnb' },
              { label: 'Landing Page Chuyển Đổi', cat: 'landing-page' },
              { label: 'Portfolio Sáng Tạo', cat: 'portfolio' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleCategoryClick(item.cat)}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 hover:border-white/20 border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Live Cloud Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 KWeb. Tất cả các quyền được bảo lưu. Thiết kế theo tiêu chuẩn Cirform & HeroInspo.
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono">VietQR & Supabase Cloud: Sẵn Sàng 24/7</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
