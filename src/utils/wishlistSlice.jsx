import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
        const product = action.payload;
        state.items.push({
            id: product.id,
            title: product.title,
            image: product.mainImage || 'default_image.jpg',  // Fetch the image here
            quantity: 1,
            price:product.price ,
            description:product.description // Set default quantity
          });
    },
    removeItemFromWishlist: (state, action) => {
     
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      
        state.items = [];
        localStorage.removeItem('wishlist');
    }
  },
});

export const { addItemToWishlist, removeItemFromWishlist, clearWishlist } = wishlistSlice.actions;

export const selectWishlist = (wishlist) => wishlist.items;

export default wishlistSlice.reducer;
