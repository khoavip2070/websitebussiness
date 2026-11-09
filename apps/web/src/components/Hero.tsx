import React, { useState } from 'react';
import { ArrowRight, Zap, ShieldCheck, Download, Search } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory?: (id: any) => void;
  onExploreStore?: () => void;
  onOpenLicense?: () => void;
  productCount?: number;
  totalSales?: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onExploreStore,
  onOpenLicense,
  productCount = 0,
  totalSales = 0
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
    });
  };
  const handleExplore = () => {
    if (onExploreStore) {
      onExploreStore();
    } else {
      const el = document.getElementById('catalog-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })} className="relative overflow-hidden border-b border-white/10 select-none">
      {/* Light streaks background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(37,99,235,0.25),transparent_60%)]" />
        <div className="absolute left-0 right-0 top-[48%] h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-fuchsia-400 blur-[1px] opacity-90" />
        <div className="absolute left-0 right-0 top-[48%] h-24 -translate-y-1/2 bg-gradient-to-r from-fuchsia-500/0 via-blue-500/25 to-sky-400/0 blur-3xl" />
        <div className="absolute -left-20 top-[40%] w-[60%] h-[2px] rotate-[-8deg] bg-gradient-to-r from-transparent via-fuchsia-400/80 to-transparent blur-[2px]" />
        <div className="absolute -right-10 top-[58%] w-[55%] h-[2px] rotate-[10deg] bg-gradient-to-r from-transparent via-sky-300/80 to-transparent blur-[2px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: headline */}
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
            Khởi tạo website
            <br />
            <span
              className="italic font-normal text-sky-200"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              chuẩn mực tương lai
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-slate-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            Tuyển chọn các mẫu website làm sẵn chuẩn quốc tế. Xem thử trực tiếp, thanh toán VietQR nhận trọn bộ file .ZIP và bản quyền tức thì.
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleExplore();
            }}
            className="mt-6 sm:mt-8 relative max-w-md"
          >
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm theo tên website hoặc mã SP..."
              className="w-full pl-11 pr-4 py-3 bg-white/5 text-white placeholder-slate-500 border border-white/15 focus:border-sky-400 rounded-full outline-none text-xs sm:text-sm backdrop-blur-xl transition-colors"
            />
          </form>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleExplore}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-slate-950 text-xs sm:text-sm font-bold hover:bg-slate-200 transition shadow-lg shadow-white/10 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Khám Phá Kho Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {onOpenLicense && (
              <button
                onClick={onOpenLicense}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold transition active:scale-95 flex items-center justify-center cursor-pointer"
              >
                Tra Cứu Bản Quyền
              </button>
            )}
          </div>

          {/* Mobile Highlights Bar (visible on mobile/tablet) */}
          <div className="lg:hidden mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Tốc độ Lighthouse 95+</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Bản quyền trọn đời</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Download className="w-3.5 h-3.5 text-sky-300" />
              <span>Tải .ZIP tức thì</span>
            </span>
          </div>
        </div>

        {/* Right: glass stat cards */}
        <div className="hidden lg:flex justify-end" style={{ perspective: "1100px" }}>
          <div
            className="w-80 space-y-4 kweb-float"
            style={{
              transform: `rotateY(${-8 + tilt.x * 10}deg) rotateX(${4 - tilt.y * 8}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
            }}
          >
            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 shadow-2xl shadow-blue-900/30">
              <div className="text-xs text-slate-400">Mẫu website đang bán</div>
              <div className="text-5xl font-semibold text-white mt-1">{productCount}</div>
              <div className="mt-3 inline-block px-3 py-1 rounded-full bg-sky-400/15 text-sky-200 text-[11px] font-semibold">
                {totalSales} lượt mua
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-2.5"><Zap className="w-4 h-4 text-amber-300" /> Tốc độ Lighthouse 95+</div>
              <div className="flex items-center gap-2.5"><ShieldCheck className="w-4 h-4 text-emerald-300" /> Bản quyền thương mại trọn đời</div>
              <div className="flex items-center gap-2.5"><Download className="w-4 h-4 text-sky-300" /> Tải .ZIP ngay sau thanh toán</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
