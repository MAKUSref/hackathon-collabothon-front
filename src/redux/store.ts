import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './session/sessionSlice';
// import { preloadToken, sessionListenerMiddleware, themeListenerMiddleware } from './middleware';
// import { apiSlice } from './api/apiSlice';
import { baseApi } from './api/baseApi';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  // preloadedState: { session: preloadToken() },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(
      // sessionListenerMiddleware.middleware,
      baseApi.middleware,
      // themeListenerMiddleware.middleware
    )
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
