# KWeb - Hệ Sinh Thái Kinh Doanh Website Làm Sẵn

> Hệ thống hoàn chỉnh gồm **Phần mềm quản lý trên máy tính (KWeb Studio)** và **Website kinh doanh trực tuyến (KWeb Storefront)** với dữ liệu thật 100%.

---

## 🏗️ Kiến Trúc Hệ Thống (Architecture)

```text
website business/
├── apps/
│   ├── web/                    # 🌐 Website bán hàng cho khách (Storefront - React 18 + Tailwind)
│   │   ├── src/components/     # LivePreviewModal, CheckoutModal (VietQR), LicenseLookupModal, ...
│   │   └── ...
│   └── desktop/                # 🖥️ Phần mềm Desktop quản lý (KWeb Studio - Spatial Glassy Dashboard)
│       └── src/components/     # Bento Cards, Folder Scanner, Kho Website, Quản lý đơn hàng & cấp key
├── data/
│   ├── downloads/              # 📦 Chứa các gói file .ZIP nén mã nguồn thật để khách tải
│   └── store.json              # 💾 Cơ sở dữ liệu JSON động (Doanh thu, đơn hàng, cấu hình VietQR)
├── packages/
│   └── shared/                 # 📦 Shared TypeScript Types, Categories & Schema
├── server/                     # 🚀 Central Backend & Demos Engine - Cổng 4000
│   ├── index.js                # REST API: /api/products, /api/orders, /api/stats, /api/download/:key
│   ├── supabase.js             # Kết nối đồng bộ thời gian thực Supabase Cloud
│   ├── packager.js             # Engine quét và đóng gói mã nguồn .ZIP tự động
│   └── public/demos/           # Các mẫu website thực tế chạy trong khung Live Preview
├── supabase/                   # ⚡ File SQL Database Schema cho Supabase Cloud
├── chay-phan-mem-desktop.bat   # ⚡ 1-Click mở Phần mềm Quản lý KWeb Studio (Batch script)
├── KWeb-Studio.exe             # ⚡ 1-Click mở KWeb Studio (File EXE độc lập không hiện màn hình đen)
├── tat-he-thong.bat            # 🛑 1-Click tắt sạch mọi tiến trình và giải phóng cổng (Batch script)
└── Tat-He-Thong.exe            # 🛑 1-Click tắt sạch hệ thống (File EXE độc lập)
```

---

## ⚡ Hướng Dẫn Sử Dụng Nhanh

### 1. Khởi động 1-Click
- **Mở phần mềm Desktop KWeb Studio**: Bấm đúp vào [`KWeb-Studio.exe`](file:///c:/Users/hs207/Downloads/website%20business/KWeb-Studio.exe) hoặc [`chay-phan-mem-desktop.bat`](file:///c:/Users/hs207/Downloads/website%20business/chay-phan-mem-desktop.bat)
- **Tắt toàn bộ hệ thống khi xong việc**: Bấm đúp vào [`Tat-He-Thong.exe`](file:///c:/Users/hs207/Downloads/website%20business/Tat-He-Thong.exe) hoặc [`tat-he-thong.bat`](file:///c:/Users/hs207/Downloads/website%20business/tat-he-thong.bat)

### 2. Các địa chỉ dịch vụ
| Thành phần | Địa chỉ truy cập | Mô tả |
| :--- | :--- | :--- |
| **KWeb Storefront** | [http://localhost:4000/store](http://localhost:4000/store) | Website bán mẫu giao diện cho khách hàng |
| **KWeb Studio (Desktop)** | [http://localhost:4000/studio](http://localhost:4000/studio) | Bảng điều khiển quản lý doanh số, quét dự án & duyệt đơn |
| **Central API Server** | [http://localhost:4000](http://localhost:4000) | Máy chủ dữ liệu thật, API VietQR và chạy live demos |
