import React from 'react';
import Label from 'components/Label';
import { SelectedIdState } from './SelectedIdContext';

type LabelListElement = {
    label: React.FunctionComponentElement<typeof Label>,
    left: number,
    top: number,
    width: number,
    height: number
};

type LabelListState = {
    [id: number] : LabelListElement;
};

type LabelListAction =
| { type: 'add', id: number, element: LabelListElement}
| { type: 'move', id: number, left: number, top: number}
| { type: 'modify', id: number, left: number, top: number, width: number, height: number }
| { type: 'removeAll', ids: SelectedIdState }

const reducer = (state: LabelListState, action: LabelListAction) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                [action.id] : action.element
            };
        case 'move':
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    left: action.left,
                    top: action.top
                }
            };
        case 'modify':
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    left: action.left,
                    top: action.top,
                    width: action.width,
                    height: action.height
                }
            };
        case 'removeAll':
            const ret = {...state};
            for (const id in action.ids) {
                if (action.ids[id]) {
                    delete ret[id];
                }
            }
            return ret;
        default:
            return state;
    }
};

type LabelListDispatch = React.Dispatch<LabelListAction>;
const LabelListStateContext = React.createContext<LabelListState | null>(null);
const LabelListDispatchContext = React.createContext<LabelListDispatch | null>(null);

const LabelListProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = React.useReducer<typeof reducer>(reducer, {});
    return (
        <LabelListStateContext.Provider value={state}>
            <LabelListDispatchContext.Provider value={dispatch}>
                {children}
            </LabelListDispatchContext.Provider>
        </LabelListStateContext.Provider>
    );
};

const useLabelListState = () => {
    const state = React.useContext(LabelListStateContext);
    if (!state) throw new Error('Cannot find LabelListProvider');
    return state;
};

const useLabelListDispatch = () => {
    const dispatch = React.useContext(LabelListDispatchContext);
    if (!dispatch) throw new Error('Cannot find LabelListProvider');
    return dispatch;
};

export { LabelListProvider, useLabelListState, useLabelListDispatch };
export type { LabelListElement };