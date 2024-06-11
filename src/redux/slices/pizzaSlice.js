import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (params, thunkAPI) => {
    const { category, sort, currentPage, search } = params; 
    const { data } = await axios.get(`https://63b32a175901da0ab37909d9.mockapi.io/items?page=${currentPage}&limit=3&${category}${search}${sort}&order=asc`);
    return data; 
  }
); 


const initialState = {  
  items: [],
};


export const pizzaSlice = createSlice({  
  name: 'pizzas',
  initialState,  
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {  //for createAsyncThunc 
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      console.log(state.items)
      console.log("state.items")
    });
  }
});

export const { setPizzas } = pizzaSlice.actions;

//redusers export by default
export default pizzaSlice.reducer;
