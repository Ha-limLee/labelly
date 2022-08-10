import styles from './SquareAnchorView.module.css';

const SquareAnchorView = ({left, top}: {left: number, top: number}) => {
    return (
        <div className={styles.SquareAnchor} style={{left: `${left}px`, top: `${top}px`}}>
        </div>
    );
};

export default SquareAnchorView;