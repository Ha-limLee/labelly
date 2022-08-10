import { SquareAnchorWithDrag } from "../common";

const NEanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    return SquareAnchorWithDrag({})({left: left, top: top, style: {cursor: 'ne-resize'}});
};

export default NEanchor;