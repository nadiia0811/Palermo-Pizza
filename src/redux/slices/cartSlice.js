import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
   items: [],
   totalPrice: 0,
  };
  
  export const cartSlice = createSlice({  /** cartSlice contains cart logic: adding pizzas to the cart,
                                           adding price */
    name: 'cart',
    initialState,  
    reducers: {   
      /* addItem(state, action)  {
        state.items.push(action.payload);
        state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0);
      }, */

      addItem(state, action)  {
        const findItem = state.items.find(item => item.id === action.payload.id);
        if(findItem) {
          findItem.count++;      
        } else {
          state.items.push({
            ...action.payload,
            count: 1
          });         
        }
        state.totalPrice += action.payload.price;
      },

      removeItem(state, action)  {
        state.items.filter((item) => item.id !== action.payload);
        if(state.items.length > 0) {
          state.totalPrice -= action.payload.price;
        }
      },
  
      clearItems(state)  {
        state.items = [];
        state.totalPrice = 0;
      },
    },
  });
  
  export const { addItem, removeItem, clearItems } = cartSlice.actions;  
  export default cartSlice.reducer;  
  
  
  
  
  