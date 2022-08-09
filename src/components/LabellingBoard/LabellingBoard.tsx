import LabellingBoardView from "./LabellingBoardView";
import React from 'react';
import Label from "components/Label";
import { useModeState, LABEL_MODE } from "contexts/LabelModeContext";
import { useLabelListState, useLabelListDispatch } from "contexts/LabelListContext";
import { useSelectedIdState, useSelectedIdDispatch } from "contexts/SelectedIdContext";

const LabellingBoard = () => {
    const getMode = useModeState();
    const mode = getMode();
    const [begin, setBegin] = React.useState([0, 0]);
    const labels = useLabelListState();
    const labelsDispatch = useLabelListDispatch();
    const [mouseDown, setMouseDown] = React.useState(false);
    const [mouseDragging, setMouseDragging] = React.useState(false);
    const [key, setKey] = React.useState(0);
    const selectedId = useSelectedIdState();
    const selectedIdDispatch = useSelectedIdDispatch();

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Delete' || e.key === 'Backspace') {
            labelsDispatch({type: 'removeAll', ids: selectedId});
            selectedIdDispatch({type: 'removeAll', ids: Object.keys(selectedId).map(parseInt)});
        }
    };

    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setMouseDown(true);
        setBegin([e.pageX, e.pageY]);
    };
  
    const onMouseMove = (e: React.MouseEvent) => {
        e.preventDefault();
        if (mouseDown) {
            setMouseDragging(true);
        }
    };

    const onMouseUp = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!mouseDown || !mouseDragging) return;
        const left = Math.min(e.pageX, begin[0]);
        const top = Math.min(e.pageY, begin[1]);
        const width = Math.abs(e.pageX - begin[0]);
        const height = Math.abs(e.pageY - begin[1]);
        const labelPosition = {
            left: `${left}px`,
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`
        };
        const newLabel = <Label key={key}
                                id={key}
                                labelPosition={labelPosition} />
        labelsDispatch({type: 'add', id: key, element: newLabel});
        setKey(key + 1);
        setMouseDown(false);
        setMouseDragging(false);
    };
    const createEvents = () => {
        return {
            onMouseDown: (mode === LABEL_MODE.CREATE) ? onMouseDown : (e: React.MouseEvent) => { },
            onMouseMove: (mode === LABEL_MODE.CREATE) ? onMouseMove : (e: React.MouseEvent) => { },
            onMouseUp: (mode === LABEL_MODE.CREATE) ? onMouseUp : (e: React.MouseEvent) => { },
            onKeyDown: (mode === LABEL_MODE.SELECT) ? onKeyDown : (e: React.KeyboardEvent) => { },
        };
    };
    const children = Object.keys(labels).map(key => labels[parseInt(key)]);
    return (
        <LabellingBoardView {...createEvents()}>
            {children}
        </LabellingBoardView>
    );
};

export default LabellingBoard;