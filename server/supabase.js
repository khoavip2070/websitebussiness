import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load .env automatically if present
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [k, ...v] = trimmed.split('=');
        if (k && v.length) {
          const key = k.trim();
          if (!process.env[key]) {
            process.env[key] = v.join('=').trim();
          }
        }
      }
    }
  }
} catch (_) {}

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY || '';
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || '';

let supabase = null;
let isConnected = false;
let areTablesReady = false;

try {
  supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
} catch (e) {
  console.error('[Supabase] Init error:', e.message);
}

// Check health and tables
export async function checkSupabaseStatus() {
  if (!supabase) return { connected: false, tablesReady: false };
  try {
    const { data, error } = await supabase.from('products').select('id').limit(1);
    if (!error) {
      isConnected = true;
      areTablesReady = true;
      return { connected: true, tablesReady: true, url: SUPABASE_URL };
    }
    if (error.code === 'PGRST205') {
      // Schema cache missing table (need to run schema.sql)
      isConnected = true;
      areTablesReady = false;
      return { 
        connected: true, 
        tablesReady: false, 
        message: 'Đã kết nối Supabase! Cần chạy schema.sql trong Supabase SQL Editor.',
        url: SUPABASE_URL 
      };
    }
    return { connected: false, tablesReady: false, error: error.message };
  } catch (err) {
    return { connected: false, tablesReady: false, error: err.message };
  }
}

// Auto sync local products to Supabase if Supabase tables are ready and empty
export async function seedProductsToSupabase(localProducts) {
  if (!supabase || !localProducts || localProducts.length === 0) return;
  try {
    const { data, error } = await supabase.from('products').select('id');
    if (error || !data) return;

    if (data.length === 0) {
      console.log('[Supabase] Đang đồng bộ sản phẩm từ local sang Supabase Cloud...');
      const records = localProducts.map(p => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        tagline: p.tagline,
        description: p.description,
        price: p.price,
        original_price: p.originalPrice,
        category: p.category,
        tech_stack: p.techStack,
        thumbnail: p.thumbnail,
        gallery: p.gallery,
        demo_url: p.demoUrl,
        status: p.status,
        download_file_name: p.downloadFileName,
        file_size: p.fileSize,
        rating: p.rating || 5.0,
        reviews_count: p.reviewsCount || 0,
        sales_count: p.salesCount || 0,
        views_count: p.viewsCount || 0,
        features: p.features || [],
        pages_count: p.pagesCount || 1,
        lighthouse: p.lighthouse || {},
        included_assets: p.includedAssets || [],
        tags: p.tags || []
      }));

      const { error: insertErr } = await supabase.from('products').insert(records);
      if (insertErr) {
        console.error('[Supabase] Lỗi khi seed sản phẩm:', insertErr.message);
      } else {
        console.log(`[Supabase] Đã đồng bộ thành công ${records.length} sản phẩm lên Supabase Cloud!`);
      }
    }
  } catch (e) {
    console.error('[Supabase] Seed check error:', e.message);
  }
}

// Fetch products from Supabase
export async function getProductsFromSupabase() {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from('products').select('*');
    if (error || !data) return null;
    return data.map(p => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      tagline: p.tagline,
      description: p.description,
      price: Number(p.price),
      originalPrice: p.original_price ? Number(p.original_price) : undefined,
      category: p.category,
      techStack: p.tech_stack || [],
      thumbnail: p.thumbnail,
      gallery: p.gallery || [],
      demoUrl: p.demo_url,
      status: p.status,
      downloadFileName: p.download_file_name,
      fileSize: p.file_size,
      rating: Number(p.rating) || 5.0,
      reviewsCount: p.reviews_count || 0,
      salesCount: p.sales_count || 0,
      viewsCount: p.views_count || 0,
      features: p.features || [],
      pagesCount: p.pages_count || 1,
      lighthouse: p.lighthouse || {},
      includedAssets: p.included_assets || [],
      tags: p.tags || [],
      createdAt: p.created_at
    }));
  } catch (err) {
    return null;
  }
}

// Upsert Product to Supabase
export async function saveProductToSupabase(p) {
  if (!supabase) return null;
  try {
    const record = {
      id: p.id,
      slug: p.slug,
      title: p.title,
      tagline: p.tagline,
      description: p.description,
      price: p.price,
      original_price: p.originalPrice || null,
      category: p.category,
      tech_stack: p.techStack || [],
      thumbnail: p.thumbnail,
      gallery: p.gallery || [],
      demo_url: p.demoUrl || '',
      status: p.status || 'published',
      download_file_name: p.downloadFileName || '',
      file_size: p.fileSize || '0 KB',
      rating: p.rating || 5.0,
      reviews_count: p.reviewsCount || 0,
      sales_count: p.salesCount || 0,
      views_count: p.viewsCount || 0,
      features: p.features || [],
      pages_count: p.pagesCount || 1,
      lighthouse: p.lighthouse || {},
      included_assets: p.includedAssets || [],
      tags: p.tags || []
    };
    const { error } = await supabase.from('products').upsert(record, { onConflict: 'id' });
    if (error) console.error('[Supabase] Save product error:', error.message);
    return !error;
  } catch (e) {
    return false;
  }
}

// Delete Product from Supabase
export async function deleteProductFromSupabase(id) {
  if (!supabase) return null;
  try {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) console.error('[Supabase] Delete product error:', error.message);
    return !error;
  } catch (e) {
    return false;
  }
}

// Fetch Orders from Supabase
export async function getOrdersFromSupabase() {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if (error || !data) return null;
    return data.map(o => ({
      id: o.id,
      orderCode: o.order_code,
      productId: o.product_id,
      productTitle: o.product_title,
      productPrice: Number(o.product_price),
      customerName: o.customer_name,
      customerEmail: o.customer_email,
      customerPhone: o.customer_phone || '',
      status: o.status,
      paymentMethod: o.payment_method,
      transactionId: o.transaction_id,
      licenseKey: o.license_key,
      createdAt: o.created_at,
      completedAt: o.completed_at
    }));
  } catch (e) {
    return null;
  }
}

// Fetch Licenses from Supabase
export async function getLicensesFromSupabase() {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from('licenses').select('*');
    if (error || !data) return null;
    return data.map(l => ({
      id: l.id,
      key: l.key,
      orderCode: l.order_code,
      productId: l.product_id,
      customerEmail: l.customer_email,
      downloadCount: l.download_count,
      maxDownloads: l.max_downloads,
      isActive: l.is_active,
      createdAt: l.created_at
    }));
  } catch (e) {
    return null;
  }
}

// Save Order to Supabase
export async function saveOrderToSupabase(order) {
  if (!supabase) return null;
  try {
    const record = {
      id: order.id,
      order_code: order.orderCode,
      product_id: order.productId,
      product_title: order.productTitle,
      product_price: order.productPrice,
      customer_name: order.customerName,
      customer_email: order.customerEmail,
      customer_phone: order.customerPhone,
      status: order.status || 'pending',
      payment_method: order.paymentMethod || 'vietqr',
      transaction_id: order.transactionId,
      license_key: order.licenseKey
    };
    const { data, error } = await supabase.from('orders').insert(record);
    if (error) console.error('[Supabase] Save order error:', error.message);
    return !error;
  } catch (e) {
    return false;
  }
}

// Update Order in Supabase
export async function updateOrderInSupabase(orderCode, updates) {
  if (!supabase) return null;
  try {
    const record = {};
    if (updates.status) record.status = updates.status;
    if (updates.transactionId) record.transaction_id = updates.transactionId;
    if (updates.completedAt) record.completed_at = updates.completedAt;

    const { error } = await supabase.from('orders').update(record).eq('order_code', orderCode);
    if (error) console.error('[Supabase] Update order error:', error.message);
    return !error;
  } catch (e) {
    return false;
  }
}

// Save License to Supabase
export async function saveLicenseToSupabase(license) {
  if (!supabase) return null;
  try {
    const record = {
      id: license.id,
      key: license.key,
      order_code: license.orderCode,
      product_id: license.productId,
      customer_email: license.customerEmail,
      download_count: license.downloadCount || 0,
      max_downloads: license.maxDownloads || 5,
      is_active: license.isActive !== false
    };
    const { error } = await supabase.from('licenses').insert(record);
    if (error) console.error('[Supabase] Save license error:', error.message);
    return !error;
  } catch (e) {
    return false;
  }
}

// Verify License in Supabase
export async function verifyLicenseInSupabase(key) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase.from('licenses').select('*').eq('key', key).single();
    if (error || !data) return null;
    return {
      id: data.id,
      key: data.key,
      orderCode: data.order_code,
      productId: data.product_id,
      customerEmail: data.customer_email,
      downloadCount: data.download_count,
      maxDownloads: data.max_downloads,
      isActive: data.is_active,
      createdAt: data.created_at
    };
  } catch (e) {
    return null;
  }
}

export { supabase };
