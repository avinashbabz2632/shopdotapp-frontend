import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    loadingStates: false,
};

const getCategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      setCategories: (state, action) => {
        state.categories = action.payload;
      },
    },
});

  /**
 * Actions
 */
export const {
  setCategories,
} = getCategorySlice.actions;
  
  /**
   * Reducers
   */
export const getCategoryReducer = getCategorySlice.reducer;