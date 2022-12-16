import React from 'react';
import style from './SelectModeButtonView.module.css';
import type { LABEL_MODE } from 'features/mode/modeSlice';

const SelectModeButtonView = ({mode, onClick}: {mode: LABEL_MODE, onClick: React.MouseEventHandler}) => {
    const whichStyle = (mode === "SELECT") ? "SelectMode" : "Default";
    return (
        <button className={style[whichStyle]} onClick={onClick}>
        </button>
    );
}

export default SelectModeButtonView;