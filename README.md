# KWeb - Hệ Sinh Thái Kinh Doanh Website Làm Sẵn

> Hệ thống hoàn chỉnh gồm **Phần mềm quản lý trên máy tính (KWeb Studio)** và **Website kinh doanh trực tuyến (KWeb Storefront)** với dữ liệu thật 100%.

---

## 🏗️ Kiến Trúc Hệ Thống (Architecture)

```text
website business/
├── apps/
│   ├── web/                    # 🌐 Website bán hàng cho khách (React + Tailwind) - Cổng 3000
│   │   ├── src/components/
│   │   │   ├── LivePreviewModal.tsx     # Xem thử website trên Desktop, Tablet, Mobile
│   │   │   ├── CheckoutModal.tsx        # Cổng thanh toán VietQR động & tự cấp License
│   │   │   ├── LicenseLookupModal.tsx   # Cổng tra cứu bản quyền & tải lại file .zip
│   │   │   └── ProductDetailModal.tsx   # Chi tiết thông số, Lighthouse SEO & tính năng
│   │   └── ...
│   ├── desktop/                # 🖥️ Phần mềm Desktop quản lý (Glassy Dashboard V2) - Cổng 5174
│   │   ├── electron/           # Runtime Electron cho Windows
│   │   ├── src-tauri/          # Runtime Rust (Tauri v2) siêu nhẹ
│   │   └── src/components/     # Giao diện Glassy Bento Cards, Weekly Charts, Scanner
│   └── desktop-python/         # 🐍 Ứng dụng Desktop chạy Native bằng Python
│       ├── main.py             # App Glassy Dashboard qua Microsoft Edge WebView2 (~30MB RAM)
│       └── gui.py              # App GUI thuần Python bằng CustomTkinter
├── data/
│   ├── downloads/              # 📦 Chứa các gói file .ZIP nén mã nguồn thật
│   └── store.json              # 💾 Cơ sở dữ liệu JSON động (Doanh thu, đơn hàng, cấu hình VietQR)
├── docs/
│   └── huong-dan-rust-tauri.md # 🦀 Hướng dẫn biên dịch app Rust sang file .EXE độc lập
├── packages/
│   └── shared/                 # 📦 Shared TypeScript Types, Categories & Schema
├── server/                     # 🚀 Central Backend & Demos Engine - Cổng 4000
│   ├── index.js                # REST API: /api/products, /api/orders, /api/stats, /api/download/:key
│   ├── packager.js             # Engine đóng gói .ZIP vật lý trên Windows
│   └── public/demos/           # Các mẫu website thực tế chạy trong khung Device Switcher
├── chay-phan-mem-desktop.bat   # ⚡ 1-Click mở ngay Phần mềm Quản lý KWeb Studio
├── start.bat                   # ⚡ 1-Click mở toàn bộ hệ sinh thái (Web + Desktop)
└── tat-he-thong.bat            # 🛑 1-Click tắt sạch mọi tiến trình và giải phóng cổng
```

---

## ⚡ Hướng Dẫn Sử Dụng Nhanh

### 1. Khởi động 1-Click
- **Mở toàn bộ hệ thống (Website + Desktop App)**: Bấm đúp vào [`start.bat`](file:///c:/Users/hs207/Downloads/website%20business/start.bat)
- **Chỉ mở riêng phần mềm Desktop Studio**: Bấm đúp vào [`chay-phan-mem-desktop.bat`](file:///c:/Users/hs207/Downloads/website%20business/chay-phan-mem-desktop.bat)
- **Tắt toàn bộ hệ thống khi xong việc**: Bấm đúp vào [`tat-he-thong.bat`](file:///c:/Users/hs207/Downloads/website%20business/tat-he-thong.bat)

### 2. Các địa chỉ dịch vụ
| Thành phần | Địa chỉ truy cập | Mô tả |
| :--- | :--- | :--- |
| **KWeb Storefront** | [http://localhost:3000](http://localhost:3000) | Website bán mẫu giao diện cho khách hàng |
| **KWeb Studio (Web view)** | [http://localhost:5174](http://localhost:5174) | Bảng điều khiển quản lý doanh số, đơn hàng |
| **Central API Server** | [http://localhost:4000](http://localhost:4000) | Máy chủ dữ liệu thật và chạy live demos |
