import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorieSlice = createSlice({
  name: 'categorie',
  initialState,
  reducers: {
    status: (state) => {
      if (!state.categories) console.log('Under construction');
    },
  },
});

export const { status } = categorieSlice.actions;

export default categorieSlice.reducer;
