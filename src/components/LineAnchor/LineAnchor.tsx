import LineAnchorView from "./LineAnchorView";

const LineAnchor = ({left, top}: {left: number, top: number}) => {
    return (
        <LineAnchorView left={left} top={top}/>
    );
};

export default LineAnchor;