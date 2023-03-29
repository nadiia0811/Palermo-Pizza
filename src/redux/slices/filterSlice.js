import { createSlice } from '@reduxjs/toolkit';

const initialState = {  //state
  categoryId: 0,
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
    }
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions;  //destruction
export default filterSlice.reducer;   //filterSlice.reducer - filterSlice




