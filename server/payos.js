import { PayOS } from '@payos/node';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to load env from server/.env if exists
export function getPayOSConfig() {
  const envPath = path.join(__dirname, '.env');
  let envConfig = {};
  if (fs.existsSync(envPath)) {
    const raw = fs.readFileSync(envPath, 'utf8');
    raw.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || '';
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        envConfig[key] = val.trim();
      }
    });
  }

  // Also check store.json settings
  let storeSettings = {};
  try {
    const storePath = path.resolve('data/store.json');
    if (fs.existsSync(storePath)) {
      const db = JSON.parse(fs.readFileSync(storePath, 'utf8'));
      storeSettings = db.settings?.payos || {};
    }
  } catch (_) {}

  const clientId = process.env.PAYOS_CLIENT_ID || envConfig.PAYOS_CLIENT_ID || storeSettings.clientId || '';
  const apiKey = process.env.PAYOS_API_KEY || envConfig.PAYOS_API_KEY || storeSettings.apiKey || '';
  const checksumKey = process.env.PAYOS_CHECKSUM_KEY || envConfig.PAYOS_CHECKSUM_KEY || storeSettings.checksumKey || '';

  return {
    clientId,
    apiKey,
    checksumKey,
    isConfigured: Boolean(clientId && apiKey && checksumKey)
  };
}

let payosInstance = null;
let lastConfigHash = '';

export function getPayOSClient() {
  const config = getPayOSConfig();
  const hash = `${config.clientId}:${config.apiKey}:${config.checksumKey}`;
  
  if (!config.isConfigured) {
    return null;
  }

  if (!payosInstance || lastConfigHash !== hash) {
    payosInstance = new PayOS({
      clientId: config.clientId,
      apiKey: config.apiKey,
      checksumKey: config.checksumKey
    });
    lastConfigHash = hash;
  }

  return payosInstance;
}

/**
 * Tạo link thanh toán PayOS VietQR
 */
export async function createPaymentLink({ orderCode, amount, description, buyerName, buyerEmail, buyerPhone, returnUrl, cancelUrl }) {
  const payos = getPayOSClient();
  if (!payos) {
    throw new Error('PayOS chưa được cấu hình Client ID, API Key và Checksum Key.');
  }

  // PayOS requires a numeric orderCode (integer)
  const numericCode = typeof orderCode === 'number' 
    ? orderCode 
    : parseInt(String(orderCode).replace(/\D/g, '').slice(-9), 10) || Math.floor(100000 + Math.random() * 900000);

  // Description max 25 characters, no special chars
  const cleanDesc = (description || `KWeb ${numericCode}`).slice(0, 25);

  const paymentData = {
    orderCode: numericCode,
    amount: Math.round(amount),
    description: cleanDesc,
    buyerName: (buyerName || '').slice(0, 50),
    buyerEmail: (buyerEmail || '').slice(0, 50),
    buyerPhone: (buyerPhone || '').slice(0, 15),
    cancelUrl: cancelUrl || 'http://localhost:3000/#cancel',
    returnUrl: returnUrl || 'http://localhost:3000/#success'
  };

  const result = await payos.paymentRequests.create(paymentData);
  return {
    ...result,
    numericOrderCode: numericCode
  };
}

/**
 * Kiểm tra trạng thái thanh toán từ PayOS
 */
export async function getPaymentStatus(numericOrderCode) {
  const payos = getPayOSClient();
  if (!payos) {
    return null;
  }

  try {
    const data = await payos.paymentRequests.get(numericOrderCode);
    return {
      isPaid: data.status === 'PAID',
      status: data.status,
      data
    };
  } catch (err) {
    console.error(`PayOS getPaymentStatus error for ${numericOrderCode}:`, err.message);
    return null;
  }
}

/**
 * Xác minh tính hợp lệ của Webhook gửi từ PayOS
 */
export function verifyWebhook(webhookBody) {
  const payos = getPayOSClient();
  if (!payos) return null;

  try {
    const verifiedData = payos.webhooks.verify(webhookBody);
    return verifiedData;
  } catch (err) {
    console.error('PayOS verifyWebhook signature failed:', err.message);
    return null;
  }
}
