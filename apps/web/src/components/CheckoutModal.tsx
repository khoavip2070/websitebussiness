import React, { useState, useEffect } from 'react';
import { 
  X, 
  QrCode, 
  CheckCircle2, 
  Copy, 
  Download, 
  KeyRound, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  Loader2, 
  Sparkles,
  AlertTriangle,
  Clock,
  Send
} from 'lucide-react';
import { WebsiteProduct } from '@sitevault/shared';

interface CheckoutModalProps {
  product: WebsiteProduct | null;
  onClose: () => void;
  onOrderSuccess: () => void;
}

interface OrderResult {
  orderCode: string;
  licenseKey: string;
  downloadUrl: string;
  amount: number;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  product,
  onClose,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);
  const [orderResult, setOrderResult] = useState<OrderResult | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [hasNotified, setHasNotified] = useState(false);
  const [isNotifying, setIsNotifying] = useState(false);

  // Reset state whenever a different product is opened
  useEffect(() => {
    if (product) {
      setStep('info');
      setOrderData(null);
      setOrderResult(null);
      setVerifyError(null);
      setHasNotified(false);
      setIsSubmitting(false);
    }
  }, [product?.id]);

  if (!product) return null;

  const formatVnd = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Real-time automatic polling: checks if Admin approved or bank payment arrived
  useEffect(() => {
    if (step !== 'payment' || !orderData?.data?.orderCode) return;
    const code = orderData.data.orderCode;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/orders/${code}/status`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.isPaid && json.data) {
            setOrderResult({
              orderCode: code,
              licenseKey: json.data.license.key,
              downloadUrl: json.data.downloadUrl,
              amount: product.price
            });
            setStep('success');
            onOrderSuccess();
          }
          if (json.notifiedPaid) {
            setHasNotified(true);
          }
        }
      } catch (_) {}
    }, 2000);

    return () => clearInterval(interval);
  }, [step, orderData, onOrderSuccess, product.price]);

  const handleCreateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerEmail.trim()) {
      setVerifyError('Vui lòng điền Họ tên và Email để nhận mã bản quyền!');
      return;
    }
    setIsSubmitting(true);
    setVerifyError(null);
    setHasNotified(false);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          customerName,
          customerEmail,
          customerPhone,
          paymentMethod: 'vietqr'
        })
      });
      const data = await res.json();
      if (data.success) {
        setOrderData(data);
        setStep('payment');
      } else {
        alert(data.message || 'Lỗi tạo đơn hàng');
      }
    } catch (err) {
      console.error(err);
      // Fallback offline order with shop owner's real account
      const mockCode = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
      const bankAcc = '9933487119';
      const bankName = 'Techcombank';
      const accName = 'TRAN DANG KHOA';
      setOrderData({
        data: { orderCode: mockCode, licenseKey: `MOCK-${Date.now().toString(36).toUpperCase()}` },
        payment: {
          bankAccount: bankAcc,
          bankName: bankName,
          accountName: accName,
          amount: product.price,
          content: mockCode,
          qrUrl: `https://img.vietqr.io/image/970407-${bankAcc}-compact2.png?amount=${product.price}&addInfo=${encodeURIComponent(mockCode)}&accountName=${encodeURIComponent(accName)}`
        }
      });
      setStep('payment');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNotifyPaid = async () => {
    const code = orderData?.data?.orderCode;
    if (!code) return;
    setIsNotifying(true);
    setVerifyError(null);

    try {
      const res = await fetch(`/api/orders/${code}/notify-paid`, { method: 'POST' });
      if (res.ok) {
        setHasNotified(true);
      } else {
        setHasNotified(true);
      }
    } catch (_) {
      setHasNotified(true);
    } finally {
      setIsNotifying(false);
    }
  };

  const handleVerifyPayment = async () => {
    setIsSubmitting(true);
    setVerifyError(null);
    const code = orderData?.data?.orderCode;

    try {
      const res = await fetch(`/api/orders/${code}/verify`, { method: 'POST' });
      const data = await res.json();
      if (data.success && data.isPaid) {
        setOrderResult({
          orderCode: code,
          licenseKey: data.data.license.key,
          downloadUrl: data.data.downloadUrl,
          amount: product.price
        });
        setStep('success');
        onOrderSuccess();
      } else {
        setVerifyError(data.message || 'Chưa nhận được giao dịch chuyển khoản từ ngân hàng. Vui lòng quét mã QR chuyển đúng số tiền và nội dung, sau đó thử lại sau ít giây!');
      }
    } catch (err) {
      setVerifyError('Chưa nhận được xác nhận từ ngân hàng. Vui lòng thử lại sau ít giây!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              {step === 'info' && 'Thông Tin Đặt Mua Website'}
              {step === 'payment' && 'Quét Mã VietQR Thanh Toán'}
              {step === 'success' && 'Đặt Hàng Thành Công! 🎉'}
            </h3>
            <p className="text-xs text-slate-500">{product.title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Info Form */}
        {step === 'info' && (
          <form onSubmit={handleCreateOrder} className="p-6 space-y-4">
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-700">Tổng thanh toán:</span>
                <div className="text-xl font-black text-blue-800">{formatVnd(product.price)}</div>
              </div>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                Bàn giao tự động
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Họ và tên của bạn <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ví dụ: Nguyễn Văn An"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Địa chỉ Email nhận mã nguồn & License <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="an.nguyen@company.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Link tải mã nguồn .zip và mã bản quyền sẽ được gửi về email này.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Số điện thoại (tùy chọn)
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="0912 345 678"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 font-medium text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all"
              />
            </div>

            {verifyError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 text-left flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{verifyError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Đang khởi tạo đơn hàng...</span>
                </>
              ) : (
                <>
                  <span>Tiếp tục thanh toán VietQR</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 2: VietQR Payment */}
        {step === 'payment' && orderData && (
          <div className="p-6 space-y-5 text-center">
            {/* QR Image Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 inline-block shadow-inner">
              <img
                src={orderData.payment.qrUrl}
                alt="VietQR Code"
                className="w-56 h-56 mx-auto rounded-lg object-contain mix-blend-multiply"
              />
            </div>

            {/* Transfer details table */}
            <div className="text-left text-xs space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Ngân hàng:</span>
                <span className="font-bold text-slate-800">{orderData.payment.bankName}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Số tài khoản:</span>
                <div className="flex items-center gap-1.5 font-bold font-mono text-slate-800">
                  <span>{orderData.payment.bankAccount}</span>
                  <button
                    onClick={() => copyToClipboard(orderData.payment.bankAccount, 'stk')}
                    className="p-1 hover:text-blue-600"
                    title="Sao chép"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  {copiedField === 'stk' && <span className="text-[10px] text-emerald-600">Đã chép</span>}
                </div>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Số tiền:</span>
                <span className="font-black text-blue-700 text-sm">{formatVnd(orderData.payment.amount)}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-500 font-semibold text-rose-600">Nội dung chuyển khoản (bắt buộc):</span>
                <div className="flex items-center gap-1.5 font-black text-rose-600 font-mono text-sm bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  <span>{orderData.payment.content}</span>
                  <button
                    onClick={() => copyToClipboard(orderData.payment.content, 'content')}
                    className="p-1 hover:text-rose-800"
                    title="Sao chép nội dung"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  {copiedField === 'content' && <span className="text-[10px] text-emerald-600">Đã chép</span>}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              💡 Mở ứng dụng ngân hàng bất kỳ (Vietcombank, MB, Techcombank, MoMo...) và chọn <strong>Quét mã QR</strong> để thanh toán tức thì.
            </p>

            {/* Live Status Indicator */}
            {hasNotified ? (
              <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold text-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping shrink-0" />
                <span>Đã báo chuyển tiền — Chờ Admin kiểm tra & duyệt đơn (1 - 3 phút)</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold text-center">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                <span>Quét mã QR chuyển khoản. Sau khi chuyển xong, bấm nút bên dưới!</span>
              </div>
            )}

            {/* Error notice if any */}
            {verifyError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 text-left flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{verifyError}</span>
              </div>
            )}

            {/* Action buttons */}
            {!hasNotified ? (
              <button
                onClick={handleNotifyPaid}
                disabled={isNotifying}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                {isNotifying ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang gửi thông báo tới Admin...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Tôi đã chuyển khoản xong — Báo Admin duyệt đơn</span>
                  </>
                )}
              </button>
            ) : (
              <div className="space-y-2">
                <div className="w-full py-3.5 rounded-xl bg-amber-100/90 border border-amber-300 text-amber-900 font-bold text-xs flex items-center justify-center gap-2 select-none shadow-sm">
                  <Clock className="w-4 h-4 text-amber-700 animate-spin" />
                  <span>Đang chờ Admin kiểm tra số dư & duyệt đơn...</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Màn hình sẽ <strong>tự động mở khóa</strong> ngay khi Admin duyệt đơn thành công. Bạn không cần tải lại trang.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Success Screen */}
        {step === 'success' && orderResult && (
          <div className="p-6 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <Sparkles className="w-8 h-8 text-emerald-600" />
            </div>

            <div>
              <h4 className="text-xl font-black text-slate-900">Kích Hoạt Bản Quyền Thành Công!</h4>
              <p className="text-xs text-slate-500 mt-1">
                Cảm ơn bạn đã tin chọn KWeb. Dưới đây là thông tin bản quyền và link tải mã nguồn của bạn:
              </p>
            </div>

            {/* License Box */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white text-left space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>MÃ BẢN QUYỀN (LICENSE KEY):</span>
                <span className="text-emerald-400 font-semibold">Đã kích hoạt</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800 p-2.5 rounded-xl border border-slate-700">
                <span className="font-mono text-sm font-bold text-indigo-300">{orderResult.licenseKey}</span>
                <button
                  onClick={() => copyToClipboard(orderResult.licenseKey, 'license')}
                  className="px-2.5 py-1 rounded bg-slate-700 hover:bg-slate-600 text-xs text-white font-semibold flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>Chép</span>
                </button>
              </div>
              {copiedField === 'license' && (
                <div className="text-[11px] text-emerald-400 text-right">Đã sao chép mã bản quyền!</div>
              )}
            </div>

            {/* Direct Download Button */}
            <div className="space-y-2">
              <a
                href={orderResult.downloadUrl}
                download
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Tải Về Mã Nguồn ({product.downloadFileName})</span>
              </a>
              <span className="text-[11px] text-slate-400 block">
                Bạn có thể dùng mã License này để tải lại tối đa 5 lần tại mục "Tra cứu License".
              </span>
            </div>

            {/* Quick Dev Instruction */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1 text-slate-600">
              <div className="font-bold text-slate-800">Hướng dẫn chạy thử trên máy tính:</div>
              <div className="font-mono text-[11px] text-slate-700 bg-slate-200/70 p-2 rounded">
                unzip {product.downloadFileName}<br />
                cd {product.slug}<br />
                npm install<br />
                npm run dev
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Hoàn tất & Đóng cửa sổ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
