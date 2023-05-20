import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    retailerBrandProductsList: [],
}

const retailerBrandProductsSlice = createSlice({
    name: 'retailerBrandProductsSlice',
    initialState,
    reducers: {
        setRetailerBrandProductsList: (state, action) => {
            state.retailerBrandProductsList = action.payload;
        }
    }
});

/**
 * Actions
 */
export const {setRetailerBrandProductsList} = retailerBrandProductsSlice.actions;

/**
 * Reducer
 */
export const retailerProductReducer = retailerBrandProductsSlice.reducer;

