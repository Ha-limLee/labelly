import { configureStore } from "@reduxjs/toolkit";
import labelGroupReducer from '../features/Label/LabelGroupSlice';

export const store = configureStore({
    reducer: {
        labelGroup: labelGroupReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;