import LabellingBoardView from "./LabellingBoardView";
import React from 'react';
import Label from "features/label";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { selectMode } from "features/mode/modeSlice";
import { selectLabelGroup, setLabel, selectKeyGen } from "features/label/labelGroupSlice";
import { setSpace, removeSelectedAll } from "features/label/labelGroupSlice";
import type { LabelSpace } from "features/label/labelGroupSlice";

const LabellingBoard = () => {
    const [imgUrl, setImgUrl] = React.useState('');
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => res.json())
        .then(json => setImgUrl(json[6].url));
    
    const mode = useAppSelector(selectMode);
    const dispatch = useAppDispatch();

    const [begin, setBegin] = React.useState([0, 0]);
    const labelGroup = useAppSelector(selectLabelGroup);

    const [mouseDown, setMouseDown] = React.useState(false);
    const [mouseDragging, setMouseDragging] = React.useState(false);

    const keyGen = useAppSelector(selectKeyGen);
    const [nextId, setNextId] = React.useState(-1);

    const selectModeEvents = {
        onKeyDown : (e: React.KeyboardEvent) => {
            if (e.key === 'Delete' || e.key === 'Backspace') dispatch(removeSelectedAll());
        }
    };

    const createModeEvents = {
        onMouseDown : (e: React.MouseEvent) => {
            e.preventDefault();
            setMouseDown(true);
            setBegin([e.pageX, e.pageY]);
        },
        onMouseMove : (e: React.MouseEvent) => {
            e.preventDefault();
            if (mouseDown) {
                if (!mouseDragging) {
                    setNextId(keyGen.get());
                    setMouseDragging(true);
                }
                else {
                    const left = Math.min(e.pageX, begin[0]);
                    const top = Math.min(e.pageY, begin[1]);
                    const width = Math.abs(e.pageX - begin[0]);
                    const height = Math.abs(e.pageY - begin[1]);
                    
                    dispatch(setLabel({ id: nextId, item: { selected: false, left, top, width, height } }));
                }
            }
        },
        onMouseUp : (e: React.MouseEvent) => {
            e.preventDefault();
            if (mouseDown && mouseDragging) {
                const left = Math.min(e.pageX, begin[0]);
                const top = Math.min(e.pageY, begin[1]);
                const width = Math.abs(e.pageX - begin[0]);
                const height = Math.abs(e.pageY - begin[1]);

                const item: LabelSpace = {
                    left: left,
                    top: top,
                    width: width,
                    height: height
                };
                dispatch(setSpace({ id: nextId, item }));
            }
            setMouseDown(false);
            setMouseDragging(false);
        }
    };
    
    const createEvents = () => {
        return {
            onMouseDown: (mode === "CREATE") ? createModeEvents.onMouseDown : (e: React.MouseEvent) => { },
            onMouseMove: (mode === "CREATE") ? createModeEvents.onMouseMove : (e: React.MouseEvent) => { },
            onMouseUp: (mode === "CREATE") ? createModeEvents.onMouseUp : (e: React.MouseEvent) => { },
            onKeyDown: (mode === "CREATE") ? (e: React.KeyboardEvent) => { } : selectModeEvents.onKeyDown,
        };
    };

    return (
        <LabellingBoardView {...createEvents()} imgUrl={imgUrl}>
            {Object.keys(labelGroup).map(x => parseInt(x)).map(id => <Label id={id} key={id}></Label>)}
        </LabellingBoardView>
    );
};

export default LabellingBoard;  