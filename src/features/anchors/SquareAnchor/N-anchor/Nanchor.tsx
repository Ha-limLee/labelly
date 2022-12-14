import SelectedLabel from "features/Label/SelectedLabel";
import { LabelListElement, useLabelListDispatch, useLabelListState } from "contexts/LabelListContext";
import React from "react";
import { SquareAnchorWithDrag } from "../common";

const Nanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    const labelList = useLabelListState();
    const labelListDispatch = useLabelListDispatch();
    const label = labelList[id];

    const onBetween = (e: React.MouseEvent) => {
        e.stopPropagation();
        const diff = e.pageY - label.top;
        const labelPosition = {
            left: label.left,
            top: label.top + diff,
            height: label.height,
            width: label.width
        };
        const element: LabelListElement = {
            ...label,
            top: label.top + diff
        };

        labelListDispatch({type: 'add', id: id, element: element});
    };
    
    return SquareAnchorWithDrag({between: onBetween})({left: left, top: top, style: {cursor: 'n-resize'}});
};

export default Nanchor;