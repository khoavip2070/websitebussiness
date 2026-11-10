import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Package, 
  KeyRound, 
  LogOut, 
  ExternalLink, 
  Download, 
  Clock, 
  CheckCircle2, 
  Loader2, 
  Copy, 
  Check, 
  Globe, 
  ShieldCheck, 
  Sparkles,
  ShoppingBag,
  RotateCw,
  FileCode,
  Calendar,
  AlertTriangle,
  Send
} from 'lucide-react';
import { UserAccount, Order } from '../shared/types';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserAccount | null;
  onLogout: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  user,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'licenses' | 'profile'>('orders');
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  // Profile update form state
  const [editName, setEditName] = useState(user?.name || '');
  const [editPhone, setEditPhone] = useState(user?.phone || '');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [profileMsg, setProfileMsg] = useState<string | null>(null);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [savingProfile, setSavingProfile] = useState(false);

  const fetchUserOrders = async () => {
    if (!user) return;
    setLoadingOrders(true);
    try {
      const token = localStorage.getItem('kweb_token');
      const res = await fetch(`/api/user/orders?email=${encodeURIComponent(user.email)}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setOrders(data.data);
      }
    } catch (_) {}
    finally {
      setLoadingOrders(false);
    }
  };

  useEffect(() => {
    if (isOpen && user) {
      setEditName(user.name);
      setEditPhone(user.phone || '');
      fetchUserOrders();
    }
  }, [isOpen, user?.email]);

  if (!isOpen || !user) return null;

  const formatVnd = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const completedOrders = orders.filter(o => o.status === 'completed' || o.paymentStatus === 'paid');
  const totalSpent = completedOrders.reduce((sum, o) => sum + (Number(o.productPrice) || 0), 0);
  const activeLicenses = orders.filter(o => o.licenseKey && (o.status === 'completed' || o.paymentStatus === 'paid'));

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    setProfileMsg(null);
    setProfileError(null);

    try {
      const token = localStorage.getItem('kweb_token');
      const res = await fetch('/api/auth/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          name: editName,
          phone: editPhone,
          password: newPassword || undefined,
          oldPassword: oldPassword || undefined
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Cập nhật thất bại');
      }

      setProfileMsg('Đã cập nhật thông tin thành công!');
      setOldPassword('');
      setNewPassword('');

      // Update local storage
      const updatedUser = { ...user, name: editName, phone: editPhone };
      localStorage.setItem('kweb_user', JSON.stringify(updatedUser));
    } catch (err: any) {
      setProfileError(err.message);
    } finally {
      setSavingProfile(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-slate-950/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/20">
              {user.name ? user.name.slice(0, 2).toUpperCase() : 'KW'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-white">{user.name}</h3>
                <span className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-bold">
                  Thành viên KWeb
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchUserOrders}
              disabled={loadingOrders}
              title="Làm mới dữ liệu"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
            >
              <RotateCw className={`w-4 h-4 ${loadingOrders ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 sm:px-6 bg-slate-900/90 border-b border-white/10 shrink-0">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tổng số đơn</span>
            <span className="text-lg font-black text-white">{orders.length} đơn</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Đã hoàn tất</span>
            <span className="text-lg font-black text-emerald-300">{completedOrders.length} website</span>
          </div>
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">Tổng chi tiêu</span>
            <span className="text-lg font-black text-white">{formatVnd(totalSpent)}</span>
          </div>
          <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">License Key</span>
            <span className="text-lg font-black text-purple-300">{activeLicenses.length} bản quyền</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/10 bg-slate-900/60 shrink-0 text-xs">
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 font-bold transition-all relative flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'orders' ? 'text-sky-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Lịch Sử Mua Hàng ({orders.length})</span>
            {activeTab === 'orders' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('licenses')}
            className={`pb-3 font-bold transition-all relative flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'licenses' ? 'text-sky-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Bản Quyền Đã Cấp ({activeLicenses.length})</span>
            {activeTab === 'licenses' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 font-bold transition-all relative flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'profile' ? 'text-sky-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Thông Tin Tài Khoản</span>
            {activeTab === 'profile' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
            )}
          </button>
        </div>

        {/* Scrollable Tab Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {/* TAB 1: LỊCH SỬ MUA HÀNG */}
          {activeTab === 'orders' && (
            <div className="space-y-3.5">
              {loadingOrders && orders.length === 0 ? (
                <div className="py-16 text-center text-slate-400 flex flex-col items-center gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-sky-400" />
                  <span className="text-xs">Đang tải lịch sử đơn hàng của bạn...</span>
                </div>
              ) : orders.length === 0 ? (
                <div className="py-16 text-center bg-white/[0.02] border border-dashed border-white/10 rounded-2xl p-6">
                  <ShoppingBag className="w-10 h-10 text-slate-500 mx-auto mb-2.5" />
                  <h4 className="text-sm font-bold text-white">Bạn chưa có đơn hàng nào</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                    Khám phá kho website mẫu làm sẵn chuẩn thiết kế quốc tế và đặt mua chỉ sau 30 giây thanh toán VietQR.
                  </p>
                </div>
              ) : (
                orders.map((ord) => {
                  const isPaid = ord.paymentStatus === 'paid' || ord.status === 'completed';
                  const isExpanded = expandedOrderId === ord.orderCode;

                  return (
                    <div
                      key={ord.orderCode}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all p-4 sm:p-5 space-y-3"
                    >
                      {/* Top Order Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono font-black text-sky-400 text-sm">#{ord.orderCode}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-semibold border border-white/5">
                              {ord.orderType === 'custom' ? '✨ Đặt làm theo yêu cầu' : '📦 Mua website mẫu'}
                            </span>
                            <span className="text-[11px] text-slate-400 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(ord.createdAt).toLocaleDateString('vi-VN')}</span>
                            </span>
                          </div>
                          <h4 className="text-base font-extrabold text-white">{ord.productTitle}</h4>
                        </div>

                        <div className="text-left sm:text-right flex sm:flex-col justify-between items-center sm:items-end gap-1">
                          <span className="text-base font-black text-emerald-400">{formatVnd(ord.productPrice)}</span>
                          <div className="flex items-center gap-1.5">
                            {/* Order Status Badge */}
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold inline-flex items-center gap-1 ${
                              ord.status === 'completed'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : ord.status === 'processing'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                : ord.status === 'cancelled'
                                ? 'bg-slate-700 text-slate-400'
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            }`}>
                              {ord.status === 'completed' && <CheckCircle2 className="w-2.5 h-2.5" />}
                              {ord.status === 'processing' && <Loader2 className="w-2.5 h-2.5 animate-spin" />}
                              {ord.status === 'pending' && <Clock className="w-2.5 h-2.5" />}
                              {ord.status === 'completed'
                                ? 'Đã hoàn thành'
                                : ord.status === 'processing'
                                ? 'Đang thực hiện'
                                : ord.status === 'cancelled'
                                ? 'Đã hủy'
                                : 'Chờ duyệt'}
                            </span>

                            {/* Payment Status Badge */}
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              isPaid
                                ? 'bg-emerald-500/15 text-emerald-400'
                                : 'bg-amber-500/15 text-amber-400'
                            }`}>
                              {isPaid ? 'Đã thanh toán' : 'Chờ thanh toán'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Custom Requirements text if present */}
                      {ord.customRequirements && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                          <span className="text-amber-400 font-bold block mb-0.5">Yêu cầu tùy chỉnh của bạn:</span>
                          <p className="text-amber-200/90 whitespace-pre-wrap text-[11px]">{ord.customRequirements}</p>
                        </div>
                      )}

                      {/* Handover Notice & Links if Admin completed */}
                      {(ord.handoverUrl || ord.handoverNotes) && (
                        <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-500/30 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Thông Tin Bàn Giao Từ KWeb Studio</span>
                            </span>
                            {ord.deliveredAt && (
                              <span className="text-[10px] text-slate-400 font-mono">
                                Bàn giao: {new Date(ord.deliveredAt).toLocaleDateString('vi-VN')}
                              </span>
                            )}
                          </div>

                          {ord.handoverNotes && (
                            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                              {ord.handoverNotes}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Action CTAs (Demo Link, Download .ZIP, View Milestones) */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-white/5">
                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Live Demo Link */}
                          {ord.handoverUrl && (
                            <a
                              href={ord.handoverUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3.5 py-1.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              <span>Xem Website Hoàn Thiện</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}

                          {/* Source Code Download */}
                          {isPaid && ord.downloadUrl && (
                            <a
                              href={ord.downloadUrl}
                              download
                              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Tải Mã Nguồn .ZIP</span>
                            </a>
                          )}

                          {/* License Key Quick Copy */}
                          {ord.licenseKey && isPaid && (
                            <div className="flex items-center gap-1 bg-black/40 border border-white/10 px-2.5 py-1 rounded-xl text-xs font-mono text-slate-300">
                              <span className="text-[10px] text-slate-500">Key:</span>
                              <span className="font-bold text-sky-400">{ord.licenseKey}</span>
                              <button
                                onClick={() => copyToClipboard(ord.licenseKey)}
                                className="p-1 hover:text-white text-slate-400 cursor-pointer"
                                title="Sao chép License Key"
                              >
                                {copiedKey === ord.licenseKey ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Milestone Toggle */}
                        {ord.statusHistory && ord.statusHistory.length > 0 && (
                          <button
                            onClick={() => setExpandedOrderId(isExpanded ? null : ord.orderCode)}
                            className="text-[11px] font-semibold text-slate-400 hover:text-sky-400 transition cursor-pointer"
                          >
                            {isExpanded ? 'Ẩn tiến độ' : 'Xem tiến độ xử lý'}
                          </button>
                        )}
                      </div>

                      {/* Expanded Milestones Timeline */}
                      {isExpanded && ord.statusHistory && (
                        <div className="mt-3 p-3 rounded-xl bg-black/30 border border-white/5 space-y-2 text-xs animate-fadeIn">
                          <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
                            Lịch sử mốc thời gian xử lý:
                          </span>
                          <div className="space-y-1.5">
                            {ord.statusHistory.map((item: any, idx: number) => (
                              <div key={idx} className="flex justify-between items-start gap-2 text-[11px] text-slate-300 py-1 border-b border-white/5 last:border-0">
                                <div>
                                  <span className="font-bold text-sky-300">{item.status || item.action}</span>
                                  {item.note && <span className="text-slate-400 block mt-0.5">{item.note}</span>}
                                </div>
                                <span className="text-[10px] text-slate-500 shrink-0 font-mono">
                                  {new Date(item.timestamp).toLocaleString('vi-VN')}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 2: BẢN QUYỀN ĐÃ CẤP */}
          {activeTab === 'licenses' && (
            <div className="space-y-3">
              {activeLicenses.length === 0 ? (
                <div className="py-16 text-center text-slate-400">
                  <KeyRound className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                  <p className="text-xs">Bạn chưa có mã bản quyền nào được kích hoạt.</p>
                </div>
              ) : (
                activeLicenses.map((ord) => (
                  <div
                    key={ord.orderCode}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{ord.productTitle}</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
                          Bản quyền vĩnh viễn
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-slate-400">Mã License:</span>
                        <span className="text-sky-300 font-bold bg-black/40 px-2 py-0.5 rounded border border-white/5">
                          {ord.licenseKey}
                        </span>
                        <button
                          onClick={() => copyToClipboard(ord.licenseKey)}
                          className="p-1 hover:text-white text-slate-400 cursor-pointer"
                          title="Sao chép"
                        >
                          {copiedKey === ord.licenseKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {ord.downloadUrl && (
                        <a
                          href={ord.downloadUrl}
                          download
                          className="px-3.5 py-2 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Tải Mã Nguồn .ZIP</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 3: THÔNG TIN TÀI KHOẢN & ĐỔI MẬT KHẨU */}
          {activeTab === 'profile' && (
            <div className="max-w-md mx-auto py-2 space-y-4 text-xs">
              <form onSubmit={handleUpdateProfile} className="space-y-3.5">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Họ và tên</label>
                  <input
                    type="text"
                    required
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Email đăng ký</label>
                  <input
                    type="email"
                    disabled
                    value={user.email}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 font-medium cursor-not-allowed"
                  />
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Email dùng để tra cứu hóa đơn và nhận bàn giao.</span>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Số điện thoại</label>
                  <input
                    type="tel"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    placeholder="0912 345 678"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="font-bold text-slate-300 block">Đổi mật khẩu (Tùy chọn)</span>
                  <div>
                    <input
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Mật khẩu hiện tại"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Mật khẩu mới (ít nhất 6 ký tự)"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                {profileMsg && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{profileMsg}</span>
                  </div>
                )}

                {profileError && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{profileError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={savingProfile}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {savingProfile ? 'Đang lưu...' : 'Lưu Thay Đổi'}
                </button>
              </form>

              {/* Logout button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onLogout}
                  className="w-full py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Đăng Xuất Khỏi Tài Khoản</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
