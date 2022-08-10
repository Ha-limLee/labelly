import LabellingBoardView from "./LabellingBoardView";
import React from 'react';
import Label from "components/Label";
import { useModeState, LABEL_MODE } from "contexts/LabelModeContext";
import { useLabelListState, useLabelListDispatch, LabelListElement } from "contexts/LabelListContext";
import { useSelectedIdState, useSelectedIdDispatch } from "contexts/SelectedIdContext";

const LabellingBoard = () => {
    const [imgUrl, setImgUrl] = React.useState('');
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(res => res.json())
        .then(json => setImgUrl(json[6].url));
    
    const getMode = useModeState();
    const mode = getMode();
    const [begin, setBegin] = React.useState([0, 0]);
    const labelList = useLabelListState();
    const labelListDispatch = useLabelListDispatch();

    const [mouseDown, setMouseDown] = React.useState(false);
    const [mouseDragging, setMouseDragging] = React.useState(false);
    const [key, setKey] = React.useState(0);
    const selectedId = useSelectedIdState();
    const selectedIdDispatch = useSelectedIdDispatch();

    const selectModeEvents = {
        onKeyDown : (e: React.KeyboardEvent) => {
            if (e.key === 'Delete' || e.key === 'Backspace') {
                labelListDispatch({type: 'removeAll', ids: selectedId});
                selectedIdDispatch({type: 'removeAll', ids: Object.keys(selectedId).map(parseInt)});
            }
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
                if (!mouseDragging)
                    setMouseDragging(true);
                else {
                    const left = Math.min(e.pageX, begin[0]);
                    const top = Math.min(e.pageY, begin[1]);
                    const width = Math.abs(e.pageX - begin[0]);
                    const height = Math.abs(e.pageY - begin[1]);
                    if (!labelList[key]) {
                        const element: LabelListElement = {
                            label: <Label key={key} id={key}/>,
                            left: left,
                            top: top,
                            width: width,
                            height: height
                        };
                        labelListDispatch({type: 'add', id: key, element: element});
                    } else {
                        labelListDispatch({type: 'modify', id: key, left: left, top: top, width: width, height: height});
                    }
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

                const element: LabelListElement = {
                    label: <Label key={key} id={key}/>,
                    left: left,
                    top: top,
                    width: width,
                    height: height
                };
                labelListDispatch({type: 'add', id: key, element: element});

                setKey(key + 1);    
            }
            setMouseDown(false);
            setMouseDragging(false);
        }
    };
    
    const createEvents = () => {
        return {
            onMouseDown: (mode === LABEL_MODE.CREATE) ? createModeEvents.onMouseDown : (e: React.MouseEvent) => { },
            onMouseMove: (mode === LABEL_MODE.CREATE) ? createModeEvents.onMouseMove : (e: React.MouseEvent) => { },
            onMouseUp: (mode === LABEL_MODE.CREATE) ? createModeEvents.onMouseUp : (e: React.MouseEvent) => { },
            onKeyDown: (mode === LABEL_MODE.CREATE) ? (e: React.KeyboardEvent) => { } : selectModeEvents.onKeyDown,
        };
    };
    const children = Object.keys(labelList).map(key => labelList[parseInt(key)].label);
    return (
        <LabellingBoardView {...createEvents()} imgUrl={imgUrl}>
            {children}
        </LabellingBoardView>
    );
};

export default LabellingBoard;