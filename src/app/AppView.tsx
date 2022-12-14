import React from 'react';
import style from './AppView.module.css';
import Header from '../features/Header/Header';
import Toolbar from '../features/Toolbar';
import LabellingBoard from '../features/LabellingBoard';

const AppView = () => {
    return (
        <div className={style.App}>
            <Header></Header>
            <Toolbar></Toolbar> <LabellingBoard></LabellingBoard>
        </div>
    );
}

export default AppView;