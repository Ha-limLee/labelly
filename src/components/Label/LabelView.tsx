import React from 'react';
import LabelPosition from './LabelPosition.type';
import styles from './LabelView.module.css';
import SquareAnchor from 'components/SquareAnchor';

const toPixel = (num: number) => {
    return `${num}px`;
};

const LabelView = ({labelPosition, selected, onClick}: {labelPosition: LabelPosition, selected: boolean, onClick: React.MouseEventHandler}) => {
    const {left, top, width, height} = labelPosition;
    let style: React.CSSProperties = {
        left: toPixel(left),
        top: toPixel(top),
        width: toPixel(width),
        height: toPixel(height),
    };
    return (
        selected ?
        (<>
            <SquareAnchor left={left - 6} top={top - 6}/>              <SquareAnchor left={left + width / 2 - 6} top={top - 6}/>           <SquareAnchor left={left + width - 8} top={top - 6}/>
            <SquareAnchor left={left - 6} top={top + height / 2 - 6}/> <div className={styles.LabelView} style={style} onClick={onClick}/> <SquareAnchor left={left + width - 8} top={top + height / 2 - 6}/>
            <SquareAnchor left={left - 6} top={top + height - 8}/>     <SquareAnchor left={left + width / 2 - 6} top={top + height - 8}/>  <SquareAnchor left={left + width - 8} top={top + height - 8}/>
            
        </>)
        : <div className={styles.LabelView} style={style} onClick={onClick}/>
    );
};

export default LabelView;