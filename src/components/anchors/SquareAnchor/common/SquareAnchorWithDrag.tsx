import React from 'react';
import SquareAnchor from './SquareAnchor';

const SquareAnchorWithDrag = ({begin, between, end}: {begin?: React.MouseEventHandler, between?: React.MouseEventHandler, end?: React.MouseEventHandler}) => {
    const [mouseDown, setMouseDown] = React.useState(false);
    const [mouseMove, setMouseMove] = React.useState(false);
    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!mouseDown) {
            setMouseDown(true);
            if (begin)
                begin(e);
        }
    };
    const onMouseMove = (e: React.MouseEvent) => {
        e.preventDefault();
        if (mouseDown) {
            setMouseMove(true);
            if (between)
                between(e);
        }
    };
    const onMouseUp = (e: React.MouseEvent) => {
        e.preventDefault();
        if (mouseDown && mouseMove) {
            if (end)
                end(e);
        }
        setMouseDown(false);
        setMouseMove(false);
    };
    return ({left, top, style}: {left: number, top: number, style: React.CSSProperties}) => {
        return <SquareAnchor left={left} top={top} style={style} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}/>
    }
};

export default SquareAnchorWithDrag;