import CreateModeButtonView from "./CreateModeButtonView";
import { useModeState, useModeDispatch, LABEL_MODE } from "contexts/LabelModeContext";
import { useSelectedIdDispatch } from "contexts/SelectedIdContext";
import React from "react";

const CreateModeButton = () => {
    const mode = useModeState()();
    const modelDispatch = useModeDispatch();
    const selectedIdDispatch = useSelectedIdDispatch();
    const onClick = (e: React.MouseEvent) => {
        modelDispatch({type: "toggle", mode: LABEL_MODE.CREATE})
        selectedIdDispatch({type: 'clear'});
    };
    return (
        <CreateModeButtonView mode={mode} onClick={onClick}></CreateModeButtonView>
    );
};

export default CreateModeButton;