import React from 'react';
import style from './LabellingBoardView.module.css';

const LabellingBoardView = ({onMouseDown, onMouseUp, children}: {onMouseDown: React.MouseEventHandler, onMouseUp: React.MouseEventHandler, children: React.ReactNode}) => {
    return (
        <div className={style.LabellingBoard} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            {children}
        </div>
    );
};

export default LabellingBoardView;