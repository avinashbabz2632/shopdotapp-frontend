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
export const USER_DETAILS = `${BASE_URL}/user/detail`;
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
export const RETAILER_REQUEST = `${BASE_URL}/brand/retailer-requests`;
export const UPDATE_RETAILER_REQUEST = `${BASE_URL}/retailer/request-connection/update`;
export const RETAILER_LIST = `${BASE_URL}/brand/retailers-list`;
export const UPDATE_BRAND_RETAILERS = `${BASE_URL}/brand/assign-product-to-retailer`;
export const UPDATE_BRAND_TAGS = `${BASE_URL}/brand/product/tags`;
export const UPDATE_BRAND_CATEGORIES = `${BASE_URL}/brand/product/categories`;
export const UPDATE_BRAND_VARIENT = `${BASE_URL}/brand/product/variants`;

// Retailer
export const RETAILER_PROFILE = `${BASE_URL}/user/retailer-profile`;
export const RETAILER_BILLING = `${BASE_URL}/retailer/billing`;
export const RETAILER_BRANDS = `${BASE_URL}/retailer/brands`;
export const RETAILER_NOTIFICATION_ALERT = `${BASE_URL}/retailer/alert-notification`;
export const RETAILER_BRAND_VALUES = `${BASE_URL}/general/brand-values`;
export const RETAILER_NEW_CONNECTION_REQUEST = `${BASE_URL}/retailer/request-connection`;
export const RETAILER_BRAND_PROFILE = (id) =>
  `${BASE_URL}/user/brand-profile/${id}`;
export const RETAILER_PRODUCTS = `${BASE_URL}/retailer/brand/product/list`;
export const RETAILER_PRODUCT_DETAILS = (ID) =>
  `${BASE_URL}/retailer/product/${ID}`;
export const BRAND_FILTERS = `${BASE_URL}/retailer/brand/dropdown`;

// Product
export const PRODUCT_LIST = `${BASE_URL}/brand/product/list`;
export const DOWNLOAD_PRODUCT = `${BASE_URL}/brand/product/download`;
export const UPLOAD_PRODUCT = `${BASE_URL}/brand/product/upload`;
export const PRODUCT_TAGS = `${BASE_URL}/brand/product-tags`;
export const UPDATE_PRODUCT_STATUS = `${BASE_URL}/brand/product/status`;
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
export const COUNTRIES = `${BASE_URL}/general/countries`;
export const STATES = (id) => `${BASE_URL}/general/countries/${id}/states`;
export const RETAILER_CATEGORIES = `${BASE_URL}/platform/category`;

//brand retailer request
export const RETAILER_REQUEST_FOR_ACCESS = `${BASE_URL}/brand/retailer-requests`;
export const CONECTED_RETAILER = `${BASE_URL}/brand/connected-retailers`;

//shopify check update
export const SHOPIFY_CHECK_UPDATE = `${BASE_URL}/shopify/check-duplicate`;

// export const PRODUCT_TAGS = `${BASE_URL}/brand/product-tags`;
// export const PRODUCT_CATEGORIES = `${BASE_URL}/brand/product/category/0`;
