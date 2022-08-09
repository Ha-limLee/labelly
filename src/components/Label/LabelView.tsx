import React from 'react';
import LabelPosition from './LabelPosition.type';
import styles from './LabelView.module.css';


const LabelView = ({labelPosition, selected, onClick}: {labelPosition: LabelPosition, selected: boolean, onClick: React.MouseEventHandler}) => {
    const {left, top, width, height} = labelPosition;
    let style: React.CSSProperties = {
        left: left,
        top: top,
        width: width,
        height: height,
    };
    if (selected) {
        style = {
            ...style,
            border: '1px solid red'
        };
    }
    return (
        <div className={styles.LabelView} style={style} onClick={onClick}></div>
    );
};

export default LabelView;