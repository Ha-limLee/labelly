import styles from './SquareAnchorView.module.css';

const SquareAnchorView = ({left, top}: {left: string, top: string}) => {
    return (
        <div className={styles.SquareAnchor} style={{left: left, top: top}}>
        </div>
    );
};

export default SquareAnchorView;