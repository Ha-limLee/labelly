import React from 'react';
import style from './AppView.module.css';
import Header from '../features/header/Header';
import Toolbar from '../features/toolbar';
import LabellingBoard from '../features/labellingBoard';

const AppView = () => {
    return (
        <div className={style.App}>
            <Header></Header>
            <Toolbar></Toolbar> <LabellingBoard></LabellingBoard>
        </div>
    );
}

export default AppView;