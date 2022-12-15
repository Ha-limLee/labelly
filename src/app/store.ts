import { configureStore } from "@reduxjs/toolkit";
import labelGroupReducer from '../features/Label/LabelGroupSlice';
import modeReducer from '../features/mode/modeSlice';

export const store = configureStore({
    reducer: {
        labelGroup: labelGroupReducer,
        mode: modeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;