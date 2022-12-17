import LabelView from "./LabelView";
import { selectLabelGroup } from './labelGroupSlice';
import { selectMode } from '../mode/modeSlice';
import { useAppSelector } from "app/hooks";

const Label = ({ id }: { id: number }) => {
    const labelGroup = useAppSelector(selectLabelGroup);
    const {selected, ...labelSpace} = labelGroup[id];
    
    const mode = useAppSelector(selectMode);

    return (
        <LabelView id={id} labelPosition={labelSpace} mode={mode} selected={selected}></LabelView>
    );
};

export default Label;