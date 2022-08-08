import LabellingBoardView from "./LabellingBoardView";
import React from 'react';
import Label from "components/Label";
import { useModeState, LABEL_MODE } from "contexts/LabelModeContext";

const LabellingBoard = () => {
    const {mode} = useModeState();
    const [begin, setBegin] = React.useState([0, 0]);
    const [labels, setLabels] = React.useState<{[T: number]: JSX.Element}>({});
    const [key, setKey] = React.useState(0);
    const [selectedKeys, setSelectedKeys] = React.useState<{[T: number]: boolean}>({});

    const onMouseDown = (e: React.MouseEvent) => {
        setBegin([e.pageX, e.pageY]);
    };
  
    const onMouseUp = (e: React.MouseEvent) => {
        const left = Math.min(e.pageX, begin[0]);
        const top = Math.min(e.pageY, begin[1]);
        const width = Math.abs(e.pageX - begin[0]);
        const height = Math.abs(e.pageY - begin[1]);
        setLabels({...labels,
                    [key]: <Label key={key}
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    if (selectedKeys[key]) {
                                        delete selectedKeys[key];
                                        setSelectedKeys({...selectedKeys});
                                    } else {
                                        selectedKeys[key] = true;
                                    }
                                    console.log(selectedKeys);
                                }}
                            left={`${left}px`} top={`${top}px`} width={`${width}px`} height={`${height}px`}></Label>});
        setKey(key + 1);
    };

    return (
        <LabellingBoardView
            onMouseDown={(mode == LABEL_MODE.CREATE) ? onMouseDown : e => { }}
            onMouseUp={(mode == LABEL_MODE.CREATE) ? onMouseUp : e => { }}>
            {Object.keys(labels).map(key => labels[parseInt(key)])}
        </LabellingBoardView>
    );
};

export default LabellingBoard;