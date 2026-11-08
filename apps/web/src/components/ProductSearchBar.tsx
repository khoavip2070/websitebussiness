import React from 'react';
import { Search, X, ArrowUpDown } from 'lucide-react';

interface ProductSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
  sortBy: 'popular' | 'price-asc' | 'price-desc' | 'newest';
  onSortChange: (sort: 'popular' | 'price-asc' | 'price-desc' | 'newest') => void;
}

export const ProductSearchBar: React.FC<ProductSearchBarProps> = ({
  searchQuery,
  onSearchChange,
  resultCount,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="sticky top-16 z-20 bg-[#070A11]/90 backdrop-blur-2xl border-b border-white/10 py-4 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Main Search Input: Tìm kiếm theo tên hoặc mã website */}
          <div className="relative w-full md:max-w-xl group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300" />
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-4 text-sky-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Tìm kiếm theo tên hoặc mã website (Ví dụ: Nova SaaS, site-001, Cafe...)"
                className="w-full pl-11 pr-10 py-3 bg-white/[0.06] hover:bg-white/[0.08] focus:bg-slate-900/90 text-white placeholder-slate-400 border border-white/15 focus:border-sky-400 rounded-full text-xs sm:text-sm backdrop-blur-xl outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 p-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
                  title="Xóa tìm kiếm"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right side: Results count & Sort */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            <div className="text-xs font-semibold text-slate-300">
              <span className="text-white font-bold">{resultCount}</span> mẫu website
              {searchQuery && (
                <span className="text-sky-300 ml-1.5 font-normal">
                  (Khớp với "{searchQuery}")
                </span>
              )}
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as any)}
                className="bg-slate-900/90 hover:bg-slate-800 text-white px-3 py-2 rounded-full border border-white/10 outline-none font-semibold cursor-pointer text-xs transition"
              >
                <option value="popular">Bán chạy nhất</option>
                <option value="newest">Mới cập nhật</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
              </select>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
