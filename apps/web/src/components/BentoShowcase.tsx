import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  FileCode, 
  QrCode, 
  Sparkles,
  Smartphone,
  Gauge
} from 'lucide-react';
import { TiltedCard3D } from './TiltedCard3D';
import { Reveal3D } from './Reveal3D';

export const BentoShowcase: React.FC = () => {
  return (
    <section className="relative my-20 select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/15 via-sky-500/15 to-purple-600/15 blur-[120px] pointer-events-none" />

      <Reveal3D>
        {/* Device Frame (Chassis inspired by reference video) */}
        <div className="relative rounded-[36px] bg-[#0A0E1A]/90 border border-white/10 p-5 sm:p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>CÔNG NGHỆ VÀ TRẢI NGHIỆM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tất cả những gì bạn cần để{' '}
              <span 
                className="italic font-normal text-sky-200"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                bán hàng ngay
              </span>
            </h2>
          </div>

          {/* Bento Grid: 2 columns on desktop (1 large card on left, 2 stacked on right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Card 1 (Left 6 cols): Blue Gradient "Smart Delivery & Source Code" */}
            <div className="lg:col-span-6 rounded-[28px] bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-6 sm:p-8 flex flex-col justify-between text-white shadow-xl shadow-blue-600/20 relative overflow-hidden">
              {/* Subtle background waves */}
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-100 mb-1">
                  Hệ Thống Tự Động
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Bàn Giao & Mã Nguồn Tức Thì
                </h3>
                <p className="text-xs text-blue-100/90 mt-2 leading-relaxed max-w-md">
                  Không phải chờ đợi duyệt thủ công. Hệ thống tự động xác nhận mã VietQR và kích hoạt link tải file .ZIP kèm License trong 30 giây.
                </p>
              </div>

              {/* Inner White Floating Card (Exact match to reference video) */}
              <div className="mt-6 rounded-2xl bg-white text-slate-900 p-5 shadow-2xl space-y-4">
                {/* App icon pill */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-black text-slate-900 truncate">Smart Delivery Package</div>
                    <div className="text-[11px] text-slate-500">Mã nguồn sạch 100% • Next.js & Tailwind</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    Hoạt động
                  </span>
                </div>

                {/* Tabs & Items */}
                <div className="space-y-2 text-xs">
                  <div className="flex border-b border-slate-100 pb-2 gap-4 font-bold text-slate-400">
                    <span className="text-blue-600 border-b-2 border-blue-600 pb-2 -mb-2">Chi tiết tệp</span>
                    <span>Quyền sở hữu</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 text-slate-700">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> File .ZIP hoàn chỉnh
                    </span>
                    <span className="font-mono font-bold text-slate-900">Đầy đủ code & asset</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 text-slate-700">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Hướng dẫn deploy Vercel
                    </span>
                    <span className="font-mono font-bold text-slate-900">1-Click chạy ngay</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                    <span className="font-bold text-slate-900">Thời gian nhận</span>
                    <span className="font-black text-emerald-600 text-sm">~ 30 Giây</span>
                  </div>
                </div>

                {/* Bottom Action buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="py-2 text-center text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition cursor-default">
                    Xem Demo Thử
                  </div>
                  <div className="py-2 text-center text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition shadow-md flex items-center justify-center gap-1">
                    <Download className="w-3 h-3 text-sky-400" />
                    <span>Tải File .ZIP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (6 cols): 2 Stacked Cards */}
            <div className="lg:col-span-6 flex flex-col gap-5 justify-between">
              
              {/* Card 2 (Top): Low-fee automated transactions */}
              <div className="rounded-[28px] bg-white/[0.04] border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    VietQR Tự Động 24/7
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Xác Thực Giao Dịch Siêu Tốc
                  </h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Hỗ trợ quét mã QR từ hơn 40 ứng dụng ngân hàng và ví điện tử Việt Nam. Tiền về tài khoản ngay lập tức.
                  </p>
                </div>

                {/* Simulated live transactions & action pill */}
                <div className="mt-5 space-y-3">
                  <div className="space-y-2 opacity-80 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">
                          VN
                        </div>
                        <span className="text-slate-300 font-medium">Khách hàng MB Bank</span>
                      </div>
                      <span className="text-emerald-400 font-mono font-bold">+490.000 đ</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-[10px]">
                          TC
                        </div>
                        <span className="text-slate-300 font-medium">Khách hàng Techcombank</span>
                      </div>
                      <span className="text-emerald-400 font-mono font-bold">+690.000 đ</span>
                    </div>
                  </div>

                  {/* Make new transaction pill (Exact from reference) */}
                  <div className="w-full py-2.5 px-4 rounded-full bg-white text-slate-950 flex items-center justify-between font-bold text-xs shadow-lg hover:bg-slate-200 transition cursor-pointer">
                    <span className="flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-blue-600" />
                      <span>Quét mã VietQR chuyển khoản tức thì</span>
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 (Bottom): 100% Quality & SEO with Floating Glass Pills */}
              <div className="rounded-[28px] bg-white/[0.04] border border-white/10 p-6 sm:p-7 grid sm:grid-cols-2 gap-4 items-center hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-sky-400 flex items-center justify-center font-black text-xs">
                      K
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">KWEB STANDARD</span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-2">
                    100<span className="text-sky-400 text-3xl">%</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    Chuẩn Tốc Độ Google Lighthouse & Tối Ưu SEO
                  </div>
                </div>

                {/* Floating Glass Pills Over Graphic */}
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-white font-semibold flex items-center gap-2 shadow-sm">
                    <Smartphone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">Tối ưu 100% Mobile & iPhone</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-white font-semibold flex items-center gap-2 shadow-sm">
                    <Gauge className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">Hiệu năng cao không giật lag</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md text-white font-semibold flex items-center gap-2 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">Bản quyền thương mại trọn đời</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Reveal3D>
    </section>
  );
};
