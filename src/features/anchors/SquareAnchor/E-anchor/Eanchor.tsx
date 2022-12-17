import { SquareAnchorWithDrag } from "../common";

const Eanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    return SquareAnchorWithDrag({})({left: left, top: top, style: {cursor: 'e-resize'}});
};

export default Eanchor;