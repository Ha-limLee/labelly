import React from 'react';
import Label from 'components/Label';

type LabelListState = {
    [id: number] : JSX.Element;
};

type LabelListAction =
| { type: 'add', id:number, element: React.FunctionComponentElement<typeof Label> }
| { type: 'removeAll', ids: number[] }

const reducer = (state: LabelListState, action: LabelListAction) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                [action.id] : action.element
            };
        case 'removeAll':
            const ret = {...state};
            for (let id of action.ids)
                delete ret[id];
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