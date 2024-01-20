import { configureStore } from "@reduxjs/toolkit";
import { autoCatalog } from "./src/redux/sliceCarCatalog";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer: {
    auto: autoCatalog,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
  devTools: import.meta.env.MODE === "development",
});

export const persistore = persistStore(store);
