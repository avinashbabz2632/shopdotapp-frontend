import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countries: [],
    loadingCountries: false,
};

const getCountriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
      setCountries: (state, action) => {
        state.countries = action.payload;
      },
    },
});

  /**
 * Actions
 */
export const {
    setCountries,
} = getCountriesSlice.actions;
  
  /**
   * Reducers
   */
export const getCountriesReducer = getCountriesSlice.reducer;