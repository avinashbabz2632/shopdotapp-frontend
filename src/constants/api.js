const BASE_URL = `https://dev.backend.shopdotapp.com/api/v1`;

// Auth
export const REGISTER = `${BASE_URL}/auth/signup/`;
export const VERIFICATION_EMAIL = `${BASE_URL}/auth/verification/send-mail`;
export const VERIFY_USER = `${BASE_URL}/auth/verify`;
export const SIGN_IN = `${BASE_URL}/auth/signin`;
export const REFRESH_TOKEN = `${BASE_URL}/auth/refresh-token`;
export const LOGOUT = `${BASE_URL}/auth/logout`;
export const CHANGE_PASSWORD = (id) =>
  `${BASE_URL}/auth/user/${id}/change-password`;

// User
export const USER_ROLE = `${BASE_URL}/user/roles`;
export const USER_PLATFORM = `${BASE_URL}/user/platform`;
export const SHOPIFY = `${BASE_URL}/platform/shopify-integration`;
export const UPLOAD_IMAGE = `${BASE_URL}/auth/upload-image`;

// Settings
export const RETAIL_PROFILE = `${BASE_URL}/user/retailer-profile`;

// Brand
export const PLATFORM = `${BASE_URL}/platform`;
export const BRAND_PROFILE = `${BASE_URL}/user/brand-profile`;
export const BRAND_AS_CUSTOMER = `${BASE_URL}/payment/create-brand-as-customer`;
export const EXTERNAL_ACCOUNT = `${BASE_URL}/payment/customer/external-account`;
export const PAYMENT_CUSTOMER = `${BASE_URL}/payment/customer`;
export const UPDATE_SHIPPING = `${BASE_URL}/user/brand-shipping`;
export const SYNC_PRODUCT = `${BASE_URL}/shopify/sync-product`;
export const PREFERENCES = `${BASE_URL}/brand/setting/preferences`;

// Product
export const PRODUCT_LIST = `${BASE_URL}/brand/product/list`;

// Common
export const CATEGORY = `${BASE_URL}/platform/category`;
export const VALUES = `${BASE_URL}/platform/values`;

// Order
export const LISTORDER = `${BASE_URL}/brand/orders`;
export const ORDERDETAILS = `${BASE_URL}/order/details`;
