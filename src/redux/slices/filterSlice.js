import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {  //state = filter
  //searchValue: ''
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
    setCategoryId (state, action)  {
      state.categoryId = action.payload;
    },

    setSortType: (state, action) => {
      state.sortType = action.payload;
      //console.log(current(state))
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      //console.log(current(state))
    },

      setFilters: (state, action) => {
        state.currentPage = Number(action.payload.currentPage);
        const {name, sortProp} = action.payload;
        state.sortType = {name, sortProp};        
        state.categoryId = Number(action.payload.categoryId);      
    }  
  },
});

export const { setCategoryId, setSortType, setCurrentPage, setFilters } = filterSlice.actions;  //destruction
export default filterSlice.reducer;   //filterSlice.reducer = filterSlice




