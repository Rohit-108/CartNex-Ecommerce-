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
        price: product.price,
        description: product.description // Set default quantity
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (wishItem) => wishItem.id !== action.payload.id
      );
    },
    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToIncrease = state.items.find(
        (wishItem) => wishItem.id === id
      );
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;

      }
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (wishItem) => wishItem.id === id
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;

      }
    },
    clearWishlist: (state) => {

      state.items = [];
      localStorage.removeItem('wishlist');
    }
  },
});

export const { addItemToWishlist, increaseItemQuantity, decreaseItemQuantity, removeItem, clearWishlist } = wishlistSlice.actions;

export const selectWishlist = ({ wishlist }) => wishlist.items;

export default wishlistSlice.reducer;
