import React from "react";
import SelectedLabelView from "./SelectedLabelView";
import type { LabelSpace } from "../labelGroupSlice";
import { useAppDispatch } from "app/hooks";
import { unselect, move } from "../labelGroupSlice";

const SelectedLabel = ({ id, labelPosition }: { id: number, labelPosition: LabelSpace }) => {
    const dispatch = useAppDispatch();
    const [mouseDown, setMouseDown] = React.useState(false);
    const [mouseMove, setMouseMove] = React.useState(false);
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
        if (!mouseDown) return;
        if (!mouseMove) {
            setMouseMove(true);
            return;
        }
        const diff = [mouseBegin[0] - left, mouseBegin[1] - top];
        dispatch(move({id, item: {left: e.pageX - diff[0], top: e.pageY - diff[1]}}));
        setMouseBegin([e.pageX, e.pageY]);
    };

    const onMouseUp = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (mouseDown && mouseMove) {
            setMouseDown(false);
            setMouseMove(false);
            setMouseUp(true);
        }
    };

    return (
        <SelectedLabelView id={id} labelPosition={labelPosition} onClick={onClick} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}/>
    );
};

export default SelectedLabel;