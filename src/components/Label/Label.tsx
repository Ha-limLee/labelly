import React from "react";
import LabelPosition from "./LabelPosition.type";
import LabelView from "./LabelView";
import { useSelectedIdDispatch, useSelectedIdState } from "contexts/SelectedIdContext";
import { LABEL_MODE, useModeState } from "contexts/LabelModeContext";

const Label = ({id, labelPosition}: {id: number, labelPosition: LabelPosition}) => {
    const selectedIdDispatch = useSelectedIdDispatch();
    const selectedIds = useSelectedIdState();
    const selected = selectedIds[id];
    const mode = useModeState()();
    
    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (mode === LABEL_MODE.SELECT) {
            if (selectedIds[id])
                selectedIdDispatch({type: 'set', id: id, selected: false});
            else {
                selectedIdDispatch({type: 'set', id: id, selected: true});
            }
        }
    };

    return (
        <LabelView labelPosition={labelPosition} selected={selected} onClick={onClick}></LabelView>
    );
};

export default Label;