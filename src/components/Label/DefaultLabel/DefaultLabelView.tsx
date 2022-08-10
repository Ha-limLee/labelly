import React from 'react';
import LabelPosition from './LabelPosition.type';
import styles from './DefaultLabelView.module.css';

const toPixel = (num: number) => {
    return `${num}px`;
};

const DefaultLabelView = ({labelPosition, onClick}: {labelPosition: LabelPosition, onClick: React.MouseEventHandler}) => {
    const {left, top, width, height} = labelPosition;
    const style: React.CSSProperties = {
        left: toPixel(left),
        top: toPixel(top),
        width: toPixel(width),
        height: toPixel(height),
    };
    return (
        <div className={styles.LabelView} style={style} onClick={onClick}/>
    );
};

export default DefaultLabelView;