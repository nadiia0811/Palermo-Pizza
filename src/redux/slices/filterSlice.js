import { createSlice } from '@reduxjs/toolkit';

const initialState = {  //state = filter
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: 'popularity', 
    sortProp: 'rating'
  }
};

export const filterSlice = createSlice({  //'filter' in store
  name: 'filters',
  initialState,  //{categoryId: 0, sort: ...}
  reducers: { //it's an actions object   
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },

    setSortType: (state, action) => {
      state.sortType = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
});

export const { setCategoryId, setSortType, setCurrentPage } = filterSlice.actions;  //destruction
export default filterSlice.reducer;   //filterSlice.reducer - filterSlice




