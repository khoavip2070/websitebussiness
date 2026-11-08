import React, { useState } from 'react';
import { X, Search, KeyRound, Download, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface LicenseLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseLookupModal: React.FC<LicenseLookupModalProps> = ({
  isOpen,
  onClose
}) => {
  const [licenseKey, setLicenseKey] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!licenseKey.trim()) return;

    setIsSearching(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch(`/api/licenses/verify/${encodeURIComponent(licenseKey.trim())}`);
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.message || 'Mã License không tồn tại hoặc đã hết hạn.');
      }
    } catch (err) {
      setError('Không thể kết nối đến máy chủ xác thực.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-extrabold text-slate-900">Tra Cứu Bản Quyền & Tải Lại Code</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <form onSubmit={handleLookup} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nhập mã License Key của bạn:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={licenseKey}
                  onChange={(e) => setLicenseKey(e.target.value)}
                  placeholder="Ví dụ: AURA-89X2-LK99-VN26"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 font-mono font-bold uppercase text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow flex items-center justify-center gap-2"
            >
              {isSearching ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Đang tra cứu hệ thống...</span>
                </>
              ) : (
                <>
                  <Search className="w-3.5 h-3.5" />
                  <span>Xác minh mã License</span>
                </>
              )}
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Result */}
          {result && (
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Bản quyền hợp lệ!</span>
              </div>

              <div>
                <span className="text-slate-500">Website đã mua:</span>
                <div className="font-bold text-slate-900 mt-0.5">{result.productTitle}</div>
              </div>

              <div className="flex justify-between text-slate-600 py-1 border-t border-emerald-200/60">
                <span>Số lượt tải còn lại:</span>
                <span className="font-bold text-emerald-700">{result.remainingDownloads} / {result.license.maxDownloads} lần</span>
              </div>

              <a
                href={`/api/download/${result.license.key}`}
                download
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow flex items-center justify-center gap-2 block text-center"
              >
                <Download className="w-3.5 h-3.5 inline" />
                <span>Tải về file ({result.downloadFileName})</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
