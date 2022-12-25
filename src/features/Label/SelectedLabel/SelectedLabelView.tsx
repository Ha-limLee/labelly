import React from 'react';
import LabelPosition from '../LabelPosition.type';
import styles from './SelectedLabelView.module.css';

import { RoundAnchor, SquareAnchor, LineAnchor } from 'features/anchors';

const toPixel = (num: number) => {
    return `${num}px`;
};

const SelectedLabelView = ({id, labelPosition, onClick, onMouseDown, onMouseUp, onMouseMove}: {id: number, labelPosition: LabelPosition, onClick: React.MouseEventHandler, onMouseDown: React.MouseEventHandler, onMouseUp: React.MouseEventHandler, onMouseMove: React.MouseEventHandler}) => {
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
            <SquareAnchor id={id} left={left - 6} top={top - 6} direction='NW'/>              <SquareAnchor id={id} left={left + width / 2 - 7} top={top - 6} direction='N'/>           <SquareAnchor id={id} left={left + width - 8} top={top - 6} direction='NE'/>
            <SquareAnchor id={id} left={left - 6} top={top + height / 2 - 6} direction='W'/> <div className={styles.LabelView} style={style} onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}/> <SquareAnchor id={id} left={left + width - 8} top={top + height / 2 - 6} direction='E'/>
            <SquareAnchor id={id} left={left - 6} top={top + height - 8} direction='SW'/>     <SquareAnchor id={id} left={left + width / 2 - 7} top={top + height - 8} direction='S'/>  <SquareAnchor id={id} left={left + width - 8} top={top + height - 8} direction='SE'/>
        </>
    );
};

export default SelectedLabelView;