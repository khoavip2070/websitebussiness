import React from 'react';
import { Search, ShoppingBag, Home, KeyRound, Sparkles } from 'lucide-react';

export type PageId = 'home' | 'store' | 'license';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  productCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  searchQuery,
  onSearchChange,
  productCount = 0
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#070A11]/90 backdrop-blur-2xl border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-white">
              K<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Web</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20 font-mono">
              HERO VAULT
            </span>
          </div>
        </div>

        {/* Center: Multi-page Navigation Menu (Responsive) */}
        <nav className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              currentPage === 'home'
                ? 'bg-white text-slate-950 shadow-md shadow-white/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">Trang Chủ</span>
          </button>

          <button
            onClick={() => onNavigate('store')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              currentPage === 'store'
                ? 'bg-white text-slate-950 shadow-md shadow-white/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">Kho Website</span>
            {productCount > 0 && (
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                currentPage === 'store' ? 'bg-slate-950 text-white' : 'bg-white/10 text-slate-300'
              }`}>
                {productCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('license')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
              currentPage === 'license'
                ? 'bg-white text-slate-950 shadow-md shadow-white/20'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">Tra Cứu</span>
          </button>
        </nav>

        {/* Right: Quick Search input on desktop */}
        <div className="hidden lg:block w-64 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onFocus={() => {
              if (currentPage !== 'store') onNavigate('store');
            }}
            onChange={(e) => {
              onSearchChange(e.target.value);
              if (currentPage !== 'store') onNavigate('store');
            }}
            placeholder="Tìm theo tên hoặc mã..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-white/5 hover:bg-white/10 focus:bg-slate-900 text-white placeholder-slate-400 border border-white/10 focus:border-sky-400 rounded-full transition-all outline-none"
          />
        </div>

      </div>
    </header>
  );
};
