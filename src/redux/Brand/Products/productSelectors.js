export const selectProductFilter = (state) => state.brandProduct.productFilter;

export const selectProductCategory = (state) =>
    state.brandProduct.productCatOptions;

export const selectProductTags = (state) =>
    state.brandProduct.productTagOptions;

export const selectStockOptions = (state) => state.brandProduct.stockOptions;

export const selectBrandProductList = (state) => state.brandProduct.brandProductList;

export const selectProductCatFilter = (state) => state.brandProduct.productCatFilter;

export const selectProductTagFilter = (state) => state.brandProduct.productTagFilter;

export const selectStockFilter = (state) => state.brandProduct.stockFilter;

export const selectProductStatusFilter = (state) => state.brandProduct.productStatusFilter;

export const selectProductDetails = (state) => state.brandProduct.productDetails;
