import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Search, 
  Building2, 
  CreditCard, 
  User, 
  Save, 
  RefreshCw, 
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOrderUpdated?: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  onOrderUpdated
}) => {
  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Data
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [approvingCode, setApprovingCode] = useState<string | null>(null);

  // Bank settings state
  const [bankName, setBankName] = useState('Vietcombank');
  const [bankAccount, setBankAccount] = useState('');
  const [accountName, setAccountName] = useState('TRAN DANG KHOA');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'pending' | 'completed' | 'bank'>('pending');

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Fetch orders and settings
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [resOrders, resSettings] = await Promise.all([
        fetch('/api/orders').then(r => r.json()).catch(() => ({ data: [] })),
        fetch('/api/admin/settings').then(r => r.json()).catch(() => ({ data: null }))
      ]);

      if (resOrders.data && Array.isArray(resOrders.data)) {
        setOrders(resOrders.data);
      }
      if (resSettings.data) {
        setBankName(resSettings.data.bankName || 'Vietcombank');
        setBankAccount(resSettings.data.bankAccount || '');
        setAccountName(resSettings.data.accountName || '');
      }
    } catch (_) {}
    setIsLoading(false);
  };

  useEffect(() => {
    if (isOpen && isUnlocked) {
      fetchData();
      const interval = setInterval(fetchData, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen, isUnlocked]);

  if (!isOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: 888888 or 123456
    if (pin === '888888' || pin === '123456' || pin === 'admin') {
      setIsUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleApproveOrder = async (orderCode: string) => {
    setApprovingCode(orderCode);
    try {
      const res = await fetch(`/api/orders/${orderCode}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transactionId: `ADMIN-${Date.now().toString().slice(-6)}` })
      });
      const data = await res.json();
      if (data.success) {
        await fetchData();
        if (onOrderUpdated) onOrderUpdated();
      } else {
        alert(data.message || 'Lỗi duyệt đơn');
      }
    } catch (e) {
      alert('Không thể kết nối đến máy chủ để duyệt đơn.');
    } finally {
      setApprovingCode(null);
    }
  };

  const handleSaveBank = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/settings/bank', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bankName, bankAccount, accountName })
      });
      const data = await res.json();
      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      }
    } catch (_) {
      alert('Lỗi lưu cài đặt ngân hàng.');
    }
  };

  const formatVnd = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount || 0) + ' đ';
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const pendingOrders = orders.filter(o => o.status === 'pending');
  const completedOrders = orders.filter(o => o.status === 'completed');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto select-none">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto text-slate-100 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                <span>KWeb Admin Portal</span>
                <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded-full font-mono">
                  DUYỆT TAY
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">Quản lý đơn hàng, duyệt kích hoạt License & cài đặt ngân hàng</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content: PIN Screen or Dashboard */}
        {!isUnlocked ? (
          <div className="p-8 sm:p-12 text-center max-w-sm mx-auto space-y-5 my-auto">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-300 shadow-inner">
              <Lock className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Xác Thực Quản Trị Viên</h4>
              <p className="text-xs text-slate-400 mt-1">
                Nhập mã PIN Admin để truy cập trung tâm duyệt đơn (Mặc định: <code className="text-sky-300 font-mono">888888</code>)
              </p>
            </div>
            <form onSubmit={handleUnlock} className="space-y-3">
              <input
                type="password"
                maxLength={10}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Nhập mã PIN..."
                autoFocus
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-center font-mono text-xl tracking-widest text-white focus:outline-none focus:border-sky-400"
              />
              {pinError && (
                <div className="text-xs text-rose-400 font-medium">Mã PIN không chính xác. Thử lại với 888888</div>
              )}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-500/20 active:scale-95"
              >
                Mở Khóa Quản Trị
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto flex flex-col">
            {/* Top Toolbar Tabs (Responsive with horizontal scroll on mobile) */}
            <div className="px-4 sm:px-6 py-3 border-b border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold overflow-x-auto whitespace-nowrap max-w-full">
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'pending'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Chờ duyệt ({pendingOrders.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'completed'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Đã duyệt ({completedOrders.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('bank')}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'bank'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Cài Đặt Ngân Hàng</span>
                </button>
              </div>

              <button
                onClick={fetchData}
                disabled={isLoading}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs transition flex items-center gap-1.5"
                title="Làm mới"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Làm mới</span>
              </button>
            </div>

            {/* TAB 1: PENDING ORDERS */}
            {activeTab === 'pending' && (
              <div className="p-6 space-y-4 flex-1">
                {pendingOrders.length === 0 ? (
                  <div className="py-16 text-center text-slate-400 text-xs space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400/60 mx-auto" />
                    <p className="font-bold text-white text-sm">Hiện không có đơn hàng nào chờ duyệt</p>
                    <p>Khi có khách đặt mua qua VietQR, thông tin đơn sẽ xuất hiện ngay tại đây.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3.5">
                    {pendingOrders.map((ord) => (
                      <div
                        key={ord.orderCode}
                        className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono font-bold text-sky-400 text-sm bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                              {ord.orderCode}
                            </span>
                            <span className="text-white font-bold text-sm">{formatVnd(ord.productPrice)}</span>
                            {ord.notifiedPaid ? (
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold flex items-center gap-1 animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                KHÁCH ĐÃ BÁO CHUYỂN TIỀN
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px]">
                                Chờ chuyển khoản
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-300 font-semibold">{ord.productTitle}</div>
                          <div className="text-[11px] text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                            <span>Khách: <strong className="text-slate-200">{ord.customerName}</strong></span>
                            <span>Email: <strong className="text-slate-200">{ord.customerEmail}</strong></span>
                            {ord.customerPhone && <span>SĐT: <strong className="text-slate-200">{ord.customerPhone}</strong></span>}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-2 md:pt-0">
                          <button
                            onClick={() => handleApproveOrder(ord.orderCode)}
                            disabled={approvingCode === ord.orderCode}
                            className="w-full md:w-auto px-5 py-3 md:py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 disabled:opacity-50"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{approvingCode === ord.orderCode ? 'Đang duyệt...' : 'Duyệt Đơn & Cấp Key'}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: COMPLETED ORDERS */}
            {activeTab === 'completed' && (
              <div className="p-6 space-y-3 flex-1">
                {completedOrders.length === 0 ? (
                  <div className="py-16 text-center text-slate-400 text-xs">
                    Chưa có đơn hàng nào hoàn tất.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {completedOrders.map((ord) => (
                      <div
                        key={ord.orderCode}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-emerald-400">{ord.orderCode}</span>
                            <span className="font-bold text-white">{formatVnd(ord.productPrice)}</span>
                            <span className="text-[10px] text-slate-500 font-mono">
                              {new Date(ord.completedAt || ord.createdAt).toLocaleString('vi-VN')}
                            </span>
                          </div>
                          <div className="text-slate-300 font-medium">{ord.productTitle} — {ord.customerName} ({ord.customerEmail})</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="bg-black/40 px-2.5 py-1 rounded font-mono text-[11px] text-sky-300 border border-white/5 flex items-center gap-1.5">
                            <span>{ord.licenseKey}</span>
                            <button
                              onClick={() => copyText(ord.licenseKey)}
                              className="text-slate-400 hover:text-white"
                              title="Sao chép License"
                            >
                              {copiedKey === ord.licenseKey ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: BANK SETTINGS */}
            {activeTab === 'bank' && (
              <div className="p-6 max-w-lg mx-auto w-full space-y-6 flex-1">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">Tài Khoản Ngân Hàng Nhận Tiền VietQR</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Mã VietQR trên website sẽ tự động gắn số tài khoản này để khách quét chuyển tiền trực tiếp vào tài khoản của bạn.
                  </p>
                </div>

                <form onSubmit={handleSaveBank} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Ngân hàng (Vietcombank, Techcombank, MBBank...)
                    </label>
                    <select
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-semibold focus:outline-none focus:border-sky-400"
                    >
                      <option value="Vietcombank" className="bg-slate-900 text-white">Vietcombank (VCB)</option>
                      <option value="Techcombank" className="bg-slate-900 text-white">Techcombank (TCB)</option>
                      <option value="MBBank" className="bg-slate-900 text-white">MBBank (Ngân hàng Quân Đội)</option>
                      <option value="ACB" className="bg-slate-900 text-white">ACB (Á Châu)</option>
                      <option value="VPBank" className="bg-slate-900 text-white">VPBank</option>
                      <option value="BIDV" className="bg-slate-900 text-white">BIDV</option>
                      <option value="VietinBank" className="bg-slate-900 text-white">VietinBank</option>
                      <option value="TPBank" className="bg-slate-900 text-white">TPBank</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Số tài khoản ngân hàng
                    </label>
                    <input
                      type="text"
                      required
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                      placeholder="Ví dụ: 9933487119 hoặc số tài khoản VCB..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-sm focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Tên chủ tài khoản (Không dấu)
                    </label>
                    <input
                      type="text"
                      required
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value.toUpperCase())}
                      placeholder="TRAN DANG KHOA"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white uppercase text-sm font-semibold focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  {saveSuccess && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Đã cập nhật thông tin ngân hàng! Các mã VietQR mới sẽ gắn tài khoản này.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Lưu Cài Đặt Ngân Hàng</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
