import React from 'react';
import LabelPosition from './LabelPosition.type';
import styles from './LabelView.module.css';
import SquareAnchor from 'components/SquareAnchor';
import RoundAnchor from 'components/RoundAnchor';
import LineAnchor from 'components/LineAnchor';
import { LABEL_MODE } from 'contexts/LabelModeContext';

const toPixel = (num: number) => {
    return `${num}px`;
};

const LabelView = ({labelPosition, mode, selected, onClick}: {labelPosition: LabelPosition, mode: LABEL_MODE, selected: boolean, onClick: React.MouseEventHandler}) => {
    const {left, top, width, height} = labelPosition;
    const style: React.CSSProperties = {
        left: toPixel(left),
        top: toPixel(top),
        width: toPixel(width),
        height: toPixel(height),
    };
    return (
        (mode === LABEL_MODE.SELECT && selected) ?
        (<>
            <RoundAnchor left={left + width / 2 - 7} top={top - 40} />
            <LineAnchor left={left + width / 2 - 1} top={top - 30}/>
            <SquareAnchor left={left - 6} top={top - 6}/>              <SquareAnchor left={left + width / 2 - 6} top={top - 6}/>           <SquareAnchor left={left + width - 8} top={top - 6}/>
            <SquareAnchor left={left - 6} top={top + height / 2 - 6}/> <div className={styles.LabelView} style={style} onClick={onClick}/> <SquareAnchor left={left + width - 8} top={top + height / 2 - 6}/>
            <SquareAnchor left={left - 6} top={top + height - 8}/>     <SquareAnchor left={left + width / 2 - 6} top={top + height - 8}/>  <SquareAnchor left={left + width - 8} top={top + height - 8}/>
            
        </>)
        : <div className={styles.LabelView} style={style} onClick={onClick}/>
    );
};

export default LabelView;