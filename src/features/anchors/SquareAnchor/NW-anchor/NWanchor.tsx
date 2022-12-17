import { SquareAnchorWithDrag } from "../common";

const NWanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    return SquareAnchorWithDrag({})({left: left, top: top, style: {cursor: 'nw-resize'}});
};

export default NWanchor;