import React from "react";
import LabelPosition from "./LabelPosition.type";
import LabelView from "./LabelView";

const Label = ({labelPosition, onClick}: {labelPosition: LabelPosition, onClick: React.MouseEventHandler}) => {
    return (
        <LabelView labelPosition={labelPosition} onClick={onClick}></LabelView>
    );
};

export default Label;