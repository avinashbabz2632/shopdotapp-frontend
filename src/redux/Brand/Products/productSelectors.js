export const selectProductFilter = (state) => state.brandProduct.productFilter;

export const selectProductCategory = (state) =>
  state.brandProduct.productCatOptions;

export const selectProductTags = (state) =>
  state.brandProduct.productTagOptions;

export const selectStockOptions = (state) => state.brandProduct.stockOptions;

export const selectProduct = (state) => state.brandProduct;
