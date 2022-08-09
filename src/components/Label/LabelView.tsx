import React from 'react';
import LabelPosition from './LabelPosition.type';
import styles from './LabelView.module.css';


const LabelView = ({labelPosition, onClick}: {labelPosition: LabelPosition, onClick: React.MouseEventHandler}) => {
    const {left, top, width, height} = labelPosition;
    return (
        <div className={styles.LabelView} style={{left: left, top: top, width: width, height: height}} onClick={onClick}></div>
    );
};

export default LabelView;