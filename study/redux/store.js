import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from "./Favorites"

 const store = configureStore({
  reducer: {
    favoriteContents : favoritesReducer
  }
});

export default store;