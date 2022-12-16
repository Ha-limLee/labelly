import CreateModeButtonView from "./CreateModeButtonView";
import React from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { selectMode, set } from "features/mode/modeSlice";

const CreateModeButton = () => {
    const mode = useAppSelector(selectMode);
    const dispatch = useAppDispatch();
    const onClick = (e: React.MouseEvent) => {
        dispatch(set("CREATE"));
    };
    return (
        <CreateModeButtonView mode={mode} onClick={onClick}></CreateModeButtonView>
    );
};

export default CreateModeButton;