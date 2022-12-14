import SelectModeButtonView from "./SelectModeButtonView";
import { useModeState, useModeDispatch, LABEL_MODE } from "contexts/LabelModeContext";

const SelectModeButton = () => {
    const getMode = useModeState();
    const dispatch = useModeDispatch();
    return (
        <SelectModeButtonView mode={getMode()} onClick={e => dispatch({type: "toggle", mode: LABEL_MODE.SELECT})}></SelectModeButtonView>
    );
};

export default SelectModeButton;