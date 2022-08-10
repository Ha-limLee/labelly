import styles from './LineAnchorView.module.css';

const LineAnchorView = ({left, top}: {left: number, top: number}) => {
    return (
        <div className={styles.LineAnchor} style={{left: `${left}px`, top: `${top}px`}}></div>
    );
};

export default LineAnchorView;