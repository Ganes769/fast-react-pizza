import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import userCratReducer from './features/cart/cartSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: userCratReducer,
  },
});

export default store;
