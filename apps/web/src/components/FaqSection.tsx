import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'Sau khi quét mã QR thanh toán thì tôi nhận website như thế nào?',
    a: 'Ngay khi bạn hoàn tất chuyển khoản VietQR, hệ thống sẽ tự động xác nhận trong vòng 10-30 giây và hiển thị màn hình chúc mừng kèm nút Tải File ZIP trực tiếp và cấp License Key bản quyền. Bạn cũng có thể dùng mã License hoặc Email để tải lại bất cứ lúc nào.'
  },
  {
    q: 'Tôi không biết lập trình thì có dùng được website này không?',
    a: 'Hoàn toàn được! Mỗi website đều đi kèm tài liệu hướng dẫn từng bước: cách đổi logo, số điện thoại, hình ảnh và bảng giá. Ngoài ra còn có hướng dẫn kết nối tên miền riêng và đẩy lên Vercel/Netlify hosting miễn phí chỉ trong 5 phút.'
  },
  {
    q: 'Tôi có phải trả phí duy trì hàng tháng không?',
    a: 'Không. Bạn chỉ thanh toán 1 lần duy nhất để sở hữu trọn đời mã nguồn website. Bạn có thể lưu trữ trên hosting cá nhân hoặc dùng các nền tảng miễn phí vĩnh viễn như Vercel hay GitHub Pages.'
  },
  {
    q: 'Tôi có thể dùng website này để bán lại cho khách hàng của tôi không?',
    a: 'Có! Giấy phép KWeb cho phép bạn sử dụng mã nguồn này để thiết kế website bàn giao cho khách hàng hoặc triển khai cho thương hiệu cá nhân của bạn.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-16 sm:my-20 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <span className="text-xs font-bold font-mono tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 inline-block mb-3">
          HỎI ĐÁP PHỔ BIẾN
        </span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Câu Hỏi Thường Gặp
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-300 text-slate-400 ${
                    isOpen ? 'rotate-180 text-sky-400' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
