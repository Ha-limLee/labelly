import React, { CSSProperties } from "react";
import SquareAnchorView from "./SquareAnchorView";
import { useAppDispatch } from "app/hooks";
import { resizeLabel } from "features/label/labelGroupSlice";
import type { AnchorDirection } from "features/label/labelGroupSlice";

const SquareAnchor = ({id, left, top, direction}: {id: number, left: number, top: number, direction: AnchorDirection}) => {
    const cursorMap: {[K in AnchorDirection]: CSSProperties["cursor"]} = {
        "N": "n-resize",
        "NE": "ne-resize",
        "E": "e-resize",
        "SE": "se-resize",
        "S": "s-resize",
        "SW": "sw-resize",
        "W": "w-resize",
        "NW": "nw-resize",
    };
    const dispatch = useAppDispatch();
    const [mouseDown, setMouseDown] = React.useState(false);
    const [mouseMove, setMouseMove] = React.useState(false);
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMouseDown(true);
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!mouseDown) return;
        if (!mouseMove) {
            setMouseMove(true);
            return;
        }
        dispatch(resizeLabel({id, direction, item: {left: e.pageX, top: e.pageY}}));
    };
    const handleMouseUp = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMouseDown(false);
        setMouseMove(false);
    };
    const handleMouseOut = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setMouseDown(false);
        setMouseMove(false);
    };
    return (
        <SquareAnchorView left={left} top={top} style={{cursor: cursorMap[direction]}} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseOut={handleMouseOut}/>
    );
};

export default SquareAnchor;