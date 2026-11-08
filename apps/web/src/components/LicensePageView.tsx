import React, { useState } from 'react';
import { 
  KeyRound, 
  Search, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Copy, 
  Check, 
  Terminal, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  FileCode2,
  Sparkles
} from 'lucide-react';
import { PageId } from './Navbar';

interface LicensePageViewProps {
  onNavigate: (page: PageId) => void;
}

export const LicensePageView: React.FC<LicensePageViewProps> = ({ onNavigate }) => {
  const [licenseKey, setLicenseKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = licenseKey.trim().toUpperCase();
    if (!cleanKey) return;

    setIsSearching(true);
    setError(null);
    setResult(null);

    try {
      // 1. Try local backend
      const res = await fetch(`/api/licenses/verify/${encodeURIComponent(cleanKey)}`);
      if (res.ok) {
        const contentType = res.headers.get('content-type') || '';
        if (contentType.includes('application/json')) {
          const data = await res.json();
          if (data.success && data.data) {
            setResult(data.data);
            setIsSearching(false);
            return;
          } else {
            setError(data.message || 'Mã License không tồn tại hoặc đã hết hạn.');
            setIsSearching(false);
            return;
          }
        }
      }
    } catch (_) {}

    // 2. Try Supabase Cloud direct verification fallback
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://vbbweuyosfwhgrcyszvg.supabase.co';
      const supabaseKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'sb_publishable_eUP6EEeNc-rJUnevaU_zPA__XMg12uP';
      const sb = createClient(supabaseUrl, supabaseKey);
      
      const { data, error: sbError } = await sb
        .from('licenses')
        .select('*, products(*)')
        .eq('key', cleanKey)
        .maybeSingle();

      if (!sbError && data) {
        setResult({
          license: {
            key: data.key,
            status: data.status || 'active',
            customerEmail: data.customer_email || 'Khách hàng KWeb',
            customerPhone: data.customer_phone || '',
            downloadsCount: data.downloads_count || 0,
            maxDownloads: data.max_downloads || 10,
            createdAt: data.created_at
          },
          productTitle: data.products?.title || 'Mẫu Website KWeb',
          downloadFileName: data.products?.download_file_name || 'source-code.zip',
          remainingDownloads: Math.max(0, (data.max_downloads || 10) - (data.downloads_count || 0))
        });
        setIsSearching(false);
        return;
      }
    } catch (_) {}

    setError('Mã License không tồn tại trên hệ thống hoặc đã hết hạn sử dụng. Vui lòng kiểm tra lại mã trên hóa đơn/email thanh toán.');
    setIsSearching(false);
  };

  const copyKey = () => {
    if (!result?.license?.key) return;
    navigator.clipboard.writeText(result.license.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>HỆ THỐNG XÁC THỰC BẢN QUYỀN TRỌN ĐỜI</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Tra Cứu License & Tải Lại Code
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Nhập mã License bạn đã nhận sau khi thanh toán để kiểm tra trạng thái kích hoạt, tải lại file .ZIP mã nguồn mới nhất và xem tài liệu hướng dẫn bàn giao.
        </p>
      </div>

      {/* Lookup Card */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleLookup} className="space-y-4 relative z-10">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
            Mã Bản Quyền (License Key)
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <KeyRound className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={licenseKey}
                onChange={(e) => setLicenseKey(e.target.value)}
                placeholder="Ví dụ: FORGE-89X2-LK99-VN26"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white font-mono text-sm sm:text-base uppercase tracking-wider placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching || !licenseKey.trim()}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              {isSearching ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang tra cứu...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Tra cứu ngay</span>
                </>
              )}
            </button>
          </div>
          <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-sky-400" />
            Mã License được cấp tự động ngay trên màn hình thanh toán VietQR và gửi qua email của bạn.
          </p>
        </form>

        {/* Error State */}
        {error && (
          <div className="mt-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-rose-200">Không tìm thấy mã bản quyền</div>
              <p className="text-rose-300/80 leading-relaxed">{error}</p>
            </div>
          </div>
        )}

        {/* Success Result */}
        {result && (
          <div className="mt-8 pt-8 border-t border-white/10 space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Trạng thái: Hoạt động</div>
                  <h3 className="text-lg font-bold text-white mt-0.5">{result.productTitle}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Còn lại:</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs font-mono">
                  {result.remainingDownloads} / {result.license.maxDownloads} lần tải
                </span>
              </div>
            </div>

            {/* License Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <div className="text-slate-400">Mã kích hoạt bản quyền</div>
                <div className="flex items-center justify-between font-mono font-bold text-white text-sm bg-black/40 px-3 py-2 rounded-lg border border-white/5">
                  <span>{result.license.key}</span>
                  <button
                    onClick={copyKey}
                    className="text-slate-400 hover:text-white p-1 transition-colors"
                    title="Sao chép"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <div className="text-slate-400">Chủ sở hữu bản quyền</div>
                <div className="font-semibold text-white text-sm py-2">
                  {result.license.customerEmail || 'Khách hàng KWeb'}
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/30 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                  <FileCode2 className="w-4 h-4 text-sky-400" />
                  <span>Gói mã nguồn đầy đủ (.ZIP)</span>
                </div>
                <p className="text-xs text-slate-400">
                  Bao gồm toàn bộ React, Next.js / Vite, Tailwind CSS, assets hình ảnh gốc và file cấu hình deploy.
                </p>
              </div>

              <a
                href={`/api/download/${result.license.key}`}
                download
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs shadow-lg shadow-sky-400/20 transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Tải File .ZIP Về Máy</span>
              </a>
            </div>

            {/* Step by Step Deployment Guide */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Hướng dẫn khởi chạy & Deploy nhanh trong 2 phút</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="font-bold text-sky-400">Bước 1: Giải nén & Cài đặt</div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Giải nén file .ZIP, mở terminal tại thư mục dự án và chạy lệnh:
                  </p>
                  <code className="block bg-black/50 p-2 rounded text-[11px] font-mono text-emerald-400 border border-white/5">
                    npm install
                  </code>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="font-bold text-sky-400">Bước 2: Chạy thử máy tính</div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Khởi động server phát triển để xem trước và chỉnh sửa nội dung:
                  </p>
                  <code className="block bg-black/50 p-2 rounded text-[11px] font-mono text-emerald-400 border border-white/5">
                    npm run dev
                  </code>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="font-bold text-sky-400">Bước 3: Deploy Vercel / Netlify</div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Kéo thả thư mục lên Vercel hoặc Netlify để có website online miễn phí vĩnh viễn.
                  </p>
                  <code className="block bg-black/50 p-2 rounded text-[11px] font-mono text-emerald-400 border border-white/5">
                    vercel deploy
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation helper */}
      <div className="mt-12 text-center">
        <p className="text-xs text-slate-400">
          Chưa mua website hoặc muốn tìm thêm giao diện mới cho dự án khác?
        </p>
        <button
          onClick={() => onNavigate('store')}
          className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition"
        >
          <span>Khám phá Kho Website KWeb</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
        </button>
      </div>
    </div>
  );
};
