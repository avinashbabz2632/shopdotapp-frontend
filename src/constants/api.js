const BASE_URL = `https://dev.backend.shopdotapp.com/api/v1`;
// const BASE_URL = `http://127.0.0.1:3002/api/v1`;

// Auth
export const REGISTER = `${BASE_URL}/auth/signup/`;
export const VERIFICATION_EMAIL = `${BASE_URL}/auth/verification/send-mail`;
export const VERIFY_USER = `${BASE_URL}/auth/verify`;
export const SIGN_IN = `${BASE_URL}/auth/signin`;
export const REFRESH_TOKEN = `${BASE_URL}/auth/refresh-token`;
export const LOGOUT = `${BASE_URL}/auth/signout`;
export const CHANGE_PASSWORD = (id) =>
  `${BASE_URL}/auth/user/${id}/change-password`;
export const RESET_PASSWORD = (id) =>
  `${BASE_URL}/auth/user/${id}/reset-password`;
export const FORGOTEMAILVARIFICATION = `${BASE_URL}/auth/send-reset-link`;
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
export const USER_BRAND_PROFILE = (id) =>
  `${BASE_URL}/user/brand-profile/${id}`;
export const BRAND_AS_CUSTOMER = `${BASE_URL}/payment/create-brand-as-customer`;
export const EXTERNAL_ACCOUNT = `${BASE_URL}/payment/customer/external-account`;
export const PAYMENT_CUSTOMER = `${BASE_URL}/payment/customer`;
export const BRAND_SHIPPING = `${BASE_URL}/user/brand-shipping`;
export const BRAND_SHIPPING_TIMES = `${BASE_URL}/platform/shipping-times`;
export const SYNC_PRODUCT_ALL = (id) =>
  `${BASE_URL}/shopify/sync-all-product?&user_id=${id}`;
export const SYNC_PRODUCT = `${BASE_URL}/shopify/sync-all-product`;
export const SYNC_SINGLE_PRODUCT = `${BASE_URL}/shopify/sync-product`;
export const PREFERENCES = `${BASE_URL}/brand/setting/preferences`;
export const NOTIFICATION = `${BASE_URL}/brand/setting/notifications`;
export const DISCONNECT_SHOPIFY = `${BASE_URL}/shopify/shopify-remove`;

// Retailer
export const RETAILER_PROFILE = `${BASE_URL}/user/retailer-profile`;

// Product
export const PRODUCT_LIST = `${BASE_URL}/brand/product/list`;
export const DOWNLOAD_PRODUCT = `${BASE_URL}/brand/product/download`;
export const UPLOAD_PRODUCT = `${BASE_URL}/brand/product/upload`;
export const PRODUCT_TAGS = `${BASE_URL}/brand/product-tags`;
export const UPDATE_PRODUCT_STATUS = `${BASE_URL}/product/status`;
export const PRODUCT_CATEGORIES = (id) =>
  `${BASE_URL}/brand/product/category/${id}`;
export const PRODUCT_DETAILS = (product_id) =>
  `${BASE_URL}/brand/product/${product_id}`;
export const EDIT_PRODUCT_DETAILS = (product_id) =>
  `${BASE_URL}/brand/product/${product_id}`;

// Common
export const CATEGORY = `${BASE_URL}/platform/category`;
export const VALUES = `${BASE_URL}/platform/values`;

// Order
export const LISTORDER = `${BASE_URL}/brand/orders`;
export const ORDERDETAILS = `${BASE_URL}/order/details`;

// General
export const COUNTRIES = `${BASE_URL}/countries`;
export const STATES = (id) => `${BASE_URL}/countries/${id}/states`;

// export const PRODUCT_TAGS = `${BASE_URL}/brand/product-tags`;
// export const PRODUCT_CATEGORIES = `${BASE_URL}/brand/product/category/0`;
