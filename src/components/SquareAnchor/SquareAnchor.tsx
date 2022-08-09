import SquareAnchorView from "./SquareAnchorView";

const SquareAnchor = ({left, top}: {left: string, top: string}) => {
    return (
        <SquareAnchorView left={left} top={top}/>
    );
};

export default SquareAnchor;