import { createSlice } from '@reduxjs/toolkit'



export const WishSlice = createSlice({
  name: 'wish',
  initialState: {
    wish: [],
  },
  reducers: {
   addTooWish: (state,action) => {
    const kwen = state.wish.find((item) => item._id === action.payload._id);
    if (kwen){
        return;
    } else{
        state.wish.push({...action.payload});
    }
    
   },
   removeFromWish: (state, action) => {
    const kwenn= state.wish.filter((item) => item._id !== action.payload._id);
    state.wish = kwenn;
   },
  
   
   cleanWish: (state) => {
    state.wish = [];
   }

  },
});

// Action creators are generated for each case reducer function
export const { addTooWish, removeFromWish, cleanWish } = WishSlice.actions

export default WishSlice.reducer