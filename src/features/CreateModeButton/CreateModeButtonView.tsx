import style from './CreateModeButtonView.module.css';
import type { LABEL_MODE } from 'features/mode/modeSlice';
import React from 'react';

const CreateModeButtonView = ({mode, onClick}: {mode: LABEL_MODE, onClick: React.MouseEventHandler}) => {
    const whichStyle = (mode == "CREATE") ? "CreateMode" : "Default";
    return (
        <button className={style[whichStyle]} onClick={onClick}></button>
    );
};

export default CreateModeButtonView;