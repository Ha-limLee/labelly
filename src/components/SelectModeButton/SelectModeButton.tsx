import SelectModeButtonView from "./SelectModeButtonView";
import { useModeState, useModeDispatch, LABEL_MODE } from "contexts/LabelModeContext";

const SelectModeButton = () => {
    const {mode} = useModeState();
    const dispatch = useModeDispatch();
    return (
        <SelectModeButtonView mode={mode} onClick={e => dispatch({type: "toggle", mode: LABEL_MODE.SELECT})}></SelectModeButtonView>
    );
};

export default SelectModeButton;