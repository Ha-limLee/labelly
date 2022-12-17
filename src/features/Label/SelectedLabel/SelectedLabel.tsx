import React from "react";
import SelectedLabelView from "./SelectedLabelView";
import type { LabelSpace } from "../labelGroupSlice";
import { useAppDispatch } from "app/hooks";
import { unselect, move } from "../labelGroupSlice";

const SelectedLabel = ({ id, labelPosition }: { id: number, labelPosition: LabelSpace }) => {
    const dispatch = useAppDispatch();
    const [mouseDown, setMouseDown] = React.useState(false);
    const [mouseMove, setMouseMove] = React.useState(false);
    const [pos, setPos] = React.useState({...labelPosition});
    const {left, top} = labelPosition;
    const [mouseBegin, setMouseBegin] = React.useState([left, top]);
    const [mouseUp, setMouseUp] = React.useState(false);

    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (mouseUp) {
            setMouseUp(false);
        } else if (!mouseMove)
            dispatch(unselect({ id }));
    };

    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setMouseDown(true);
        setMouseBegin([e.pageX, e.pageY]);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        e.preventDefault();
        if (mouseDown) {
            if (!mouseMove)
                setMouseMove(true);
            const diff = [mouseBegin[0] - left, mouseBegin[1] - top];
            setPos({...pos, left: e.pageX - diff[0], top: e.pageY - diff[1]});
        }
    };

    const onMouseUp = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (mouseDown && mouseMove) {
            dispatch(move({ id, item: { left: pos.left, top: pos.top } }));
            setMouseDown(false);
            setMouseMove(false);
            setMouseUp(true);
        }
    };

    return (
        <SelectedLabelView id={id} labelPosition={pos} onClick={onClick} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}/>
    );
};

export default SelectedLabel;