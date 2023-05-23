import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    retailerBrandProductsList: [],
    retailerBrandValuesList: [],
}

const retailerBrandProductsSlice = createSlice({
    name: 'retailerBrandProductsSlice',
    initialState,
    reducers: {
        setRetailerBrandProductsList: (state, action) => {
            state.retailerBrandProductsList = action.payload;
        },
        setRetailerBrandValuesList: (state, action) => {
            state.retailerBrandValuesList = action.payload;
        }
    }
});

/**
 * Actions
 */
export const {setRetailerBrandProductsList, setRetailerBrandValuesList} = retailerBrandProductsSlice.actions;

/**
 * Reducer
 */
export const retailerProductReducer = retailerBrandProductsSlice.reducer;

