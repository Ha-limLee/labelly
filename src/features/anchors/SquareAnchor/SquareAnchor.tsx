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

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(resizeLabel({id, direction, item: {left: e.pageX, top: e.pageY}}));
    };
    
    const handleMouseOut = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseUp = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <SquareAnchorView left={left} top={top} style={{cursor: cursorMap[direction]}} onMouseDown={handleMouseDown} onMouseOut={handleMouseOut} />
    );
};

export default SquareAnchor;