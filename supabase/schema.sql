-- =========================================================================
-- KWeb - Supabase Database Schema (PostgreSQL)
-- Dự án: KWeb Studio & Storefront
-- Hướng dẫn: Dán toàn bộ mã này vào Supabase -> SQL Editor -> Nhấn 'Run'
-- =========================================================================

-- 1. BẢNG SẢN PHẨM (PRODUCTS)
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    tagline TEXT,
    description TEXT,
    price BIGINT NOT NULL,
    original_price BIGINT,
    category TEXT NOT NULL,
    tech_stack JSONB DEFAULT '[]'::jsonb,
    thumbnail TEXT,
    gallery JSONB DEFAULT '[]'::jsonb,
    demo_url TEXT,
    status TEXT DEFAULT 'published',
    download_file_name TEXT,
    file_size TEXT,
    rating NUMERIC DEFAULT 5.0,
    reviews_count INT DEFAULT 0,
    sales_count INT DEFAULT 0,
    views_count INT DEFAULT 0,
    features JSONB DEFAULT '[]'::jsonb,
    pages_count INT DEFAULT 1,
    lighthouse JSONB DEFAULT '{"performance": 99, "accessibility": 100, "bestPractices": 100, "seo": 100}'::jsonb,
    included_assets JSONB DEFAULT '[]'::jsonb,
    tags JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. BẢNG ĐƠN HÀNG (ORDERS)
CREATE TABLE IF NOT EXISTS public.orders (
    id TEXT PRIMARY KEY,
    order_code TEXT NOT NULL UNIQUE,
    product_id TEXT REFERENCES public.products(id) ON DELETE SET NULL,
    product_title TEXT,
    product_price BIGINT,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    status TEXT DEFAULT 'pending',
    payment_method TEXT DEFAULT 'vietqr',
    transaction_id TEXT,
    license_key TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE
);

-- 3. BẢNG BẢN QUYỀN (LICENSES)
CREATE TABLE IF NOT EXISTS public.licenses (
    id TEXT PRIMARY KEY,
    key TEXT NOT NULL UNIQUE,
    order_code TEXT,
    product_id TEXT,
    customer_email TEXT NOT NULL,
    download_count INT DEFAULT 0,
    max_downloads INT DEFAULT 5,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. BẢNG CẤU HÌNH HỆ THỐNG (SETTINGS)
CREATE TABLE IF NOT EXISTS public.settings (
    id TEXT PRIMARY KEY DEFAULT 'default',
    bank_account TEXT DEFAULT '19036888899999',
    bank_name TEXT DEFAULT 'Techcombank',
    account_name TEXT DEFAULT 'NGUYEN STORE OWNER',
    auto_approve_qr BOOLEAN DEFAULT true,
    desktop_notify BOOLEAN DEFAULT true,
    auto_zip_exclude BOOLEAN DEFAULT true,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- BẬT ROW LEVEL SECURITY (RLS) & PHÂN QUYỀN TRUY CẬP
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Xóa các policy cũ nếu có trước khi tạo mới
DROP POLICY IF EXISTS "Allow public read access on published products" ON public.products;
DROP POLICY IF EXISTS "Allow service role full access on products" ON public.products;
DROP POLICY IF EXISTS "Allow public create orders" ON public.orders;
DROP POLICY IF EXISTS "Allow service role full access on orders" ON public.orders;
DROP POLICY IF EXISTS "Allow public read licenses" ON public.licenses;
DROP POLICY IF EXISTS "Allow service role full access on licenses" ON public.licenses;
DROP POLICY IF EXISTS "Allow public read settings" ON public.settings;
DROP POLICY IF EXISTS "Allow service role full access on settings" ON public.settings;

-- Tạo Policies
CREATE POLICY "Allow public read access on published products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Allow service role full access on products" ON public.products FOR ALL USING (true);

CREATE POLICY "Allow public create orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow service role full access on orders" ON public.orders FOR ALL USING (true);

CREATE POLICY "Allow public read licenses" ON public.licenses FOR SELECT USING (true);
CREATE POLICY "Allow service role full access on licenses" ON public.licenses FOR ALL USING (true);

CREATE POLICY "Allow public read settings" ON public.settings FOR SELECT USING (true);
CREATE POLICY "Allow service role full access on settings" ON public.settings FOR ALL USING (true);

-- Khởi tạo cài đặt mặc định
INSERT INTO public.settings (id, bank_account, bank_name, account_name, auto_approve_qr, desktop_notify, auto_zip_exclude)
VALUES ('default', '19036888899999', 'Techcombank', 'NGUYEN STORE OWNER', true, true, true)
ON CONFLICT (id) DO NOTHING;
