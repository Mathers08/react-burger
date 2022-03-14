import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {auth} from "./reducers";

const rootReducer = combineReducers({
  auth
})

export const setupStore = () => configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState["dispatch"];
