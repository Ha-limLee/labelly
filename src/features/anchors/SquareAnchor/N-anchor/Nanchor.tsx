import SelectedLabel from "features/label/SelectedLabel";
import { selectLabelGroup, setLabel } from "features/label/labelGroupSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";
import type { LabelState } from "features/label/labelGroupSlice";
import React from "react";
import { SquareAnchorWithDrag } from "../common";

const Nanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    const labelGroup = useAppSelector(selectLabelGroup);
    const dispatch = useAppDispatch();
    const label = labelGroup[id];

    const onBetween = (e: React.MouseEvent) => {
        e.stopPropagation();
        const diff = e.pageY - label.top;
        const labelPosition = {
            left: label.left,
            top: label.top + diff,
            height: label.height,
            width: label.width
        };
        const item: LabelState = {
            ...label,
            top: label.top + diff
        };
        
        dispatch(setLabel({ id, item }));
    };
    
    return SquareAnchorWithDrag({between: onBetween})({left: left, top: top, style: {cursor: 'n-resize'}});
};

export default Nanchor;