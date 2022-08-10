import { useLabelListDispatch, useLabelListState } from "contexts/LabelListContext";
import React from "react";
import { SquareAnchorWithDrag } from "../common";

const NWanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    const labelList = useLabelListState();
    const labelListDispatch = useLabelListDispatch();
    const label = labelList[id];

    const onBetween = (e: React.MouseEvent) => {
        const diff = Math.abs(label.top - e.pageY);
        const height = Math.abs(label.height - diff);
        labelListDispatch({type: 'modify', id: id, height: height});
    };
    
    return SquareAnchorWithDrag({between: onBetween})({left: left, top: top, style: {cursor: 'nw-resize'}});
};

export default NWanchor;