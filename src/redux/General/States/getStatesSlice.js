import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    states: [],
    loadingStates: false,
};

const getStatesSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {
      setStates: (state, action) => {
        state.states = action.payload;
      },
    },
});

  /**
 * Actions
 */
export const {
    setStates,
} = getStatesSlice.actions;
  
  /**
   * Reducers
   */
export const getStatesReducer = getStatesSlice.reducer;