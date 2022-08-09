import React from 'react';
import LabelPosition from './LabelPosition.type';
import styles from './LabelView.module.css';
import SquareAnchor from 'components/SquareAnchor';

const LabelView = ({labelPosition, selected, onClick}: {labelPosition: LabelPosition, selected: boolean, onClick: React.MouseEventHandler}) => {
    const {left, top, width, height} = labelPosition;
    let style: React.CSSProperties = {
        left: left,
        top: top,
        width: width,
        height: height,
    };
    return (
        selected ?
        (<>
        <SquareAnchor left={left} top={top}/> <SquareAnchor left={left + width} top={top}/>
        <SquareAnchor left={left} top={top + height}/> <SquareAnchor left={left + width} top={top + height}/>
        <div className={styles.LabelView} style={style} onClick={onClick}/></>) :
        <div className={styles.LabelView} style={style} onClick={onClick}/>
    );
};

export default LabelView;