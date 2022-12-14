import { SquareAnchorWithDrag } from "../common";

const SWanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    return SquareAnchorWithDrag({})({left: left, top: top, style: {cursor: 'sw-resize'}});
};

export default SWanchor;