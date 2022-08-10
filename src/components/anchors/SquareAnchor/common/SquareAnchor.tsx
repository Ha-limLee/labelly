import React from "react";
import SquareAnchorView from "./SquareAnchorView";

const SquareAnchor = ({left, top, style, onMouseDown, onMouseMove, onMouseUp}: {left: number, top: number, style: React.CSSProperties, onMouseDown: React.MouseEventHandler, onMouseMove: React.MouseEventHandler, onMouseUp: React.MouseEventHandler}) => {
    return (
        <SquareAnchorView left={left} top={top} style={style} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}/>
    );
};

export default SquareAnchor;