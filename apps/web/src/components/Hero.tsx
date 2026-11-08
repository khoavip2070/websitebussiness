import React, { useState } from 'react';
import { ArrowRight, Zap, ShieldCheck, Download, Search } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory?: (id: any) => void;
  productCount?: number;
  totalSales?: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
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
  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: headline */}
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
            Website làm sẵn
            <br />
            <span
              className="italic font-normal text-sky-200"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              sẵn sàng để bán
            </span>
          </h1>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
            Chọn mẫu, xem thử trực tiếp, thanh toán VietQR và nhận file .ZIP cùng bản quyền ngay.
          </p>

          <div className="mt-8 relative max-w-md">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm mẫu website..."
              className="w-full pl-11 pr-4 py-3 bg-white/5 text-white placeholder-slate-500 border border-white/15 focus:border-sky-400 rounded-full outline-none text-sm backdrop-blur-xl transition-colors"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={scrollToCatalog}
              className="px-6 py-3 rounded-full bg-white text-slate-950 text-sm font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              Xem tất cả mẫu <ArrowRight className="w-4 h-4" />
            </button>
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
