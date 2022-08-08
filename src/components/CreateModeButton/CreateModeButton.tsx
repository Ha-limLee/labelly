import CreateModeButtonView from "./CreateModeButtonView";
import { useModeState, useModeDispatch, LABEL_MODE } from "contexts/LabelModeContext";

const CreateModeButton = () => {
    const {mode} = useModeState();
    const dispatch = useModeDispatch();
    return (
        <CreateModeButtonView mode={mode} onClick={e => dispatch({type: "toggle", mode: LABEL_MODE.CREATE})}></CreateModeButtonView>
    );
};

export default CreateModeButton;