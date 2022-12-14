import React from 'react';
import style from './SelectModeButtonView.module.css';
import { LABEL_MODE } from 'contexts/LabelModeContext';

const SelectModeButtonView = ({mode, onClick}: {mode: LABEL_MODE, onClick: React.MouseEventHandler}) => {
    const whichStyle = (mode === LABEL_MODE.SELECT) ? "SelectMode" : "Default";
    return (
        <button className={style[whichStyle]} onClick={onClick}>
        </button>
    );
}

export default SelectModeButtonView;