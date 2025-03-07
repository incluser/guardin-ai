import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./slices/TaskSlice";
export const store = configureStore({
  reducer: {
    tasks: TaskReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
