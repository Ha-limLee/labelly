import React from 'react';
import style from './LabellingBoardView.module.css';

const LabellingBoardView = ({onMouseDown, onMouseMove, onMouseUp, onKeyDown, imageUrl, children}: {onMouseDown: React.MouseEventHandler, onMouseMove: React.MouseEventHandler, onMouseUp: React.MouseEventHandler, onKeyDown: React.KeyboardEventHandler, imageUrl:string, children: React.ReactNode}) => {
    return (
        <div className={style.LabellingBoard} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
            onKeyDown={onKeyDown}
            tabIndex={0}
            style={{backgroundImage: `url(${imageUrl})`}}>
            {children}
        </div>
    );
};

export default LabellingBoardView;