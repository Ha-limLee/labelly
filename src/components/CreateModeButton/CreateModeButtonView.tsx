import style from './CreateModeButtonView.module.css';
import { LABEL_MODE } from 'contexts/LabelModeContext';
import React from 'react';

const CreateModeButtonView = ({mode, onClick}: {mode: LABEL_MODE, onClick: React.MouseEventHandler}) => {
    const whichStyle = (mode == LABEL_MODE.CREATE) ? "CreateMode" : "Default";
    return (
        <button className={style[whichStyle]} onClick={onClick}></button>
    );
};

export default CreateModeButtonView;