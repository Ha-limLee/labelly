import { SquareAnchorWithDrag } from "../common";

const Sanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    return SquareAnchorWithDrag({})({left: left, top: top, style: {cursor: 's-resize'}});
};

export default Sanchor;