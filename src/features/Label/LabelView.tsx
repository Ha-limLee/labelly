import type { LABEL_MODE } from 'features/mode/modeSlice';
import type { LabelSpace } from './labelGroupSlice';
import SelectedLabel from './SelectedLabel';
import DefaultLabel from './DefaultLabel';

const LabelView = ({ id, labelPosition, mode, selected }: { id: number, labelPosition: LabelSpace, mode: LABEL_MODE, selected: boolean }) => {
    return (
        (mode === "SELECT" && selected) ?
        <SelectedLabel id={id} labelPosition={labelPosition}/>
        : <DefaultLabel id={id} mode={mode} labelPosition={labelPosition}/>
    );
};

export default LabelView;