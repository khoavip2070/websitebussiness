import React from 'react';
import { Search, Sparkles, KeyRound, ExternalLink } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenLicenseModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  onOpenLicenseModal
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#070A11]/85 backdrop-blur-2xl border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/25">
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

        {/* Center: Search Input on Navbar (visible on wider screens) */}
        <div className="flex-1 max-w-md hidden md:block relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm theo phong cách: Bento Grid, SaaS, Spa, Shop..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-white/5 hover:bg-white/10 focus:bg-slate-900 text-white placeholder-slate-500 border border-white/10 focus:border-blue-500 rounded-xl transition-all outline-none"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenLicenseModal && (
            <button
              onClick={onOpenLicenseModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all"
            >
              <KeyRound className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Tra Cứu License</span>
            </button>
          )}

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono">KWeb Live</span>
          </div>
        </div>
      </div>
    </header>
  );
};
