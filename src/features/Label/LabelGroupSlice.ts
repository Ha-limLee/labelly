import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../../app/store';
import { useKeyGen } from "features/keyGen";

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

function createGroup() {
    const keyGen = useKeyGen();
    const group: LabelGroupState = {};
    return {
        group,
        addLabel: (item: LabelState) => {
            group[keyGen.get()] = item;
        },
        removeLabel: (id: number) => {
            delete group[id];
            keyGen.reuse(id);
        }
    };
}

const initialState = createGroup();

interface LabelGroupAction {
    addLabel: { item: LabelState };
    setLabel: { id: number, item: LabelState };
    setSpace: { id: number, item: LabelSpace };
    move: {id: number, item: LabelPoint};
    select: { id: number };
    unselect: { id: number };
    removeSelectedAll: null;
};

export const labelGroupSlice = createSlice({
    name: "labelGroup",
    initialState,
    reducers: {
        addLabel: (state, { payload }: PayloadAction<LabelGroupAction["addLabel"]>) => {
            state.addLabel(payload.item);
        },
        setLabel: ({ group }, { payload }: PayloadAction<LabelGroupAction["setLabel"]>) => {
            group[payload.id] = payload.item;
        },
        setSpace: ({ group }, { payload }: PayloadAction<LabelGroupAction["setSpace"]>) => {
            const { id, item } = payload;
            if (group[id]) {
                group[id] = {
                    selected: group[id].selected,
                    ...item,
                };
            } else {
                group[id] = { selected: false, ...item };
            }
        },
        move: ({group}, {payload}: PayloadAction<LabelGroupAction["move"]>) => { 
            const {left, top} = payload.item;
            const curr = group[payload.id];
            group[payload.id] = {...curr, left, top};
        },
        select: ({ group }, {payload}: PayloadAction<LabelGroupAction["select"]>) => {
            group[payload.id].selected = true;
        },
        unselect: ({ group }, { payload }: PayloadAction<LabelGroupAction["unselect"]>) => {
            group[payload.id].selected = false;
        },
        removeSelectedAll: (state) => {
            const { group } = state;
            Object.keys(group)
                .map(parseInt)
                .filter(id => group[id].selected)
                .forEach(id => state.removeLabel(id));
        },
    }
});

export const {setLabel, setSpace, move, select, unselect, removeSelectedAll} = labelGroupSlice.actions;

export const selectLabelGroup = (state: RootState) => state.labelGroup;

export default labelGroupSlice.reducer;