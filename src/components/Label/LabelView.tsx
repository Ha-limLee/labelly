import React from 'react';
import styles from './LabelView.module.css';


const LabelView = ({left, top, width, height, onClick}: {left: string, top: string, width: string, height: string, onClick: React.MouseEventHandler}) => {
    return (
        <div className={styles.LabelView} style={{left: left, top: top, width: width, height: height}} onClick={onClick}></div>
    );
};

export default LabelView;