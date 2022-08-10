/**
 * Stores Selected Label Id(=Label key)
 */
import React from 'react';

type SelectedIdState = {
    [id: number]: boolean
};
type SelectedIdAction =
| { type: 'set', id: number, selected: boolean}
| { type: 'removeAll', ids: number[] }
| { type: 'clear' }

const reducer = (state: SelectedIdState, action: SelectedIdAction) => {
    switch (action.type) {
        case 'set':
            state[action.id] = action.selected;
            return {
                ...state
            };
        case 'removeAll':
            for (const id of action.ids)
                delete state[id];
            return {
                ...state
            };
        case 'clear':
            return {};
        default:
            return state;
    }
};

type SelectedIdDispatch = React.Dispatch<SelectedIdAction>;
const SelectedIdStateContext = React.createContext<SelectedIdState | null>(null);
const SelectedIdDispatchContext = React.createContext<SelectedIdDispatch | null>(null);

const SelectedIdProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = React.useReducer<typeof reducer>(reducer, {})
    /**
    const callback = React.useCallback((action: SelectedIdAction) => {
        dispatch(action);
    }, [state]);
     */
    return (
        <SelectedIdStateContext.Provider value={state}>
            <SelectedIdDispatchContext.Provider value={dispatch}>
                {children}
            </SelectedIdDispatchContext.Provider>
        </SelectedIdStateContext.Provider>
    );
};

const useSelectedIdState = () => {
    const state = React.useContext(SelectedIdStateContext);
    if (!state) throw new Error('Cannot find LabelListProvider');
    return state;
};

const useSelectedIdDispatch = () => {
    const dispatch = React.useContext(SelectedIdDispatchContext);
    if (!dispatch) throw new Error('Cannot find LabelListProvider');
    return dispatch;
};

export { SelectedIdProvider, useSelectedIdState, useSelectedIdDispatch };
export type { SelectedIdState };