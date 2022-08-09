/**
 * Stores Selected Label Id(=Label key)
 */
import React from 'react';

type SelectedIdState = {
    [id: number]: boolean
};
type SelectedIdAction =
| { type: 'toggle', id: number }

const reducer = (state: SelectedIdState, action: SelectedIdAction) => {
    switch (action.type) {
        case 'toggle':
            if (state[action.id]) {
                delete state[action.id];
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    [action.id]: true
                }
            }
        default:
            return state;
    }
};

type SelectedIdDispatch = React.Dispatch<SelectedIdAction>;
const SelectedIdStateContext = React.createContext<SelectedIdState | null>(null);
const SelectedIdDispatchContext = React.createContext<SelectedIdDispatch | null>(null);

const SelectedIdProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = React.useReducer<typeof reducer>(reducer, {});
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