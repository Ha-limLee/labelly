import React from 'react';

const LABEL_MODE = {
    SELECT: 0,
    CREATE: 1,
  } as const;
type LABEL_MODE = typeof LABEL_MODE[keyof typeof LABEL_MODE];

type ModeState = {
    mode: LABEL_MODE;
};

type ModeAction = {type: 'toggle', mode: LABEL_MODE}

const reducer = (state: ModeState, action: ModeAction) => {
    switch (action.type) {
        case 'toggle':
            return {
                mode: action.mode
            };
        default:
            return state;
    }
};

type ModeDispatch = React.Dispatch<ModeAction>;
const ModeStateContext = React.createContext<ModeState | null>(null);
const ModeDispatchContext = React.createContext<ModeDispatch | null>(null);

const ModeProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = React.useReducer<typeof reducer>(reducer, {mode: LABEL_MODE.SELECT});
    return (
        <ModeStateContext.Provider value={state}>
            <ModeDispatchContext.Provider value={dispatch}>
                {children}
            </ModeDispatchContext.Provider>
        </ModeStateContext.Provider>
    );
};

const useModeState = () => {
    const state = React.useContext(ModeStateContext);
    if (!state) throw new Error('Cannot find ModeProvider');
    return state;
};

const useModeDispatch = () => {
    const dispatch = React.useContext(ModeDispatchContext);
    if (!dispatch) throw new Error('Cannot find ModeProvider');
    return dispatch;
};

export { LABEL_MODE, ModeProvider, useModeState, useModeDispatch };