import React from "react";
import LabelPosition from "./LabelPosition.type";
import SelectedLabelView from "./SelectedLabelView";
import { useSelectedIdDispatch } from "contexts/SelectedIdContext";

const SelectedLabel = ({id, labelPosition}: {id: number, labelPosition: LabelPosition}) => {
    const selectedIdDispatch = useSelectedIdDispatch();
    
    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        selectedIdDispatch({type: 'set', id: id, selected: false});
    };

    return (
        <SelectedLabelView labelPosition={labelPosition} onClick={onClick} />
    );
};

export default SelectedLabel;