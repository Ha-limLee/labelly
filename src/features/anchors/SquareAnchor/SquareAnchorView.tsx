import React from 'react';
import styles from './SquareAnchorView.module.css';

const SquareAnchorView = ({left, top, style, onMouseDown, onMouseMove, onMouseUp, onMouseOut}: {left: number, top: number, style: React.CSSProperties, onMouseDown: React.MouseEventHandler, onMouseMove: React.MouseEventHandler, onMouseUp: React.MouseEventHandler, onMouseOut: React.MouseEventHandler}) => {
    return (
        <div className={styles.SquareAnchor} style={{...style, left: `${left}px`, top: `${top}px`}} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseOut={onMouseOut}>
        </div>
    );
};

export default SquareAnchorView;