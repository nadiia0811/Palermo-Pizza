import { configureStore } from '@reduxjs/toolkit';
import  filter from './slices/filterSlice';  //filter = filterSlice
import cart from './slices/cartSlice';

export const store = configureStore({ //state object
  reducer: {
   filter,  //it's our filterSlice, renamed
   cart,
   
  }
}); 


 