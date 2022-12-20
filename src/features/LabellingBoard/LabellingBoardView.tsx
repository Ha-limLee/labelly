import React from 'react';
import style from './LabellingBoardView.module.css';

const LabellingBoardView = ({ onMouseDown, onMouseMove, onMouseUp, onKeyDown, imgUrl, children }: { onMouseDown: React.MouseEventHandler, onMouseMove: React.MouseEventHandler, onMouseUp: React.MouseEventHandler, onKeyDown: React.KeyboardEventHandler, imgUrl: string, children: React.ReactNode }) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    divRef.current?.focus();
    return (
        <div className={style.LabellingBoard} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}
            onKeyDown={onKeyDown}
            tabIndex={0}
            ref={divRef}
            style={{backgroundImage: `url(${imgUrl})`}}>
            {children}
        </div>
    );
};

export default LabellingBoardView;