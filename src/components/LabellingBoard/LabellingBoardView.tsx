import React from 'react';
import style from './LabellingBoardView.module.css';

const LabellingBoardView = ({onMouseDown, onMouseMove, onMouseUp, onKeyDown, children}: {onMouseDown: React.MouseEventHandler, onMouseMove: React.MouseEventHandler, onMouseUp: React.MouseEventHandler, onKeyDown: React.KeyboardEventHandler, children: React.ReactNode}) => {
    return (
        <div className={style.LabellingBoard} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
            onKeyDown={onKeyDown}
            tabIndex={0}>
            {children}
        </div>
    );
};

export default LabellingBoardView;