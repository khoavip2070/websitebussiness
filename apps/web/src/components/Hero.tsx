import React from 'react';
import { Zap, CheckCircle2, Shield, Eye, Download, Code2, Search, Sparkles, Smartphone, Layers } from 'lucide-react';
import { Particles3D } from './Particles3D';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory?: (id: any) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onSelectCategory
}) => {
  const quickTags = [
    { label: 'Bento Grid', category: 'landing-page' },
    { label: 'Dark Mode', category: 'saas' },
    { label: 'Minimalist', category: 'portfolio' },
    { label: 'Micro-SaaS & AI', category: 'saas' },
    { label: 'Web Bán Hàng', category: 'ecommerce' },
    { label: 'Spa & Thẩm Mỹ', category: 'services' },
    { label: 'Cafe & F&B', category: 'restaurant' }
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/10 select-none">
      {/* 1. 3D Particle Space Galaxy Canvas */}
      <Particles3D className="z-0 opacity-80" />

      {/* 2. 3D Perspective Cyber-Grid Floor */}
      <div 
        style={{
          transform: 'perspective(600px) rotateX(65deg) translateY(-80px)',
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
        }}
        className="absolute inset-x-0 bottom-0 h-[450px] pointer-events-none -z-10"
      />

      {/* 3. Ambient background glow pulses */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* HeroInspo Glowing Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/15 to-purple-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-6 shadow-lg shadow-blue-500/10 backdrop-blur-md hover:scale-105 transition-transform cursor-default">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>HEROINSPO SHOWCASE • KHO WEBSITE MINI & HERO SECTIONS CHUẨN CAO CẤP</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Kho Website Mini & Hero Sections <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-sky-300">
            Tối Ưu Tỷ Lệ Chuyển Đổi & Bán Hàng
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          Dành riêng cho Freelancer, Chủ shop, Startup & Doanh nghiệp vừa và nhỏ. Tuyển chọn các mẫu website phong cách quốc tế, xem thử trực tiếp đa thiết bị (Desktop & iPhone), thanh toán VietQR nhận ngay mã bản quyền và file ZIP hoàn chỉnh sau 30 giây.
        </p>

        {/* 3D Search Bar directly inside Hero */}
        <div className="max-w-2xl mx-auto mb-6 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-sky-400 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm theo phong cách: Bento Grid, Dark Mode, SaaS, Spa, Cafe, Shop, Portfolio..."
              className="w-full pl-12 pr-28 py-3.5 bg-slate-900/90 text-white placeholder-slate-500 border border-white/15 focus:border-blue-500 rounded-2xl shadow-2xl backdrop-blur-xl outline-none text-sm transition-all"
            />
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-white/10 text-[11px] font-mono text-slate-400 border border-white/10">
              <kbd>Ctrl</kbd> + <kbd>K</kbd>
            </div>
          </div>
        </div>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs">
          <span className="text-slate-500 font-medium">Phong cách & Ngành:</span>
          {quickTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => onSelectCategory && onSelectCategory(tag.category)}
              className="px-3 py-1 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-1 font-medium"
            >
              <span>#{tag.label}</span>
            </button>
          ))}
        </div>

        {/* Value props pill row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-sky-400" />
            <span>Mô phỏng Mobile iPhone & Desktop</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>100% Điểm Tốc Độ Google Lighthouse</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Bản quyền thương mại trọn đời</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Tải ngay file .ZIP sau quét VietQR</span>
          </div>
        </div>
      </div>
    </section>
  );
};
