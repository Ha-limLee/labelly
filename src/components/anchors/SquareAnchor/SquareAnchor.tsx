import SquareAnchorView from "./SquareAnchorView";

const SquareAnchor = ({left, top}: {left: number, top: number}) => {
    return (
        <SquareAnchorView left={left} top={top}/>
    );
};

export default SquareAnchor;