import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../../app/store';
import { createKeyGen } from "features/keyGen";

export interface LabelPoint {
    left: number,
    top: number,
}

export interface LabelSize {
    width: number,
    height: number,
}

export interface LabelSpace extends LabelPoint, LabelSize{ }

export interface LabelState extends LabelSpace {
    selected: boolean;
};

interface LabelGroupState {
    [id: number] : LabelState;
};

const initialState: LabelGroupState = {};

interface LabelGroupAction {
    setLabel: { id: number, item: LabelState };
    setSpace: { id: number, item: LabelSpace };
    move: {id: number, item: LabelPoint};
    select: { id: number };
    unselect: { id: number };
    remove: { id: number };
    removeSelectedAll: null;
};

const keyGen = createKeyGen();

export const labelGroupSlice = createSlice({
    name: "labelGroup",
    initialState,
    reducers: {
        setLabel: (state, { payload }: PayloadAction<LabelGroupAction["setLabel"]>) => {
            state[payload.id] = payload.item;
        },
        setSpace: (state, { payload }: PayloadAction<LabelGroupAction["setSpace"]>) => {
            const { id, item } = payload;
            if (state[id]) {
                state[id] = {
                    selected: state[id]?.selected || false,
                    ...item,
                };
            } else {
                state[id] = { selected: false, ...item };
            }
        },
        move: (state, {payload}: PayloadAction<LabelGroupAction["move"]>) => { 
            const {left, top} = payload.item;
            const curr = state[payload.id];
            state[payload.id] = {...curr, left, top};
        },
        select: (state, {payload}: PayloadAction<LabelGroupAction["select"]>) => {
            state[payload.id].selected = true;
        },
        selectAll: (state) => {
            Object.keys(state)
                .map(x => parseInt(x))
                .forEach(id => (state[id].selected = true));
        },
        unselect: (state, { payload }: PayloadAction<LabelGroupAction["unselect"]>) => {
            state[payload.id].selected = false;
        },
        remove: (state, { payload }: PayloadAction<LabelGroupAction["remove"]>) => {
            const { id } = payload;
            delete state[id];
            keyGen.reuse(id);
        },
        removeSelectedAll: (state) => {
            Object.keys(state)
                .map(x => parseInt(x))
                .filter(id => state[id].selected)
                .forEach(id => {
                    delete state[id];
                    keyGen.reuse(id);
                });
        },
    }
});

export const {setLabel, setSpace, move, select, selectAll, unselect, remove, removeSelectedAll} = labelGroupSlice.actions;

export const selectLabelGroup = (state: RootState) => state.labelGroup;

export const selectKeyGen = (state: RootState) => keyGen;

export default labelGroupSlice.reducer;