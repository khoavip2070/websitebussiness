import React from 'react';
import { QrCode, ShieldCheck, Zap, FolderArchive, ArrowRight, HeartHandshake } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="my-16 sm:my-20 border-t border-white/10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold font-mono tracking-wider text-sky-400 uppercase bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 inline-block mb-3">
            LỢI THẾ CẠNH TRANH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tại Sao Chọn Mẫu Website KWeb?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Giải pháp thông minh thay thế hoàn toàn việc chi 10 – 30 triệu đồng thuê agency thiết kế với thời gian chờ hàng tháng trời.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Bàn Giao Tức Thì Sau 30s</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quét mã VietQR tự động qua ứng dụng ngân hàng. Hệ thống xác nhận và mở khóa tải file ZIP cùng License Key ngay lập tức.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 rounded-2xl p-6 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Mã Nguồn Sạch 100%</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Được lập trình theo chuẩn React, Next.js và Tailwind CSS hiện đại. Hoàn toàn không dính mã độc hay plugin rác làm chậm website.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 rounded-2xl p-6 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
              <FolderArchive className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Trọn Bộ File Đóng Gói</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mỗi sản phẩm bao gồm file ZIP mã nguồn, file cấu hình deploy 1-click lên Vercel/Netlify miễn phí và tài liệu hướng dẫn đổi nội dung.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Bảo Hành & Tải Lại Trọn Đời</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bạn có thể tra cứu mã License bất cứ khi nào để tải lại file ZIP mới nhất mà không mất thêm bất kỳ khoản phí phát sinh nào.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
