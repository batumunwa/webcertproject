import { configureStore } from '@reduxjs/toolkit'
//rename this acc to your slice name
import counterSlice from './counterSlice'
// remove below 1 line if you don't have API slice
import { movieApi } from './APISlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // remove below 1 line if you don't have API slice
    [movieApi.reducerPath]: movieApi.reducer,
  },
  // remove below 2 lines if you don't have API slice
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})

setupListeners(store.dispatch)