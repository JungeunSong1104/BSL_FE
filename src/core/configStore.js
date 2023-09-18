import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import { userSlice } from "./redux/userSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export const configStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export const useAppDispatch = () => useDispatch();

export default configStore;
