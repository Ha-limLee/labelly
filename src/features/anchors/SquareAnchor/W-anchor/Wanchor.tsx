import React from "react";
import { selectLabelGroup } from "features/label/labelGroupSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { SquareAnchorWithDrag } from "../common";

const Wanchor = ({id, left, top}: {id: number, left: number, top: number}) => {
    const labelList = useAppSelector(selectLabelGroup);
    const dispatch = useAppDispatch();
    const label = labelList[id];

    const onBetween = (e: React.MouseEvent) => {
        const diff = Math.abs(label.top - e.pageY);
        const height = Math.abs(label.height - diff);
        
    };
    
    return SquareAnchorWithDrag({between: onBetween})({left: left, top: top, style: {cursor: 'w-resize'}});
};

export default Wanchor;