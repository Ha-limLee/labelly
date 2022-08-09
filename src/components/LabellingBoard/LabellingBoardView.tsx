import React from 'react';
import style from './LabellingBoardView.module.css';

const LabellingBoardView = ({onMouseDown, onMouseMove, onMouseUp, children}: {onMouseDown: React.MouseEventHandler, onMouseMove: React.MouseEventHandler, onMouseUp: React.MouseEventHandler, children: React.ReactNode}) => {
    return (
        <div className={style.LabellingBoard} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
            {children}
        </div>
    );
};

export default LabellingBoardView;