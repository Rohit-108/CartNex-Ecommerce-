import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;

     
      state.items.push({
        id: product.id,
        title: product.title,
        image: product.mainImage || 'default_image.jpg',  
        quantity: 1,  
        price: product.price
      });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToIncrease = state.items.find(
        (cartItem) => cartItem.id === id
      );
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const itemToDecrease = state.items.find(
        (cartItem) => cartItem.id === id
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectItemsInCart = ({ cart }) => cart.items;

export const selectTotalPrice = ({ cart }) => {
  return cart.items.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);
};

export const { addItem, removeFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
