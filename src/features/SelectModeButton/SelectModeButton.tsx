import SelectModeButtonView from "./SelectModeButtonView";
import { selectMode, set } from "features/mode/modeSlice";
import { useAppSelector, useAppDispatch } from "app/hooks";

const SelectModeButton = () => {
    const mode = useAppSelector(selectMode);
    const dispatch = useAppDispatch();
    return (
        <SelectModeButtonView mode={mode} onClick={e => dispatch(set("SELECT"))}></SelectModeButtonView>
    );
};

export default SelectModeButton;