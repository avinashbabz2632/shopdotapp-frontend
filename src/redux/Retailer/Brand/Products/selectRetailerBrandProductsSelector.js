export const selectRetailerBrandProductsList = (state) =>
  state.retailerProduct.retailerBrandProductsList;

export const selectRetailerBrandValuesList = (state) =>
  state.retailerProduct.retailerBrandValuesList;

export const selectRetailerBrandValuesFilter = (state) =>
  state.retailerProduct.retailerBrandValuesFilter;

export const selectRetailerPricingFilter = (state) =>
  state.retailerProduct.retailerPricingFilter;

export const selectRetailerStateFilter = (state) =>
  state.retailerProduct.retailerStateFilter;

export const selectRetailerInviteStatusFilter = (state) =>
  state.retailerProduct.retailerInviteStatusFilter;

export const selectSendRetailerNewConnectionRequest = (state) => state.retailerProduct.retailerNewConnectionRequesting;

export const selectRetailerNewConnectionSuccess = (state) => state.retailerProduct.retailerNewConnectionRequestSuccess;

export const selectRetailerNewConnectionError = (state) => state.retailerProduct.retailerNewConnectionRequestError;
