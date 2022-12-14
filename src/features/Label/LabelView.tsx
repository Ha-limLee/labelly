import LabelPosition from './LabelPosition.type';
import { LABEL_MODE } from 'contexts/LabelModeContext';
import SelectedLabel from './SelectedLabel';
import DefaultLabel from './DefaultLabel';

const LabelView = ({id, labelPosition, mode, selected}: {id: number, labelPosition: LabelPosition, mode: LABEL_MODE, selected: boolean}) => {
    return (
        (mode === LABEL_MODE.SELECT && selected) ?
        <SelectedLabel id={id} labelPosition={labelPosition}/>
        : <DefaultLabel id={id} mode={mode} labelPosition={labelPosition}/>
    );
};

export default LabelView;