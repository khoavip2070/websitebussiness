import React from 'react';
import { 
  Layers, 
  Flame, 
  ShoppingBag, 
  Building2, 
  Sparkles, 
  Coffee, 
  Briefcase, 
  Cpu 
} from 'lucide-react';
import { CategoryId } from '@sitevault/shared';

interface CategoryNavProps {
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  categoryCounts?: Record<string, number>;
}

const CATEGORIES = [
  { id: 'all' as CategoryId, label: 'Tất cả mẫu', icon: Layers },
  { id: 'saas' as CategoryId, label: 'Micro-SaaS & AI', icon: Cpu },
  { id: 'ecommerce' as CategoryId, label: 'Web Bán Hàng', icon: ShoppingBag },
  { id: 'services' as CategoryId, label: 'Spa & Dịch Vụ', icon: Sparkles },
  { id: 'restaurant' as CategoryId, label: 'Cafe & Nhà Hàng', icon: Coffee },
  { id: 'landing-page' as CategoryId, label: 'Landing Page', icon: Flame },
  { id: 'portfolio' as CategoryId, label: 'Portfolio & Agency', icon: Briefcase }
];

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts = {}
}) => {
  return (
    <div className="border-b border-white/10 bg-[#070A11]/85 backdrop-blur-xl sticky top-16 z-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-3.5 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            const count = categoryCounts[cat.id];

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500/50 shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
                {count !== undefined && count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
