export const selectProfileProductFilter = (state) =>
  state.brandRetailerProfile.productFilter;

export const selectProfileProductCategory = (state) =>
  state.brandRetailerProfile.productCatOptions;

export const selectProfileProductTags = (state) =>
  state.brandRetailerProfile.productTagOptions;

export const selectCurrentRetailerProfile = (state) =>
  state.brandRetailerProfile.currentRetailerProfile;
