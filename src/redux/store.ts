import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./session/sessionSlice";
import { baseApi } from "./api/baseApi";
import {
  preloadSession,
  saveCookieMiddleware,
  sessionListenerMiddleware,
} from "./middleware";
import { globalGoalsApi } from "./api/globalGoalsApi";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [globalGoalsApi.reducerPath]: globalGoalsApi.reducer,
  },
  preloadedState: { session: preloadSession() },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      baseApi.middleware,
      sessionListenerMiddleware.middleware,
      saveCookieMiddleware.middleware,
      globalGoalsApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
