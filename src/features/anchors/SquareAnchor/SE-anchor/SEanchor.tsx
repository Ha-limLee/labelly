import { SquareAnchorWithDrag } from "../common";

const SEanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    return SquareAnchorWithDrag({})({left: left, top: top, style: {cursor: 'se-resize'}});
};

export default SEanchor;