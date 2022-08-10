import LabelPosition from "./LabelPosition.type";
import LabelView from "./LabelView";
import { useSelectedIdState } from "contexts/SelectedIdContext";
import { useModeState } from "contexts/LabelModeContext";

const Label = ({id, labelPosition}: {id: number, labelPosition: LabelPosition}) => {
    const selectedIds = useSelectedIdState();
    const selected = selectedIds[id];
    const mode = useModeState()();

    return (
        <LabelView id={id} labelPosition={labelPosition} mode={mode} selected={selected}></LabelView>
    );
};

export default Label;