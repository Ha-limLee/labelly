import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../../app/store';

interface LabelPoint {
    left: number,
    top: number,
}

interface LabelSize {
    width: number,
    height: number,
}

interface LabelSpace extends LabelPoint, LabelSize{
    selected: boolean;
};

interface LabelGroupState {
    [id: number] : LabelSpace;
};

const initialState: LabelGroupState = {};

interface LabelGroupAction {
    add: {id: number, item: LabelSpace};
    move: {id: number, item: LabelPoint};
    modify: {id: number, item: LabelSpace};
    removeSelectedAll: null;
};

// type LabelListAction =
// | { type: 'add', id: number, element: LabelListElement}
// | { type: 'move', id: number, left: number, top: number}
// | { type: 'modify', id: number, left: number, top: number, width: number, height: number }
// | { type: 'removeAll', ids: SelectedIdState }

export const labelGroupSlice = createSlice({
    name: "labelGroup",
    initialState,
    reducers: {
        add: (state, {payload}: PayloadAction<LabelGroupAction["add"]>) => {
            state[payload.id] = payload.item;
        },
        move: (state, {payload}: PayloadAction<LabelGroupAction["move"]>) => { 
            const {left, top} = payload.item;
            const curr = state[payload.id];
            state[payload.id] = {...curr, left, top};
        },
        modify: (state, {payload}: PayloadAction<LabelGroupAction["modify"]>) => {
            state[payload.id] = payload.item;
        },
        removeSelectedAll: (state) => {
            Object.keys(state).map(parseInt).filter(id => state[id].selected).forEach(id => delete state[id]);
        },
    }
});

export const {add, move, modify} = labelGroupSlice.actions;

export const selectLabelGroup = (state: RootState) => state.labelGroup;

export default labelGroupSlice.reducer;