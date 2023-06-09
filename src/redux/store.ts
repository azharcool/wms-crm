/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage/session";
import brand from "./catalog/brandSlice";
import bundle from "./catalog/bundleSlice";
import category from "./catalog/categorySlice";
import product from "./catalog/productSlice";
import variants from "./catalog/variants/variantsSlice";
import common from "./common/common";
import supplier from "./purchase/supplierSlice";
import adjustmentReason from "./settings/configuration/adjustmentReasonSlice";
import sideDashboard from "./side-dashboard/sideDashboardSlice";
import adjustment from "./stock-control/adjustmentSlice";
import theme from "./theme/themeSlice";
import user from "./user/auth";
import area from "./warehouse/areaSlice";
import location from "./warehouse/locationSlice";
import warehouse from "./warehouse/warehouseSlice";
import zone from "./warehouse/zoneSlice";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducer = combineReducers({
  user,

  common,
  theme,
  product,
  bundle,
  category,
  brand,
  warehouse,
  area,
  location,
  zone,
  sideDashboard,
  supplier,
  variants,
  adjustmentReason,
  adjustment,
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
