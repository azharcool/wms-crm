/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage/session";
import bundle from "./catalog/bundleSlice";

import brand from "./catalog/brandSlice";
import category from "./catalog/categorySlice";
import product from "./catalog/productSlice";
import common from "./common/common";
import theme from "./darktheme/customtheme";
import permissions from "./permissions/permissions";
import roles from "./roles/roles";
import screens from "./screen/screen";
import team from "./team/team";
import user from "./user/auth";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducer = combineReducers({
  user,
  team,
  screens,
  permissions,
  roles,
  common,
  theme,
  product,
  bundle,
  category,
  brand
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { persistor, store };
