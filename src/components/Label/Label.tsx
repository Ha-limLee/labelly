import LabelPosition from "./LabelPosition.type";
import LabelView from "./LabelView";
import { useSelectedIdState } from "contexts/SelectedIdContext";
import { useModeState } from "contexts/LabelModeContext";
import { useLabelListState } from "contexts/LabelListContext";

const Label = ({id}: {id: number}) => {
    const selectedIds = useSelectedIdState();
    const selected = selectedIds[id];
    const mode = useModeState()();
    const {left, top, width, height} = useLabelListState()[id];
    const labelPosition: LabelPosition = {
        left: left,
        top: top,
        width: width,
        height: height
    };

    return (
        <LabelView id={id} labelPosition={labelPosition} mode={mode} selected={selected}></LabelView>
    );
};

export default Label;