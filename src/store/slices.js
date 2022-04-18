import { createSlice } from "@reduxjs/toolkit";

export const listSlices = createSlice({
  name: 'listSlices',
  initialState: {
    items: [],
    item: null,
    id: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchGetRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    
    fetchGetError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    fetchGetSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    
    fetchGetIdRequest: (state, action) => {
      state.id = action.payload;
      state.loading = true;
      state.error = null;
    },
    
    fetchGetIdError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    fetchGetIdSuccess: (state, action) => {
      state.item = action.payload;
      state.loading = false;
      state.error = null;
    }
  }
})

export const {
  fetchGetRequest,
  fetchGetError,
  fetchGetSuccess,
  fetchGetIdRequest,
  fetchGetIdError,
  fetchGetIdSuccess
} = listSlices.actions;

export default listSlices.reducer;