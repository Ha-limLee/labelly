import React from 'react';
import LabelPosition from '../LabelPosition.type';
import styles from './SelectedLabelView.module.css';

import { RoundAnchor, SquareAnchor, LineAnchor } from 'components/anchors';

const toPixel = (num: number) => {
    return `${num}px`;
};

const SelectedLabelView = ({labelPosition, onClick, onMouseDown, onMouseUp, onMouseMove}: {labelPosition: LabelPosition, onClick: React.MouseEventHandler, onMouseDown: React.MouseEventHandler, onMouseUp: React.MouseEventHandler, onMouseMove: React.MouseEventHandler}) => {
    const {left, top, width, height} = labelPosition;
    const style: React.CSSProperties = {
        left: toPixel(left),
        top: toPixel(top),
        width: toPixel(width),
        height: toPixel(height),
    };
    return (
        <>
            <RoundAnchor left={left + width / 2 - 8} top={top - 40} />
            <LineAnchor left={left + width / 2 - 2} top={top - 30}/>
            <SquareAnchor left={left - 6} top={top - 6}/>              <SquareAnchor left={left + width / 2 - 7} top={top - 6}/>           <SquareAnchor left={left + width - 8} top={top - 6}/>
            <SquareAnchor left={left - 6} top={top + height / 2 - 6}/> <div className={styles.LabelView} style={style} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}/> <SquareAnchor left={left + width - 8} top={top + height / 2 - 6}/>
            <SquareAnchor left={left - 6} top={top + height - 8}/>     <SquareAnchor left={left + width / 2 - 7} top={top + height - 8}/>  <SquareAnchor left={left + width - 8} top={top + height - 8}/>
        </>
    );
};

export default SelectedLabelView;