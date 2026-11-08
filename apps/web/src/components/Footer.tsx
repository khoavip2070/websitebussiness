import React from 'react';
import { KeyRound } from 'lucide-react';

interface FooterProps {
  onOpenLicenseModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLicenseModal }) => {
  return (
    <footer className="bg-[#05070D] border-t border-white/10 pt-16 pb-12 mt-20 text-slate-400 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 pb-10 border-b border-white/5">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20">
                K
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                K<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Web</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20 font-mono">
                HERO VAULT
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              KWeb — Nền tảng phân phối website mẫu làm sẵn chuẩn thiết kế quốc tế. Giúp chủ doanh nghiệp, freelancer và nhà khởi nghiệp tiết kiệm 95% thời gian và ngân sách xây dựng website.
            </p>
            {onOpenLicenseModal && (
              <button
                onClick={onOpenLicenseModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs font-semibold"
              >
                <KeyRound className="w-3.5 h-3.5 text-blue-400" />
                <span>Tra cứu License & Tải lại mã nguồn</span>
              </button>
            )}
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px] font-mono text-slate-300">
              Danh Mục Phổ Biến
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Micro-SaaS & AI Tool</li>
              <li className="hover:text-white transition-colors cursor-pointer">Website Bán Hàng E-Commerce</li>
              <li className="hover:text-white transition-colors cursor-pointer">Spa & Thẩm Mỹ Viện Cao Cấp</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cafe & Nhà Hàng F&B</li>
              <li className="hover:text-white transition-colors cursor-pointer">Portfolio Cá Nhân & Agency</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px] font-mono text-slate-300">
              Chính Sách & Cam Kết
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer">Bản quyền thương mại trọn đời</li>
              <li className="hover:text-white transition-colors cursor-pointer">Bàn giao tự động qua VietQR 24/7</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mã nguồn sạch không plugin rác</li>
              <li className="hover:text-white transition-colors cursor-pointer">Tặng kèm hướng dẫn deploy Vercel</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © 2026 KWeb. Bảo lưu mọi quyền. Lấy cảm hứng từ chuẩn thiết kế HeroInspo quốc tế.
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
            <span>Được quản lý & phân phối bởi KWeb Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
