import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "app/store";

export type LABEL_MODE = "SELECT" | "CREATE";

interface ModeState {
    value: LABEL_MODE;
}

const initialState: ModeState = {
    value: "SELECT",
}

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        set: (state, { payload }: PayloadAction<LABEL_MODE>) => {
            state.value = payload;
        },
    }
});

export const { set } = modeSlice.actions;

export const selectMode = (state: RootState) => state.mode.value;

export default modeSlice.reducer;