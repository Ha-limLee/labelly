import LabelPosition from "./LabelPosition.type";
import LabelView from "./LabelView";
import { useSelectedIdState } from "contexts/SelectedIdContext";
import { useModeState } from "contexts/LabelModeContext";
import { useLabelListState } from "contexts/LabelListContext";
import {
    selectLabelGroup
} from './LabelGroupSlice';
import { useAppSelector } from "app/hooks";

const Label = ({id}: {id: number}) => {
    const labelGroup = useAppSelector(selectLabelGroup);
    const {selected, ...labelSpace} = labelGroup[id];
    
    const mode = useModeState()();

    return (
        <LabelView id={id} labelPosition={labelSpace} mode={mode} selected={selected}></LabelView>
    );
};

export default Label;