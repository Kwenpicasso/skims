import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './redux/CartReducer'
import WishlistReducer from './redux/WishlistReducer'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import {
  persistStore,

  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'




const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'wish'],
};
const reducers = combineReducers({
  cart: CartReducer,
    wish: WishlistReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  
})