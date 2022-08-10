import styles from './RoundAnchorView.module.css';

const RoundAnchorView = ({left, top}: {left: number, top: number}) => {
    return (
        <div className={styles.RoundAnchor} style={{left: `${left}px`, top: `${top}px`}}></div>
    );
};

export default RoundAnchorView;