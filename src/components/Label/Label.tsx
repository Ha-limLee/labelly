import React from "react";
import LabelView from "./LabelView";

const Label = ({left, top, width, height, onClick}: {left: string, top: string, width: string, height: string, onClick: React.MouseEventHandler}) => {
    return (
        <LabelView left={left} top={top} width={width} height={height} onClick={onClick}></LabelView>
    );
};

export default Label;