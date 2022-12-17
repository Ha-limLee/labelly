import LabelPosition from "../LabelPosition.type";
import DefaultLabelView from "./DefaultLabelView";
import React from "react";
import { useAppDispatch } from "app/hooks";
import { select } from "../labelGroupSlice";
import type { LABEL_MODE } from "features/mode/modeSlice";

const DefaultLabel = ({ id, mode, labelPosition }: { id: number, mode: LABEL_MODE, labelPosition: LabelPosition }) => {
    const dispatch = useAppDispatch();
    const onClick = (e: React.MouseEvent) => {
        if (mode === "SELECT") {
            e.preventDefault();
            dispatch(select({id}));
        }
    };
    return (
        <DefaultLabelView labelPosition={labelPosition} onClick={onClick}/>
    );
};

export default DefaultLabel;