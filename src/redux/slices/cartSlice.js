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
        
        state.totalPrice = state.items.reduce((sum, item) => sum + (item.count * item.price), 0);
      },

      removeItem(state, action) {
        let item = state.items.find(item => item.id === action.payload.id);
        if(item.count > 0) {
          item.count--;
        }
        
        if(state.totalPrice > 0) {
          state.totalPrice -= item.price;
        } else {
          return;
        }               
      },
  
      clearItems(state)  {
        state.items = [];
        state.totalPrice = 0;        
      },
    },
  });

  export const selectCart = (state) => state.cart;
  
  export const { addItem, removeItem, clearItems } = cartSlice.actions;  
  export default cartSlice.reducer;  
  
  
  
  
  