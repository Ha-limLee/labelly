import LabelPosition from "../LabelPosition.type";
import DefaultLabelView from "./DefaultLabelView";
import React from "react";
import { useSelectedIdDispatch } from "contexts/SelectedIdContext";
import type { LABEL_MODE } from "features/mode/modeSlice";

const DefaultLabel = ({id, mode, labelPosition}: {id: number, mode: LABEL_MODE, labelPosition: LabelPosition}) => {
    const selectedIdDispatch = useSelectedIdDispatch();
    const onClick = (e: React.MouseEvent) => {
        if (mode === "SELECT") {
            e.preventDefault();
            selectedIdDispatch({type: 'set', id: id, selected: true});
        }
    };
    return (
        <DefaultLabelView labelPosition={labelPosition} onClick={onClick}/>
    );
};

export default DefaultLabel;